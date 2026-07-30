@echo off
REM Commits the "developer -> AI Product Engineer" rebrand and pushes to GitHub.
REM Double-click to run. Uses your local git credentials.
cd /d "%~dp0"

echo Staging the 7 changed files...
git add README.md src/components/home/SectionHero.jsx src/pages/About.jsx src/pages/Home.jsx src/pages/CaseStudyNextChat.jsx src/pages/CaseStudySamantha.jsx src/pages/CaseStudyMyMDBAngular.jsx

echo Committing...
git commit -m "Rebrand: developer -> AI Product Engineer across pages + hero"

echo Pushing to origin/main...
git push origin main
if %errorlevel% neq 0 (
  echo.
  echo Push was rejected ^(local and remote have diverged^). Trying rebase...
  git pull --rebase origin main
  git push origin main
)

echo.
echo Done. Review the output above for any errors.
pause
