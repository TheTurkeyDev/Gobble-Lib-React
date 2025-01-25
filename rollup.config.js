import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import dts from "rollup-plugin-dts";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';

const packageJson = require("./package.json");
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer({ minify: true });

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                exports: 'named',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({
                tsconfigOverride: {
                    exclude: ["**/__stories__", "**/*.stories.tsx"],
                },
                tsconfig: "./tsconfig.json",
                transformers: [
                    () => ({
                        before: [styledComponentsTransformer],
                    }),
                ],
            }),
            babel({ babelHelpers: 'bundled' }),
            terser()
        ],
        external: ['react', 'react-dom', "styled-components"]
    },
    {
        input: "dist/esm/src/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts.default()],
    },
];