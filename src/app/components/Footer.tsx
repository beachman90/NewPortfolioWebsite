import Link from 'next/link'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background-light dark:bg-gray-800 text-text-light dark:text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Jan Inge Kirsebom Strandman. Alle rettigheter reservert.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="mailto:jistrandman@gmail.com" className="hover:text-primary-dark transition-colors duration-300">
              <span className="sr-only">Email</span>
              <Mail className="w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/jan-inge-kirsebom-strandman-531a9a262/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-dark transition-colors duration-300">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="https://github.com/beachman90" target="_blank" rel="noopener noreferrer" className="hover:text-primary-dark transition-colors duration-300">
              <span className="sr-only">GitHub</span>
              <Github className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}