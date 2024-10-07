import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    "index.ts"
  ],
  rollup: {
    emitCJS: true,
    esbuild: {
      minify: true,
    },
  },
  declaration: true,
  clean: true,
});