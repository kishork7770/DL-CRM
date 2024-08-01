@echo off
setlocal enabledelayedexpansion

REM File to keep track of commit count
set countFile=commit_count.txt

REM Check if the count file exists, if not, create it with initial count 0
if not exist %countFile% (
    echo 0 > %countFile%
)

REM Read the current commit count
set /p commitCount=<%countFile%

REM Increment the commit count
set /a commitCount+=1

REM Save the new commit count
echo %commitCount% > %countFile%

REM Get the current date and time
for /f "tokens=2 delims==" %%I in ('"wmic os get localdatetime /value"') do set dt=%%I
set year=%dt:~0,4%
set month=%dt:~4,2%
set day=%dt:~6,2%
set hour=%dt:~8,2%
set minute=%dt:~10,2%
set second=%dt:~12,2%
set formattedDateTime=%year%-%month%-%day% %hour%:%minute%:%second%

REM Perform git add
git add .

REM Perform git commit with the date, time, and incremented commit message
git commit -m "Commit #%commitCount% on %formattedDateTime%"

echo Commit #%commitCount% on %formattedDateTime% done.

endlocal
