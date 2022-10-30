/* eslint-disable @next/next/no-img-element */
const Raid = () => {
	return (
		<section className="mt-20 grid grid-cols-1 font-inter md:grid-cols-12">
			<div className=" col-span-full flex  h-full flex-col justify-center gap-4 bg-indigo-50 py-20 px-4 text-center ring-1 ring-indigo-200 lg:col-span-6 lg:text-start">
				<div className="mb-8 text-lg">
					<span className="text-orange-500"># Engagement </span>
					<span className="">bot</span>
				</div>
				<h2 className="text-4xl leading-relaxed">
					Raid-to-Earn Feature
				</h2>
				<p className="leading-loose text-gray-500">
					Twitter API integration makes it easy for users to get
					rewarded
					<br />
					for Twitter engagement Increases twitter engagement by over{" "}
					<b>30x</b>
				</p>
			</div>
			<div className="col-span-full w-full bg-indigo-500 ring-1  ring-indigo-500  lg:col-span-6">
				<img src="assets/svg/tweetstorm.svg" alt="illustration" />
			</div>
		</section>
	);
};

export default Raid;
