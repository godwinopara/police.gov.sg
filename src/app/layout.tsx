import type { Metadata } from "next";
import { lato } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
	title: "SPF | NEWS",
	description: "NEWS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={lato.className}>{children}</body>
		</html>
	);
}
