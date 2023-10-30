import Image from "next/image";
import { IoHomeSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import { oswald } from "@/app/fonts";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="hidden lg:block relative z-10 text-darkblue text-[1.6rem] font-semibold tracking-wider">
			<ul className="flex items-center">
				<li className="mr-10 relative link">
					<Link href="https://eservices.police.gov.sg/content/policehubhome/homepage.html">
						<IoHomeSharp className="text-4xl" />
					</Link>
				</li>
				<li className="mr-10 relative link">
					<Link href="https://www.police.gov.sg/Who-We-Are/Mission-and-Vision">WHO WE ARE</Link>
				</li>
				<li className="mr-10 relative active">
					<Link href="/">MEDIA ROOM</Link>
				</li>
				<li className="mr-10 relative link">
					<Link href="https://www.police.gov.sg/Community/Community-Programmes">COMMUNITY</Link>
				</li>
				<li className="mr-10 relative link">
					<Link href="https://www.police.gov.sg/Join-SPF/Police-Officer/The-Protectors">
						JOIN SPF
					</Link>
				</li>
				<li className="mr-10 relative link">
					<Link href="https://www.police.gov.sg/Advisories">ADVISORIES</Link>
				</li>
				<li className="mr-10 relative link">
					<Link href="https://www.police.gov.sg/Events/Upcoming-Events">EVENT</Link>
				</li>
				<Link href="https://eservices.police.gov.sg/content/policehubhome/homepage.html">
					<li className="mr-10 relative link">E-SERVICES</li>
				</Link>
				<li className="mr-10 relative link">
					<IoSearch className="text-4xl" />
				</li>
			</ul>
		</nav>
	);
}
