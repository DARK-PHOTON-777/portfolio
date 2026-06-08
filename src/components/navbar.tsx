export const links = [
	{ href: "#projects", value: "PROJECTS", target: "" },
	{ href: "mailto:reno.warner.777@gmail.com", value: "CONTACT", target: "" },
	{ href: "RESUME.pdf", value: "RESUME", target: "_blank" },
];

export default function Navbar() {
	return (
		<nav className="flex fixed top-0 left-0 w-full bg-navbar backdrop-blur-sm z-50 shadow-xl p-4 justify-between items-center">
			<a
				href="/"
				className="flex-none text-3xl font-extrabold underline decoration-transparent transition duration-300 hover:decoration-black hover:scale-105"
			>
				RENO WARNER
			</a>
			<div className="flex items-center space-x-6 invisible sm:visible h-8">
				{links.map((link) => (
					<a
						key={link.href}
						href={link.href}
						target={link.target}
						className="font-bold underline decoration-transparent transition duration-300 hover:decoration-black hover:scale-105"
					>
						{link.value}
					</a>
				))}
			</div>
		</nav>
	);
}
