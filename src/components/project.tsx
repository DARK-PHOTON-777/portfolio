import Image from "next/image";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import type { IProject } from "./projects";

export default function Project({
	project,
	is_opened,
	callback,
}: {
	project: IProject;
	is_opened: boolean;
	callback: () => void;
}) {
	return (
		<button
			type="button"
			onClick={() => callback()}
			className={` m-4 rounded-lg overflow-hidden hover:scale-102 mt-4 shadow-xl ${!is_opened ? "max-w-md" : "w-full "}`}
		>
			<div
				className={`flex flex-row  flex-wrap shadow-xl ${!is_opened ? "h-full" : ""}`}
			>
				<div className="w-full max-w-md max-h-120 aspect-square relative bg-gray-700">
					{project.images && project.images.length > 0 && (
						<Image
							src={project.images[0].source} // Show first image as thumbnail
							alt={project.images[0].caption}
							fill
							style={{ objectFit: "cover" }}
							priority={project.featured} // Prioritize featured images
						/>
					)}
				</div>
				<div className="flex flex-col flex-1 text-center p-2">
					<h3 className="font-bold text-2xl mt-2">{project.name}</h3>
					<p className="mb-auto">{project.short_description}</p>
					<button
						type="button"
						className="mt-auto mx-auto [&>svg]:stroke-10 [&>svg]:mx-auto w-full md:w-min my-2 m-x-auto hover:scale-105"
					>
						{is_opened ? <SlArrowUp /> : <SlArrowDown />}
					</button>
				</div>
			</div>
			<div
				className={`overflow-hidden ${is_opened ? "max-h-[1000px]" : "max-h-0"}`}
			>
				<div className="p-4">
					<p className="whitespace-pre-line">
						{project.long_description}
					</p>
					{project.images && project.images.length > 0 && (
						<div className="flex flex-wrap justify-evenly items-center gap-6 mt-4">
							{project.images.map((img, _index) => (
								<div
									key={img.source}
									className="relative aspect-square w-full max-w-xs rounded-lg overflow-hidden bg-gray-700 shadow-xl"
								>
									<Image
										className="w-full"
										src={img.source}
										alt={img.caption}
										fill
										style={{ objectFit: "cover" }}
									/>
									<p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm p-2 text-center">
										{img.caption}
									</p>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</button>
	);
} //transition-[max-height] duration-500 ease-in-out
