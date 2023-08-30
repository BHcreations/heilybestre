/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				abhaya: ['"Abhaya Libre ExtraBold"'],
				poppins: ['Poppins'],
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
		},
	},
	plugins: [],
};
