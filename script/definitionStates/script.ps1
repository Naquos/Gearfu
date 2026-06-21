# Définition des IDs à interroger
$ids = @(1284, 1348, 1354, 1583, 2570, 2514, 2572, 2636, 2515, 2512, 2505, 2411, 4570, 2574, 2413, 2571, 2513, 5886, 6731, 7069, 7070, 7071, 7072, 7073, 7106, 8251) # Remplacez par vos propres IDs

# Fichier de sortie JSON
$outputFile = "resultats_pt.json"

# Liste pour stocker les résultats
$results = @()

# Fonction pour récupérer le contenu textuel des balises avec class="ak-title"
function Get-AkTitleContent {
    param (
        [string]$url
    )

    try {
        # Requête HTTP
        $response = Invoke-WebRequest -Uri $url -UseBasicParsing
        if ($response.StatusCode -eq 200) {
            $html = $response.Content

            # Utilisation d'une regex pour trouver les balises <div class="ak-title"> et extraire leur contenu
            $matches = [regex]::Matches($html, '<div class="ak-title">(.*?)</div>', [System.Text.RegularExpressions.RegexOptions]::Singleline)

            # Vérifier si des résultats sont trouvés
            if ($matches.Count -gt 0) {
                $titles = @()
                foreach ($match in $matches) {
                    # Nettoyer le texte pour retirer les balises HTML internes
                    $cleanText = $match.Groups[1].Value -replace '<.*?>', '' -replace '\s+', ' '
                    $titles += $cleanText.Trim()
                }
                return ($titles -join " ") # Concaténer tous les titres trouvés
            }
        }
    } catch {
        Write-Host "Erreur lors de la requête pour $url"
    }

    return $null
}

# Boucle sur chaque ID
foreach ($id in $ids) {
    $url = "https://www.wakfu.com/fr/linker/state?l=pt&id=$id"
    Write-Host "Requête vers : $url"
    
    $titles = Get-AkTitleContent -url $url
    if ($titles) {
        Write-Host "Résultat pour l'ID $id : $titles"
        $results += @{ id = "$id"; description = $titles }
    } else {
        Write-Host "Aucun titre trouvé pour l'ID $id"
        $results += @{ id = "$id"; description = "" }
    }

    # Générer un délai aléatoire entre 60 et 180 secondes (1 à 3 minutes)
    $pause = Get-Random -Minimum 60 -Maximum 120
    Write-Host "Pause de $pause secondes avant la prochaine requête..."
    Start-Sleep -Seconds $pause
}

# Convertir en JSON et enregistrer dans un fichier
$results | ConvertTo-Json -Depth 10 | Out-File -Encoding utf8 $outputFile

Write-Host "Script terminé. Résultats enregistrés dans $outputFile"
