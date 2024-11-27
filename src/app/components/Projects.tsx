'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Github, ExternalLink, Info, X } from 'lucide-react'
import { useState } from 'react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Project = {
  title: string;
  description: string;
  longDescription: string;
  imageUrl?: string;
  projectUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A brief description of your first project.",
    longDescription: "This is a longer description of your first project. It can include more details about the technologies used, the problem it solves, and your role in developing it.",
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Project Two",
    description: "A brief description of your second project.",
    longDescription: "This is a longer description of your second project. It can include more details about the technologies used, the problem it solves, and your role in developing it.",
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Project Three",
    description: "A brief description of your third project.",
    longDescription: "This is a longer description of your third project. It can include more details about the technologies used, the problem it solves, and your role in developing it.",
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
  const [showInfo, setShowInfo] = useState(false)

  return (
    <Card className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden relative">
      <CardHeader className="p-4">
        {project.imageUrl ? (
          <Image src={project.imageUrl} alt={project.title} width={300} height={200} className="w-full h-48 object-cover" />
        ) : (
          <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-gray-400 dark:text-gray-500">No image available</span>
          </div>
        )}
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-semibold mb-2 text-text-DEFAULT dark:text-text-dark">{project.title}</CardTitle>
        <CardDescription className="text-text-light dark:text-gray-300 mb-4">{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-wrap justify-between p-4 gap-2">
        <Button variant="outline" size="sm" className="flex-grow bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600" onClick={() => setShowInfo(true)}>
          <Info className="w-4 h-4 mr-2" />
          Info
        </Button>
        <Button variant="outline" size="sm" className="flex-grow bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600" asChild>
          <Link href={project.projectUrl} className="flex items-center justify-center">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Project
          </Link>
        </Button>
        <Button variant="outline" size="sm" className="flex-grow bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600" asChild>
          <Link href={project.githubUrl} className="flex items-center justify-center">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Link>
        </Button>
      </CardFooter>
      {showInfo && (
        <div className="absolute inset-0 bg-white dark:bg-gray-800 bg-opacity-95 dark:bg-opacity-95 flex items-center justify-center p-6 transition-all duration-300 ease-in-out">
          <Button 
            variant="ghost" 
            size="sm" 
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            onClick={() => setShowInfo(false)}
          >
            <X className="w-5 h-5" />
          </Button>
          <p className="text-sm text-gray-600 dark:text-gray-300">{project.longDescription}</p>
        </div>
      )}
    </Card>
  )
}