Write-Host "Switching to connection sample-app"
dotnet tool run dgtp connection select sample-app

if ($LastExitCode -ne 0) {
    throw "Connection not found"
}

Write-Host ""
Write-Host "Starting model generation"
dotnet tool run dgtp codegeneration $PSScriptRoot/../src/model/ --config  $PSScriptRoot/../model.json --folder dataverse
