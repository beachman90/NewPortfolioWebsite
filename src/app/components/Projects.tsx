import Image from 'next/image'
import Link from 'next/link'
import { Github, ExternalLink, Info } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Project = {
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A brief description of your first project.",
    longDescription: "This is a longer description of your first project. It can include more details about the technologies used, the problem it solves, and your role in developing it.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Project Two",
    description: "A brief description of your second project.",
    longDescription: "This is a longer description of your second project. It can include more details about the technologies used, the problem it solves, and your role in developing it.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Project Three",
    description: "A brief description of your third project.",
    longDescription: "This is a longer description of your third project. It can include more details about the technologies used, the problem it solves, and your role in developing it.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    projectUrl: "#",
    githubUrl: "#"
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-text-DEFAULT dark:text-text-dark">Mine Prosjekter</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <CardHeader className="p-4">
        <Image src={project.imageUrl} alt={project.title} width={300} height={200} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-semibold mb-2 text-text-DEFAULT dark:text-text-dark">{project.title}</CardTitle>
        <CardDescription className="text-text-light dark:text-gray-300 mb-4">{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between p-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="bg-gray-700 text-gray-200 hover:bg-gray-600 hover:text-white">
              <Info className="w-4 h-4 mr-2" />
              Info
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-800 text-gray-100">
            <DialogHeader>
              <DialogTitle className="text-blue-300">{project.title}</DialogTitle>
              <DialogDescription className="text-gray-300">{project.longDescription}</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Link href={project.projectUrl} className="text-primary-DEFAULT hover:text-primary-dark transition-colors duration-300">
          View Project
        </Link>
        <Link href={project.githubUrl} className="text-primary-DEFAULT hover:text-primary-dark transition-colors duration-300">
          GitHub
        </Link>
      </CardFooter>
    </Card>
  )
}