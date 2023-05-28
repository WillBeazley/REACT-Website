import ProjectCard from "./ProjectCard";

import line from "../assets/line.svg";
import react from "../assets/react.svg";
import python from "../assets/python.svg";

export default function Projects(){
    return (
        <div id="projects" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">My Projects</h1>
            <p className="font-light text-gray-400">Here are the projects that I have contributed towards</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <ProjectCard name="FPL Machine Learning" completed="12 May 2023" desc="Using different Machine Learning algorithms 
                to determine predicted points for each premier league player each week. Training each position individually to find 
                the optimal algorithm. Vigirous testing and end results were documented through a report - 
                This project was my last year dissertation for my degree at Cardiff Universtiy" 
                image={python} link="https://github.com/WillBeazley/FPL-ML"/>
                <ProjectCard name="First REACT Website" completed="TBD" desc="This website was created using React and Tailwind CSS
                to showcase my skills and projects. This website is still a work in progress and will be updated as I contribute to more 
                projects" 
                image={react} link="https://github.com/WillBeazley/REACT-Website"/>
            </div>
            <img src={line} className="w-full mt-8 md:h-2" alt="line" />
        </div>
    )
}