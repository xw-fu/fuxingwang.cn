import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#writing" className="nav-link">Writing</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
  )
}

export default Header
