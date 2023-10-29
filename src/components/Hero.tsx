import Image from "next/image";
import { IoHomeSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import { oswald } from "@/app/fonts";
import Navbar from "./Navbar";
import Emergency from "./Emergency";

export default function Hero() {
	return (
		<section>
			<div className="min-h-[70vh] bg-herobg bg-center bg-cover relative py-20">
				<div className="absolute top-0 bg-gradiant h-[300px] w-full"></div>
				<div className="flex items-center justify-between relative z-10 max-w-[1210px] mx-auto pb-8 border-b border-darkblue">
					<div className="z-10 relative">
						<Image src="/images/spf-logo.png" alt="logo" height={50} width={200} className="z-10" />
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
						<span className="text-3xl">NEWS</span>
					</h3>
					<h1
						className={`${oswald.className} font-normal leading-[5.29rem] tracking-[1.15rem] mt-4 mb-11 text-8xl`}
					>
						NEWS
					</h1>
					E
				</div>
			</div>
		</section>
	);
}
