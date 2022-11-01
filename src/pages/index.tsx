import type { NextPage } from "next";
import Head from "next/head";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import How from "../components/How";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Question from "../components/Question";
import Raid from "../components/Raid";
import Why from "../components/Why";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Utility Ape</title>
				<meta
					name="description"
					content="Leading Engage-To-Earn and Social Web3 Tools"
				/>
				<link rel="icon" href="assets/images/utilityape.png" />
			</Head>

			<Navbar />
			<main className="min-h-screen py-4">
				<div className="container mx-auto px-4">
					<Hero />
					<Features />
					<Why />
				</div>
				<How />
				<div className="container mx-auto px-4">
					<Raid />
					<Pricing />
					<Question />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Home;
