"use client";

import Image from "next/image";
import { oswald } from "../fonts";
import Emergency from "@/components/Emergency";
import Navbar from "@/components/Navbar";
import { IoChevronForwardOutline } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import { IoCloseSharp } from "react-icons/io5";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";
import { Metadata } from "next";

export default function News() {
	const [toggleShowNav, setToggleShowNav] = useState(false);

	return (
		<>
			{/* leading-[5.29rem] tracking-[1.15rem] */}
			<section className="lg:hidden">
				<nav className="flex items-center justify-between px-8 py-10">
					<Image src="/images/spf-logo.png" alt="logo" height={50} width={150} className="z-10" />
					<div className="text-5xl cursor-pointer" onClick={() => setToggleShowNav(!toggleShowNav)}>
						{!toggleShowNav && <SlMenu />}
						{toggleShowNav && <IoCloseSharp className="text-6xl" />}
					</div>

					{toggleShowNav && <MobileNav />}
				</nav>
				<div className="bg-newsBg bg-cover bg-center min-h-[200px] relative">
					<div className="absolute top-0 bg-gradiant h-[150px] w-full"></div>

					<div className="relative z-10 pt-24 px-8">
						<h1
							className={`${oswald.className} uppercase tracking-[0.272rem] leading-[3.1rem] font-normal text-white text-5xl w-[100%]`}
						>
							Man Apprehended with gold trunk box
						</h1>
					</div>
				</div>
			</section>

			{/* ============ Desktop ==================== */}
			<section>
				<div className="hidden lg:block bg-newsBg bg-center bg-cover relative py-20">
					<div className="absolute top-0 bg-gradiant h-[500px] w-full"></div>
					<div className="flex items-center justify-between relative z-10 max-w-[1210px] mx-auto pb-8 border-b border-darkblue">
						<div className="z-10 relative">
							<Image
								src="/images/spf-logo.png"
								alt="logo"
								height={50}
								width={200}
								className="z-10"
							/>
						</div>
						<Navbar />
					</div>
					<Emergency />
					<div className="relative z-10 text-white max-w-[1200px] mx-auto mt-80">
						<h3 className="flex items-center">
							<span className="text-3xl mr-3">HOME</span>
							<IoChevronForwardOutline className="text-xl mr-3" />
							<span className="text-3xl mr-3">MEDIA ROOM</span>
							<IoChevronForwardOutline className="text-xl mr-3" />
							<span className="text-3xl mr-3">NEWS</span>
							<IoChevronForwardOutline className="text-xl mr-3" />
							<span className="text-3xl uppercase">Man Apprehended with gold trunk box</span>
						</h3>
						<h1
							className={`${oswald.className} uppercase font-normal leading-[5.29rem] tracking-[1.15rem] mt-4 mb-11 text-7xl w-[70%]`}
						>
							Man Apprehended with gold trunk box
						</h1>
					</div>
				</div>

				{/* ========================= New Details ======================= */}

				<div className="lg:flex my-32  max-w-[1210px] mx-auto">
					<div className="hidden lg:block px-10 py-10 w-1/2">
						<ul className="py-5 text-[1.75rem] text-[#525252]">
							<li className="py-4 px-4 mb-6">NEWS</li>
							<li className="py-4 px-4 mb-6">SCAM BULLETIN</li>
							<li className="py-4 px-4 mb-6">
								POLICE <br />
								LIFE
							</li>
							<li className="py-4 px-4 mb-6">PUBLICATION</li>
							<li className="py-4 px-4 mb-6">SPEECHES</li>
							<li className="py-4 px-4 mb-6">STATISTICS</li>
						</ul>
					</div>
					<div className="px-8 lg:px-0 lg:w-[60%]">
						<p className="text-3xl">
							In a significant development, the police have successfully apprehended a man named
							Tommy William from Thailand Bangkok.
						</p>
						<br />
						<p className="text-3xl">
							He was found in possession a gold trunk box which is suspected to contain money and
							other valuables.
						</p>
						<br />
						<p className="text-3xl">
							According to reports, the investigation was initiated on July 20th in response to an
							intelligence alert sent to the authorities. The suspect is currently in our custody,
							awaiting court proceedings to address the charges brought against him. NOTE: It is
							essential to underscore that the presumption of innocence applies to the accused until
							proven guilty in a court of law.
						</p>

						<div className="mt-20 flex">
							<Image
								src="/images/police.jpeg"
								alt="box"
								height={10}
								width={400}
								className="mr-10"
							/>
							<Image src="/images/box.jpg" alt="box" height={300} width={300} />
						</div>

						<div className="mt-24">
							<strong className="block text-3xl">PUBLIC AFFAIRS DEPARTMENT</strong>
							<strong className="block text-3xl">SINGAPORE POLICE FORCE</strong>
							<strong className="block text-3xl">31 October 2023</strong>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
