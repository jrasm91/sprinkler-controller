/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			spacing: {
				18: '4.5rem',
			},
		},
	},
	plugins: [],
};
