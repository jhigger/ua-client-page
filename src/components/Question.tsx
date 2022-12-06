/* eslint-disable @next/next/no-img-element */
const Question = () => {
	return (
		<section className="my-20 grid grid-cols-1 gap-4 rounded-3xl bg-indigo-50 py-16 px-4 font-inter md:grid-cols-12 lg:px-0">
			<div className="col-span-full hidden flex-col justify-center gap-4 lg:col-span-3 lg:flex">
				<img
					src="assets/svg/investor_update.svg"
					alt="illustration"
					className="w-full"
				/>
			</div>
			<div className="col-span-full text-center text-black lg:col-span-6">
				<h2 className="mb-9 text-4xl leading-relaxed">
					Have any question
					<br />
					regarding our{" "}
					<span className="underlined inline-block w-max leading-none">
						tools
					</span>
					?
				</h2>
				<p className="mb-5">
					Email us or create a ticket on our discord server for
					immediate support!
				</p>
				<button className="rounded-full bg-indigo-600 px-5 py-3 text-white shadow-md outline-none ring-indigo-600 ring-offset-2 hover:bg-indigo-500 focus:shadow-none focus:ring-2 active:bg-indigo-700 sm:mt-0 sm:ml-3">
					<a
						href="https://discord.com/invite/utilityape"
						target="_blank"
						rel="noreferrer"
					>
						Join Our Discord Community
					</a>
				</button>
			</div>
			<div className="col-span-full hidden flex-col justify-center gap-4 lg:col-span-3 lg:flex">
				<img
					src="assets/svg/percentages.svg"
					alt="illustration"
					className="w-full"
				/>
			</div>
		</section>
	);
};

export default Question;
