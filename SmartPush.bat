@echo off
echo 🚀 Auto-Pushing Changes to GitHub...

git add .
git commit -m "🛠 Auto-update via SmartPush"
git push

echo ✅ Done! Your site is deploying live on Netlify...

:: Show popup
powershell -Command "Add-Type -AssemblyName PresentationFramework;[System.Windows.MessageBox]::Show('✅ Deployed Successfully!','SmartPush','OK','Information')"

pause

