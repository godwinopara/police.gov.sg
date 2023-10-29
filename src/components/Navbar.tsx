import Image from "next/image";
import { IoHomeSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import { oswald } from "@/app/fonts";

export default function Navbar() {
	return (
		<nav className="relative z-10 text-darkblue text-[1.6rem] font-semibold tracking-wider">
			<ul className="flex items-center">
				<li className="mr-10 relative link">
					<IoHomeSharp className="text-4xl" />
				</li>
				<li className="mr-10 relative link">
					WHO WE ARE
					<ul className="absolute top-20 z-20 w-[250px] bg-white shadow-lg hidden">
						<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">
							MISSION AND VISION
						</li>
						<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">VALUES</li>
						<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">PLEDGES</li>
						<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">
							ORGANISATION STRUCTURE
						</li>
						<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">
							RANK INSIGNIA
						</li>
						<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">
							NATIONAL SERVICE
						</li>
						<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">SPF 200</li>
						<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">
							OUR HISTORY
						</li>
						<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">
							POLICE DAY
						</li>
						<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">
							POLICE HERITAGE TRIAL
						</li>
						<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">
							HERITAGE CENTRE
						</li>
					</ul>
				</li>
				<li className="mr-10 relative active">
					MEDIA ROOM
					<ul className="absolute top-20 z-20 w-[200px] bg-white shadow-lg hidden">
						<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">NEWS</li>
						<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">
							SCAM BULLETIN
						</li>
						<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">
							POLICE LIFE
						</li>
						<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">
							PUBLICATION
						</li>
						<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">SPEECHES</li>
						<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">
							STATISTICS
						</li>
					</ul>
				</li>
				<li className="mr-10 relative link">
					COMMUNITY
					<ul className="absolute top-20 z-20  w-[230px] bg-white shadow-lg hidden">
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
				<li className="mr-10 relative link">
					JOIN SPF
					<ul className="absolute top-20 z-20  w-[230px] bg-white shadow-lg hidden">
						<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">
							POLICE OFFICER
						</li>
						<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">
							CIVILIAN OFFICER
						</li>
						<li className="py-10 cursor-pointer text-2xl px-8 hover:bg-black hover:text-white">
							VOLUNTEER SCHEMES
						</li>
					</ul>
				</li>
				<li className="mr-10 relative link">
					ADVISORIES
					<ul className="absolute top-20 z-20  w-[230px] bg-white shadow-lg hidden">
						<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">CRIME</li>
						<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">
							SCAM BULLETIN
						</li>
						<li className="py-10 cursor-pointer text-2xl px-8 hover:bg-black hover:text-white">
							TRAFFIC
						</li>
						<li className="py-10 cursor-pointer text-2xl px-8 hover:bg-black hover:text-white">
							DONATION DRAW AND LUCKY DRAW
						</li>
						<li className="py-10 cursor-pointer text-2xl px-8 hover:bg-black hover:text-white">
							AIRPORT SECURITY
						</li>
						<li className="py-10 cursor-pointer text-2xl px-8 hover:bg-black hover:text-white">
							INFRASTRUCTURE PROTECTION
						</li>
						<li className="py-10 cursor-pointer text-2xl px-8 hover:bg-black hover:text-white">
							SECURITY OUTCOME - BASED CONTRACTING
						</li>
					</ul>
				</li>
				<li className="mr-10 relative link">
					EVENT
					<ul className="absolute top-20 z-20  w-[230px] bg-white shadow-lg hidden">
						<li className="py-10 cursor-pointer px-8  hover:bg-black hover:text-white">
							UPCOMING EVENT
						</li>
					</ul>
				</li>
				<li className="mr-10 relative link">E-SERVICES</li>
				<li className="mr-10 relative link">
					<IoSearch className="text-4xl" />
				</li>
			</ul>
		</nav>
	);
}
