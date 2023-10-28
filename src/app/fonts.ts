import { Lato, Oswald } from "next/font/google";

export const lato = Lato({
	weight: ["100", "300", "400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});

export const oswald = Oswald({
	subsets: ["latin"],
	display: "swap",
});
