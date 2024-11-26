import React from 'react'
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-4 border-blue-900 border-dotted bg-gradient-to-r from-green-500 via-purple-500 to-green-500 p-4 flex justify-between items-end">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <nav>
        <ul className="flex space-x-4">
            <li><Link href="projects">Project</Link></li>
            <li><Link href="about" >About Me</Link></li>
            <li><Link href="contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
