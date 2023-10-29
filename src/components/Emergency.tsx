const Emergency = () => {
	return (
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
	);
};

export default Emergency;
