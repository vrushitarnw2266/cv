@echo off
title CV Repository Setup (HTTPS)
echo ===========================================
echo   Automated CV Repository Setup
echo   Switching to HTTPS for better connection
echo ===========================================
echo.

:: Ensure we are in the correct directory
cd /d "%~dp0"

echo [1/3] Updating connection to HTTPS...
:: This fixes "Permission Denied" errors caused by SSH
git remote set-url origin https://github.com/vrushitarnw2266/cv.git

echo.
echo [2/3] Preparing latest changes...
git add .
git commit -m "Update: Ready for GitHub" 2>nul
git branch -M main

echo.
echo [3/3] Pushing to GitHub...
echo (A GitHub login popup may appear. Please sign in to continue.)
git push -u origin main

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ===========================================
    echo   ERROR: The push failed. 
    echo   Please check:
    echo   1. Have you created the repo 'cv' on GitHub.com?
    echo   2. Are you signed in to Git?
    echo ===========================================
) else (
    echo.
    echo ===========================================
    echo   SUCCESS! Your code is now live.
    echo   Visit: https://github.com/vrushitarnw2266/cv
    echo ===========================================
)

echo.
echo Press any key to exit.
pause
