import React, { useState, useEffect } from 'react'
import './Hero.css'

function Hero() {
  const words = ['creating', 'lifting', 'having fun', 'family bonding']
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000) // Change word every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <div className="title-line">Ryan is</div>
          <div className="rotating-word" data-index={currentWord} key={currentWord}>{words[currentWord]}</div>
        </h1>
      </div>
    </section>
  )
}

export default Hero
