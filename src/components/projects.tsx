import { useState } from "react";
import projects from "../../data/projects.json"; // Adjust path if needed
import type { IProject } from "./project";
import Project from "./project";

export type IProjects = IProject[];

export default function Projects() {
	const [opened, setIsOpen] = useState(-1);

	const featuredProjects = (projects.projects as IProjects).filter(
		(p) => p.featured,
	);
	const softwareProjects = projects.software as IProjects;

	const onOpen = (state: boolean, index: number) => {
		if (state === true) {
			setIsOpen(index);
		} else {
			setIsOpen(-1);
		}
	};

	return (
		<section id="projects" className="bg-primary-bg mb-22">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl md:text-5xl font-bold text-center lg:text-left">
					AI & SYSTEMS SOFTWARE
				</h2>
				<div className="flex flex-wrap justify-evenly items-stretch mt-4">
					{softwareProjects.map((t, index) => (
						<Project
							key={t.name}
							project={t}
							is_opened={false}
							callback={() => onOpen(index !== opened, index)}
						/>
					))}
				</div>
				<h2 className="text-4xl md:text-5xl font-bold text-center lg:text-left">
					HARDWARE & SYSTEMS ENGINEERING SECTION
				</h2>
				<div className="flex flex-wrap justify-evenly items-stretch mt-4">
					{featuredProjects.map((t, index) => (
						<Project
							key={t.name}
							project={t}
							is_opened={index === opened}
							callback={() => onOpen(index !== opened, index)}
						/>
					))}
				</div>

				{/* <h2 className="text-4xl md:text-5xl font-bold text-center mt-4 lg:text-left">ADDITIONAL PROJECTS</h2>
        <div className="flex flex-wrap justify-evenly items-stretch mt-4">
        {nonFeaturedProjects.map((t,index) => (
            <Project key={t.name} project={t} is_opened={index + 10 == opened} callback={() => onOpen(index + 10 != opened,index + 10)}/>
          ))}
        </div> */}
			</div>
		</section>
	);
}
