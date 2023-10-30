import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				herobg: "url('/images/newbg.jpg')",
				newsBg: "url('/images/newdetails-bg.jpg')",
				moneylend: "url('/images/moneylending.jpeg')",
				loanshark: "url('/images/loanshark.jpg')",
				melware: "url('/images/bank.jpg')",
				default: "url('/images/default_thumbnail.jpg')",
			},
			colors: {
				darkblue: "#00205b",
				green: "#000",
			},
			screens: {
				md: "766px",
				lg: "1020px",
			},
		},
	},
	plugins: [],
};
export default config;
