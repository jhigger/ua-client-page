const Pricing = () => {
	return (
		<section className="grid grid-cols-1 gap-4 pt-20 font-inter md:grid-cols-12">
			<div className="col-span-full text-center">
				<div className="mb-8 text-lg">
					<span className="text-orange-500"># Engage </span>
					<span className="">and Grow!</span>
				</div>
				<h2 className="mb-9 text-4xl leading-relaxed">
					See{" "}
					<span className="underlined inline-block w-max leading-none">
						Utility Ape
					</span>{" "}
					pricing below!
				</h2>
				<p className="mx-auto max-w-xl rounded-3xl bg-gray-50 p-4 text-center text-gray-500 ring-1 ring-gray-500">
					Buy a GEN 1, GEN 2, or Pixel UA to get a Discount.{" "}
					<a
						href="https://kairos-ua-holders-page.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-indigo-600 underline"
					>
						Learn more
					</a>
				</p>
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
				"$60/mo for servers with less than or equal to 1k members",
				"$100/mo for servers with more than 1k members",
				"$200/mo for servers with more than 5k members",
				"$300/mo for servers with more than 10k members + $100/mo for every additional 10k members.",
			],
			link: "https://kairos-nextjs-solana.vercel.app/",
		},
		{
			product: "Security Bot",
			list: [
				"$40/mo for servers with less than or equal to 1k members",
				"$60/mo for servers with more than 1k members",
				"$80/mo for servers with more than 5k members",
				"$100/mo for servers with more than 10k members + $40/mo for every additional 10k members.",
			],
			link: "https://kairos-nextjs-solana.vercel.app/",
		},
		{
			product: "NFT Toolbox",
			list: ["$100/mo", "Add-on to Engagement or Security Bots"],
			link: "https://kairos-nextjs-solana.vercel.app/",
		},
		{
			product: "Enterprise",
			list: [
				"Starting price is $700/mo",
				"Please contact SALES@UTILITYAPE.COM to discuss a customized solution",
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
