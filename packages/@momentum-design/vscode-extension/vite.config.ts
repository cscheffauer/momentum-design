import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";
import dynamicImport from 'vite-plugin-dynamic-import';
import copy from 'rollup-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, "public"),
  build: {
    manifest: true,
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      plugins: [
        //@ts-ignore: next-line
        dynamicImport(),
        //@ts-ignore: next-line
        copy({
          targets: [
            {
              src: path.join(process.cwd(), "../", "icons/dist/svg/*.svg"),
              dest: "dist/icons",
            },
            {
              src: path.join(process.cwd(), "../", "illustrations/dist/svg/*.svg"),
              dest: "dist/illustrations",
            },
          ],
        }),
      ],
    },
  },
  preview: {
    open: true,
    port: 5000,
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: { icon: true },
      include: ["**/*.svg?react", "**/*.svg?svgr"],
      exclude: [],
    }),
  ],
  resolve: {
    // // Workaround to fix inline dependency of a dependency, which is the case in @momentum-ui/react-collaboration
    // mainFields: ["module", "browswer"],
    alias: [
      { find: "@momentum-design", replacement: path.resolve(__dirname, "../../../node_modules/@momentum-design") },
    ],
  },
});
