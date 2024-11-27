'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon } from 'lucide-react'

import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  if (!mounted) {
    return null
  }

  return (
    <header className="bg-background-light dark:bg-background-dark shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-text-DEFAULT dark:text-text-dark">
            Min Portfolio
          </Link>
          <nav className="hidden md:flex space-x-4 items-center">
            <NavLink href="/">Prosjekter</NavLink>
            <NavLink href="/about">Om Meg</NavLink>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-2"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4">
            <MobileNavLink href="/" onClick={toggleMenu}>Prosjekter</MobileNavLink>
            <MobileNavLink href="/about" onClick={toggleMenu}>Om Meg</MobileNavLink>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark')
                toggleMenu()
              }}
              className="mt-2"
            >
              {theme === 'dark' ? 'Lys modus' : 'Mørk modus'}
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-text-DEFAULT dark:text-text-dark hover:text-primary-DEFAULT dark:hover:text-primary-light transition-colors">
      {children}
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-text-DEFAULT dark:text-text-dark hover:text-primary-DEFAULT dark:hover:text-primary-light transition-colors py-2" onClick={onClick}>
      {children}
    </Link>
  )
}