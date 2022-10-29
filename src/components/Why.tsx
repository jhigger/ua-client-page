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
					from well known projects such as than 2 months of releasing.
				</h2>
				<p className="text-gray-500">
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
			name: "Automated Tools",
			contents: [
				"Incredibly easy to setup",
				"Effortless maintenance",
				"Self sufficient interface",
			],
		},
		{
			name: "Setup Support",
			contents: ["Efficient support", "Helpful staff", "Amazing guide"],
		},
		{
			name: "Minting Advantages",
			contents: [
				"Refresing to get such a personal touch.",
				"If you are going to use a passage.",
				"Lorem Ipsum generators on the tend to repeat.",
			],
		},
	];

	const handleSelect = (idx: number) => {
		setSelected(idx);
	};

	return (
		<div className="col-span-full my-8 grid gap-8 lg:col-span-6">
			<div className="row-span-1 flex w-full flex-wrap items-center justify-center gap-2 lg:justify-start">
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
			<ul className="row-span-6 flex flex-col justify-center gap-8 px-[20%] md:px-[25%] lg:px-[10%]">
				{tabs[selected]?.contents.map((content) => {
					return (
						<li key={content} className="flex items-center gap-2">
							<span
								className={`mr-4 inline-flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500 text-white`}
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
