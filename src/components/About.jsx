import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-text">
        <p>
          I'm a software engineer working at a financial planning SaaS company in Beijing, China.
          I'm passionate about creating robust, scalable solutions that help people manage their
          financial futures.
        </p>
        <p>
          My work combines technical expertise with a deep understanding of the financial services
          industry, allowing me to bridge the gap between complex financial concepts and user-friendly
          software solutions.
        </p>
        <p>
          When I'm not coding, you'll find me exploring the world of coffee and traditional Chinese
          tea, or connecting with fellow amateur radio operators around the globe.
        </p>
      </div>
    </section>
  )
}

export default About
