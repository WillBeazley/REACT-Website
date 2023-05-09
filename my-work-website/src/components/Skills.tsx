import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from './SkillCard';
import line from "../assets/line.svg";

import html from "../assets/html.svg";
import python from "../assets/python.svg";
import java from "../assets/java.svg";
import css from "../assets/css.svg";
import github from "../assets/github.svg";
import scikit from "../assets/scikitlearn.svg";
import mongodb from "../assets/mongodb.svg";



export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      };

    return (
        <div id="skills" className="mt-4 bg-dark-500 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                    <SkillCard name="Python" experience="4 years" img={python} />
                    <SkillCard name="Java" experience="2 years" img={java} />
                    <SkillCard name="HTML" experience="2 years" img={html} />
                    <SkillCard name="CSS" experience="2 years" img={css} />
                    <SkillCard name="GitHub" experience="2 years" img={github} />
                    <SkillCard name="Scikit-learn" experience="1 year" img={scikit} />
                    <SkillCard name="MongoDB" experience="1 year" img={mongodb} />
                </Slider>
            </div>
            <img src={line} className="w-full mt-8 md:h-2" alt="line" />
        </div>
    )
}