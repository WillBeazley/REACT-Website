import CV from "../assets/CV.pdf";
import profile from "../assets/profile.jpeg";

const NavBar = () => {
  return (
    <div className="fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36">
      <div className="flex justify-between items-center text-white">
      <img src={profile} className="App-logo w-10 rounded-full" alt="logo" />
        <ul className="hidden md:flex">
          <li className="p-4">
            <a href="#home" className="hover:underline">
              About
            </a>
          </li>
          <li className="p-4">
            <a href="#skills" className="hover:underline">
              Skills
            </a>
          </li>
          <li className="p-4">
            <a href="#projects" className="hover:underline">
              My Projects
            </a>
          </li>
        </ul>
        <a
          href={CV}
          rel="noreferrer"
          target="_blank"
          className=" bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border border-4"
        >
          CV
        </a>
      </div>
    </div>
  );
};

export default NavBar;
