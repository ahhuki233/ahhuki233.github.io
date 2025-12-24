import { useEffect, useRef } from 'react'
import './About.css'

const About = () => {
  const textBlocksRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    textBlocksRef.current.forEach((block) => {
      if (block) observer.observe(block)
    })

    return () => {
      textBlocksRef.current.forEach((block) => {
        if (block) observer.unobserve(block)
      })
    }
  }, [])

  return (
    <section className="about" id="about">
      <div className="about-grid-container">
        <div className="about-content">
          <h1 className="about-heading">Always exploring new ideas</h1>

          <div
            className="text-block fade-in"
            ref={(el) => (textBlocksRef.current[0] = el)}
          >
            <p>
              I'm a designer and developer with a passion for creating
              inclusive digital experiences. My work focuses on bridging the
              gap between beautiful design and functional, accessible code.
            </p>
            <p>
              With a background in both UX design and front-end development,
              I bring a unique perspective to every project. I believe that
              great products are built on empathy, research, and attention to
              detail.
            </p>
          </div>

          <div className="image-block">
            <div className="image-placeholder">
              <span>Your photo here</span>
            </div>
          </div>

          <div
            className="text-block fade-in"
            ref={(el) => (textBlocksRef.current[1] = el)}
          >
            <p>
              When I'm not designing or coding, you can find me exploring new
              places, trying new foods, and capturing moments through
              photography. I love discovering hidden cafes and local spots
              that tell unique stories.
            </p>
          </div>

          <div className="image-block">
            <div className="image-placeholder">
              <span>Lifestyle photo here</span>
            </div>
          </div>

          <div
            className="text-block fade-in"
            ref={(el) => (textBlocksRef.current[2] = el)}
          >
            <p>
              I'm always eager to learn new technologies and contribute to
              open-source projects. Whether it's experimenting with the latest
              design tools or diving into a new framework, I find joy in
              continuous growth and exploration.
            </p>
          </div>

          <div
            className="contact-block fade-in"
            ref={(el) => (textBlocksRef.current[3] = el)}
          >
            <h2>Stay in touch!</h2>
            <div className="contact-links">
              <a
                href="mailto:your.email@example.com"
                className="contact-link"
                aria-label="Send me an email"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="Visit my LinkedIn profile"
              >
                LinkedIn
              </a>
              <a
                href="/resume.pdf"
                className="contact-link"
                download
                aria-label="Download my resume"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
