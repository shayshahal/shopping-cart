/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'dark-blue': '#12264a'
			},
			backgroundImage: { home: 'url("/assets/wave2.svg")' },
		},
	},
	plugins: [],
};
