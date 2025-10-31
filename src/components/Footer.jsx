import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/xw-fu" target="_blank" rel="noopener noreferrer" className="social-link">
          GitHub
        </a>
        <a href="https://linkedin.com/in/xw-fu" target="_blank" rel="noopener noreferrer" className="social-link">
          LinkedIn
        </a>
      </div>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Ryan Fu. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
