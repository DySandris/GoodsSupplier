@echo off
echo 🚀 Auto-Pushing Changes to GitHub...

git add .
git commit -m "🛠️ Auto-update via SmartPush"
git push

echo ✅ Done! Your site is deploying live on Netlify...

:: Show popup with logo (PowerShell)
powershell -ExecutionPolicy Bypass -Command ^
"Add-Type -AssemblyName System.Windows.Forms; ^
 Add-Type -AssemblyName System.Drawing; ^
 $iconPath = Join-Path $PWD 'goodslogo.ico'; ^
 $notify = New-Object System.Windows.Forms.NotifyIcon; ^
 $notify.Icon = [System.Drawing.Icon]::ExtractAssociatedIcon($iconPath); ^
 $notify.BalloonTipTitle = 'GoodsSupplier'; ^
 $notify.BalloonTipText = '✅ Deployed Successfully!'; ^
 $notify.Visible = \$true; ^
 $notify.ShowBalloonTip(3000); ^
 Start-Sleep -Seconds 4; ^
 $notify.Dispose()"

pause
