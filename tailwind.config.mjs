const { nextui } = require("@nextui-org/react");
const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [nextui(),addDynamicIconSelectors(),require('@tailwindcss/typography'),],
	darkMode: "class",
}
