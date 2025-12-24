import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import CaseStudyYumGo from './pages/CaseStudyYumGo'
import CaseStudyKDS from './pages/CaseStudyKDS'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <Router>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/case-study/yumgo" element={<CaseStudyYumGo />} />
          <Route path="/case-study/kds" element={<CaseStudyKDS />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
