import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: '/', label: 'Work', hash: '#projects' },
    { to: '/about', label: 'About' },
  ]

  const resumeLink = {
    href: 'https://drive.google.com/file/d/1ZkmUMAwO08Ppb7SkKpx5jCKhzM7OudJU/view?usp=sharing',
    label: 'Resume'
  }

  const handleLinkClick = (hash) => {
    setIsMenuOpen(false)
    if (hash && location.pathname === '/') {
      // If we're already on home page, scroll to section
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  const isLinkActive = (link) => {
    // Work is active on home page and case study pages
    if (link.label === 'Work') {
      return location.pathname === '/' || location.pathname.startsWith('/case-study')
    }
    // About is active on about page
    if (link.label === 'About') {
      return location.pathname === '/about'
    }
    // Contact is active on home page (but don't show as active to avoid confusion with Work)
    return false
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav container" aria-label="Main navigation">
        <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          <span aria-label="Home">Yuki Xu</span>
        </Link>

        <button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
          aria-label="Toggle navigation menu"
        >
          <span className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <ul
          id="nav-menu"
          className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
          role="list"
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className={`nav-link underline-animation ${isLinkActive(link) ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.hash)}
                aria-current={isLinkActive(link) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li key={resumeLink.label}>
            <a
              href={resumeLink.href}
              className="nav-link nav-link-external"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Resume (opens in new tab)"
            >
              {resumeLink.label}
              <span className="external-icon" aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
