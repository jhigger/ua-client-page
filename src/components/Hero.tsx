/* eslint-disable @next/next/no-img-element */
const Hero = () => {
	return (
		<section className="grid grid-cols-1 place-items-center items-center gap-4 pt-10 font-inter md:grid-cols-7 lg:grid-cols-12 lg:pt-0">
			<div className="col-span-full text-center md:col-span-full lg:col-span-5 lg:text-start">
				<div className="mb-8 text-lg">
					<span className="text-orange-500">#1 </span>
					<span className="">
						Community growth tools in the space.
					</span>
				</div>
				<h2 className="mb-9 text-4xl leading-relaxed">
					Get Leading Engage-To-Earn and Social Web3{" "}
					<span className="underlined inline-block w-max leading-none">
						Tools
					</span>
				</h2>
				<p className="text-lg text-gray-500">
					Increase Discord growth by 10x.
					<br />
					100% managed via Discord with <b>no Web2</b>
					<br />
					applications needed, the first ever.
				</p>
			</div>
			<div className="col-span-full md:col-span-4">
				<img src="/assets/images/phone.png" alt="phone" />
			</div>
			<div className="col-span-full flex flex-col gap-12 md:col-span-3">
				<Card
					headingColor="text-green-500"
					heading="3"
					text="Bots released"
				/>
				<List />
				<Card
					headingColor="text-orange-500"
					heading="100+"
					text="Clients and counting..."
				/>
			</div>
		</section>
	);
};

const List = () => {
	const list = [
		{
			color: "bg-indigo-500",
			name: "Quick Setup",
		},
		{
			color: "bg-orange-500",
			name: "24/7 Support",
		},
		{
			color: "bg-green-500",
			name: "Constant Feature Updates",
		},
	];

	return (
		<ul className="w-max">
			{list.map((obj) => {
				return (
					<li className="mb-8" key={obj.name}>
						<span
							className={`mr-4 inline-flex h-4 w-4 items-center justify-center rounded-full ${obj.color} text-white`}
						>
							&#10004;
						</span>
						{obj.name}
					</li>
				);
			})}
		</ul>
	);
};

const Card = ({
	headingColor,
	heading,
	text,
}: {
	headingColor: string;
	heading: string;
	text: string;
}) => {
	return (
		<div className="w-max rounded-md bg-white p-5 shadow-lg ring-1 ring-gray-200 first:place-self-end">
			<div className={`mb-2 text-4xl ${headingColor}`}>{heading}</div>
			<div>{text}</div>
		</div>
	);
};

export default Hero;
