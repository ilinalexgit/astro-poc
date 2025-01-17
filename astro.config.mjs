// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), sanity(
    {
        projectId: "van4sbb6",
        dataset: "production",
        useCdn: false, // for static builds
      }
  )]
});