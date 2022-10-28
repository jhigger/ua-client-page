/* eslint-disable @next/next/no-img-element */
const Hero = () => {
	return (
		<section className="grid grid-cols-1 place-items-center items-center gap-4 pt-10 font-inter md:grid-cols-7 lg:grid-cols-12 lg:pt-0">
			<div className="col-span-4 w-full text-center md:col-span-7 lg:col-span-5 lg:text-start">
				<div className="mb-8 text-lg">
					<span className="text-orange-500">#1 </span>
					<span className="">
						Community growth tools in the space.
					</span>
				</div>
				<h3 className="mb-9 text-4xl">
					Get Leading Engage-To-Earn and Social Web3 Tools
				</h3>
				<p className="text-lg text-gray-500">
					Increase Discord growth by 10x.
					<br />
					100% managed via Discord with <b>no Web2</b>
					<br />
					applications needed, the first ever.
				</p>
			</div>
			<div className="col-span-4 w-full px-4">
				<img src="/assets/images/phone.png" alt="phone" />
			</div>
			<div className="col-span-3 flex w-full flex-col gap-12 px-4">
				<Card
					headingColor="text-green-500"
					heading="3"
					text="Bots released"
					end
				/>
				<ul className="w-max">
					<li className="mb-8">
						<span className="in mr-4 inline-flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500 text-white">
							&#10004;
						</span>
						Quick Setup
					</li>
					<li className="mb-8">
						<span className="in mr-4 inline-flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-white">
							&#10004;
						</span>
						<span>24/7 Support</span>
					</li>
					<li className="">
						<span className="in mr-4 inline-flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-white">
							&#10004;
						</span>
						<span>Constant Feature Updates</span>
					</li>
				</ul>
				<Card
					headingColor="text-orange-500"
					heading="100+"
					text="Clients and counting..."
				/>
			</div>
		</section>
	);
};

const Card = ({
	headingColor,
	heading,
	text,
	end,
}: {
	headingColor: string;
	heading: string;
	text: string;
	end?: boolean;
}) => {
	const placeEnd = end ? "place-self-end" : "";
	return (
		<div
			className={`w-max rounded-md bg-white p-5 shadow-lg ring-1 ring-gray-200 ${placeEnd}`}
		>
			<div className={`mb-2 text-4xl ${headingColor}`}>{heading}</div>
			<div>{text}</div>
		</div>
	);
};

export default Hero;
