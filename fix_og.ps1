Add-Type -AssemblyName System.Drawing

$transparentPath = "C:\xampp\htdocs\MakertingMBSARL\assets\images\logo-transparent.png"
$cropped = [System.Drawing.Bitmap]::FromFile($transparentPath)

# Step 2: Generate 1200x630 Open Graph card with official logo and luxury styling
$ogW = 1200
$ogH = 630
$ogBmp = New-Object System.Drawing.Bitmap $ogW, $ogH, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$ogG = [System.Drawing.Graphics]::FromImage($ogBmp)
$ogG.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$ogG.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$ogG.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Background luxury ivory/white
$bgBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(250, 249, 245)) # #FAF9F5
$ogG.FillRectangle($bgBrush, 0, 0, $ogW, $ogH)

# Border line
$borderPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(226, 232, 240), 2)
$ogG.DrawRectangle($borderPen, 20, 20, $ogW - 40, $ogH - 40)

# Draw Logo (diameter 260px) on the left
$logoDim = 260
$logoX = 80
$logoY = [int](($ogH - $logoDim) / 2)
$ogG.DrawImage($cropped, $logoX, $logoY, $logoDim, $logoDim)

# Text on the right
$titleFont = New-Object System.Drawing.Font "Segoe UI", 36, ([System.Drawing.FontStyle]::Bold)
$titleBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(15, 23, 42)) # #0F172A
$ogG.DrawString("MULTI BUSINESS SARL", $titleFont, $titleBrush, 380, 190)

$subFont = New-Object System.Drawing.Font "Segoe UI", 20, ([System.Drawing.FontStyle]::Regular)
$subBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(4, 120, 87)) # Emerald #047857
$ogG.DrawString("Gestion Immobiliere - Conseil d'Affaires - Douala & Yaounde", $subFont, $subBrush, 384, 260)

$descFont = New-Object System.Drawing.Font "Segoe UI", 15, ([System.Drawing.FontStyle]::Regular)
$descBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(100, 116, 139)) # Slate
$ogG.DrawString("Plateforme SaaS Bailleurs & Locataires - Baux OHADA - Reversements le 5", $descFont, $descBrush, 384, 320)

$badgeFont = New-Object System.Drawing.Font "Segoe UI", 12, ([System.Drawing.FontStyle]::Bold)
$badgeBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(71, 85, 105))
$ogG.DrawString("Cameroun | (+237) 694 811 715 | contact@multibusiness.cm", $badgeFont, $badgeBrush, 384, 390)

$ogPath = "C:\xampp\htdocs\MakertingMBSARL\assets\images\og-image.png"
$ogBmp.Save($ogPath, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Re-generated: $ogPath (1200x630)"

$ogG.Dispose()
$ogBmp.Dispose()
$cropped.Dispose()
