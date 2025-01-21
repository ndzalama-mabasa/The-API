import esbuild from "esbuild";

// Build configuration
esbuild
  .build({
    entryPoints: ["./src/index.ts"], // Your entry file
    bundle: false, // Disable bundling if you want separate files
    outdir: "./", // Output directory
    format: "esm",
    target: "ES2020", // Target environment
  })
  .catch(() => process.exit(1));
