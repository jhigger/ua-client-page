import { demoLink } from "../links";

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
				<p className="text-lg text-gray-400">
					Increase Discord growth by 10x.
					<br />
					Fully manageable on Discord.
					<br />
					<b>No Web2 application required.</b>
				</p>
				<DemoButton />
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
					heading=""
					text="Over 125 Clients"
				/>
			</div>
		</section>
	);
};

const List = () => {
	const list = [
		{
			color: "bg-indigo-500",
			name: "Supports all blockchains including ETH, SOL, and APTOS",
		},
		{
			color: "bg-orange-500",
			name: "Marketing support with a collaboration RT",
		},
		{
			color: "bg-green-500",
			name: "Updates pushed automatically",
		},
	];

	return (
		<ul className="w-full">
			{list.map((obj) => {
				return (
					<li className="mb-8 flex items-center gap-4" key={obj.name}>
						<span
							className={`inline-flex h-4 w-4 items-center justify-center rounded-full p-1 ${obj.color} text-white`}
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
		<div className="w-max rounded-md bg-gray-50 p-5 shadow-lg ring-1 ring-gray-200 first:place-self-end">
			<div className={`mb-2 text-4xl ${headingColor}`}>{heading}</div>
			<div className="text-black">{text}</div>
		</div>
	);
};

const DemoButton = () => {
	return (
		<a href={demoLink} target="_blank" rel="noreferrer">
			<button className="focus:shadow-outline mx-auto my-6 transform rounded-full rounded-tr-none bg-white py-4 px-8 font-bold text-gray-800 shadow-lg transition duration-75 ease-in-out hover:rounded-bl-none hover:rounded-tr-full hover:bg-black hover:text-white active:scale-75 lg:mx-0">
				Demo
			</button>
		</a>
	);
};

export default Hero;
