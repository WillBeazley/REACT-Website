import { useState } from "react";
import code from "../assets/code.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import line from "../assets/line.svg";

const Home = () => {
  const [loaded, setLoaded] = useState(true);

  return (
    <>
      {loaded ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-black flex flex-col items-center justify-center">
          Loading...
        </div>
      ) : null}
      <div
        id="home"
        className="bg-dark-500 flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative"
      >
        <div className="md:w-3/6 md:p-4">
          <img
            className="rounded"
            data-aos="flip-right"
            data-aos-duration="1500"
            data-aos-offset="200"
            src={code}
            alt="profile"
            onLoad={() => setLoaded(false)}
          />
        </div>
        <div
          className="md:w-3/6"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="100"
        >
          <div className="flex flex-col w-full mt-8">
            <h1 className="text-xl text-gray-400">Hi, I'm</h1>
            <h1 className="text-2xl font-bold">William Beazley</h1>
            <p className="text-xl font-bold text-gray-300">
              Computer Science Student at Cardiff University
            </p>
            <p className="text-md font-light text-gray-400 ">
              I'm an enthusiastic and motivated self-learning in Information
              Technology. Interested in exploring Software Engineering and
              Data Analyst opportunities.
            </p>
          </div>

          <ul className="flex mt-2 gap-4 items-center">
            <li>
              <a
                href="https://github.com/WillBeazley"
              >
                <FontAwesomeIcon size="2xl" icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/william-beazley-614709224/"
              >
                <FontAwesomeIcon size="2xl" icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a
                href="mailto: williambeazley2001@gmail.com"
              >
                <FontAwesomeIcon size="2xl" icon={faEnvelope} />
              </a>
            </li>
          </ul>
        </div>
        <img
          src={line}
          className="w-full md:h-2 absolute bottom-0"
          alt="line"
        />
      </div>
    </>
  );
};

export default Home;
