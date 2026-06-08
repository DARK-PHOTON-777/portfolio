import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="p-4 bg-black flex justify-right fixed bottom-0 left-0 w-full bg-navbar backdrop-blur-sm z-50 shadow-[0_-20px_25px_-5px_rgba(0,0,0,0.1)] justify-end space-x-6">
			<a
				target="_blank"
				href="https://www.linkedin.com/in/reno-warner"
				className="transition hover:scale-105"
				rel="noopener"
			>
				<FaLinkedinIn className="w-8 h-8" />
			</a>
			<a
				target="_blank"
				href="https://github.com/DARK-PHOTON-777"
				className="transition hover:scale-105"
				rel="noopener"
			>
				<FaGithub className="w-8 h-8" />
			</a>
		</footer>
	);
}
