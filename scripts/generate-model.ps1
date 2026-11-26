param(
    [string] $Connection = '__DGTP_CONNECTION_NAME__'
)

if ([string]::IsNullOrWhiteSpace($Connection)) {
    throw "Provide a named dgtp connection with -Connection."
}

Push-Location "$PSScriptRoot/.."
try {
    dotnet tool run dgtp -- codegeneration "./src/model/" --config "./model.json" --folder dataverse --connection $Connection
    $result = $LASTEXITCODE
}
finally {
    Pop-Location
}

exit $result
