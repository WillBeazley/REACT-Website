

export default function Footer(){
  return (
    <div className="mt-4 bg-dark-200 text-white px-8 py-4 rounded">
      <ul className="text-center">
        <li><a href="#home" className="hover:underline">About</a></li>
        <li><a href="#skills" className="hover:underline">Skills</a></li>
        <li><a href="#cprojects" className="hover:underline">My Projects</a></li>
      </ul>

      <p className="text-sm font-light text-center">Copyright © 2023 William Beazley.</p>

    </div>
  )
}