import Link from "next/link";

export default function NewsList() {
	return (
		<section className="max-w-[1200px] mx-auto my-24">
			<div className="lg:px-10 lg:flex xl:px-0 justify-between items-start">
				<div className="hidden lg:block bg-[#f5f5f9] px-10 py-10 w-[25%] mr-32">
					<h3 className="px-6 font-extrabold mb-10  text-darkblue text-4xl tracking-[0.36rem]">
						FILTER
					</h3>
					<ul className="py-5 text-[1.75rem] text-[#525252]">
						<li className="py-4 px-4 mb-6 ">APPEALS</li>
						<li className="py-4 px-4 mb-6">FORUMS LETTER REPLIES</li>
						<li className="py-4 px-4 mb-6">
							TRAFFIC <br />
							MANAGEMENT
						</li>
						<li className="py-4 px-4 mb-6 ">POLICE NEWS RELEASES</li>
					</ul>
				</div>
				<div className="px-10 lg:px-0 lg:w-[70%]">
					<Link href="/media-room">
						<div className=" items-center  border-b border-gray-300 mb-14 pb-10 lg:pb-0 lg:flex">
							<div className="lg:w-[50rem] mb-20">
								<span className=" block text-3xl mb-5">26 0ct 2023</span>
								<div className="h-[250px] w-[350px] bg-default bg-no-repeat bg-cover bg-center relative"></div>
							</div>
							<div className="ml-8">
								<h4 className="font-bold text-3xl text-darkblue mb-8">
									Man Aprrehended with gold trunk box
								</h4>
								<p className="">
									In a significant development, the police have successfully apprehended a man named
									Tommy William from Thailand Bangkok.
								</p>
							</div>
						</div>
					</Link>
					<Link href="https://www.police.gov.sg/media-room/news/20231025_eight_members_of_an_organised_criminal_group_to_be_charged_for_illegal_gambling_activities">
						<div className="pb-10 lg:pb-0 lg:flex items-center  border-b border-gray-300 mb-14">
							<div className="lg:w-[50rem] mb-20">
								<span className="block text-3xl mb-5">27 0ct 2023</span>
								<div className="h-[250px] w-[350px] bg-default bg-no-repeat bg-cover bg-center relative"></div>
							</div>
							<div className="ml-8">
								<h4 className="font-bold text-3xl text-darkblue mb-8">
									Eight Members Of An Organised Criminal Group To Be Charged For Alleged Involvement
									In Illegal Gambling Activities And Other Offences
								</h4>
								<p>
									The Police have charged two men, aged 38 and 48, and will be charging another five
									men and one woman, aged between 25 and 65, for their alleged involvement in an
									organised criminal group believed to be engaged in illegal remote gambling
									activities.
								</p>
							</div>
						</div>
					</Link>
					<Link href="https://www.police.gov.sg/media-room/news/20231018_eighteen_motorists_to_be_charged_with_drink_driving">
						<div className="pb-10 lg:pb-0 lg:flex items-center border-b border-gray-300 mb-14">
							<div className="lg:w-[50rem] mb-20">
								<span className="block text-3xl mb-5">27 0ct 2023</span>
								<div className="h-[250px] w-[350px] bg-default bg-no-repeat bg-cover bg-center relative"></div>
							</div>
							<div className="ml-8">
								<h4 className="font-bold text-3xl text-darkblue mb-8">
									Eighteen Motorists To Be Charged With Drink Driving
								</h4>
								<p>
									Eighteen motorists, aged between 28 and 72, will be charged in court on 19 October
									2023 for drink driving offences.
								</p>
							</div>
						</div>
					</Link>
					<Link href="https://www.police.gov.sg/media-room/news/20231024_five_motorists_to_be_charged_with_driving_without_due_care">
						<div className="pb-10 lg:pb-0 lg:flex items-center border-b border-gray-300 mb-14">
							<div className="lg:w-[50rem]">
								<span className="block text-3xl mb-5">24 Oct 2023</span>
								<div className="h-[250px] w-[350px] bg-default bg-cover bg-center  relative"></div>
							</div>
							<div className="ml-8">
								<h4 className="font-bold text-3xl text-darkblue mb-8">
									Five Motorists To Be Charged With Driving Without Due Care Or Reasonable
									Consideration Causing Grievous Hurt
								</h4>
								<p>
									Five motorists, aged between 25 and 66, will be charged in court on 25 October
									2023. The five men will be charged with driving without due care or reasonable
									consideration causing grievous hurt.
								</p>
							</div>
						</div>
					</Link>
					<Link href="https://www.police.gov.sg/media-room/news/20231020_man_arrested_for_loanshark_harassment-2">
						<div className="pb-10 lg:pb-0 lg:flex items-center border-b border-gray-300 mb-14">
							<div className="lg:w-[50rem]">
								<span className="block text-3xl mb-5">20 Oct 2023</span>
								<div className="h-[250px] w-[350px] bg-loanshark bg-repeat bg-cover bg-center relative"></div>
							</div>
							<div className="ml-8">
								<h4 className="font-bold text-3xl text-darkblue mb-8">
									Man Arrested For Loanshark Harassment
								</h4>
								<p>
									The Police have arrested a 48-year-old man for his suspected involvement in a case
									of loanshark harassment.
								</p>
							</div>
						</div>
					</Link>
					<Link href="https://www.police.gov.sg/media-room/news/20231021_12_persons_arrested_for_suspected_involvement_in_banking_related_malware_scam_cases">
						<div className="pb-10 lg:pb-0 lg:flex items-center border-b border-gray-300 mb-14">
							<div className="lg:w-[50rem]">
								<span className="block text-3xl mb-5">21 Oct 2023</span>
								<div className="h-[250px] w-[350px] bg-default bg-cover bg-center  relative"></div>
							</div>
							<div className="ml-8">
								<h4 className="font-bold text-3xl text-darkblue mb-8">
									12 Persons Arrested For Suspected Involvement In Banking-Related Malware Scam
									Cases
								</h4>
								<p>
									A total of 11 men and one woman, aged between 17 and 40, have been arrested for
									their suspected involvement in the recent spate of banking-related malware scam
									cases, following an island-wide anti-scam enforcement operation conducted between
									9 and 20 October 2023.
								</p>
							</div>
						</div>
					</Link>
					<Link href="https://www.police.gov.sg/media-room/news/20231025_four_teenagers_arrested_for_theft_of_motorcycles">
						<div className="pb-10 lg:pb-0 lg:flex items-center border-b border-gray-300 mb-14">
							<div className="lg:w-[50rem]">
								<span className="block text-3xl mb-5">21 Oct 2023</span>
								<div className="h-[250px] w-[350px] bg-default bg-cover bg-center relative"></div>
							</div>
							<div className="ml-8">
								<h4 className="font-bold text-3xl text-darkblue mb-8">
									Four Teenagers Arrested For Theft Of Motorcycles
								</h4>
								<p>
									The Police have arrested four teenagers, aged between 17 and 19, for their
									suspected involvement in two cases of theft of motorcycles.
								</p>
							</div>
						</div>
					</Link>
					<Link href="https://www.police.gov.sg/media-room/news/20231019_director_of_singapore_registered_companies_charged_with_offences_under_the_companies_act">
						<div className="pb-10 lg:flex lg:pb-0 items-center border-b border-gray-300 mb-14">
							<div className="lg:w-[50rem]">
								<span className="block text-3xl mb-5">18 Oct 2023</span>
								<div className="h-[250px] w-[350px] bg-default bg-cover bg-center  relative"></div>
							</div>
							<div className="ml-8">
								<h4 className="font-bold text-3xl text-darkblue mb-8">
									Director Of Singapore-Registered Companies And Director Of Corporate Services
									Provider Charged With Offences Under The Companies Act
								</h4>
								<p>
									A 35-year-old man was charged with three counts under Section 157(1) punishable
									under Section 157(3)(b) of the companies act for failing to use reasonable
									diligence in the discharge of his duties as a director of three
									Singapore-registered companies.
								</p>
							</div>
						</div>
					</Link>
					<Link href="https://www.police.gov.sg/media-room/news/20231017_man_to_be_charged_for_involvement_in_series_of_harassment_cases">
						<div className="pb-10 lg:flex items- border-b border-gray-300 mb-14 lg:pb-0">
							<div className="lg:w-[50rem]">
								<span className="block text-3xl mb-5">21 Oct 2023</span>
								<div className="h-[250px] w-[350px] bg-default bg-cover bg-center   relative"></div>
							</div>
							<div className="ml-8">
								<h4 className="font-bold text-3xl text-darkblue mb-8">
									Man To Be Charged For Involvement In Series Of Harassment Cases
								</h4>
								<p>
									The Police will be charging a 29-year-old man for his suspected involvement in a
									series of harassment cases and for being uncooperative during police
									investigations.
								</p>
							</div>
						</div>
					</Link>
					<Link href="https://www.police.gov.sg/media-room/news/20231018_advisory_on_events_and_public_assemblies_in_relation_to_israel_hamas_conflict">
						<div className="pb-10 items- border-b border-gray-300 mb-14 lg:flex  lg:pb-0">
							<div className="lg:w-[50rem]">
								<span className="block text-3xl mb-5">14 Oct 2023</span>
								<div className="h-[250px] w-[350px] bg-default bg-cover bg-center   relative"></div>
							</div>
							<div className="ml-8">
								<h4 className="font-bold text-3xl text-darkblue mb-8">
									Advisory On Events And Public Assemblies In Relation To Israel-Hamas Conflict
								</h4>
								<p>
									The Police are aware of events and public assemblies being organised in relation
									to the Israel-Hamas conflict. The National Parks Board (NParks) has also received
									applications to use the Speakers’ Corner for events related to the Israel-Hamas
									conflict.
								</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
}
