/* eslint-disable @next/next/no-img-element */
const Features = () => {
	const features = [
		{
			image: "/assets/images/utilityape.png",
			name: "Engagement Bot",
			description:
				"Engage to earn, raid to earn twitter integration, item store, bank system, community quests, games, events, raffle system, and  future updates.",
			link: "#pricing",
		},
		{
			image: "/assets/images/utilityape.png",
			name: "Security Bot",
			description:
				"Pin verification system, OTP for high risk staff activities, bot kicker for spammers/scammers, customizable unverified user kicker and future updates.",
			link: "#pricing",
		},
		{
			image: "/assets/images/utilityape.png",
			name: "NFT Tools",
			description:
				"NFT floor price tracker, whitelist submission tools, NFT listings, NFT sales, token price tracking, holder verification, and more.",
			link: "#pricing",
		},
		{
			image: "/assets/images/utilityape.png",
			name: "Enterprise License",
			description:
				"Included engagement bot, security bot, NFT tools, and fully customizable additional bot features with mod support on bot support.",
			link: "#pricing",
		},
	];

	return (
		<section className="grid grid-cols-1 gap-4 pt-20 font-inter md:grid-cols-12">
			<div className="col-span-full text-center lg:col-span-6 lg:text-start">
				<div className="mb-8 text-lg">
					<span className="text-orange-500">#1 </span>
					<span className="">Leading Discord Growth Tools</span>
				</div>
				<h2 className="mb-9 text-4xl leading-relaxed">
					Over 100 clients in less
					<br />
					than 2 months of releasing.
				</h2>
			</div>
			<div className="col-span-full md:col-span-10 md:col-start-2 lg:col-span-6 2xl:col-span-5">
				<p className="rounded-3xl bg-gray-800 p-10 text-gray-400 ring-1 ring-gray-500">
					Set up our bot in less than 10 min after receiving twitter
					API. An average of <b>10x increase</b> in engagement and
					community size.
				</p>
			</div>
			{features.map((feature, idx) => {
				return (
					<div
						key={idx}
						className="col-span-full flex flex-col gap-6 rounded-3xl px-8 py-16 ring-indigo-500 transition duration-300 ease-in-out hover:shadow-2xl hover:ring-1 md:col-span-6 lg:col-span-3"
					>
						<img
							src={feature.image}
							alt="icon"
							width={64}
							height={64}
						/>
						<h3 className="underlined w-max text-xl">
							{feature.name}
						</h3>
						<p className="text-gray-400">{feature.description}</p>
						<a href={feature.link} className="mt-auto">
							Explore more &#129109;
						</a>
					</div>
				);
			})}
		</section>
	);
};

export default Features;
