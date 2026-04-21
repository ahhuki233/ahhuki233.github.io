import { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [poppedCircles, setPoppedCircles] = useState({
    purple: false,
    orange: false,
    green: false
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleCircleClick = (color) => {
    if (poppedCircles[color]) return // Prevent double-clicks during animation

    setPoppedCircles(prev => ({ ...prev, [color]: true }))

    // Reset after animation completes
    setTimeout(() => {
      setPoppedCircles(prev => ({ ...prev, [color]: false }))
    }, 800)
  }

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
            {/* I create user-centered experiences through insight and intention. */}
            I turn user research into actionable design decisions through usability testing, data analysis, and iterative prototyping.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
          </div>
        </div>
        <div className="hero-decorative" aria-hidden="true">
          <div
            className={`decoration-circle purple ${poppedCircles.purple ? 'popped' : ''}`}
            onClick={() => handleCircleClick('purple')}
          ></div>
          <div
            className={`decoration-circle orange ${poppedCircles.orange ? 'popped' : ''}`}
            onClick={() => handleCircleClick('orange')}
          ></div>
          <div
            className={`decoration-circle green ${poppedCircles.green ? 'popped' : ''}`}
            onClick={() => handleCircleClick('green')}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
