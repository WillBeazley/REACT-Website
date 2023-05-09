

export default function Footer(){
  return (
    <div className="mt-4 bg-dark-200 text-white px-8 py-4 rounded">
      <ul className="text-center">
        <li><a href="#home" className="hover:underline">About</a></li>
        <li><a href="#skills" className="hover:underline">Skills</a></li>
        <li><a href="#honors" className="hover:underline">Honor & Awards</a></li>
        <li><a href="#certs" className="hover:underline">Certfications</a></li>
      </ul>

      <p className="text-sm font-light text-center">Copyright © 2023 William Beazley.</p>

    </div>
  )
}