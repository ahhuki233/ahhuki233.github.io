import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <p className="footer-text">
              Designed & coded with accessibility in mind
            </p>
            <p className="footer-copyright">
              © {currentYear} Xueer (Yuki) Xu. All rights reserved.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <ul className="footer-links" role="list">
              <li>
                <a
                  href="https://www.linkedin.com/in/xueer-yuki-xu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  aria-label="LinkedIn (opens in new tab)"
                >
                  LinkedIn
                </a>
              </li>
              {/* <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  aria-label="GitHub (opens in new tab)"
                >
                  GitHub
                </a>
              </li> */}
              {/* <li>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  aria-label="Dribbble (opens in new tab)"
                >
                  Dribbble
                </a>
              </li> */}
              <li>
                <a
                  href="mailto:xueeryuki.xu@mail.utoronto.ca"
                  className="footer-link"
                  aria-label="Send email"
                >
                  Email
                </a>
              </li>
            </ul>
          </nav>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="back-to-top"
            aria-label="Scroll back to top"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
