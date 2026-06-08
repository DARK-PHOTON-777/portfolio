import { Montserrat } from "next/font/google";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<div className={montserrat.className}>
			<Navbar />
			<main>
				<Hero />
				<Projects />
			</main>
			<Footer />
		</div>
	);
}
