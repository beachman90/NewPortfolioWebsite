"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-background-light dark:bg-gray-800 text-text-DEFAULT dark:text-white p-4 relative z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Min Portfolio</h1>
        
        {/* Hamburger menu for mobile */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-background-DEFAULT dark:hover:bg-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><Link href="#projects" className="hover:text-primary-dark dark:hover:text-blue-300">Prosjekter</Link></li>
            <li><Link href="#contact" className="hover:text-primary-dark dark:hover:text-blue-300">Kontakt</Link></li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-100 dark:bg-gray-800 p-4 shadow-md">
          <ul className="flex flex-col space-y-2">
            <li><Link href="#projects" className="block hover:text-primary-dark dark:hover:text-blue-300" onClick={toggleMenu}>Prosjekter</Link></li>
            <li><Link href="#contact" className="block hover:text-primary-dark dark:hover:text-blue-300" onClick={toggleMenu}>Kontakt</Link></li>
          </ul>
          <div className="mt-4">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className="p-2 rounded-md hover:ring-2 hover:ring-primary-light dark:hover:ring-gray-300"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle dark mode"
    >
      {theme === 'light' ? (
        <MoonIcon className="h-5 w-5 text-primary-dark" />
      ) : (
        <SunIcon className="h-5 w-5 text-yellow-500" />
      )}
    </button>
  )
}