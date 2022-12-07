const Testimonials = () => {
	const list = [
		{
			client: "Bulls Head",
			content:
				"It's so so well explained and the preset tools are just insanely well made.",
		},
		{
			client: "Ninja Wallet",
			content:
				"...I'm impressed! I've been in web3 for over a year, and this is the best tool I've ever seen!",
		},
		{
			client: "Busy Boars",
			content:
				"In my eyes, you have the most advanced engagement tool currently on the market.",
		},
		{
			client: "Heavenland",
			content: "People are crazy with happy hours.. lmao best tool ever",
		},
	];

	const statList = [
		{ title: "visitors", stat: 866, percent: 43.9 },
		{ title: "communicators", stat: 386, percent: 62.2 },
		{ title: "members", stat: 773, percent: 44.2 },
		{ title: "new member retention", stat: "27.2%", percent: 307.8 },
	];

	return (
		<section id="testimonials" className="bg-transparent px-4 py-8 pt-16">
			<div className="container mx-auto flex flex-wrap">
				<p className="my-2 w-full text-center text-xl font-semibold leading-tight text-white">
					Stats and Client Feedback
				</p>
				<h2 className="my-2 w-full text-center text-3xl font-bold leading-tight text-white lg:text-5xl">
					Testimonials
				</h2>
				<p className="my-2 w-full text-center text-2xl leading-tight text-white">
					What they told us
				</p>
				<div className="mb-16 w-full">
					<div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>
				</div>
				<ul className="flex w-full flex-wrap justify-center">
					{list.map((item, idx) => {
						return (
							<li
								key={`testimonial-${idx}`}
								className="flex w-full max-w-xs flex-shrink flex-grow flex-col p-6 text-center md:w-1/2 xl:w-1/4"
							>
								<div className="h-full flex-1 rounded-3xl bg-gray-50 p-8 shadow transition duration-300 ease-in-out hover:bg-white hover:shadow-2xl">
									<p className="mb-auto text-start text-gray-600">
										<span className="text-lg font-bold text-indigo-500">
											“
										</span>
										{item.content}
										<span className="text-lg font-bold text-indigo-500">
											”
										</span>
									</p>
									<p className="mt-4 flex items-center justify-end text-sm font-bold text-indigo-500">
										~ {item.client}
									</p>
								</div>
							</li>
						);
					})}
				</ul>
				<ul className="flex w-full flex-wrap justify-center">
					{statList.map((item, idx) => {
						return (
							<li
								key={`stat-${idx}`}
								className="flex w-full max-w-xs flex-shrink flex-grow flex-col p-6 text-center md:w-1/2 xl:w-1/4"
							>
								<StatCard
									title={item.title}
									stat={item.stat}
									percent={item.percent}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

const StatCard = ({
	title,
	stat,
	percent,
}: {
	title: string;
	stat: string | number;
	percent: string | number;
}) => {
	return (
		<div className="flex h-full flex-col justify-center rounded-2xl bg-white p-4 shadow-lg dark:bg-gray-800">
			<div className="flex items-center">
				<p className="text-md uppercase text-black dark:text-white">
					weekly {title}
				</p>
			</div>
			<div className="flex flex-col justify-start">
				<p className="my-4 text-left text-4xl font-bold text-gray-700 dark:text-gray-100">
					{stat}
				</p>
				<div className="flex items-center text-sm text-green-500">
					<svg
						width="20"
						height="20"
						fill="currentColor"
						viewBox="0 0 1792 1792"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
					</svg>
					<span>{percent}% </span>
					<span className="text-gray-400">since last week</span>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
