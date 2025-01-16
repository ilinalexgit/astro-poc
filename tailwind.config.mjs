import { head } from "framer-motion/client";

const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
	content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
	theme: {
		extend: {
            colors: {
                'text-dark': '#364851'
            },
            fontFamily: {
                body: ['Raleway', 'sans-serif'],
                heading: ['Oswald', 'sans-serif']
            }
        },
	},
	darkMode: "class",
    plugins: [nextui()]
}
