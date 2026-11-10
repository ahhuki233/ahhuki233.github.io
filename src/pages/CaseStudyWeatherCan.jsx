import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CaseStudyWeatherCan.css'
import CaseStudySideNav from '../components/CaseStudySideNav'
import weathercanFirstBeta from '../assets/images/weathercan-first-beta.png'
import weathercanRevisedDesign from '../assets/images/weathercan-revised-design.png'
import weathercanSecondBeta from '../assets/images/weathercan-second-beta.png'
import weathercanWeatherStory from '../assets/images/weathercan-weather-story.png'

const CaseStudyWeatherCan = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sections = [
    { id: 'at-a-glance',      label: 'At a Glance' },
    { id: 'background',       label: 'Background' },
    { id: 'first-beta',       label: 'First Beta' },
    { id: 'feedback',         label: 'User Feedback' },
    { id: 'design-response',  label: 'Design Response' },
    { id: 'weather-story',    label: 'Weather Story' },
    { id: 'next-steps',       label: 'Next Steps' },
  ]

  return (
    <div className="case-study case-study-weathercan">
      <CaseStudySideNav sections={sections} />
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="container">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator" aria-hidden="true">/</span>
          <span className="breadcrumb-current" aria-current="page">WeatherCAN &amp; weather.gc.ca Case Study</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="case-study-hero" aria-labelledby="case-study-title">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <span className="wc-in-progress-badge">In Progress</span>
              <h1 id="case-study-title" className="case-study-title">
                WeatherCAN and weather.gc.ca
              </h1>
              <p className="case-study-subtitle">
                Modernizing Canada's national weather service by redesigning information hierarchy, clarifying data transparency, and introducing new features to serve millions of Canadians more effectively.
              </p>
            </div>

            <dl className="project-meta" aria-label="Project information">
              <div className="meta-item">
                <dt className="meta-label">Type</dt>
                <dd className="meta-value">Professional Project</dd>
              </div>
              <div className="meta-item">
                <dt className="meta-label">Organization</dt>
                <dd className="meta-value">Environment and Climate Change Canada (ECCC)</dd>
              </div>
              <div className="meta-item">
                <dt className="meta-label">My Role</dt>
                <dd className="meta-value">UX Designer</dd>
              </div>
              <div className="meta-item">
                <dt className="meta-label">Focus Areas</dt>
                <dd className="meta-value">Information Architecture, Data Visualization, Accessibility</dd>
              </div>
              <div className="meta-item">
                <dt className="meta-label">Team</dt>
                <dd className="meta-value">Project Mentor (Senior Designer), 2 Student Designers, Content Design Team, Developers, Meteorologists</dd>
              </div>
              <div className="meta-item">
                <dt className="meta-label">Status</dt>
                <dd className="meta-value">Second beta in progress</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section id="at-a-glance" className="case-study-section at-a-glance">
        <div className="container">
          <h2 className="section-heading">At a Glance</h2>
          <div className="glance-grid">
            <div className="glance-item">
              <h3 className="glance-title">The Opportunity</h3>
              <p className="glance-text">
                ECCC's Meteorological Service of Canada (MSC) is modernizing weather.gc.ca, which is Canada's national weather platform. The goal is to better serve Canadians with accurate, accessible, and easy-to-understand forecast and alerting information.
              </p>
            </div>
            <div className="glance-item">
              <h3 className="glance-title">The Challenge</h3>
              <p className="glance-text">
                After launching the first public beta, user feedback revealed the interface felt too busy, spread out, and hard to scan. Users wanted a quicker snapshot of conditions. Additionally, the site's mixing of observed and forecasted data without clear distinction was flagged as a transparency concern by MSC scientists.
              </p>
            </div>
            <div className="glance-item">
              <h3 className="glance-title">My Contribution</h3>
              <p className="glance-text">
                I contributed to the second beta design updates, including revising the information hierarchy in the weather overview, clarifying the distinction between observed and forecasted data, and designing a new Weather Story feature for forecaster with written narratives about local weather events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section id="background" className="case-study-section wc-bg-section">
        <div className="container">
          <h2 className="section-heading">Background</h2>
          <p className="section-intro">
            Weather.gc.ca is used by millions of Canadians to check forecasts, alerts, and current conditions. The existing platform had not been redesigned in many years, and MSC undertook a major modernization initiative to bring the experience in line with current user expectations and scientific communication standards.
          </p>
          <div className="wc-two-col">
            <div>
              <h3 className="wc-subheading">Modernization initiative</h3>
              <p className="wc-body">
                MSC conducted 12 focus groups with 112 participants to understand how Canadians react to and understand new weather information. These sessions presented both live and in-development features and assessed user reactions across diverse regions of Canada.
              </p>
            </div>
            <div>
              <h3 className="wc-subheading">Key research findings</h3>
              <ul className="wc-findings-list">
                <li>Users are primarily focused on <strong>current conditions and same-day forecasts</strong></li>
                <li>Most important data points: <strong>temperature, "feels like", precipitation, and probability of precipitation</strong></li>
                <li>Users want a <strong>quick snapshot</strong> — not deep dives into data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* First Beta */}
      <section id="first-beta" className="case-study-section">
        <div className="container">
          <h2 className="section-heading">First Beta</h2>
          <p className="section-intro">
            The first beta launched publicly in April 2026. It introduced a redesigned layout with tabbed navigation (Current, Hourly, 7 Day, Past 24h, Advanced), prominent alert banners, and an updated current conditions card.
          </p>
          <div className="wc-image-block">
            <img
              src={weathercanFirstBeta}
              alt="First beta design of weather.gc.ca showing Toronto current conditions"
              className="wc-screenshot"
            />
            <p className="wc-image-caption">First beta — weather.gc.ca, April 2026</p>
          </div>
        </div>
      </section>

      {/* User & Client Feedback */}
      <section id="feedback" className="case-study-section wc-feedback-section">
        <div className="container">
          <h2 className="section-heading">User &amp; Client Feedback</h2>
          <p className="section-intro">
            Following the first beta launch, a survey with 11 closed-ended questions and one open-ended question was administered April 15–16, 2026. <strong>4,103 respondents</strong> across Canada participated.
          </p>

          <div className="wc-stats-row">
            <div className="wc-stat">
              <span className="wc-stat-number">4,103</span>
              <span className="wc-stat-label">Survey respondents across Canada</span>
            </div>
            <div className="wc-stat">
              <span className="wc-stat-number">12</span>
              <span className="wc-stat-label">Focus groups conducted</span>
            </div>
            <div className="wc-stat">
              <span className="wc-stat-number">112</span>
              <span className="wc-stat-label">Focus group participants</span>
            </div>
          </div>

          <div className="wc-feedback-cards">
            <div className="wc-feedback-card">
              <h3 className="wc-feedback-card-title">User feedback</h3>
              <p className="wc-body">
                Over 20% of open-ended comments described the beta as too busy, spread out, full of whitespace, visually cluttered, or hard to scan. Users wanted <strong>denser information, clearer visual hierarchy, and fewer large boxes and graphics</strong>.
              </p>
            </div>
            <div className="wc-feedback-card">
              <h3 className="wc-feedback-card-title">Client (MSC) concern</h3>
              <p className="wc-body">
                Weather.gc.ca presents both <strong>observed</strong> and <strong>forecasted</strong> weather data, governed by strict scientific guidelines on how each type should be presented. The first beta made it difficult for users to distinguish between the two sources — leading to a re-imagining of the weather overview card.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Response */}
      <section id="design-response" className="case-study-section">
        <div className="container">
          <h2 className="section-heading">Design Response</h2>
          <p className="section-intro">
            In response to both user and client feedback, I redesigned the weather overview section to consolidate observed conditions into a single, scannable card with a dark visual treatment, which clearly separating observed data from forecasted content above and below it.
          </p>

          <div className="wc-before-after">
            <div className="wc-design-block">
              <span className="wc-design-label wc-label-before">Before — First beta</span>
              <div className="wc-image-block">
                <img
                  src={weathercanFirstBeta}
                  alt="First beta design showing current conditions section"
                  className="wc-screenshot wc-screenshot-sm"
                />
              </div>
              <ul className="wc-design-notes">
                <li>Observed and forecasted data visually mixed</li>
                <li>Large cards with excess whitespace</li>
                <li>Users found it hard to quickly scan conditions</li>
              </ul>
            </div>

            <div className="wc-design-block">
              <span className="wc-design-label wc-label-after">After — Revised design</span>
              <div className="wc-image-block">
                <img
                  src={weathercanRevisedDesign}
                  alt="Revised design showing dark consolidated current conditions card"
                  className="wc-screenshot wc-screenshot-sm"
                />
              </div>
              <ul className="wc-design-notes">
                <li>Dark card consolidates all observed data at a glance</li>
                <li>Denser layout: temperature, feels like, wind, visibility, humidity, pressure</li>
                <li>Clear data source labelled with station name and timestamp</li>
              </ul>
            </div>
          </div>

          <div className="wc-image-block" style={{ marginTop: 'var(--spacing-xl)' }}>
            <img
              src={weathercanSecondBeta}
              alt="Second beta design — full page view of weather.gc.ca"
              className="wc-screenshot"
            />
            <p className="wc-image-caption">Second beta — updated full-page layout with revised overview card</p>
          </div>
        </div>
      </section>

      {/* New Feature: Weather Story */}
      <section id="weather-story" className="case-study-section wc-feature-section">
        <div className="container">
          <h2 className="section-heading">New Feature: Weather Story</h2>
          <div className="wc-two-col">
            <div>
              <p className="wc-body">
                MSC clients requested a way for forecasters to communicate location-specific weather narratives directly on the page — expanding beyond raw data to include richer context about developing or significant weather events.
              </p>
              <p className="wc-body">
                This came with a specific design constraint: the weather story needed to surface mixed media (images, videos, text written by forecasters) <strong>without competing with the core weather data experience</strong> on the page.
              </p>
              <p className="wc-body">
                I designed a collapsible "Forecasters analysis" panel integrated into the forecast section — keeping the primary data layout intact while making the narrative easily accessible.
              </p>
            </div>
            <div className="wc-image-block">
              <img
                src={weathercanWeatherStory}
                alt="Weather story feature showing forecasters analysis panel"
                className="wc-screenshot"
              />
              <p className="wc-image-caption">Weather Story — forecaster-written narratives embedded in the forecast section</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section id="next-steps" className="case-study-section">
        <div className="container">
          <h2 className="section-heading">Next Steps</h2>
          <p className="section-intro">
            The second beta is targeted for a private release exclusively to internal ECCC employees in December 2026. This internal release will validate the redesigned information hierarchy and the team's response to first-beta feedback before moving toward a full public launch.
          </p>
          <div className="wc-next-steps-grid">
            <div className="wc-next-step">
              <h3 className="wc-next-step-title">Internal beta validation</h3>
              <p className="wc-body">Testing revised information hierarchy and data transparency improvements with ECCC staff before public rollout.</p>
            </div>
            <div className="wc-next-step">
              <h3 className="wc-next-step-title">AQHI expansion</h3>
              <p className="wc-body">Expanding Air Quality Health Index (AQHI) information across the platform as a department priority.</p>
            </div>
            <div className="wc-next-step">
              <h3 className="wc-next-step-title">Incoming client requests</h3>
              <p className="wc-body">Continuing to address new feature requests from MSC clients as the product moves toward public release.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="case-study-section project-navigation">
        <div className="container">
          <nav className="project-nav" aria-label="Case study navigation">
            <Link to="/" className="btn btn-primary">
              Back to Projects
            </Link>
          </nav>
        </div>
      </section>
    </div>
  )
}

export default CaseStudyWeatherCan
