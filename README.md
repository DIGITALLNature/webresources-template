# webresources-template

Template repository for Dynamics 365 webresources. This project uses TypeScript, Webpack, and Biome to develop and bundle webresources for Dataverse environments.

## Features

- **TypeScript Support**: Full support for TypeScript with type definitions for XRM.
- **Webpack Bundling**: Automatic bundling of form and ribbon scripts.
- **Linting & Formatting**: Powered by [Biome](https://biomejs.dev/).
- **Testing**: No test runner or test script is configured yet.
- **CI/CD Ready**: Pre-configured Azure Pipelines for building and deploying.

## Requirements

- [Git](https://git-scm.com/) to clone the repository.
- [pnpm](https://pnpm.io/installation) 12.18.0 or a newer 12.x release, as declared in `package.json`.
- For Dataverse model generation and deployment only:
  - [.NET SDK](https://learn.microsoft.com/dotnet/core/install/) with the .NET CLI; the deployment pipeline uses .NET 10.
  - [PowerShell](https://learn.microsoft.com/powershell/scripting/install/installing-powershell) to run the provided `.ps1` scripts.
  - Access to your target Dataverse environment and a configured `dgtp` connection.

Node.js 26 is managed by pnpm through `devEngines.runtime` in `package.json`. `pnpm install` downloads the required runtime, and `pnpm run` / `pnpm exec` use it automatically. No separate Node.js installation or global Node shim is required; only pnpm itself needs to be on PATH.

## Setup

1.  **Install standalone pnpm (no Node.js required)**:
    If you already have pnpm 12.18.0 or a newer 12.x release, skip the installation commands.

    On Windows, run in PowerShell:
    ```powershell
    $env:PNPM_VERSION = "12.18.0"
    Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression
    ```

    On macOS or Linux:
    ```bash
    curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=12.18.0 sh -
    ```

    Follow the installer's PATH instructions and open a new terminal if prompted. Verify the installation:
    ```bash
    pnpm --version
    ```
    This should report `12.18.0` or a newer 12.x release.

    **Windows caveat:** pnpm documents that Windows Defender can block the standalone executable. If this happens, follow the [official installation guidance](https://pnpm.io/installation). Its recommended Windows alternative is to install Node.js temporarily to bootstrap pnpm with `npm install --global pnpm@12.18.0`; this is a fallback, not a prerequisite for the standalone setup. Do not disable Defender to install pnpm.

2.  **Clone the repository** (or create your own repository from this template and clone that):
    ```bash
    git clone https://github.com/DIGITALLNature/webresources-template.git
    cd webresources-template
    ```

3.  **Install dependencies and the project runtime**:
    ```bash
    pnpm install
    ```

    Verify the managed Node.js version with:
    ```bash
    pnpm exec node --version
    ```
    This should report `v26.x.x`. Plain `node --version` may still report a different system installation; no shim setup is needed for this repository.

4.  **Restore project-local .NET tools** (only for model generation or deployment):
    ```bash
    dotnet tool restore
    ```

    For frontend-only development and bundling, skip the .NET tool restore and Dataverse connection setup.

## Get Started (Template Customization)

This repository is a starter template. Before using it in a real project, replace the sample placeholders below.

1. **Create and configure a `dgtp` connection for your environment** (model generation or deployment only)
   - Create a local connection for your target Dataverse environment (see the [DigitallPower repository](https://github.com/DIGITALLNature/DigitallPower) for commands).
   - Replace the connection name `sample-app` in:
     - `scripts/generate-model.ps1`
     - `scripts/push-webresources.ps1`

2. **Set your solution and deployment values** (deployment only)
   - Replace the solution name `WebResources` in `scripts/push-webresources.ps1`.
   - Update pipeline variables in `azure-pipelines.yml`:
     - `SolutionName`
     - `EnvironmentName`
     - `PowerPlaformServiceConnection`

3. **Set your global script namespace in Webpack**
   - In `webpack.config.js`, replace `GLOBAL_NAME = "TODO"` with your project namespace (for example `"DGT"`).
   - All bundled form/ribbon functions are exposed under this global object in Dataverse.
   - If your project uses different script locations or naming, adjust the `entryPoints` glob patterns in `webpack.config.js`.

4. **Adjust model generation config** (if generating Dataverse models)
   - Update `model.json` entity and form filters to match your Dataverse tables and forms.
   - Run model generation with:
     ```powershell
     pwsh -File .\scripts\generate-model.ps1
     ```

5. **Add your own webresource entry points**
   - Add form scripts under `src/form/*.form.ts`.
   - Add ribbon scripts under `src/ribbon/*.ribbon.ts`.

6. **Build and verify locally**
   - Run:
     ```bash
     pnpm run build:prod
     ```
   - Confirm output files are generated under `dist/scripts/`.

### Configuration Overview (Compact)

| Config | Where | Must? | Default |
| --- | --- | --- | --- |
| `dgtp` connection name | `scripts/generate-model.ps1`, `scripts/push-webresources.ps1` | For model generation / local deployment | `sample-app` |
| Solution name for push | `scripts/push-webresources.ps1` | For local deployment | `WebResources` |
| Global JS namespace | `webpack.config.js` (`GLOBAL_NAME`) | Yes | `TODO` |
| Model scope (entities/forms) | `model.json` | For model generation | sample `account` |
| Pipeline vars (`SolutionName`, `EnvironmentName`, `PowerPlaformServiceConnection`) | `azure-pipelines.yml` | Yes (for CI push) | `TODO` |
| Entry-point glob patterns | `webpack.config.js` (`entryPoints`) | No | `src/form/*.form.ts`, `src/ribbon/*.ribbon.ts` |
| CI env mapping (`dgtp:xrm:connection`) | `azure-pipelines.yml` | No (usually keep) | preset |

## Development Scripts

Run these commands from the repository root. They use the pnpm-managed Node.js runtime:

- `pnpm run check`: Run Biome check and apply safe fixes.
- `pnpm run ci`: Run Biome checks without modifying files.
- `pnpm run build`: Apply safe Biome fixes and create a development bundle. Dependency maintenance is separate from the build.
- `pnpm run build:prod`: Run non-writing Biome checks and create a production (minified) bundle.
- `pnpm run bundle`: Bundle scripts in development mode with inline source maps.
- `pnpm run bundle:prod`: Bundle scripts in production mode.
- `pnpm run dependencyCheck`: Run `pnpm audit --prod` and check for compatible dependency updates with `pnpm outdated --compatible`. The audit excludes development dependencies.
- `pnpm run update`: Interactively update dependencies to their latest versions, including major versions.

## Project Structure

- `src/`: Contains the TypeScript source code.
    - `form/`: Form scripts (entry points follow `*.form.ts` naming).
    - `ribbon/`: Ribbon scripts (entry points follow `*.ribbon.ts` naming).
    - `model/`: Dataverse entity and form models (often generated).
- `scripts/`: PowerShell scripts for generating models and pushing webresources.
    - `generate-model.ps1`: Generate TypeScript models from Dataverse.
    - `push-webresources.ps1`: Push bundled scripts to Dataverse.
- `dist/`: Output directory for bundled webresources (generated after build).
- `azure-pipelines.yml`: CI/CD pipeline definition for Azure DevOps.
- `webpack.config.js`: Webpack configuration for bundling.
- `package.json`: Development commands, dependencies, and pnpm / Node.js requirements.
- `pnpm-lock.yaml`: Locked dependency, package manager, and runtime resolutions.
- `biome.json`: Configuration for Biome (linting and formatting).

## Entry Points

Webpack is configured to automatically pick up entry points based on file naming conventions:
- Files matching `src/form/*.form.ts` will be bundled into `dist/scripts/form/*.form.js`.
- Files matching `src/ribbon/*.ribbon.ts` will be bundled into `dist/scripts/ribbon/*.ribbon.js`.

Bundled objects are exposed under the global namespace configured in `webpack.config.js` (`GLOBAL_NAME`).

## Deployment

### PowerShell Scripts
You can use the provided scripts in the `scripts/` folder to manage models and push webresources.

- `scripts/generate-model.ps1`: Selects the `sample-app` connection and runs `dgtp codegeneration` with `model.json`.
- `scripts/push-webresources.ps1`: Selects the `sample-app` connection and runs `dgtp push` to the `WebResources` solution with `--publish`. Obsolete webresources are not deleted by default. Review the target connection and solution before running it: changes are published.

Before using these scripts, restore the local .NET tools, configure your `dgtp` connection, and update the template values. Build the webresources before pushing:

```powershell
pnpm run build:prod
pwsh -File .\scripts\push-webresources.ps1
```

For `dgtp` setup and usage details, refer to the [DigitallPower repository](https://github.com/DIGITALLNature/DigitallPower). The tool is pinned locally in `.config/dotnet-tools.json`.

### CI/CD
The project includes an `azure-pipelines.yml` file which:
1.  Installs standalone pnpm using the [official Azure Pipelines recipe](https://pnpm.io/continuous-integration#azure-pipelines), without a separate Node.js installation or Corepack. pnpm follows the version declared in `package.json`, and its store is cached between builds.
2.  Runs `pnpm install --frozen-lockfile` to install dependencies and the managed Node.js runtime, then `pnpm run build:prod`.
3.  Publishes the bundled `dist` folder as an artifact.
4.  Pushes the webresources using `dgtp` tooling during the `push` stage on successful builds of `main`. Configure the deployment variables and service connection before enabling the pipeline.

## License

This project is licensed under the [MS-PL](LICENSE).
