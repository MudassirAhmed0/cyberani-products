import type { Config } from 'tailwindcss';
const config = {
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
  
	theme: {
	  extend: {
		colors: {
		  black: "var(--black)",
		  gray: "var(--gray)",
		  white: "var(--white)",
		  "dull-white": "var(--dull-white)",
		  "bright-teal": "var(--bright-teal)",
		  "light-teal": "var(--light-teal)",
		  "dark-teal": "var(--dark-teal)",
		  "dark-navy": "var(--dark-navy)",
		  "persian-green": "var(--persian-green)",
		},
		spacing: {
		  sp10: "var(--sp10)",
		  sp16: "var(--sp16)",
		  sp18: "var(--sp18)",
		  sp20: "var(--sp20)",
		  sp24: "var(--sp24)",
		  sp30: "var(--sp30)",
		  sp32: "var(--sp32)",
		  sp36: "var(--sp36)",
		  sp40: "var(--sp40)",
		  sp48: "var(--sp48)",
		  sp56: "var(--sp56)",
		  sp60: "var(--sp60)",
		  sp64: "var(--sp64)",
		  sp72: "var(--sp72)",
		  sp80: "var(--sp80)",
		  sp100: "var(--sp100)",
		  sp110: "var(--sp110)",
		  sp120: "var(--sp120)",
		  sp128: "var(--sp128)",
		  sp140: "var(--sp140)",
		  sp150: "var(--sp150)",
		  sp160: "var(--sp160)",
		  sp180: "var(--sp180)",
		  sp190: "var(--sp190)",
		  sp200: "var(--sp200)",
		},
	  },
	},
	plugins: [],
  } satisfies Config;

export default config;
