import Image from "next/image";
import Link from "next/link";

import { links } from "./navbar";

export default function Hero() {
	return (
		<section className="flex flex-col md:flex-row md:min-h-screen max-w-4xl mx-auto justify-center items-center gap-4 p-6 pt-22">
			<div className="md:w-1/2 max-w-md aspect-square overflow-hidden border-4 border-black rounded-xl justify-center shadow-xl  bg-gray-700">
				<Image
					src="./profile.jpg"
					alt="Reno Warner Profile"
					width={1000}
					height={1000}
					className="w-full"
					priority
				/>
			</div>
			<div className="md:w-1/2 justify-center text-center md:text-left">
				<h1 className="text-4xl md:text-6xl font-extrabold mb-2">
					RENO WARNER
				</h1>
				<p className="text-2xl md:text-3xl font-bold">
					LLM Enabled Systems Engineer
				</p>
				<p className="max-w-2xl mt-2 text-lg md:text-xl mb-2">
					An innovative engineer solving complex, real-world problems
					by bridging high-performance physics-backed simulations with
					cutting-edge artificial intelligence. Specialized in
					developing serverless LLM applications, local edge machine
					learning inference engines in Rust/WASM, and
					high-reliability embedded systems.
				</p>
				<div className="flex justify-around flex-wrap [&>a]:inline-flex [&>a]:items-center [&>a]:justify-center [&>a]:rounded-lg [&>a]:border-4 [&>a]:my-2 [&>a]:border-black [&>a]:w-full [&>a]:md:w-6/16 [&>a]:transition [&>a]:hover:scale-105">
					<Link
						className="shadow-xl font-bold"
						href={links[1].href}
						target={links[1].target}
					>
						CONTACT
					</Link>
					<Link
						className="shadow-xl font-bold bg-black text-white"
						href={links[2].href}
						target={links[2].target}
					>
						RESUME
					</Link>
				</div>
			</div>
		</section>
	);
} //[&>a]:min-w-4xs
