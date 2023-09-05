/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				lg: '1106px',
			},
			fontFamily: {
				abhaya: ['"Abhaya Libre Medium"'],
				avenir: ['Avenir'],
			},
			colors: {
				neutral: {
					100: '#FFFFFF',
					300: '#F1F3F7',
					400: '#E1E4ED',
					500: '#B4B9C9',
					600: '#6D758F',
				},
			},
			backgroundImage: {
				'pet-savvy-cover': "url('/images/petsavvy-cover.png')",
				'pet-savvy-cover2': "url('/images/petsavvy-cover2.png')",
			},
		},
	},
	plugins: [],
};
