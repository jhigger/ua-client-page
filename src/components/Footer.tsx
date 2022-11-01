/* eslint-disable @next/next/no-img-element */
import { FaTwitter, FaDiscord } from "react-icons/fa";

const Footer = () => {
	const iconLinks = [
		{
			icon: <FaTwitter />,
			link: "https://twitter.com/utilityapeNFT",
		},
		{
			icon: <FaDiscord />,
			link: "https://discord.com/invite/utilityape",
		},
	];

	return (
		<footer className="max-w-screen mt-32 border-t-2 border-gray-200 bg-white px-4 py-5 text-gray-500 drop-shadow-[0_0_60px_rgba(0,0,0,7%)]">
			<div className="container mx-auto">
				<div className="mx-auto -mt-14 max-w-max rounded bg-white py-4 px-8 ring-1 ring-gray-200">
					<img
						src="assets/images/logo.png"
						className="invert"
						alt="logo"
					/>
				</div>
				<div className="mt-8 items-center justify-between sm:flex">
					<div className="mt-4 sm:mt-0">
						&copy; 2022 Utility Ape All rights reserved.
					</div>
					<div className="mt-6 sm:mt-0">
						<ul className="flex items-center space-x-4">
							{iconLinks.map((item, idx) => {
								return (
									<li
										key={idx}
										className="flex h-10 w-10 items-center justify-center rounded-full border"
									>
										<a href={item.link} rel="noreferrer">
											{item.icon}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
