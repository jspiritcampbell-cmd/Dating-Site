'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  
  const isActive = (path) => pathname === path

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">❤</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Heartlink</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="/browse" active={isActive('/browse')}>Browse</NavLink>
            <NavLink href="/matches" active={isActive('/matches')}>Matches</NavLink>
            <NavLink href="/messages" active={isActive('/messages')}>Messages</NavLink>
            <NavLink href="/profile" active={isActive('/profile')}>Profile</NavLink>
          </div>

          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, active, children }) {
  return (
    <Link 
      href={href}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
        active 
          ? 'bg-primary-100 text-primary-700' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {children}
    </Link>
  )
}
