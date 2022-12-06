/* eslint-disable @next/next/no-img-element */
const How = () => {
	return (
		<section className="grid grid-cols-1 gap-4 pt-20 font-inter lg:grid-cols-12">
			<div className="hidden lg:col-span-6 lg:block">
				<div className="relative h-full rounded-3xl rounded-tl-none rounded-bl-none bg-indigo-50 p-10 ring-1 ring-indigo-200">
					<img
						src="assets/svg/setup.svg"
						alt="illustration"
						className="absolute right-10 h-1/5"
					/>
					<img
						src="assets/svg/forms.svg"
						alt="illustration"
						className="absolute right-0 top-12 h-1/2"
					/>
					<img
						src="assets/svg/add_user.svg"
						alt="illustration"
						className="absolute right-[21rem] top-72 h-1/4"
					/>
					<img
						src="assets/svg/chat_bot.svg"
						alt="illustration"
						className="absolute right-2 bottom-10 h-1/4"
					/>
					<img
						src="assets/svg/app_data.svg"
						alt="illustration"
						className="absolute right-[22rem] bottom-10 h-1/3"
					/>
				</div>
			</div>
			<div className="col-span-full mx-auto max-w-3xl px-8 text-center lg:col-span-6 lg:mx-0 lg:text-start">
				<div className="mb-8 text-lg">
					<span className="text-orange-500"># How </span>
					<span className="">does it work?</span>
				</div>
				<h2 className="mb-9 text-4xl leading-relaxed">
					Apply in 15 seconds
					<br />
					and get started{" "}
					<span className="underlined inline-block w-max leading-none">
						today
					</span>
					!
				</h2>
				<List />
			</div>
		</section>
	);
};

const List = () => {
	const list = [
		{
			color: "bg-orange-50 ring-orange-200 text-orange-500",
			heading: "Connect your wallet and submit an application",
			content:
				"Log in via your wallet to submit an application. You will receive an invoice within 24 hours of your application being approved and your payment being processed.",
		},
		{
			color: "bg-green-50 ring-green-200 text-green-500",
			heading: "Get a personalized bot invite link",
			content:
				"After you application is approved you will be given a Discord bot invite link that is customizable for your server. You can set up all of the bot except the Twitter Raid feature which required the Twitter API “elevated” access application. The process of applying for the Twitter API can take up to 72 hours.",
		},
		{
			color: "bg-indigo-50 ring-indigo-200 text-indigo-500",
			heading: "Start setting up the Discord bot",
			content:
				"Once the bot is on your server, use our “Getting Started” documentation to customize the bot for your server or use our built-in quick setup command to get started right away.",
		},
	];

	return (
		<ul className="flex flex-col gap-4">
			{list.map((item, idx) => {
				return (
					<li key={idx} className="flex items-center">
						<span className="relative ml-4 grid bg-orange-50 ring-orange-200">
							<div
								className={`absolute h-12 rotate-45 place-self-center rounded-full py-8 px-5 ring-1 ${item.color}`}
							></div>
							<div
								className={`absolute place-self-center text-2xl font-bold ${item.color}`}
							>
								{idx + 1}
							</div>
						</span>
						<div className="rounded-xl p-8 pl-12 ring-gray-200 hover:ring-1">
							<h3 className="mb-4 text-2xl">{item.heading}</h3>
							<p className="text-gray-400">{item.content}</p>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default How;
