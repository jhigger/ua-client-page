const Pricing = () => {
	return (
		<section className="grid grid-cols-1 gap-4 pt-20 font-inter md:grid-cols-12">
			<div className="col-span-full text-center">
				<div className="mb-8 text-lg">
					<span className="text-orange-500"># Engage </span>
					<span className="">and Grow!</span>
				</div>
				<h2 className="mb-9 text-4xl leading-relaxed">
					See Utility Ape pricing below!
				</h2>
			</div>
			<Products />
		</section>
	);
};

const Products = () => {
	const products = [
		{
			product: "Engagement Bot",
			list: [
				"2 weeks free trial",
				"$49/month for servers with 1k – 5k members",
				"$99/month for servers with 5k – 10k members",
				"$149/month for servers with >10k members + $48 for every additional 10k members.",
			],
			link: "https://kairos-nextjs-solana.vercel.app/",
		},
		{
			product: "Security Bot",
			list: [
				"2 weeks free trial",
				"$19/month for servers with 1k – 5k members",
				"$29/month for servers with 5k – 10k members",
				"$39/month for servers with >10k members + $48.00 for every additional 10k members.",
			],
			link: "https://kairos-nextjs-solana.vercel.app/",
		},
		{
			product: "NFT Toolbox",
			list: [
				"NFT floor price tracker",
				"Community stats",
				"WL Submissions",
				"NFT Listings",
				"Token price tracking",
				"Holder Verification",
			],
			link: "https://kairos-nextjs-solana.vercel.app/",
		},
	];

	return (
		<ul
			className="col-span-full flex flex-wrap justify-center gap-8"
			id="pricing"
		>
			{products.map((item, idx) => {
				return (
					<li
						key={idx}
						className="group flex w-full flex-initial flex-col gap-6 rounded-xl px-8 py-16 shadow-xl ring-1 ring-indigo-100 transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white md:w-5/12 lg:flex-1"
					>
						<h3 className="underlined mb-4 w-max self-center text-2xl">
							{item.product}
						</h3>
						{item.list.map((text) => {
							return (
								<div
									key={text}
									className="flex items-center gap-4 self-center md:self-start"
								>
									<span className="text-green-500">
										&#10004;
									</span>
									<p className="text-gray-500 group-hover:text-white">
										{text}
									</p>
								</div>
							);
						})}
						<button className="mt-auto w-max self-center rounded bg-indigo-500 py-4 px-6 text-white group-hover:bg-indigo-400">
							<a
								href={item.link}
								target="_blank"
								rel="noreferrer"
							>
								Get Started
							</a>
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export default Pricing;
