# __DGTP_PROJECT_NAME__

A TypeScript project for Dataverse form and ribbon webresources. Bundles expose their functions
under the JavaScript global `__DGTP_GLOBAL_NAME__`. The project is based on the
[DIGITALL webresource template](https://github.com/DIGITALLNature/webresources-template).

## Frontend setup

Install pnpm 12.18.0 or a newer 12.x release using the [pnpm installation guide](https://pnpm.io/installation).
pnpm downloads the Node.js 26 runtime declared in `package.json`; a separate Node.js installation is
not required.

```shell
pnpm install --frozen-lockfile
pnpm run build:prod
```

The production build checks formatting and writes bundled scripts under `dist/scripts/`. It does
not require Dataverse access, the .NET SDK, or deployment configuration.

## Model generation

The included models support the frontend build. To regenerate them for your own environment, install
.NET 10 and PowerShell, restore the pinned dgtp tool, and create a named Dataverse connection.
Review the entity and form filters in `model.json` before running:

```powershell
dotnet tool restore
pwsh -File ./scripts/generate-model.ps1 -Connection <connection-name>
```

The connection is selected only for this invocation; the script does not change the stored default.
See the [dgtp connection documentation](https://github.com/DIGITALLNature/DigitallPower/blob/main/docs/reference/commands/connection.md)
for connection setup.

## Local deployment

Restore the pinned tool and configure a named connection as described above. The scaffolded default
solution is `__DGTP_SOLUTION__` and publisher prefix is `__DGTP_PUBLISHER_PREFIX__`. Empty defaults
must be supplied at execution; either may also be overridden explicitly:

```powershell
pnpm run build:prod
pwsh -File ./scripts/push-webresources.ps1 -Connection <connection-name> -Solution <solution-unique-name> -PublisherPrefix <publisher-prefix>
```

The script uses `dgtp webresource push`; it creates or updates and publishes webresources. Review the
target before running. It does not delete obsolete resources by default.

## CI deployment

`azure-pipelines.yml` has automatic triggers disabled and `enableDeployment` defaults to `false`.
Before enabling deployment, configure an Azure DevOps environment, set the pipeline's
`EnvironmentName` variable, and provide a solution and publisher prefix if their scaffolded defaults
are empty. Store the Dataverse connection string in an Azure
Pipelines secret variable named `DataverseConnectionString` (do not put it in this repository).
Review the pipeline and run it explicitly with `enableDeployment: true` only after that setup.
See the [dgtp CI guide](https://github.com/DIGITALLNature/DigitallPower/blob/main/docs/guides/ci-cd.md)
for service-connection and other authentication alternatives.

## Development

- Add form entries as `src/form/*.form.ts` and ribbon entries as `src/ribbon/*.ribbon.ts`.
- `pnpm run check` applies Biome fixes; `pnpm run ci` checks without modifying files.
- `pnpm run build` makes a development build; `pnpm run build:prod` makes a production build.
- Review `webpack.config.js` if the entry-point layout changes.

## License

This project is licensed under the [MS-PL](LICENSE).
