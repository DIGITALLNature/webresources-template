Write-Host "Switching to profile sample-app"
dotnet tool run dgtp profile select sample-app

if ($LastExitCode -ne 0) {
    throw "Profile not found"
}

Write-Host ""
Write-Host "Starting model generation"
dotnet tool run dgtp codegeneration $PSScriptRoot/../src/model/ --config  $PSScriptRoot/../model.json --folder dataverse
