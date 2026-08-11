Write-Host "Switching to connection sample-app"
dotnet tool run dgtp connection select sample-app

if ($LastExitCode -ne 0) {
    throw "Connection not found"
}

Write-Host ""
Write-Host "Starting push of WebResources"
dotnet tool run dgtp push $PSScriptRoot/../dist/ --solution WebResources --delete-obsolete --publish
