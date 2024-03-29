/* eslint-disable @next/next/no-img-element */
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { discordLink } from "../links";

const Raid = () => {
	return (
		<section className="mt-20 grid grid-cols-1 font-inter text-black md:grid-cols-12">
			<div className=" col-span-full flex h-full flex-col justify-center gap-4 bg-indigo-50 py-20 px-4 text-center ring-1 ring-indigo-200 lg:col-span-6 lg:text-start">
				<div className="mb-8 text-lg">
					<span className="text-orange-500"># Engagement </span>
					<span className="">bot</span>
				</div>
				<h2 className="text-4xl leading-relaxed">
					Raid-to-Earn Feature
				</h2>
				<p className="leading-loose text-gray-600">
					Twitter API integration makes it easy for users to get
					rewarded for Twitter engagement.
					<br />
					Increases Twitter engagement by over <b>30x</b>
				</p>
				<a href={discordLink} rel="noreferrer">
					<button className="my-8 mx-auto w-full max-w-xl transform rounded-full bg-black py-3 px-6 text-xl font-bold text-white shadow transition duration-75 ease-in-out hover:bg-white hover:text-black active:scale-75 lg:mx-0">
						Buy a Raid
					</button>
				</a>
			</div>
			<div className="col-span-full w-full bg-indigo-500 pt-4 ring-1 ring-indigo-500 lg:col-span-6">
				{/* <img src="assets/svg/tweetstorm.svg" alt="illustration" /> */}
				<h2 className="my-2 w-full text-center text-3xl font-bold leading-tight text-white lg:text-5xl">
					Pay To Raid
				</h2>
				<p className="my-2 w-full text-center text-2xl leading-tight text-white">
					See Previous Raids
				</p>
				<div className="flex w-full flex-col items-center justify-center py-4">
					<div className="w-full text-center md:max-w-xl">
						<TwitterTimelineEmbed
							sourceType="profile"
							screenName="ApeUtilityRaid"
							options={{ height: 500 }}
							placeholder="Loading..."
							userId={"1559396748677619713"}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Raid;
