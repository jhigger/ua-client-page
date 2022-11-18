/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
	const [state, setState] = useState(false);

	const navigation = [
		{ title: "UA Home", path: "https://utilityape.com/" },
		{ title: "Demo", path: "https://discord.com/invite/hT3hYvdy" },
		{ title: "Discord", path: "https://discord.com/invite/utilityape" },
		{ title: "Twitter", path: "https://twitter.com/utilityapeNFT" },
	];

	return (
		<header className="sticky top-0 z-50 border-b-[1px] border-gray-200 drop-shadow-[0_0_60px_rgba(0,0,0,7%)]">
			<nav className="w-full border-b bg-white md:static md:border-0">
				<div className="mx-auto max-w-screen-xl items-center px-4 md:flex md:px-8">
					<div className="flex items-center justify-between py-3 md:block md:py-5">
						<Logo />
						<div className="md:hidden">
							<button
								className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
								onClick={() => setState(!state)}
							>
								{state ? <CloseIcon /> : <MenuIcon />}
							</button>
						</div>
					</div>
					<div
						className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
							state ? "block" : "hidden"
						}`}
					>
						<ul className="items-center justify-center gap-4 space-y-8 font-semibold md:flex md:space-x-6 md:space-y-0">
							{navigation.map((item, idx) => {
								return (
									<li
										key={idx}
										className="text-gray-600 hover:text-indigo-600"
									>
										<a
											href={item.path}
											target="_blank"
											rel="noreferrer"
										>
											{item.title}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
					<CTA />
				</div>
			</nav>
		</header>
	);
};

const Logo = () => {
	return (
		<Link href="/">
			<a>
				<img
					src="/assets/images/logo.png"
					width={120}
					height={50}
					alt="Utility Ape logo"
					className="invert"
				/>
			</a>
		</Link>
	);
};

const CTA = () => {
	return (
		<div className="mb-4 flex md:mb-0 md:inline-block">
			<a
				href="https://apply.utilityape.com/"
				target="_blank"
				rel="noreferrer"
				className="mx-auto w-full justify-center rounded-md bg-indigo-600 py-3 px-4 text-center text-white shadow hover:bg-indigo-700"
			>
				Start Free Trial
			</a>
		</div>
	);
};

const CloseIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fillRule="evenodd"
				d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

const MenuIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M4 8h16M4 16h16"
			/>
		</svg>
	);
};

export default Navbar;
