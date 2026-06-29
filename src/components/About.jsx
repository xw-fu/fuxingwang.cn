import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <div className="profile-photo">
          <img
            src="/avatar.jpg"
            alt="Ryan Fu"
            className="profile-img"
          />
        </div>
        <div className="about-info">
          <h2 className="about-title">About Me</h2>
          <div className="about-text">
            <p>
              I'm the R&amp;D Director at E-Health Now, where I lead the
              smart-health-terminal product line — building the hardware + software stack that brings
              connected-health devices to people's homes.
            </p>
            <p>
              My work spans embedded firmware, mobile apps, and cloud services, with a focus on turning
              medical-grade measurement into something anyone can actually use at home. Before this, I
              spent years in fintech engineering at RightCapital, which is where I fell in love with
              shipping reliable, regulation-aware products at scale.
            </p>
            <p>
              When I'm not coding, you'll find me exploring the world of coffee and traditional Chinese
              tea, tinkering with antennas, or chasing my two daughters around the apartment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
