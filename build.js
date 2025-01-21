import esbuild from "esbuild";

// Build configuration
esbuild
  .build({
    entryPoints: ["./src/index.ts"], // Your entry file
    bundle: false, // Disable bundling if you want separate files
    outdir: "./", // Output directory
    format: "cjs", // Output as ES modules
    target: "ES2020", // Target environment
    module: "ESNext",
  })
  .catch(() => process.exit(1));
