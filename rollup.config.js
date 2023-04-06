import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/main.js",
  output: [
    {
      file: "dist/index.cjs",
      format: "cjs",
    },
    {
      file: "dist/index.mjs",
      format: "es",
    },
  ],
  plugins: [resolve()],
};
