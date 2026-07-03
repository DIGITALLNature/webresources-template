Write-Host "Switching to profile sample-app"
dotnet tool run dgtp profile select sample-app

if ($LastExitCode -ne 0) {
    throw "Profile not found"
}

Write-Host ""
Write-Host "Starting push of Webressources"
dotnet tool run dgtp push $PSScriptRoot/../dist/ --solution Webressources --delete-obsolete --publish
