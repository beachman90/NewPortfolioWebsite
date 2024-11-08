export default function Hero() {
    return (
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4 text-blue-300">Velkommen til Min Portfolio</h1>
          <p className="text-xl mb-8 text-gray-400">Jeg er en lidenskapelig utvikler som skaper fantastiske webopplevelser</p>
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Se Mitt Arbeid
          </a>
        </div>
      </section>
    )
  }