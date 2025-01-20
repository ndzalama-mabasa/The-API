const esbuild = require("esbuild");

// Build configuration
esbuild
  .build({
    entryPoints: ["./src/index.ts"], // Your entry file
    bundle: false, // Disable bundling if you want separate files
    outdir: "./", // Output directory
    format: "esm", // Output as ES modules
    sourcemap: true, // Generate source maps (optional)
    target: "es2020", // Target environment
    splitting: true, // Enable code splitting (for multiple files)
    outExtension: { ".js": ".mjs" }, // Change file extension to .mjs
  })
  .catch(() => process.exit(1));
