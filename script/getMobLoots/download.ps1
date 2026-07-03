# ================================================================
#       SCRAPER WAKFU — PHASE 1 : TÉLÉCHARGEMENT DES DONNÉES
# ================================================================

$maxPage   = 37
$dataDir   = Join-Path $PSScriptRoot "data"
$mobIdsFile = Join-Path $dataDir "mob_ids.json"

$languageUrls = [ordered]@{
    fr = "https://www.wakfu.com/fr/mmorpg/encyclopedie/monstres/{0}"
    en = "https://www.wakfu.com/en/mmorpg/encyclopedia/monsters/{0}"
    es = "https://www.wakfu.com/es/mmorpg/enciclopedia/monstruos/{0}"
    pt = "https://www.wakfu.com/pt/mmorpg/enciclopedia/monstros/{0}"
}

# Créer le dossier data si nécessaire
if (-not (Test-Path $dataDir)) {
    New-Item -ItemType Directory -Path $dataDir | Out-Null
    Write-Host "[INIT] Dossier 'data' créé : $dataDir"
} else {
    Write-Host "[INIT] Dossier 'data' existant : $dataDir"
}


# ================================================================
#   PHASE 1 — RÉCUPÉRATION DE TOUS LES ID DES MONSTRES
# ================================================================

$allMobIds = @()

if (Test-Path $mobIdsFile) {
    Write-Host "`n[PHASE 1] mob_ids.json déjà présent — chargement en cours..."
    $allMobIds = Get-Content $mobIdsFile -Encoding UTF8 | ConvertFrom-Json
    Write-Host "[PHASE 1] $($allMobIds.Count) IDs chargés depuis le fichier, étape ignorée."
} else {
    Write-Host "`n[PHASE 1] Récupération des IDs des monstres ($maxPage pages)..."

    for ($i = 1; $i -le $maxPage; $i++) {
        $url = "https://www.wakfu.com/fr/mmorpg/encyclopedie/monstres?page=$i"
        Write-Host "[PHASE 1] Page $i / $maxPage ..."

        try {
            $response = Invoke-WebRequest -Uri $url -UseBasicParsing
        } catch {
            Write-Host "[PHASE 1] ERREUR sur la page $i : $_"
            continue
        }

        $foundOnPage = 0
        $links = $response.Links | Where-Object { $_.href -match "/encyclopedie/monstres/" }

        foreach ($link in $links) {
            if ($link.href -match "/monstres/([0-9]+)") {
                $allMobIds += [int]$Matches[1]
                $foundOnPage++
            }
        }

        Write-Host "[PHASE 1] Page $i / $maxPage — $foundOnPage IDs trouvés (cumul : $($allMobIds.Count))"

        Start-Sleep -Seconds (Get-Random -Minimum 3 -Maximum 5)
    }

    $allMobIds = $allMobIds | Sort-Object -Unique
    Write-Host "[PHASE 1] Terminé — $($allMobIds.Count) monstres uniques."

    $allMobIds | ConvertTo-Json | Set-Content $mobIdsFile -Encoding UTF8
    Write-Host "[PHASE 1] IDs sauvegardés → $mobIdsFile"
}


# ================================================================
#   PHASE 2 — TÉLÉCHARGEMENT DES PAGES HTML PAR MONSTRE
# ================================================================

$total      = $allMobIds.Count
$counter    = 0
$downloaded = 0
$skipped    = 0
$errors     = 0

Write-Host "`n[PHASE 2] Téléchargement des pages HTML ($total monstres × $($languageUrls.Count) langues)..."

foreach ($idMob in $allMobIds) {
    $counter++
    $mobDir = Join-Path $dataDir "$idMob"

    if (-not (Test-Path $mobDir)) {
        New-Item -ItemType Directory -Path $mobDir | Out-Null
    }

    # Vérifier si toutes les langues sont déjà téléchargées
    $missingLangs = @()
    foreach ($lang in $languageUrls.Keys) {
        if (-not (Test-Path (Join-Path $mobDir "$lang.html"))) {
            $missingLangs += $lang
        }
    }

    if ($missingLangs.Count -eq 0) {
        Write-Host "[PHASE 2] [$counter / $total] Mob $idMob — toutes les langues déjà présentes, ignoré."
        $skipped++
        continue
    }

    Write-Host "[PHASE 2] [$counter / $total] Mob $idMob — $($missingLangs.Count) langue(s) manquante(s) : $($missingLangs -join ', ')"

    $langIndex = 0
    foreach ($lang in $missingLangs) {
        $langIndex++
        $filePath = Join-Path $mobDir "$lang.html"
        $url = $languageUrls[$lang] -f $idMob

        Write-Host "  [lang $langIndex / $($missingLangs.Count)] '$lang' — GET $url"

        try {
            $resp = Invoke-WebRequest -Uri $url -UseBasicParsing
            $resp.Content | Set-Content $filePath -Encoding UTF8
            $sizeKo = [math]::Round($resp.Content.Length / 1024, 1)
            Write-Host "  [lang $langIndex / $($missingLangs.Count)] '$lang' — OK ($sizeKo Ko) → $filePath"
            $downloaded++
        } catch {
            Write-Host "  [lang $langIndex / $($missingLangs.Count)] '$lang' — ERREUR : $_"
            $errors++
        }

        if ($langIndex -lt $missingLangs.Count) {
            Start-Sleep -Seconds (Get-Random -Minimum 2 -Maximum 4)
        }
    }

    Start-Sleep -Seconds (Get-Random -Minimum 3 -Maximum 5)
}


# ================================================================
#   RÉSUMÉ
# ================================================================

Write-Host "`n[RÉSUMÉ PHASE 2]"
Write-Host "  Monstres parcourus         : $total"
Write-Host "  Monstres ignorés (complets) : $skipped"
Write-Host "  Fichiers téléchargés        : $downloaded"
Write-Host "  Erreurs                     : $errors"
Write-Host "`nDonnées brutes stockées dans : $dataDir"
Write-Host "Lancez process.ps1 pour extraire les données."
