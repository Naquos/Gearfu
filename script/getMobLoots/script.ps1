# ================================================================
#       SCRAPER COMPLET WAKFU — MOB + DROPS + gfxId + NOMS
# ================================================================

$maxPage = 37
$allMobIds = @()

Write-Host "Récupération des ID des monstres..."

# ================================================================
#   PHASE 1 — RÉCUPÉRATION DE TOUS LES ID DES MONSTRES
# ================================================================
for ($i = 1; $i -le $maxPage; $i++) {

    $url = "https://www.wakfu.com/fr/mmorpg/encyclopedie/monstres?page=$i"
    Write-Host "`nLecture de la page $i / $maxPage"

    $response = Invoke-WebRequest -Uri $url -UseBasicParsing

    $links = $response.Links | Where-Object { $_.href -match "/encyclopedie/monstres/" }

    foreach ($link in $links) {
        if ($link.href -match "/monstres/([0-9]+)") {
            $mobId = [int]$Matches[1]
            $allMobIds += $mobId
        }
    }

    Start-Sleep -Seconds (Get-Random -Minimum 3 -Maximum 5)
}

$allMobIds = $allMobIds | Sort-Object -Unique
Write-Host "`nNombre total de monstres trouvés : $($allMobIds.Count)"


# ================================================================
#   PHASE 2 — RÉCUPÉRATION DES DROPS + gfxId + NOMS
# ================================================================

Write-Host "`nRécupération des drops, gfxId et noms..."

$languages = @("fr", "en", "es", "pt")
$dropRegex = "/encyclopedie/(accessoires|armures|armes|ressources)/([0-9]+)"
$imgRegex  = 'src="([^"]*monster[^"]*?\/([0-9]+)\.png)"'
$total     = $allMobIds.Count
$counter   = 0

$finalResult = @()

foreach ($idMob in $allMobIds) {

    $counter++
    Write-Host "[$counter / $total] Mob $idMob"

    # ====================================================
    #   RÉCUPÉRATION DES DROPS + gfxId (version FR)
    # ====================================================
    $urlFr = "https://www.wakfu.com/fr/mmorpg/encyclopedie/monstres/$idMob"

    try {
        $responseFr = Invoke-WebRequest -Uri $urlFr -UseBasicParsing
    }
    catch {
        Write-Host "   !!! Erreur chargement FR pour $idMob"
        continue
    }

    # ---- DROPS ----
    $drops = @()

    foreach ($link in $responseFr.Links) {
        if ($link.href -match $dropRegex) {
            $drops += [int]$Matches[2]
        }
    }

    $drops = $drops | Sort-Object -Unique

    # ---- gfxId ----
    $htmlFr = $responseFr.Content
    $match = [regex]::Match($htmlFr, $imgRegex)

    $gfxId = $null
    if ($match.Success) {
        $gfxId = [int]$match.Groups[2].Value
    }

    # ====================================================
    #   RÉCUPÉRATION DES NOMS DANS CHAQUE LANGUE
    # ====================================================
   # URLs spécifiques à chaque langue
    $languageUrls = @{
        fr = "https://www.wakfu.com/fr/mmorpg/encyclopedie/monstres/$idMob"
        en = "https://www.wakfu.com/en/mmorpg/encyclopedia/monsters/$idMob"
        es = "https://www.wakfu.com/es/mmorpg/enciclopedia/monstruos/$idMob"
        pt = "https://www.wakfu.com/pt/mmorpg/enciclopedia/monstros/$idMob"
    }

    $nameObj = @{
        fr = ""
        en = ""
        es = ""
        pt = ""
    }

    foreach ($lang in $languageUrls.Keys) {

        $url = $languageUrls[$lang]

        try {
            $resp = Invoke-WebRequest -Uri $url -UseBasicParsing
        }
        catch {
            Write-Host "   ⚠️  Erreur chargement $lang pour $idMob"
            continue
        }

        # Extraction du nom dans <h1 class="ak-return-link">...</h1>
        $html = $resp.Content

        $nameObj[$lang] = ""   # valeur par défaut vide

            # Capture tout entre le <h1 class="ak-return-link"> ... </h1> (mode Singleline)
            $namePattern = '<h1\s+class="ak-return-link"[^>]*>(.*?)</h1>'
            $nameMatch = [regex]::Match($html, $namePattern, [System.Text.RegularExpressions.RegexOptions]::Singleline)

            if ($nameMatch.Success) {
                $innerHtml = $nameMatch.Groups[1].Value

                # Supprime tous les tags HTML à l'intérieur
                $textOnly = [regex]::Replace($innerHtml, '<[^>]+>', '')

                # Décode les entités HTML (ex: &amp; -> &)
                $textOnly = [System.Net.WebUtility]::HtmlDecode($textOnly)

                # Nettoyage final : supprime espaces / retours inutiles et plusieurs espaces
                $cleanName = $textOnly -replace '[\r\n\t]', ' '    # retire retours ligne
                $cleanName = $cleanName -replace '\s{2,}', ' '    # compacte espaces multiples
                $cleanName = $cleanName.Trim()
                Write-Host = "Clean name : $($cleanName)"

                # Si le résultat n'est pas vide, on le stocke
                if ($cleanName -ne "") {
                    $nameObj[$lang] = $cleanName
                }
            }



        Start-Sleep -Seconds (Get-Random -Minimum 5 -Maximum 7)
    }

    # ====================================================
    #   Ajout à la liste finale
    # ====================================================
    $finalResult += [PSCustomObject]@{
        idMob   = $idMob
        idsDrop = $drops
        gfxId   = $gfxId
        name    = $nameObj
    }

    Start-Sleep -Seconds (Get-Random -Minimum 5 -Maximum 7)
}


# ================================================================
#   PHASE 3 — EXPORT JSON
# ================================================================
$outputFile = "monstres_drops_gfx_names.json"

$finalResult | ConvertTo-Json -Depth 15 | Set-Content $outputFile -Encoding UTF8

Write-Host "`nExport terminé : $outputFile"
