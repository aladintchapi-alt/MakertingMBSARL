Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile('C:\xampp\htdocs\MakertingMBSARL\assets\images\logo.jpeg')
$w = $bmp.Width
$h = $bmp.Height

$cy = [int]($h / 2)
$left = 0
$right = $w - 1
for ($x = 0; $x -lt $w; $x++) {
    $c = $bmp.GetPixel($x, $cy)
    if ($c.R -lt 240 -or $c.B -lt 240) {
        $left = $x
        break
    }
}
for ($x = $w - 1; $x -ge 0; $x--) {
    $c = $bmp.GetPixel($x, $cy)
    if ($c.R -lt 240 -or $c.B -lt 240) {
        $right = $x
        break
    }
}

$cx = [int]($w / 2)
$top = 0
$bottom = $h - 1
for ($y = 0; $y -lt $h; $y++) {
    $c = $bmp.GetPixel($cx, $y)
    if ($c.R -lt 240 -or $c.B -lt 240) {
        $top = $y
        break
    }
}
for ($y = $h - 1; $y -ge 0; $y--) {
    $c = $bmp.GetPixel($cx, $y)
    if ($c.R -lt 240 -or $c.B -lt 240) {
        $bottom = $y
        break
    }
}

Write-Host "Left: $left, Right: $right, WidthCircle: $($right - $left + 1)"
Write-Host "Top: $top, Bottom: $bottom, HeightCircle: $($bottom - $top + 1)"
$centerX = ($left + $right) / 2.0
$centerY = ($top + $bottom) / 2.0
$radius = (($right - $left + 1) + ($bottom - $top + 1)) / 4.0
Write-Host "Center: ($centerX, $centerY), Radius: $radius"

$bmp.Dispose()
