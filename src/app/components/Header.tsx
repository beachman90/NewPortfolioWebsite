export default function Header() {
    return (
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Min Portfolio</h1>
          <ul className="flex space-x-4">
            <li><a href="#projects" className="hover:text-blue-300">Prosjekter</a></li>
            <li><a href="#contact" className="hover:text-blue-300">Kontakt</a></li>
          </ul>
        </nav>
      </header>
    )
  }