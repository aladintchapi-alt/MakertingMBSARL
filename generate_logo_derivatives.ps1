Add-Type -AssemblyName System.Drawing

$srcPath = "C:\xampp\htdocs\MakertingMBSARL\assets\images\logo.jpeg"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)
$w = $src.Width
$h = $src.Height

# Circle parameters from measure_logo.ps1
# Center = (448, 448), Radius = 378.5
$cx = 448.0
$cy = 448.0
$r = 378.5

# Step 1: Create a square transparent bitmap trimmed exactly to the circle boundary (758x758)
$dim = [int]($r * 2.0) + 2 # 759 px
$cropped = New-Object System.Drawing.Bitmap $dim, $dim, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Use GraphicsPath and TextureBrush or direct per-pixel mask with anti-aliasing for mathematically pristine result
$cropMinX = [int]($cx - $r) # 69
$cropMinY = [int]($cy - $r) # 69

for ($y = 0; $y -lt $dim; $y++) {
    $srcY = $cropMinY + $y
    if ($srcY -lt 0 -or $srcY -ge $h) { continue }
    
    $dy = ($srcY - $cy)
    
    for ($x = 0; $x -lt $dim; $x++) {
        $srcX = $cropMinX + $x
        if ($srcX -lt 0 -or $srcX -ge $w) { continue }
        
        $dx = ($srcX - $cx)
        $dist = [Math]::Sqrt($dx * $dx + $dy * $dy)
        
        $pix = $src.GetPixel($srcX, $srcY)
        
        # Smooth alpha anti-aliasing on the 1.5px outer circle edge
        if ($dist -le ($r - 0.75)) {
            $cropped.SetPixel($x, $y, $pix)
        } elseif ($dist -lt ($r + 0.75)) {
            $alphaRatio = 1.0 - (($dist - ($r - 0.75)) / 1.5)
            $alpha = [int]([Math]::Round($alphaRatio * 255.0))
            if ($alpha -gt 255) { $alpha = 255 }
            if ($alpha -lt 0) { $alpha = 0 }
            $c = [System.Drawing.Color]::FromArgb($alpha, $pix.R, $pix.G, $pix.B)
            $cropped.SetPixel($x, $y, $c)
        } else {
            # Fully transparent outside circle
            $c = [System.Drawing.Color]::FromArgb(0, 0, 0, 0)
            $cropped.SetPixel($x, $y, $c)
        }
    }
}

# Save master transparent logo
$transparentPath = "C:\xampp\htdocs\MakertingMBSARL\assets\images\logo-transparent.png"
$cropped.Save($transparentPath, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Created: $transparentPath ($dim x $dim)"

# Function to resize with high-quality bicubic interpolation
function Resize-Image($sourceBmp, $targetWidth, $targetHeight, $outPath, $format) {
    $destBmp = New-Object System.Drawing.Bitmap $targetWidth, $targetHeight, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($destBmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.DrawImage($sourceBmp, 0, 0, $targetWidth, $targetHeight)
    $g.Dispose()
    $destBmp.Save($outPath, $format)
    $destBmp.Dispose()
    Write-Host "Created: $outPath ($targetWidth x $targetHeight)"
}

# Generate derivative sizes
$pngFormat = [System.Drawing.Imaging.ImageFormat]::Png
Resize-Image $cropped 512 512 "C:\xampp\htdocs\MakertingMBSARL\assets\images\logo-512x512.png" $pngFormat
Resize-Image $cropped 256 256 "C:\xampp\htdocs\MakertingMBSARL\assets\images\logo-256x256.png" $pngFormat
Resize-Image $cropped 192 192 "C:\xampp\htdocs\MakertingMBSARL\assets\images\logo-192x192.png" $pngFormat
Resize-Image $cropped 180 180 "C:\xampp\htdocs\MakertingMBSARL\assets\images\apple-touch-icon-180x180.png" $pngFormat
Resize-Image $cropped 128 128 "C:\xampp\htdocs\MakertingMBSARL\assets\images\logo-128x128.png" $pngFormat
Resize-Image $cropped 64 64 "C:\xampp\htdocs\MakertingMBSARL\assets\images\logo-64x64.png" $pngFormat
Resize-Image $cropped 48 48 "C:\xampp\htdocs\MakertingMBSARL\assets\images\favicon-48x48.png" $pngFormat
Resize-Image $cropped 32 32 "C:\xampp\htdocs\MakertingMBSARL\assets\images\favicon-32x32.png" $pngFormat
Resize-Image $cropped 16 16 "C:\xampp\htdocs\MakertingMBSARL\assets\images\favicon-16x16.png" $pngFormat

# Copy 32x32 to root favicon.ico as well
$icoPath = "C:\xampp\htdocs\MakertingMBSARL\favicon.ico"
[System.IO.File]::Copy("C:\xampp\htdocs\MakertingMBSARL\assets\images\favicon-32x32.png", $icoPath, $true)
Write-Host "Created: $icoPath"

# Step 2: Generate 1200x630 Open Graph card with official logo and luxury styling
$ogW = 1200
$ogH = 630
$ogBmp = New-Object System.Drawing.Bitmap $ogW, $ogH, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$ogG = [System.Drawing.Graphics]::FromImage($ogBmp)
$ogG.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$ogG.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$ogG.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Background luxury cream/white
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
$ogG.DrawString("Gestion Immobilière • Conseil d'Affaires • Douala & Yaoundé", $subFont, $subBrush, 384, 260)

$descFont = New-Object System.Drawing.Font "Segoe UI", 15, ([System.Drawing.FontStyle]::Regular)
$descBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(100, 116, 139)) # Slate
$ogG.DrawString("Plateforme SaaS pour Bailleurs & Locataires • Baux OHADA • Reversement le 5", $descFont, $descBrush, 384, 320)

$badgeFont = New-Object System.Drawing.Font "Segoe UI", 12, ([System.Drawing.FontStyle]::Bold)
$badgeBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(71, 85, 105))
$ogG.DrawString("Cameroun • (+237) 694 811 715 • contact@multibusiness.cm", $badgeFont, $badgeBrush, 384, 390)

$ogPath = "C:\xampp\htdocs\MakertingMBSARL\assets\images\og-image.png"
$ogBmp.Save($ogPath, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Created: $ogPath (1200x630)"

# Cleanup
$ogG.Dispose()
$ogBmp.Dispose()
$cropped.Dispose()
$src.Dispose()
