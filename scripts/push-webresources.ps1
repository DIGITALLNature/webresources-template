Write-Host "Switching to profile sample-app"
dotnet tool run dgtp profile select sample-app

if ($LastExitCode -ne 0) {
    throw "Profile not found"
}

Write-Host ""
Write-Host "Starting push of WebResources"
dotnet tool run dgtp push $PSScriptRoot/../dist/ --solution WebResources --delete-obsolete --publish
