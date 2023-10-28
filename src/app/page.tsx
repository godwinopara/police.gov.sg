import Image from "next/image";
import { IoHomeSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import { oswald } from "./fonts";

export default function Home() {
	return (
		<main>
			<div className="min-h-[70vh] bg-herobg bg-center bg-cover relative py-20">
				<div className="absolute top-0 bg-gradiant h-[300px] w-full"></div>
				<div className="flex items-center justify-between relative z-10 max-w-[1210px] mx-auto pb-8 border-b border-darkblue">
					<div className="z-10 relative">
						<Image src="/images/spf-logo.png" alt="logo" height={50} width={200} className="z-10" />
					</div>
					<nav className="relative z-10 text-darkblue text-[1.6rem] font-semibold tracking-wider">
						<ul className="flex items-center">
							<li className="mr-10 relative link">
								<IoHomeSharp className="text-4xl" />
							</li>
							<li className="mr-10 relative active">
								WHO WE ARE
								<ul className="absolute top-20 z-20 px-8 w-[250px] py-10 bg-white shadow-lg hidden">
									<li className="mb-10">MISSION AND VISION</li>
									<li className="mb-10">VALUES</li>
									<li className="mb-10">PLEDGES</li>
									<li className="mb-10">ORGANISATION STRUCTURE</li>
									<li className="mb-10">RANK INSIGNIA</li>
									<li className="mb-10">NATIONAL SERVICE</li>
									<li className="mb-10">SPF 200</li>
									<li className="mb-10">OUR HISTORY</li>
									<li className="mb-10">POLICE DAY</li>
									<li className="mb-10">POLICE HERITAGE TRIAL</li>
									<li className="mb-10">HERITAGE CENTRE</li>
								</ul>
							</li>
							<li className="mr-10 relative active">
								MEDIA ROOM
								<ul className="absolute top-20 z-20 px-8 w-[200px] py-10 bg-white shadow-lg hidden">
									<li className="mb-10">NEWS</li>
									<li className="mb-10">SCAM BULLETIN</li>
									<li className="mb-10">POLICE LIFE</li>
									<li className="mb-10">PUBLICATION</li>
									<li className="mb-10">SPEECHES</li>
									<li className="mb-10">STATISTICS</li>
								</ul>
							</li>
							<li className="mr-10 relative link">
								COMMUNITY
								<ul className="absolute top-20 z-20  w-[230px] bg-white shadow-lg ">
									<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">
										COMMUNITY PROGRAM
									</li>
									<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">
										TOTAL DEFENCE
									</li>
									<li className="py-10 cursor-pointer text-2xl px-8 hover:bg-black hover:text-white">
										VOLUNTEER SCHEMES
									</li>
								</ul>
							</li>
							<li className="mr-10 relative link">JOIN SPF</li>
							<li className="mr-10 relative link">ADVISORIES</li>
							<li className="mr-10 relative link">EVENT</li>
							<li className="mr-10 relative link">E-SERVICES</li>
							<li className="mr-10 relative link">
								<IoSearch className="text-4xl" />
							</li>
						</ul>
					</nav>
				</div>
				<ul className="z-10 flex justify-end max-w-[1200px] mx-auto">
					<li className="bg-white italic font-light relative">
						<div className="px-8 border-r border-gray-400 my-6">
							EMERGENCIES <span className="ml-4 font-bold text-3xl">999</span>
						</div>
					</li>
					<li className="bg-white italic font-light relative">
						<div className="px-8 border-r border-gray-400 my-6">
							EMERGENCY SMS <span className="ml-4 font-bold text-3xl">71999</span>
						</div>
					</li>
					<li className="bg-white italic font-light relative">
						<div className="px-8 border-r border-gray-400 my-6">
							HOTLINE <span className="ml-4 font-bold text-3xl">1800 255 0000</span>
						</div>
					</li>
					<li className="bg-white text-3xl px-8 py-6 font-bold relative">I-Witness</li>
				</ul>
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
				</div>
			</div>
		</main>
	);
}
