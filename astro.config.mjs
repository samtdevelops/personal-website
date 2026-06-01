// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    markdown: {
        shikiConfig: {
            theme: "slack-ochin",
        },
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
