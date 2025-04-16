@echo off
echo Installing Vercel CLI...
call npm install -g vercel
echo Deploying to Vercel...
cd /d %~dp0
call vercel login
call vercel
echo Deployment complete!
pause
