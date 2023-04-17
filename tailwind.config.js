/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'dark-gold': 'hsl(36, 100%, 25%)',
				'light-gold': '#b9a27f'
			},
			backgroundImage: { home: 'url("/assets/wave.svg")' },
		},
	},
	plugins: [],
};
