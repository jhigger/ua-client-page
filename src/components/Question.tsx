/* eslint-disable @next/next/no-img-element */
const Question = () => {
	return (
		<section className="mt-20 grid grid-cols-1 gap-4 rounded-3xl bg-indigo-50 py-16 px-4 font-inter md:grid-cols-12 lg:px-0">
			<div className="col-span-full hidden flex-col justify-center gap-4 lg:col-span-3 lg:flex">
				<img
					src="assets/svg/investor_update.svg"
					alt="illustration"
					className="w-full"
				/>
			</div>
			<div className="col-span-full text-center lg:col-span-6">
				<h2 className="mb-9 text-4xl leading-relaxed">
					Have any question
					<br />
					regarding our tools?
				</h2>
				<p className="mb-5">
					Create an application via <i>Start Free Trial</i>, or send
					us an email for us to reach out!
				</p>
				<form
					onSubmit={(e) => e.preventDefault()}
					className="relative flex items-center justify-center"
				>
					<input
						type="email"
						placeholder="Enter your email"
						className="h-16 w-full rounded-full border p-8 pr-40 text-gray-500 outline-none ring-1 ring-indigo-100 focus:border-indigo-600"
					/>
					<button className="absolute right-1 flex h-[85%] w-auto items-center rounded-full bg-indigo-600 px-5 py-3 text-white shadow-md outline-none ring-indigo-600 ring-offset-2 focus:shadow-none focus:ring-2 sm:mt-0 sm:ml-3">
						Get Started
					</button>
				</form>
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
