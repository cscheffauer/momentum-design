import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, "public"),
  build: {
    manifest: true,
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  preview: {
    open: true,
    port: 5000,
  },
  plugins: [react(), svgr()],
  resolve: {
    // Workaround to fix inline dependency of a dependency, which is the case in @momentum-ui/react-collaboration
    mainFields: ['module'],
  },
});
