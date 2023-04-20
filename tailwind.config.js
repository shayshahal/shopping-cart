/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns:{
				fluid : 'repeat(auto-fit, minmax(16rem, 1fr))'		
			},
			gridTemplateRows: {
				card: '60% min-content min-content min-content 1fr'
			},
			gridAutoRows:{
				card: '24rem'
			},
			width:{
				block: 'clamp(32rem, 50%, 80rem)'
			},
			colors: {
				'dark-blue': '#12264a',
				'very-dark-blue': '#070912'
			},
			backgroundImage: { home: 'url("/assets/wave.svg")', 'home-mobile': 'url("/assets/wave-mobile.svg")' },
		},
	},
	plugins: [],
};
