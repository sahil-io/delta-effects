module.exports = {
	future: {
		purgeLayersByDefault: true,
		removeDeprecatedGapUtilities: true,
	},
	purge: ['./src/layouts/**/*.{js,ts,jsx,tsx}', './src/partials/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				"heading": ["granville", "serif"]
			},
			colors: {
				'dark-gray': '#444444',
				'primary': {
					DEFAULT: "var(--color-primary-500)",
					500: "var(--color-primary-500)",
					700: "var(--color-primary-700)",
				},
				'secondary': {
					DEFAULT: "var(--color-secondary-500)",
					500: "var(--color-secondary-500)",
					700: "var(--color-secondary-700)",
				},
				'accent': {
					DEFAULT: "var(--color-accent-500)",
					500: "var(--color-accent-500)",
				},
			},
		},
		container: {
			center: true,
			padding: '2rem',
			maxWidth: '1140px'
		}
	},
	variants: {},
	plugins: [],
}
