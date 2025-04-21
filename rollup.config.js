import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" with { type: "json" };

const externalDeps = [
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.peerDependencies || {}),
  "@floating-ui/react",
  "@floating-ui/react-dom",
];

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    external: externalDeps,
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: [
          "**/*.test.tsx",
          "**/*.test.ts",
          "**/*.stories.tsx",
          "**/*.stories.ts",
          "**/*.d.ts",
        ],
      }),
      postcss({
        config: "./postcss.config.mjs",
        extract: true,
        minimize: true,
        sourceMap: true,
      }),
    ],
  },
  {
    input: "dist/esm/types/src/index.d.ts",
    output: [
      {
        file: "dist/index.d.ts",
        format: "esm",
      },
    ],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
