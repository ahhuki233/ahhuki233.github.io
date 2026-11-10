import { useState, useEffect } from 'react'
import './CaseStudySideNav.css'

const CaseStudySideNav = ({ sections }) => {
  const [activeId, setActiveId] = useState(sections[0]?.id)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-10% 0px -80% 0px' }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    const handleScroll = () => setVisible(window.scrollY > 400)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sections])

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      className={`cs-side-nav${visible ? ' cs-side-nav--visible' : ''}`}
      aria-label="Page sections"
    >
      <ul className="cs-side-nav__list">
        {sections.map(({ id, label }) => (
          <li key={id} className="cs-side-nav__item">
            <button
              onClick={() => handleClick(id)}
              className={`cs-side-nav__btn${activeId === id ? ' cs-side-nav__btn--active' : ''}`}
              aria-current={activeId === id ? 'true' : undefined}
            >
              <span className="cs-side-nav__dot" aria-hidden="true" />
              <span className="cs-side-nav__label">{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default CaseStudySideNav
