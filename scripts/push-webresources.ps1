param(
    [string] $Connection = '__DGTP_CONNECTION_NAME__',
    [string] $Solution = '__DGTP_SOLUTION__',
    [string] $PublisherPrefix = '__DGTP_PUBLISHER_PREFIX__'
)

if ([string]::IsNullOrWhiteSpace($Connection)) {
    throw "Provide a named dgtp connection with -Connection."
}

if ([string]::IsNullOrWhiteSpace($Solution)) {
    throw "Provide the solution unique name with -Solution."
}

if ([string]::IsNullOrWhiteSpace($PublisherPrefix)) {
    throw "Provide the publisher prefix with -PublisherPrefix."
}

Push-Location "$PSScriptRoot/.."
try {
    dotnet tool run dgtp -- webresource push "./dist/" --solution $Solution --publisher-prefix $PublisherPrefix --connection $Connection
    $result = $LASTEXITCODE
}
finally {
    Pop-Location
}

exit $result
