import { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            Hello, I'm Xueer (Yuki) Xu
          </h1>
          <p className="hero-subtitle">
            <span className="highlight orange">Insight-Driven Researcher</span> &{' '}
            <span className="highlight green">User-Centered Designer</span>
          </p>
          <p className="hero-description">
            I create user-centered experiences through insight and intention.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
          </div>
        </div>
        <div className="hero-decorative" aria-hidden="true">
          <div className="decoration-circle purple"></div>
          <div className="decoration-circle orange"></div>
          <div className="decoration-circle green"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
