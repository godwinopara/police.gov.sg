"use client";

import Image from "next/image";
import { IoCloseSharp, IoHomeSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import { oswald } from "@/app/fonts";
import Navbar from "./Navbar";
import Emergency from "./Emergency";
import Link from "next/link";
import { SlMenu } from "react-icons/sl";
import MobileNav from "./MobileNav";
import { useState } from "react";

export default function Hero() {
	const [toggleShowNav, setToggleShowNav] = useState(false);

	return (
		<>
			<section className="xl:hidden">
				<nav className="flex items-center justify-between px-8 py-10">
					<Image src="/images/spf-logo.png" alt="logo" height={50} width={150} className="z-10" />
					<div className="text-5xl cursor-pointer" onClick={() => setToggleShowNav(!toggleShowNav)}>
						{!toggleShowNav && <SlMenu />}
						{toggleShowNav && <IoCloseSharp className="text-6xl" />}
					</div>

					{toggleShowNav && <MobileNav />}
				</nav>
				<div className="bg-herobg bg-cover bg-center min-h-[200px] relative">
					<div className="absolute top-0 bg-gradiant h-[150px] w-full"></div>

					<div className="relative z-10 pt-40 px-8">
						<h1
							className={`${oswald.className} uppercase tracking-[0.272rem] leading-[3.1rem] font-normal text-white text-5xl w-[100%]`}
						>
							NEWS
						</h1>
					</div>
				</div>
			</section>
			<section className="hidden xl:block">
				<div className="min-h-[70vh] bg-herobg bg-center bg-cover relative py-20">
					<div className="absolute top-0 bg-gradiant h-[300px] w-full"></div>
					<div className="flex items-center justify-between relative z-10 max-w-[1210px] mx-auto pb-8 border-b border-darkblue">
						<Link href="https://eservices.police.gov.sg/content/policehubhome/homepage.html">
							<div className="z-10 relative">
								<Image
									src="/images/spf-logo.png"
									alt="logo"
									height={50}
									width={200}
									className="z-10"
								/>
							</div>
						</Link>
						<Navbar />
					</div>
					<Emergency />
					<div className="pl-10 md:pl-0 relative z-10 text-white max-w-[1200px] mx-auto mt-80">
						<h3 className="hidden md:flex items-center">
							<span className="text-3xl mr-3">HOME</span>
							<IoChevronForwardOutline className="text-xl mr-3" />
							<span className="text-3xl mr-3">MEDIA ROOM</span>
							<IoChevronForwardOutline className="text-xl mr-3" />
							<span className="text-lg md:text-3xl">NEWS</span>
						</h3>
						<h1
							className={`${oswald.className} font-normal leading-[5.29rem] tracking-[1.15rem] mt-4 mb-11 text-8xl`}
						>
							NEWS
						</h1>
					</div>
				</div>
			</section>
		</>
	);
}
