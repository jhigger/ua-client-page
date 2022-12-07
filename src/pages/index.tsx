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
import Testimonials from "../components/Testimonials";
import Why from "../components/Why";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Utility APE | Client</title>
			</Head>

			<Navbar />
			<main className="min-h-screen bg-gray-900 py-4 text-white">
				<div className="container mx-auto px-4">
					<Hero />
					<Features />
					<Why />
				</div>
				<How />
				<div className="container mx-auto px-4">
					<Testimonials />
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
