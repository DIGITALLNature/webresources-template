param(
    [string] $Connection = ''
)

if ([string]::IsNullOrWhiteSpace($Connection)) {
    throw "Provide a named dgtp connection with -Connection."
}

dotnet tool run dgtp -- codegeneration "$PSScriptRoot/../src/model/" --config "$PSScriptRoot/../model.json" --folder dataverse --connection $Connection
if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
}
