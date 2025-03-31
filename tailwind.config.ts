import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/views/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/modules/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/elements/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/shared/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		screens: {
			xs: '390px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			xl_2: '1310px',
			xl_1: '1450px',
			'2xl': '1536px'
		},
		extend: {
			// screens: {
			// 	xs: {
			// 		min: '24.375rem'
			// 	},
			// 	xl_1: {
			// 		min: '90.625rem'
			// 	}
			// },
			boxShadow: {
				primary_bg: '0 4px 44px 0 rgba(31, 50, 56, 0.12)'
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground':
						'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground':
						'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// backgroundImage: {
				// 	'custom-gradient-2':
				// 		'linear-gradient(134deg, #e4faf3 0%, rgba(228, 250, 243, 0.29) 34.5%, #e4faf3 67%, rgba(228, 250, 243, 0.34) 100%)'
				// },

				backgroundImage: {
					'my-gradient':
						'linear-gradient(102deg, rgba(3, 5, 29, 0.85) 2.11%, rgba(255, 0, 0, 0.85) 100%)'
				},

				primary_color: 'var(--primary-color)',
				primary_opacity_color: 'var(--primary-opacity-color)',
				secondary_color: 'var(--secondary-color)',
				gray_color: 'var(--gray-color)',
				bg_color: 'var(--bg-color)',
				bg_hover_color: 'var(--bg-hover-color)',
				text_green: 'var(--text-green)',
				light_green: 'var(--light-green)',
				light_green_hover: 'var(--light-green-hover)',
				light_green_border: 'var(--light-green-border)',
				gray_color_primary: 'var(--gray-color-primary)',
				gray_dark_color: 'var(--gray-dark-color)',
				border_gray: 'var(--border-gray)',
				bg_dark_color: 'var(--bg-dark-color)',
				secondary_gray_color: 'var(--secondary-gray-color)',
				error_color: 'var(--error-color)',
				bg_opacity_white: 'var(--bg-opacity-white)'
			},
			fontFamily: {
				steppe: ['var(--font-steppe)', 'sans-serif'],
				montserrat: ['var(--font-montserrat)', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl_1: '2.5rem',
				xl_2: '6.25rem',
				xl_3: '2.125rem',
				xl_4: '3.125rem'
			},
			fontSize: {
				xl_1: '1.375rem', // 22px
				xl_2: '2rem', // 32px
				xl_3: '2.875rem', // 46px
				xl_4: '1.875rem', // 30px
				xl_5: '1.75rem', // 28px
				xl_6: '0.625rem', // 10px
				xl_7: '2.5rem' // 40px
			},
			height: {
				size_1: '3.625rem',
				size_2: '8.375rem'
			},
			minHeight: {
				size_1: '3.625rem',
				size_2: '8.375rem'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [tailwindcssAnimate]

	//   require("tailwindcss-animate")
}
export default config
