import Image from "next/image";

export default function NewsList() {
	return (
		<section className="max-w-[1200px] mx-auto my-24">
			<div className="flex justify-between items-start">
				<div className=" bg-[#f5f5f9] px-10 py-10 w-[25%] mr-32">
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
				<div className="w-[70%]">
					<div className="flex items-center  border-b border-gray-300 mb-14">
						<div className="w-[50rem] mb-20">
							<span className="block text-3xl mb-5">27 0ct 2023</span>
							<div className="h-[250px] w-[350px] bg-default bg-no-repeat bg-cover bg-center relative"></div>
						</div>
						<div className="ml-8">
							<h4 className="font-bold text-3xl text-darkblue mb-8">
								124 Persons Investigated In Latest Unlicensed Moneylending Suppression Operation
							</h4>
							<p>
								The Police are investigating 124 persons, aged between 17 and 69, for their
								suspected involvement in unlicensed moneylending activities, following an unlicensed
								moneylending suppression operation conducted between 19 and 25 October 2023.
							</p>
						</div>
					</div>
					<div className="flex items-center border-b border-gray-300 mb-14">
						<div className="w-[50rem] mb-20">
							<span className="block text-3xl mb-5">27 0ct 2023</span>
							<div className="h-[250px] w-[350px] bg-default bg-no-repeat bg-cover bg-center relative"></div>
						</div>
						<div className="ml-8">
							<h4 className="font-bold text-3xl text-darkblue mb-8">
								Man Arrested For Snatch Theft
							</h4>
							<p>
								The Police have arrested a 30-year-old man for his suspected involvement in a case
								of snatch theft.
							</p>
						</div>
					</div>
					<div className="flex items-center border-b border-gray-300 mb-14">
						<div className="w-[50rem]">
							<span className="block text-3xl mb-5">24 Oct 2023</span>
							<div className="h-[250px] w-[350px] bg-default bg-cover bg-center  relative"></div>
						</div>
						<div className="ml-8">
							<h4 className="font-bold text-3xl text-darkblue mb-8">
								Five Motorists To Be Charged With Driving Without Due Care Or Reasonable
								Consideration Causing Grievous Hurt
							</h4>
							<p>
								Five motorists, aged between 25 and 66, will be charged in court on 25 October 2023.
								The five men will be charged with driving without due care or reasonable
								consideration causing grievous hurt.
							</p>
						</div>
					</div>
					<div className="flex items-center border-b border-gray-300 mb-14">
						<div className="w-[50rem]">
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

					<div className="flex items-center border-b border-gray-300 mb-14">
						<div className="w-[50rem]">
							<span className="block text-3xl mb-5">21 Oct 2023</span>
							<div className="h-[250px] w-[350px] bg-default bg-cover bg-center  relative"></div>
						</div>
						<div className="ml-8">
							<h4 className="font-bold text-3xl text-darkblue mb-8">
								12 Persons Arrested For Suspected Involvement In Banking-Related Malware Scam Cases
							</h4>
							<p>
								A total of 11 men and one woman, aged between 17 and 40, have been arrested for
								their suspected involvement in the recent spate of banking-related malware scam
								cases, following an island-wide anti-scam enforcement operation conducted between 9
								and 20 October 2023.
							</p>
						</div>
					</div>
					<div className="flex items-center border-b border-gray-300 mb-14">
						<div className="w-[50rem]">
							<span className="block text-3xl mb-5">21 Oct 2023</span>
							<div className="h-[250px] w-[350px] bg-default bg-cover bg-center relative"></div>
						</div>
						<div className="ml-8">
							<h4 className="font-bold text-3xl text-darkblue mb-8">
								Four Teenagers Arrested For Theft Of Motorcycles
							</h4>
							<p>
								The Police have arrested four teenagers, aged between 17 and 19, for their suspected
								involvement in two cases of theft of motorcycles.
							</p>
						</div>
					</div>
					<div className="flex items-center border-b border-gray-300 mb-14">
						<div className="w-[50rem]">
							<span className="block text-3xl mb-5">18 Oct 2023</span>
							<div className="h-[250px] w-[350px] bg-default bg-cover bg-center  relative"></div>
						</div>
						<div className="ml-8">
							<h4 className="font-bold text-3xl text-darkblue mb-8">
								Man To Be Charged For Involvement In Series Of Harassment Cases
							</h4>
							<p>
								The Police have arrested four teenagers, aged between 17 and 19, for their suspected
								involvement in two cases of theft of motorcycles.
							</p>
						</div>
					</div>
					<div className="flex items- border-b border-gray-300 mb-14">
						<div className="w-[50rem]">
							<span className="block text-3xl mb-5">21 Oct 2023</span>
							<div className="h-[250px] w-[350px] bg-default bg-cover bg-center   relative"></div>
						</div>
						<div className="ml-8">
							<h4 className="font-bold text-3xl text-darkblue mb-8">
								Man Arrested For Housebreaking And Theft
							</h4>
							<p>
								The Police have arrested a 50-year-old man for his suspected involvement in a case
								of housebreaking and theft.
							</p>
						</div>
					</div>

					<div className="flex items- border-b border-gray-300 mb-14">
						<div className="w-[50rem]">
							<span className="block text-3xl mb-5">14 Oct 2023</span>
							<div className="h-[250px] w-[350px] bg-default bg-cover bg-center   relative"></div>
						</div>
						<div className="ml-8">
							<h4 className="font-bold text-3xl text-darkblue mb-8">
								13 Persons Under Investigation For Fraudulent Registration Of Postpaid Sim Cards In
								Island-Wide Operation Targeting Handphone Shops
							</h4>
							<p>
								In a two-day island-wide operation conducted on 12 and 13 October 2023, officers
								from the Anti-Scam Command conducted simultaneous raids targeting eight handphone
								shops located at Yishun, Ang Mo Kio, Woodlands, Admiralty, Beach Road, Selegie Road
								and Indus Road.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
