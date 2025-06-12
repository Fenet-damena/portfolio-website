
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'orbitron': ['Orbitron', 'monospace'],
				'space': ['Space Grotesk', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'neon-purple': 'hsl(var(--neon-purple))',
				'neon-cyan': 'hsl(var(--neon-cyan))',
				'neon-pink': 'hsl(var(--neon-pink))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'25%': { transform: 'translateY(-20px) rotate(2deg)' },
					'50%': { transform: 'translateY(-10px) rotate(-1deg)' },
					'75%': { transform: 'translateY(-15px) rotate(1deg)' }
				},
				'pulse-glow': {
					'0%': { boxShadow: '0 0 20px hsl(var(--neon-purple))' },
					'100%': { boxShadow: '0 0 40px hsl(var(--neon-purple)), 0 0 60px hsl(var(--neon-cyan))' }
				},
				'sparkle': {
					'0%, 100%': { opacity: '0', transform: 'scale(0)' },
					'50%': { opacity: '1', transform: 'scale(1)' }
				}
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
				'sparkle': 'sparkle 2s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
