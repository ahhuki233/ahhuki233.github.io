import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setSubmitStatus('sending')

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title">
              Let's <span className="highlight green">Connect</span>
            </h2>
            <p className="contact-description">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say
              hi, feel free to reach out!
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <h3 className="contact-method-title">Email</h3>
                <a
                  href="mailto:hello@example.com"
                  className="contact-link underline-animation"
                >
                  hello@example.com
                </a>
              </div>

              <div className="contact-method">
                <h3 className="contact-method-title">Social</h3>
                <ul className="social-links" role="list">
                  <li>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link underline-animation"
                      aria-label="Visit LinkedIn profile (opens in new tab)"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link underline-animation"
                      aria-label="Visit GitHub profile (opens in new tab)"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dribbble.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link underline-animation"
                      aria-label="Visit Dribbble profile (opens in new tab)"
                    >
                      Dribbble
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
          >
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name <span aria-label="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`form-input ${errors.name ? 'error' : ''}`}
                value={formData.name}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <span id="name-error" className="form-error" role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email <span aria-label="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
                value={formData.email}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <span id="email-error" className="form-error" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message <span aria-label="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className={`form-input ${errors.message ? 'error' : ''}`}
                value={formData.message}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <span id="message-error" className="form-error" role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary form-submit"
              disabled={submitStatus === 'sending'}
            >
              {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className="form-success" role="status" aria-live="polite">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
