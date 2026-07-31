# webresources-template

Template repository for Dynamics 365 webresources. This project uses TypeScript, Webpack, and Biome to develop and bundle webresources for Dataverse environments.

## Features

- **TypeScript Support**: Full support for TypeScript with type definitions for XRM.
- **Webpack Bundling**: Automatic bundling of form and ribbon scripts.
- **Linting & Formatting**: Powered by [Biome](https://biomejs.dev/).
- **Testing**: Test dependencies were intentionally removed for now and will be added back with concrete sample tests.
- **CI/CD Ready**: Pre-configured Azure Pipelines for building and deploying.

## Requirements

- [Node.js](https://nodejs.org/) (Recommended version: 24.x)
- [pnpm](https://pnpm.io/) package manager (required major version: 11)
- [.NET CLI](https://learn.microsoft.com/dotnet/core/tools/) (required for local tool restore and deployment tooling)

## Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/DIGITALLNature/webresources-template.git
    cd webresources-template
    ```

2.  **Install dependencies**:
    ```bash
    pnpm install
    ```

3.  **Restore project-local .NET tools**:
    ```bash
    dotnet tool restore
    ```

## Get Started (Template Customization)

This repository is a starter template. Before using it in a real project, replace the sample placeholders below.

1. **Create and configure a `dgtp` profile for your environment**
   - Create a local profile for your target Dataverse environment (see the [DigitallPower repository](https://github.com/DIGITALLNature/DigitallPower) for commands).
   - Replace the profile name `sample-app` in:
     - `scripts/model-generate.ps1`
     - `scripts/push-webresources.ps1`

2. **Set your solution and deployment values**
   - Replace the solution name `WebResources` in `scripts/push-webresources.ps1`.
   - Update pipeline variables in `azure-pipelines.yml`:
     - `SolutionName`
     - `EnvironmentName`
     - `PowerPlaformServiceConnection`

3. **Set your global script namespace in Webpack**
   - In `webpack.config.js`, replace `GLOBAL_NAME = "TODO"` with your project namespace (for example `"DGT"`).
   - All bundled form/ribbon functions are exposed under this global object in Dataverse.
   - If your project uses different script locations or naming, adjust the `entryPoints` glob patterns in `webpack.config.js`.

4. **Adjust model generation config**
   - Update `model.json` entity and form filters to match your Dataverse tables and forms.
   - Run model generation with:
     ```bash
     ./scripts/model-generate.ps1
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
| `dgtp` profile name | `scripts/model-generate.ps1`, `scripts/push-webresources.ps1` | Yes | `sample-app` |
| Solution name for push | `scripts/push-webresources.ps1` | Yes | `WebResources` |
| Global JS namespace | `webpack.config.js` (`GLOBAL_NAME`) | Yes | `TODO` |
| Model scope (entities/forms) | `model.json` | Yes | sample `account` |
| Pipeline vars (`SolutionName`, `EnvironmentName`, `PowerPlaformServiceConnection`) | `azure-pipelines.yml` | Yes (for CI push) | `TODO` |
| Entry-point glob patterns | `webpack.config.js` (`entryPoints`) | No | `src/form/*.form.ts`, `src/ribbon/*.ribbon.ts` |
| CI env mapping (`dgtp:xrm:connection`) | `azure-pipelines.yml` | No (usually keep) | preset |

## Development Scripts

The project includes several `pnpm` scripts for development and deployment:

- `pnpm run check`: Run Biome check and apply safe fixes.
- `pnpm run build`: Perform dependency checks, linting, and a development bundle.
- `pnpm run build:prod`: Perform linting and a production (minified) bundle.
- `pnpm run bundle`: Bundle scripts in development mode with inline source maps.
- `pnpm run bundle:prod`: Bundle scripts in production mode.
- `pnpm run dependencyCheck`: Run `pnpm audit` and check for outdated packages.
- `pnpm run update`: Update dependencies interactively.

## Project Structure

- `src/`: Contains the TypeScript source code.
    - `form/`: Form scripts (entry points follow `*.form.ts` naming).
    - `ribbon/`: Ribbon scripts (entry points follow `*.ribbon.ts` naming).
    - `model/`: Dataverse entity and form models (often generated).
- `scripts/`: PowerShell scripts for generating models and pushing webresources.
    - `model-generate.ps1`: Generate TypeScript models from Dataverse.
    - `push-webresources.ps1`: Push bundled scripts to Dataverse.
- `dist/`: Output directory for bundled webresources (generated after build).
- `azure-pipelines.yml`: CI/CD pipeline definition for Azure DevOps.
- `webpack.config.js`: Webpack configuration for bundling.
- `biome.json`: Configuration for Biome (linting and formatting).

## Entry Points

Webpack is configured to automatically pick up entry points based on file naming conventions:
- Files matching `src/form/*.form.ts` will be bundled into `dist/scripts/form/*.form.js`.
- Files matching `src/ribbon/*.ribbon.ts` will be bundled into `dist/scripts/ribbon/*.ribbon.js`.

Bundled objects are exposed under the global namespace configured in `webpack.config.js` (`GLOBAL_NAME`).

## Deployment

### PowerShell Scripts
You can use the provided scripts in the `scripts/` folder to manage models and push webresources.

- `scripts/model-generate.ps1`: Selects the `sample-app` profile and runs `dgtp codegeneration` with `model.json`.
- `scripts/push-webresources.ps1`: Selects the `sample-app` profile and runs `dgtp push` to the `WebResources` solution.

Before using these scripts, configure your local `dgtp` profile values for your target Dataverse environment.

For `dgtp` setup and usage details, refer to the [DigitallPower repository](https://github.com/DIGITALLNature/DigitallPower). The tool is pinned locally in `.config/dotnet-tools.json`.

### CI/CD
The project includes an `azure-pipelines.yml` file which:
1.  Installs Node.js and pnpm.
2.  Runs `pnpm run build:prod`.
3.  Publishes the bundled `dist` folder as an artifact.
4.  (Optional) Pushes the webresources using `dgtp` tooling during the `push` stage.

## License

This project is licensed under the [MS-PL](LICENSE).
