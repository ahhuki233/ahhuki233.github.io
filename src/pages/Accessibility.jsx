import { useEffect, useRef } from 'react'
import './Accessibility.css'

const Accessibility = () => {
  const blocksRef = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)

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
        rootMargin: '0px 0px -50px 0px',
      }
    )

    blocksRef.current.forEach((block) => {
      if (block) observer.observe(block)
    })

    return () => {
      blocksRef.current.forEach((block) => {
        if (block) observer.unobserve(block)
      })
    }
  }, [])

  return (
    <div className="accessibility-page">
      {/* Hero Section */}
      <section className="accessibility-hero">
        <div className="container">
          <h1 className="accessibility-title">Accessibility Statement</h1>
          <p className="accessibility-intro">
           I'm committed to making this portfolio accessible to everyone. As a UX researcher and designer, I believe inclusive design should be a standard, not an afterthought.
          </p>
        </div>
      </section>

      {/* Standards Section */}
      <section
        className="accessibility-section fade-in"
        ref={(el) => (blocksRef.current[0] = el)}
      >
        <div className="container">
          <h2 className="section-title">Standards</h2>
          <p className="section-text">
            This site is designed to conform to <a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noopener noreferrer" className="accessibility-link">Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</a>.
            I continuously work to improve accessibility and usability for all visitors.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="accessibility-section fade-in"
        ref={(el) => (blocksRef.current[1] = el)}
      >
        <div className="container">
          <h2 className="section-title">Features</h2>
          <ul className="features-list">
            <li
              className="feature-item fade-in"
              ref={(el) => (blocksRef.current[2] = el)}
            >
              <h3 className="feature-title">Keyboard Navigation</h3>
              <p>All interactive elements are fully accessible via keyboard. Use Tab to navigate and Enter/Space to activate.</p>
            </li>
            <li
              className="feature-item fade-in"
              ref={(el) => (blocksRef.current[3] = el)}
            >
              <h3 className="feature-title">Skip to Content</h3>
              <p>A skip link allows keyboard users to bypass navigation and jump directly to main content.</p>
            </li>
            <li
              className="feature-item fade-in"
              ref={(el) => (blocksRef.current[4] = el)}
            >
              <h3 className="feature-title">Reduced Motion</h3>
              <p>Animations respect the <code>prefers-reduced-motion</code> setting. If you've enabled this preference, decorative animations will be disabled.</p>
            </li>
            <li
              className="feature-item fade-in"
              ref={(el) => (blocksRef.current[5] = el)}
            >
              <h3 className="feature-title">Color Contrast</h3>
              <p>Text and interactive elements meet WCAG AA contrast requirements (minimum 4.5:1 for normal text, 3:1 for large text).</p>
            </li>
            <li
              className="feature-item fade-in"
              ref={(el) => (blocksRef.current[6] = el)}
            >
              <h3 className="feature-title">Focus Indicators</h3>
              <p>Clear, visible focus states help keyboard users track their position on the page.</p>
            </li>
            <li
              className="feature-item fade-in"
              ref={(el) => (blocksRef.current[7] = el)}
            >
              <h3 className="feature-title">Semantic HTML</h3>
              <p>Proper heading hierarchy, landmarks, and ARIA labels support screen reader navigation.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Feedback Section */}
      <section
        className="accessibility-section fade-in"
        ref={(el) => (blocksRef.current[8] = el)}
      >
        <div className="container">
          <h2 className="section-title">Feedback</h2>
          <p className="section-text">
            If you encounter any accessibility barriers or have suggestions for improvement,
            please reach out at{' '}
            <a href="mailto:xueeryuki.xu@mail.utoronto.ca" className="accessibility-link">
              xueeryuki.xu@mail.utoronto.ca
            </a>.
            I take accessibility feedback seriously and will work to address issues promptly.
          </p>
          <p className="last-updated">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </section>
    </div>
  )
}

export default Accessibility
