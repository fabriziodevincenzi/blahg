import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://fabriziodevincenzi.netlify.app",
    base: "/",
    outDir: "./dist",  // Aggiungi questa riga
    integrations: [sitemap()],
    markdown: {
        shikiConfig: {
            theme: "material-theme-darker",
            langs: [],
        },
    },
});
