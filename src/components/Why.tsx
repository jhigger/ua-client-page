import { useState } from "react";

const Why = () => {
	return (
		<section className="grid grid-cols-1 gap-8 pt-20 font-inter md:grid-cols-12">
			<div className="col-span-full text-center lg:col-span-6 lg:text-start">
				<div className="mb-8 text-lg">
					<span className="text-orange-500"># Why </span>
					<span className="">Choose UA?</span>
				</div>
				<h2 className="mb-9 text-4xl leading-relaxed">
					We have the most competitive prices with reputable feedback
					from well known projects such as{" "}
					<span className="underlined inline-block w-max font-bold leading-none">
						Trippin Apes.
					</span>
				</h2>
				<p className="text-gray-400">
					We have onboarded one of best projects in the price
					including Infected Mob, Trippin Ape Tribe, Primates,
					Psycatz, Busy Boarz, and more!
				</p>
			</div>
			<Tabs />
		</section>
	);
};

const Tabs = () => {
	const [selected, setSelected] = useState(0);
	const tabs = [
		{
			name: "Engage-To-Earn",
			contents: [
				"Allows users to easily like, RT, comment, and tweet to get rewarded",
				"Bank system allows you to reward your holders/certain roles based on % earnedEffortless maintenance",
				"Fully customizable engage system, can add or remove features such as games and coin flips",
				"Additional features always added, most recent is comment attack and raffle system integrated with the feature",
			],
		},
		{
			name: "Security Tools",
			contents: [
				"Allows you to keep your server safe with a simple verification system that can't be bypassed by bots",
				"For sections such as announcements, OTC requirements to avoid hacks",
				"Kick bots and spammers with a click of a button using our bot kicker, customizable",
				"Additional security features implemented to keep servers safe",
			],
		},
		{
			name: "NFT Tools",
			contents: [
				"Price tracker, NFT listings, sales, and traditional trackers",
				"Holder verification system customizable",
				"Whitelist submission tool",
				"Additional implementational for NFT tools as clients request",
			],
		},
	];

	const handleSelect = (idx: number) => {
		setSelected(idx);
	};

	return (
		<div className="col-span-full grid gap-8 lg:col-span-6">
			<div className="row-span-1 flex w-full flex-wrap items-center justify-center gap-2">
				{tabs.map((tab, idx) => {
					const color =
						selected === idx
							? "bg-indigo-500 text-white"
							: "bg-white text-black hover:bg-indigo-50";
					return (
						<button
							key={tab.name}
							onClick={() => handleSelect(idx)}
							type="button"
							className={`mr-2 mb-2 w-max rounded-full px-5 py-3 text-center text-sm font-medium text-white shadow-lg ring-1 ring-indigo-50 ${color}`}
						>
							{tab.name}
						</button>
					);
				})}
			</div>
			<ul className="row-span-6 flex flex-col justify-center gap-8 px-[15%] md:px-[20%] lg:px-[5%]">
				{tabs[selected]?.contents.map((content) => {
					return (
						<li key={content} className="flex items-center gap-4">
							<span
								className={`inline-flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500 p-1 text-white`}
							>
								&#10004;
							</span>
							{content}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Why;
