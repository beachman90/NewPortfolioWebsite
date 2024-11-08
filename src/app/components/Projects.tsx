import Image from 'next/image'

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Prosjekt En",
    description: "En kort beskrivelse av ditt første prosjekt.",
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 2,
    title: "Prosjekt To",
    description: "En kort beskrivelse av ditt andre prosjekt.",
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 3,
    title: "Prosjekt Tre",
    description: "En kort beskrivelse av ditt tredje prosjekt.",
    imageUrl: "/placeholder.svg?height=200&width=300"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Mine Prosjekter</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <Image src={project.imageUrl} alt={project.title} width={300} height={200} className="w-full" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-300">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}