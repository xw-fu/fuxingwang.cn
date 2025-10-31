import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="profile-photo">
          <img
            src="/avatar.jpg"
            alt="Ryan Fu"
            className="profile-img"
          />
        </div>
        <h1 className="hero-title">
          Ryan is building the future of finance
        </h1>
      </div>
    </section>
  )
}

export default Hero
