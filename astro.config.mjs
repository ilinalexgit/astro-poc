// @ts-check
import { defineConfig } from 'astro/config';
import paraglide from "@inlang/paraglide-astro";
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
    prefetch: true,
    trailingSlash: "never",
    integrations: [
        react(),
        tailwind(),
        sanity(
            {
                projectId: "van4sbb6",
                dataset: "production",
                useCdn: false, // for static builds
            },
        ),
        paraglide({
            project: "./project.inlang",
            outdir: "./src/paraglide",
        })
    ],
    i18n: {
        defaultLocale: "en", // the default locale
        locales: ["en", "fr"], // the locales you want to support
    },
});