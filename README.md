# __DGTP_PROJECT_NAME__

A starter project for Dataverse form and ribbon webresources using TypeScript, Webpack, and
[Biome](https://biomejs.dev/). It is based on the
[DIGITALL webresource template](https://github.com/DIGITALLNature/webresources-template).

**Setup is not complete after initialization.** The included account models and scripts are
examples. Review the project settings, model filters, connection, and deployment configuration
below before using the project with your own environment.

## Requirements

- [pnpm](https://pnpm.io/installation) 12.18.0 or a newer 12.x release.
- For model generation and deployment: [.NET SDK 10](https://learn.microsoft.com/dotnet/core/install/),
  [PowerShell](https://learn.microsoft.com/powershell/scripting/install/installing-powershell),
  and access to a Dataverse environment.

pnpm downloads the Node.js 26 runtime declared in `package.json`; a separate Node.js installation
or global shim is not required. Run `pnpm exec node --version` to check the project runtime. On
Windows, if Defender blocks the standalone pnpm executable, follow the official installation
guidance; do not disable Defender.

## Install and build

Run these commands in the project directory:

```shell
pnpm install --frozen-lockfile
pnpm run build:prod
```

The production build runs non-writing Biome checks and creates minified bundles under
`dist/scripts/`. It does not require the .NET SDK, Dataverse access, or deployment settings.
No test runner or test script is configured yet.

## Configure your project

| What | Where | What to do |
| --- | --- | --- |
| Package name | `package.json` | Review the initialized name; change it if necessary. |
| Script global | `webpack.config.js`, `GLOBAL_NAME` | Review `__DGTP_GLOBAL_NAME__`; form and ribbon functions are exposed under this name. |
| Example scripts | `src/form/`, `src/ribbon/` | Replace or adapt the account examples to your forms and ribbon buttons. |
| Model scope | `model.json` | Replace the example account entity and form filters with your own before regenerating models. |
| Local deployment defaults | `scripts/push-webresources.ps1` | Review the solution `__DGTP_SOLUTION__` and publisher prefix `__DGTP_PUBLISHER_PREFIX__`; provide omitted values when invoking the script. |
| CI deployment | `azure-pipelines.yml` | Configure the variables and service connection described below before enabling deployment. |

If you started directly from the template instead of using `dgtp webresource init`, set the package
name, global, and optional deployment defaults in these files yourself. Adjust the entry-point
patterns in `webpack.config.js` if your source layout differs.

## Generate Dataverse models

The included example models allow the frontend to build without a connection. To generate models
for your environment:

1. Update the entity and form filters in `model.json`.
2. Restore the pinned tool and create a named connection using the
   [dgtp connection commands](https://github.com/DIGITALLNature/DigitallPower/blob/main/docs/reference/commands/connection.md).
3. Replace `my-connection` with that connection's name and run:

   ```powershell
   dotnet tool restore
   pwsh -File ./scripts/generate-model.ps1 -Connection 'my-connection'
   ```

Generated files go under `src/model/dataverse/`. The connection is selected for this invocation
only; the script does not change the stored default connection.

## Deploy locally

Restore the local dgtp tool and configure a named connection as described above. Build first, then
replace the example arguments with your target connection, solution unique name, and publisher
prefix:

```powershell
pnpm run build:prod
pwsh -File ./scripts/push-webresources.ps1 -Connection 'my-connection' -Solution 'MySolution' -PublisherPrefix 'myprefix'
```

The `-Solution` and `-PublisherPrefix` arguments can be omitted when their defaults in the script
are set. Missing values must be supplied at execution. The script runs `dgtp webresource push`,
which creates or updates and publishes webresources; it does not delete obsolete resources by
default. Check the target connection and solution before running it.

## Configure CI deployment

`azure-pipelines.yml` builds the project and publishes `dist` as a pipeline artifact. Automatic
triggers are disabled, and the `enableDeployment` parameter defaults to `false`; building does not
deploy.

Before enabling the push stage:

1. Create an Azure DevOps environment and a Power Platform client-secret service connection. Install
   the Power Platform Build Tools extension and authorize the connection for the pipeline.
2. In `azure-pipelines.yml`, set `EnvironmentName` and `PowerPlaformServiceConnection` to your
   environment and service connection. Review `SolutionName` and `PublisherPrefix`; provide any
   missing defaults.
3. Verify that the service connection provides a usable Dataverse connection string for the
   `PowerPlatformSetConnectionVariables` task. See the
   [dgtp CI guide](https://github.com/DIGITALLNature/DigitallPower/blob/main/docs/guides/ci-cd.md)
   for connection-string setup and other authentication options.
4. Review the target and run the pipeline explicitly with `enableDeployment: true`. Enable
   automatic triggers only if your team wants them.

## Development

- Add form entries as `src/form/*.form.ts` and ribbon entries as `src/ribbon/*.ribbon.ts`. Webpack
  bundles them into `dist/scripts/form/` and `dist/scripts/ribbon/`, respectively.
- `pnpm run check` applies safe Biome fixes; `pnpm run ci` checks without modifying files.
- `pnpm run build` makes a development build; `pnpm run build:prod` makes a production build.
- `pnpm run bundle` and `pnpm run bundle:prod` run Webpack without the Biome step.
- `pnpm run dependencyCheck` audits production dependencies and checks compatible updates;
  `pnpm run update` interactively updates dependencies.

The project also includes `biome.json` for formatting and linting, `pnpm-lock.yaml` for dependency
and runtime resolution, and `.config/dotnet-tools.json` for the pinned dgtp version.

## License

This project is licensed under the [MS-PL](LICENSE).
