Write-Host "Switching to profile sample-app"
dgtp profile select sample-app

if ($LastExitCode -ne 0) {
    throw "Profile not found"
}

Write-Host ""
Write-Host "Starting model generation"
dgtp codegeneration $PSScriptRoot/../src/model/ --config  $PSScriptRoot/../src/model/model.json --folder dataverse
