@echo off
echo Auto-Pushing Changes to GitHub...

git add .
git commit -m "Auto-update via SmartPush"
git push

echo Done! Your site is deploying live on Netlify...

:: Show popup with logo
powershell -Command ^
"Add-Type -AssemblyName PresentationFramework;^
$icon = Join-Path $PWD 'goodslogo.ico';^
$notify = New-Object System.Windows.Forms.NotifyIcon;^
$notify.Icon = New-Object System.Drawing.Icon($icon);^
$notify.Visible = $true;^
$notify.ShowBalloonTip(5000, 'GoodsSupplier', 'Deployed Successfully!', [System.Windows.Forms.ToolTipIcon]::Info)"

pause
