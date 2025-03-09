// @ts-check
import { defineConfig } from "astro/config";
import path from "node:path";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    integrations: [vue()],
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                "@components": path.resolve("./src/components"),
                "@utils": path.resolve("./src/utils"),
                "@pages": path.resolve("./src/pages"),
                "@data": path.resolve("./src/data"),
                "@styles": path.resolve("./src/styles"),
                "@assets": path.resolve("./src/assets"),
                "@layouts": path.resolve("./src/layouts"), 
                "@types": path.resolve("./src/types"),
                "@features": path.resolve("./src/features"),
                "@configs": path.resolve("./src/configs"),
                "@i18n": path.resolve("./src/i18n"),
                "@css": path.resolve("./src/styles"),
                "@mocks":path.resolve("./src/mocks"),
                "@publick":path.resolve("./public")
            },
        },
    },
});
