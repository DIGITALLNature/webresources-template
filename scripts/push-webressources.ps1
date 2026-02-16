Write-Host "Switching to profile sample-app"
dgtp profile select sample-app

if ($LastExitCode -ne 0) {
    throw "Profile not found"
}

Write-Host ""
Write-Host "Starting push of Webressources"
dgtp push $PSScriptRoot/../dist/ --solution Webressources --delete-obsolete --publish
