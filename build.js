const esbuild = require("esbuild");

// Build configuration
esbuild
  .build({
    entryPoints: ["./src/index.ts"], // Your entry file
    bundle: false, // Disable bundling if you want separate files
    outdir: "./", // Output directory
    format: "cjs", // Output as ES modules
    target: "es6", // Target environment
  })
  .catch(() => process.exit(1));
