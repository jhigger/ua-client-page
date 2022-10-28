import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Create T3 App</title>
				<meta name="description" content="Generated by create-t3-app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />
			<main className="container mx-auto min-h-screen px-4">
				<Hero />
			</main>
		</>
	);
};

export default Home;
