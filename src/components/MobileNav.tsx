import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { VscChevronRight } from "react-icons/vsc";

const MobileNav = () => {
	return (
		<>
			<ul className="absolute top-36 pb-40 left-0 bg-[#e3e3e3] min-h-screen w-full z-30 lg:hidden">
				<div className="px-10 py-8 flex items-center">
					<input
						type="search"
						placeholder="Search..."
						className="bg-transparent w-full border-b-2 border-darkblue text-3xl py-5"
					/>
					<FaSearch className="text-darkblue text-5xl" />
				</div>
				<li className="text-black text-2xl text-center py-10">
					<p className="font-extralight mb-2 italic">
						EMERGENCIES <span className="font-black text-3xl">999</span>
					</p>
					<p className="font-extralight mb-2 italic">
						EMERGENCY SMS <span className="font-black text-3xl">71999</span>
					</p>
					<p className="font-extralight mb-2 italic">
						HOTLINE <span className="font-black text-3xl">1800 255 0000</span>
					</p>
					<a className="font-bold text-3xl block text-darkblue mb-1">I-WITNESS</a>
				</li>
				<div className="border border-gray-400"></div>
				<ul className="px-16 text-[#00205b] tracking-[0.32rem]">
					<li className="border-b border-gray-400 font-bold py-5">
						<Link href="https://eservices.police.gov.sg/content/policehubhome/homepage.html">
							HOME
						</Link>
					</li>
					<li className="border-b border-gray-400 font-bold py-5 flex items-center justify-between">
						<Link href="https://www.police.gov.sg/Who-We-Are/Mission-and-Vision">WHO WE ARE</Link>
						<VscChevronRight className="text-3xl" />
					</li>
					<li className="border-b border-gray-400 font-bold py-5 flex items-center justify-between">
						<Link href="https://www.police.gov.sg/Who-We-Are/Mission-and-Vision">MEDIA ROOM</Link>
						<VscChevronRight className="text-3xl" />
					</li>
					<li className="border-b border-gray-400 font-bold py-5 flex items-center justify-between">
						<Link href="https://www.police.gov.sg/Media-Room/News">COMMUNITY</Link>
						<VscChevronRight className="text-3xl" />
					</li>
					<li className="border-b border-gray-400 font-bold py-5 flex items-center justify-between">
						<Link href="https://www.police.gov.sg/Join-SPF/Police-Officer/The-Protectors">
							JOIN SPF
						</Link>
						<VscChevronRight className="text-3xl" />
					</li>
					<li className="border-b border-gray-400 font-bold py-5 flex items-center justify-between">
						<Link href="https://www.police.gov.sg/Advisories">ADVISORIES</Link>
						<VscChevronRight className="text-3xl" />
					</li>
					<li className="border-b border-gray-400 font-bold py-5 flex items-center justify-between">
						<Link href="https://www.police.gov.sg/Events/Upcoming-Events">EVENT</Link>
						<VscChevronRight className="text-3xl" />
					</li>
					<li className="border-b border-gray-400 font-bold py-5">
						<Link href="https://eservices.police.gov.sg/content/policehubhome/homepage.html">
							E-SERVICES
						</Link>
					</li>
				</ul>

				<div className="px-16 pt-32 flex">
					<div className="mr-10">
						<span className="block mb-8">
							Share Your Views @ <br /> Reach
						</span>
						<span>Terms of Use</span>
					</div>
					<div>
						<ul>
							<li className="mb-4">Report Vulnerability</li>
							<li className="mb-4">Privacy Statement</li>
							<li className="mb-4">Sitemap</li>
						</ul>
					</div>
				</div>
			</ul>
		</>
	);
};

export default MobileNav;
