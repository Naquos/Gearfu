# ================================================================
#       SCRAPER WAKFU — PHASE 2 : TRAITEMENT DES DONNÉES
# ================================================================

$dataDir    = Join-Path $PSScriptRoot "data"
$mobIdsFile = Join-Path $dataDir "mob_ids.json"
$outputFile = Join-Path $PSScriptRoot "monstres_drops_gfx_names.json"

$dropRegex   = "/encyclopedie/(accessoires|armures|armes|ressources)/([0-9]+)"
$imgRegex    = 'src="([^"]*monster[^"]*?\/([0-9]+)\.png)"'
$namePattern = '<h1\s+class="ak-return-link"[^>]*>(.*?)</h1>'
$langs       = @("fr", "en", "es", "pt")


# ================================================================
#   VÉRIFICATIONS PRÉLIMINAIRES
# ================================================================

if (-not (Test-Path $dataDir)) {
    Write-Host "[ERREUR] Dossier 'data' introuvable : $dataDir"
    Write-Host "[ERREUR] Lancez d'abord download.ps1."
    exit 1
}

if (-not (Test-Path $mobIdsFile)) {
    Write-Host "[ERREUR] Fichier mob_ids.json introuvable : $mobIdsFile"
    Write-Host "[ERREUR] Lancez d'abord download.ps1."
    exit 1
}

Write-Host "[INIT] Chargement des IDs depuis $mobIdsFile ..."
$allMobIds = Get-Content $mobIdsFile -Encoding UTF8 | ConvertFrom-Json
$total = $allMobIds.Count
Write-Host "[INIT] $total monstres à traiter."


# ================================================================
#   TRAITEMENT
# ================================================================

$finalResult = [System.Collections.Generic.List[PSCustomObject]]::new()
$counter  = 0
$skipped  = 0
$warnings = 0

Write-Host "`n[TRAITEMENT] Début..."

foreach ($idMob in $allMobIds) {
    $counter++
    $mobDir = Join-Path $dataDir "$idMob"

    Write-Host "`n[TRAITEMENT] [$counter / $total] Mob $idMob"

    # ---- Lecture du fichier FR (drops + gfxId) ----
    $frFile = Join-Path $mobDir "fr.html"

    if (-not (Test-Path $frFile)) {
        Write-Host "  AVERTISSEMENT : fr.html manquant — mob $idMob ignoré."
        $warnings++
        $skipped++
        continue
    }

    $htmlFr = Get-Content $frFile -Raw -Encoding UTF8

    # ---- DROPS ----
    $drops = @()
    $dropMatches = [regex]::Matches($htmlFr, $dropRegex)
    foreach ($m in $dropMatches) {
        $drops += [int]$m.Groups[2].Value
    }
    $drops = @($drops | Sort-Object -Unique)
    Write-Host "  Drops        : $($drops.Count) item(s) — $($drops -join ', ')"

    # ---- gfxId ----
    $gfxMatch = [regex]::Match($htmlFr, $imgRegex)
    $gfxId = $null
    if ($gfxMatch.Success) {
        $gfxId = [int]$gfxMatch.Groups[2].Value
        Write-Host "  gfxId        : $gfxId"
    } else {
        Write-Host "  gfxId        : introuvable"
        $warnings++
    }

    # ---- NOMS PAR LANGUE ----
    $nameObj = [ordered]@{ fr = ""; en = ""; es = ""; pt = "" }

    foreach ($lang in $langs) {
        $langFile = Join-Path $mobDir "$lang.html"

        if (-not (Test-Path $langFile)) {
            Write-Host "  Nom [$lang]    : AVERTISSEMENT — $lang.html manquant"
            $warnings++
            continue
        }

        $html = Get-Content $langFile -Raw -Encoding UTF8
        $nameMatch = [regex]::Match($html, $namePattern, [System.Text.RegularExpressions.RegexOptions]::Singleline)

        if ($nameMatch.Success) {
            $innerHtml  = $nameMatch.Groups[1].Value
            $textOnly   = [regex]::Replace($innerHtml, '<[^>]+>', '')
            $textOnly   = [System.Net.WebUtility]::HtmlDecode($textOnly)
            $cleanName  = ($textOnly -replace '[\r\n\t]', ' ') -replace '\s{2,}', ' '
            $cleanName  = $cleanName.Trim()

            if ($cleanName -ne "") {
                $nameObj[$lang] = $cleanName
                Write-Host "  Nom [$lang]    : $cleanName"
            } else {
                Write-Host "  Nom [$lang]    : AVERTISSEMENT — vide après nettoyage"
                $warnings++
            }
        } else {
            Write-Host "  Nom [$lang]    : AVERTISSEMENT — balise h1 introuvable"
            $warnings++
        }
    }

    $finalResult.Add([PSCustomObject]@{
        idMob   = $idMob
        idsDrop = $drops
        gfxId   = $gfxId
        name    = $nameObj
    })
}


# ================================================================
#   EXPORT JSON
# ================================================================

Write-Host "`n[EXPORT] Écriture de $($finalResult.Count) entrées → $outputFile ..."
$finalResult | ConvertTo-Json -Depth 15 | Set-Content $outputFile -Encoding UTF8

$fileSizeKo = [math]::Round((Get-Item $outputFile).Length / 1024, 1)
Write-Host "[EXPORT] Fichier écrit ($fileSizeKo Ko)."


# ================================================================
#   RÉSUMÉ
# ================================================================

Write-Host "`n[RÉSUMÉ]"
Write-Host "  Monstres parcourus  : $total"
Write-Host "  Monstres exportés   : $($finalResult.Count)"
Write-Host "  Ignorés             : $skipped"
Write-Host "  Avertissements      : $warnings"
Write-Host "  Fichier de sortie   : $outputFile"
