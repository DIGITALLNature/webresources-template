import path from "node:path";
import {globbySync} from "globby";

// objects will be exposed in this global
const GLOBAL_NAME = "DGT";

const ROOT_DIR = path.resolve();
const OUTPUT_DIR = path.join(ROOT_DIR, "dist");
const SCRIPTS_DIR = "scripts"

const entryPoints = globbySync(["src/form/*.form.ts", "src/ribbon/*.ribbon.ts"], {
  absolute: true,
}).reduce((entries, file) => {
  const subDir = path.relative("src", path.dirname(file));
  const entryPoint = path.join(SCRIPTS_DIR, subDir, path.basename(file, ".ts"));
  entries[entryPoint] = file;
  return entries;
}, {});

const config = {
  entry: entryPoints,
  output: {
    path: OUTPUT_DIR,
    clean: true,
    filename: "[name].js",
    library: {
      name: GLOBAL_NAME,
      type: "assign-properties",
    },
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },
  plugins: [],
};

export default config;
