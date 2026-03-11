# webresources-template

Template repository for Dynamics 365 webresources. This project uses TypeScript, Webpack, Biome, and Jest to develop and bundle webresources for Dataverse environments.

## Features

- **TypeScript Support**: Full support for TypeScript with type definitions for XRM.
- **Webpack Bundling**: Automatic bundling of form and ribbon scripts.
- **Linting & Formatting**: Powered by [Biome](https://biomejs.dev/).
- **Testing**: Integrated [Jest](https://jestjs.io/) for unit testing with [xrm-mock](https://github.com/shiamu/xrm-mock).
- **CI/CD Ready**: Pre-configured Azure Pipelines for building and deploying.

## Requirements

- [Node.js](https://nodejs.org/) (Recommended version: 24.x)
- [pnpm](https://pnpm.io/) package manager

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

## Development Scripts

The project includes several `pnpm` scripts for development and deployment:

- `pnpm run lint`: Run Biome linter to check for issues.
- `pnpm run build`: Perform dependency checks, linting, and a development bundle.
- `pnpm run build:prod`: Perform linting and a production (minified) bundle.
- `pnpm run bundle`: Bundle scripts in development mode with inline source maps.
- `pnpm run bundle:prod`: Bundle scripts in production mode.
- `pnpm run dependencyCheck`: Run `pnpm audit` and check for outdated packages.
- `pnpm run test`: Run Jest tests once.
- `pnpm run test-watch`: Run Jest tests in watch mode.
- `pnpm run update`: Update dependencies interactively.

## Project Structure

- `src/`: Contains the TypeScript source code.
    - `form/`: Form scripts (entry points follow `*.form.ts` naming).
    - `ribbon/`: Ribbon scripts (entry points follow `*.ribbon.ts` naming).
    - `model/`: Dataverse entity and form models (often generated).
- `scripts/`: PowerShell scripts for generating models and pushing webresources.
    - `model-generate.ps1`: Generate TypeScript models from Dataverse.
    - `push-webressources.ps1`: Push bundled scripts to Dataverse.
- `dist/`: Output directory for bundled webresources (generated after build).
- `azure-pipelines.yml`: CI/CD pipeline definition for Azure DevOps.
- `webpack.config.js`: Webpack configuration for bundling.
- `biome.json`: Configuration for Biome (linting and formatting).

## Entry Points

Webpack is configured to automatically pick up entry points based on file naming conventions:
- Files matching `src/form/*.form.ts` will be bundled into `dist/scripts/form/*.form.js`.
- Files matching `src/ribbon/*.ribbon.ts` will be bundled into `dist/scripts/ribbon/*.ribbon.js`.

Bundled objects are exposed under the global namespace `DGT`.

## Environment Variables

TODO: Define any necessary environment variables for local development or script execution (e.g., connection strings for model generation).

## Deployment

### PowerShell Scripts
You can use the provided scripts in the `scripts/` folder to manage models and push webresources. These scripts likely require local configuration or parameters (TODO: add details on required parameters/config).

### CI/CD
The project includes an `azure-pipelines.yml` file which:
1.  Installs Node.js and pnpm.
2.  Runs `pnpm run build:prod`.
3.  Publishes the bundled `dist` folder as an artifact.
4.  (Optional) Pushes the webresources using `dgtp` tooling during the `push` stage.

## License

This project is licensed under the [MS-PL](LICENSE).
