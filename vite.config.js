import { resolve } from "path";
import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import postcss from "postcss";
import { createHtmlPlugin } from "vite-plugin-html";
import autoprefixer from "autoprefixer";

const test = "http://localhost:80/dist/";
const dev = "http://localhost:5173/";
const prod = "https://sebnoret.github.io/portfolio/royaume-de-colchide/demo/";

export default defineConfig({
  base: dev,
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    postcss({
      plugins: [autoprefixer()],
    }),
    createHtmlPlugin({
      minify: true, // Active la minification des fichiers HTML
      collapseWhitespace: true, // Réduit les espaces vides
      removeComments: true, // Supprime les commentaires
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "famille-royale/index.html"),
        nested1: resolve(__dirname, "contact/index.html"),
        nested2: resolve(__dirname, "tresor-royal/index.html"), // nested: resolve(__dirname, "fr/index.html"),
      },
    },
  },
});
