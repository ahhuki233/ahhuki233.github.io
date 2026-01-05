import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CaseStudyKDS.css'

const CaseStudyKDS = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="case-study">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="container">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator" aria-hidden="true">/</span>
          <span className="breadcrumb-current" aria-current="page">Kitchen Display System Case Study</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="case-study-hero" aria-labelledby="case-study-title">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 id="case-study-title" className="case-study-title">
                Kitchen Display System
              </h1>
              <p className="case-study-subtitle">
               A comprehensive kitchen display system that allows chefs to manage order status using a physical bump bar, provides a real-time pickup screen for customers, and includes an internal configuration tool for restaurant teams to customize kitchen settings.
              </p>
            </div>

            <dl className="project-meta" aria-label="Project information">
              <div className="meta-item">
                <dt className="meta-label">Type</dt>
                <dd className="meta-value">Professional Project</dd>
              </div>
              <div className="meta-item">
                <dt className="meta-label">Timeline</dt>
                <dd className="meta-value">9 Months (Jan-Oct 2025)</dd>
              </div>
              <div className="meta-item">
                <dt className="meta-label">Team</dt>
                <dd className="meta-value">Client Team, Management Team, Front-end & Back-end Developers</dd>
              </div>
              <div className="meta-item">
                <dt className="meta-label">My Role</dt>
                <dd className="meta-value">Lead Designer & Frontend Developer</dd>
              </div>
              <div className="meta-item">
                <dt className="meta-label">Technologies</dt>
                <dd className="meta-value">.NET 8, React, UI/UX Design, Figma</dd>
              </div>
            </dl>

            {/* <div className="hero-actions">
              <a
                 target="_blank"
                href="https://www.figma.com/proto/xklBS0ojXLmnUPRxRkd261/INF1611_PRA0101_A8_XueerXu_FinalPrototype_2025-12-01?node-id=112-5258&t=19oNj9l7xCmVXKgi-1"
                className="view-prototype-btn"
                aria-label="View Kitchen Display System interactive prototype"
              >
                View Prototype →
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section className="case-study-section at-a-glance">
        <div className="container">
          <h2 className="section-heading">At a Glance</h2>

          <div className="glance-grid">
            <div className="glance-item">
              <h3 className="glance-title">The Problem</h3>
              <p className="glance-text">
              The client needed a scalable Kitchen Display System (KDS) for high-volume quick-service restaurants across Canada. The system had to support real-time kitchen operations, customer pickup displays, and flexible internal configuration while balancing complex requirements and diverse stakeholder needs.
              </p>
            </div>

            <div className="glance-item">
              <h3 className="glance-title">The Challenge</h3>
              <p className="glance-text">
              As the only designer and one of the front-end developers on the project, my challenge was to design a Kitchen Display System that balanced user needs with development feasibility. The system needed to scale across fast-food chains in Canada, support fast-paced kitchen workflows with bump bar interactions, clearly communicate pickup status to customers, and give restaurant managers the flexibility to customize settings for each location.
              </p>
            </div>

            <div className="glance-item">
              <h3 className="glance-title">The Solution</h3>
              <p className="glance-text">
                  I designed an all-in-one Kitchen Display System with real-time order tracking, bump bar support for chefs, a customer-facing pickup screen, and a flexible configuration tool for managers. Through continuous back-and-forth collaboration with the client and developers, I ensured the system aligned with business goals, integrated smoothly with existing POS systems, and stayed easy to use during peak hours across multiple locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="case-study-section solution-details">
        <div className="container">
          <h2 className="section-heading">Key Solution Features</h2>
          <p className="section-intro">
            Each component addresses specific operational needs identified through kitchen observations and stakeholder interviews, creating a seamless workflow from order placement to pickup.
          </p>

          <div className="solution-showcase">
            <article className="solution-item">
              <div className="solution-visual">
                <div className="solution-image-container">
                  <div className="image-placeholder large">
                    <span>Real-Time Orders</span>
                    <p>Kitchen display with live order updates</p>
                  </div>
                </div>
              </div>

              <div className="solution-text">
                <div className="solution-header">
                  <span className="solution-number">01</span>
                  <h3 className="solution-title">Real-Time Order Synchronization</h3>
                </div>

                <div className="solution-details-grid">
                  <div className="solution-features-block">
                    <h4 className="block-label">Key Features</h4>
                    <ul className="solution-features" role="list">
                      <li>Instant order updates across all kitchen stations</li>
                      <li>Color-coded priority indicators for urgent orders</li>
                      <li>Automatic routing to correct prep stations</li>
                      <li>Real-time countdown timers for elapsed time</li>
                    </ul>
                  </div>

                  <div className="solution-impact-block">
                    <h4 className="block-label">Impact/Why This Matters</h4>
                    <div className="impact-stat">
                      <span className="stat-large">40%</span>
                      <p className="stat-description">reduction in average order preparation time during pilot testing</p>
                    </div>
                    <p className="impact-text">
                      Real-time synchronization eliminates lost tickets and communication delays, ensuring every order flows smoothly through the kitchen.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className="solution-item reverse">
              <div className="solution-visual">
                <div className="solution-image-container">
                  <div className="image-placeholder large">
                    <span>Station Views</span>
                    <p>Customized display for each kitchen station</p>
                  </div>
                </div>
              </div>

              <div className="solution-text">
                <div className="solution-header">
                  <span className="solution-number">02</span>
                  <h3 className="solution-title">Station-Specific Workflow</h3>
                </div>

                <div className="solution-details-grid">
                  <div className="solution-features-block">
                    <h4 className="block-label">Key Features</h4>
                    <ul className="solution-features" role="list">
                      <li>Customizable station assignments for flexible layouts</li>
                      <li>Item-level status tracking with completion checkboxes</li>
                      <li>Cross-station visibility for order coordination</li>
                      <li>Special instruction highlights for dietary restrictions</li>
                    </ul>
                  </div>

                  <div className="solution-impact-block">
                    <h4 className="block-label">Impact/Why This Matters</h4>
                    <div className="impact-quote">
                      <blockquote className="user-quote">
                        "I need to know what's urgent without reading every ticket. Color and position tell me what to cook first."
                      </blockquote>
                      <cite className="quote-attribution">— Kitchen Staff Interview</cite>
                      <p className="quote-context">12/15 staff members relied on visual cues to prioritize orders</p>
                    </div>
                    <p className="impact-text">
                      Station-specific filtering reduces cognitive load and prevents staff from being overwhelmed during busy service.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className="solution-item">
              <div className="solution-visual">
                <div className="solution-image-container">
                  <div className="image-placeholder large">
                    <span>Analytics Dashboard</span>
                    <p>Performance metrics and reporting</p>
                  </div>
                </div>
              </div>

              <div className="solution-text">
                <div className="solution-header">
                  <span className="solution-number">03</span>
                  <h3 className="solution-title">Performance Analytics</h3>
                </div>

                <div className="solution-details-grid">
                  <div className="solution-features-block">
                    <h4 className="block-label">Key Features</h4>
                    <ul className="solution-features" role="list">
                      <li>Real-time performance metrics during service</li>
                      <li>Historical trend analysis for improvement</li>
                      <li>Station-by-station efficiency comparisons</li>
                      <li>Peak time identification and capacity planning</li>
                    </ul>
                  </div>

                  <div className="solution-impact-block">
                    <h4 className="block-label">Impact/Why This Matters</h4>
                    <div className="impact-stat">
                      <span className="stat-large">60%</span>
                      <p className="stat-description">of observed delays were caused by poor coordination between stations</p>
                    </div>
                    <p className="impact-text">
                      Data-driven insights help optimize kitchen operations, staffing decisions, and identify bottlenecks before they impact service.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section className="case-study-section research-process">
        <div className="container">
          <h2 className="section-heading">Understanding the Problem</h2>

          <div className="content-block">
            <div className="content-text">
              <h3 className="content-title">Research Approach</h3>
              <p className="content-paragraph">
                To build a solution that truly addressed kitchen workflow challenges, I conducted extensive research in real restaurant environments, observing pain points and gathering insights from both front-of-house and back-of-house staff:
              </p>

              <div className="research-methods">
                <div className="method-card">
                  <div className="method-icon" aria-hidden="true">01</div>
                  <h4 className="method-title">Contextual Inquiry</h4>
                  <p className="method-description">
                    Spent time in 5 different restaurant kitchens during peak service hours, observing workflows, communication patterns, and pain points with existing ticket systems.
                  </p>
                </div>

                <div className="method-card">
                  <div className="method-icon" aria-hidden="true">02</div>
                  <h4 className="method-title">Stakeholder Interviews</h4>
                  <p className="method-description">
                    Conducted interviews with 15 kitchen staff members including chefs, line cooks, and expeditors to understand their specific needs and frustrations with current systems.
                  </p>
                </div>

                <div className="method-card">
                  <div className="method-icon" aria-hidden="true">03</div>
                  <h4 className="method-title">Competitive Analysis</h4>
                  <p className="method-description">
                    Analyzed 8 existing KDS solutions to identify industry standards, common pain points, and opportunities for differentiation and improvement.
                  </p>
                </div>

                <div className="method-card">
                  <div className="method-icon" aria-hidden="true">04</div>
                  <h4 className="method-title">Workflow Mapping</h4>
                  <p className="method-description">
                    Mapped current and ideal state workflows to identify bottlenecks and opportunities for automation, documenting touch points between stations and staff roles.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-visual">
              <div className="image-placeholder large">
                <span>Research Process</span>
                <p>Kitchen observations and staff interviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="case-study-section key-insights">
        <div className="container">
          <h2 className="section-heading">Key Research Insights</h2>

          <div className="insights-grid">
            <article className="insight-card">
              <div className="insight-number">01</div>
              <h3 className="insight-title">Speed is Critical</h3>
              <p className="insight-description">
                "We don't have time to click through menus. Everything needs to be visible at a glance and accessible with one touch."
              </p>
              <div className="insight-stat">
                <span className="stat-number">85%</span>
                <span className="stat-label">of kitchen staff cited speed and simplicity as their top priority for any new system</span>
              </div>
            </article>

            <article className="insight-card">
              <div className="insight-number">02</div>
              <h3 className="insight-title">Visual Hierarchy Matters</h3>
              <p className="insight-description">
                "I need to know what's urgent without reading every ticket. Color and position tell me what to cook first."
              </p>
              <div className="insight-stat">
                <span className="stat-number">12/15</span>
                <span className="stat-label">staff members relied on visual cues rather than timestamps to prioritize orders</span>
              </div>
            </article>

            <article className="insight-card">
              <div className="insight-number">03</div>
              <h3 className="insight-title">Station Communication</h3>
              <p className="insight-description">
                "The biggest issue is coordinating with other stations. We're all working on different parts of the same order."
              </p>
              <div className="insight-stat">
                <span className="stat-number">60%</span>
                <span className="stat-label">of observed delays were caused by poor coordination between kitchen stations</span>
              </div>
            </article>

            <article className="insight-card">
              <div className="insight-number">04</div>
              <h3 className="insight-title">Durability Requirements</h3>
              <p className="insight-description">
                "Kitchen environments are tough. Heat, moisture, and grease destroy regular equipment. It needs to be built for this."
              </p>
              <div className="insight-stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">of observed kitchens had environmental challenges requiring specialized hardware considerations</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="case-study-section design-process">
        <div className="container">
          <h2 className="section-heading">Design Process</h2>

          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-marker" aria-hidden="true"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Information Architecture & Wireframing</h3>
                <p className="timeline-description">
                  Developed multiple layout concepts optimized for large touchscreen displays. Created information hierarchies that prioritize urgent orders while maintaining visibility of all active items. Designed station-specific views that filter information based on kitchen role and responsibilities.
                </p>
                <div className="image-placeholder medium">
                  <span>Initial Wireframes</span>
                  <p>Layout concepts and information architecture</p>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker" aria-hidden="true"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Visual Design & Interaction Patterns</h3>
                <p className="timeline-description">
                  Designed a high-contrast interface optimized for glance-ability in bright kitchen environments. Created color-coded priority systems and large touch targets for gloved hands. Developed interaction patterns that minimize steps and support muscle memory for repeated actions.
                </p>
                <div className="image-placeholder medium">
                  <span>Visual Design</span>
                  <p>High-fidelity mockups and design system</p>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker" aria-hidden="true"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Prototype Testing & Iteration</h3>
                <p className="timeline-description">
                  Conducted usability testing with kitchen staff using interactive prototypes. Simulated peak service scenarios to validate workflow efficiency. Refined visual hierarchy, simplified interactions, and adjusted timing based on real-world feedback from multiple testing sessions.
                </p>
                <div className="image-placeholder medium">
                  <span>Testing Sessions</span>
                  <p>Prototype testing with kitchen staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section className="case-study-section development">
        <div className="container">
          <h2 className="section-heading">Development & Implementation</h2>

          <div className="content-block">
            <div className="content-text">
              <h3 className="content-title">Technical Implementation</h3>
              <p className="content-paragraph">
                As one of the frontend developers on this project, I worked with .NET 8 to bring the design vision to life. The development process involved close collaboration with backend engineers to ensure seamless real-time communication and reliable order processing.
              </p>

              <div className="research-methods">
                <div className="method-card">
                  <div className="method-icon" aria-hidden="true">01</div>
                  <h4 className="method-title">Component Architecture</h4>
                  <p className="method-description">
                    Built reusable components for order cards, station views, and control panels using React and .NET 8. Implemented state management to handle real-time updates across multiple displays simultaneously.
                  </p>
                </div>

                <div className="method-card">
                  <div className="method-icon" aria-hidden="true">02</div>
                  <h4 className="method-title">Real-Time Synchronization</h4>
                  <p className="method-description">
                    Integrated SignalR for WebSocket-based real-time communication, ensuring instant order updates across all kitchen displays with minimal latency even during peak service hours.
                  </p>
                </div>

                <div className="method-card">
                  <div className="method-icon" aria-hidden="true">03</div>
                  <h4 className="method-title">Performance Optimization</h4>
                  <p className="method-description">
                    Optimized rendering performance to handle 50+ simultaneous orders without lag. Implemented efficient data structures and caching strategies to maintain responsiveness on touchscreen hardware.
                  </p>
                </div>

                <div className="method-card">
                  <div className="method-icon" aria-hidden="true">04</div>
                  <h4 className="method-title">POS Integration</h4>
                  <p className="method-description">
                    Developed API integrations with popular POS systems to ensure seamless order flow. Created fallback mechanisms and error handling to maintain kitchen operations even during connectivity issues.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-visual">
              <div className="image-placeholder large">
                <span>Development Process</span>
                <p>Code architecture and integration workflow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Deep Dive */}
      <section className="case-study-section solution-details">
        <div className="container">
          <h2 className="section-heading">Solution: Key Interfaces</h2>

          <div className="solution-showcase">
            <article className="solution-item">
              <div className="solution-text">
                <h3 className="solution-title">Main Display View</h3>
                <p className="solution-description">
                  The primary interface shows all active orders in a card-based layout. Color-coded borders indicate urgency (red for urgent, yellow for attention needed, green for on-track). Each card displays essential information: table number, order time, items, and special instructions. Large touch targets enable quick interactions even when wearing gloves.
                </p>
                <ul className="solution-features" role="list">
                  <li>Color-coded priority indicators for quick scanning</li>
                  <li>Auto-scrolling queue that brings urgent orders to the top</li>
                  <li>Large, tap-friendly order cards optimized for touchscreens</li>
                  <li>Real-time countdown timers showing elapsed preparation time</li>
                </ul>
              </div>
              <div className="solution-visual">
                <div className="image-placeholder large">
                  <span>Main Display</span>
                  <p>Primary kitchen view with active orders</p>
                </div>
              </div>
            </article>

            <article className="solution-item reverse">
              <div className="solution-text">
                <h3 className="solution-title">Station-Specific Views</h3>
                <p className="solution-description">
                  Each kitchen station has a customized view showing only relevant items. The grill station sees only grill items, while the salad station sees salads and appetizers. This filtering reduces cognitive load and prevents staff from being overwhelmed by irrelevant information during busy service.
                </p>
                <ul className="solution-features" role="list">
                  <li>Customizable station assignments for flexible kitchen layouts</li>
                  <li>Item-level status tracking with completion checkboxes</li>
                  <li>Cross-station visibility to coordinate full order timing</li>
                  <li>Special instruction highlights for dietary restrictions</li>
                </ul>
              </div>
              <div className="solution-visual">
                <div className="image-placeholder large">
                  <span>Station View</span>
                  <p>Filtered view for specific kitchen stations</p>
                </div>
              </div>
            </article>

            <article className="solution-item">
              <div className="solution-text">
                <h3 className="solution-title">Order Detail & Modifications</h3>
                <p className="solution-description">
                  Tapping any order card expands a detailed view with full item descriptions, preparation notes, and modification history. Kitchen staff can mark items as complete, send messages to front-of-house, or flag issues. All actions are logged and timestamped for accountability and analysis.
                </p>
                <ul className="solution-features" role="list">
                  <li>Detailed ingredient lists and preparation instructions</li>
                  <li>Quick access to customer allergies and preferences</li>
                  <li>Two-way messaging with front-of-house staff</li>
                  <li>Modification tracking with audit trail</li>
                </ul>
              </div>
              <div className="solution-visual">
                <div className="image-placeholder large">
                  <span>Order Detail</span>
                  <p>Expanded view with full order information</p>
                </div>
              </div>
            </article>

            <article className="solution-item reverse">
              <div className="solution-text">
                <h3 className="solution-title">Analytics Dashboard</h3>
                <p className="solution-description">
                  Management views provide real-time and historical performance metrics. Track average ticket times by station, identify bottlenecks, monitor staff efficiency, and analyze trends across days, shifts, or menu items. Data-driven insights help optimize kitchen operations and staffing decisions.
                </p>
                <ul className="solution-features" role="list">
                  <li>Real-time performance metrics during service</li>
                  <li>Historical trend analysis for continuous improvement</li>
                  <li>Station-by-station efficiency comparisons</li>
                  <li>Peak time identification and capacity planning</li>
                </ul>
              </div>
              <div className="solution-visual">
                <div className="image-placeholder large">
                  <span>Analytics Dashboard</span>
                  <p>Performance metrics and reporting interface</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="case-study-section results">
        <div className="container">
          <h2 className="section-heading">Results & Impact</h2>

          <div className="results-grid">
            <div className="result-card">
              <div className="result-metric">40%</div>
              <p className="result-description">
                Reduction in average order preparation time from 18 minutes to 11 minutes during pilot testing
              </p>
            </div>

            <div className="result-card">
              <div className="result-metric">75%</div>
              <p className="result-description">
                Decrease in order errors and miscommunication between front-of-house and kitchen staff
              </p>
            </div>

            <div className="result-card">
              <div className="result-metric">92%</div>
              <p className="result-description">
                Kitchen staff satisfaction rate with the new system after two weeks of use
              </p>
            </div>

            <div className="result-card">
              <div className="result-metric">3 days</div>
              <p className="result-description">
                Average training time for kitchen staff to become proficient with the system
              </p>
            </div>
          </div>

          <div className="testimonial">
            <blockquote className="testimonial-quote">
              "This system has transformed our kitchen operations. We can handle twice as many orders during peak hours without the chaos we used to experience. The visual priority system is intuitive, and our staff adapted to it within days."
            </blockquote>
            <cite className="testimonial-author">— Head Chef, Pilot Restaurant Location</cite>
          </div>
        </div>
      </section>

      {/* Learnings & Reflection */}
      <section className="case-study-section learnings">
        <div className="container">
          <h2 className="section-heading">Key Learnings & Next Steps</h2>

          <div className="learnings-content">
            <div className="learning-block">
              <h3 className="learning-title">What I Learned</h3>
              <ul className="learning-list" role="list">
                <li>
                  <strong>Context is everything:</strong> Designing for a professional kitchen environment taught me to prioritize visibility, speed, and durability over aesthetic preferences. What looks good on paper doesn't always work in a hot, fast-paced kitchen.
                </li>
                <li>
                  <strong>Observe before designing:</strong> Spending time in actual kitchens revealed pain points and workflows that would have been impossible to understand through interviews alone. Real-world observation is invaluable.
                </li>
                <li>
                  <strong>Balance design and development:</strong> Wearing both designer and developer hats required constant communication between roles. Technical constraints informed design decisions, while design vision pushed technical innovation.
                </li>
                <li>
                  <strong>Performance under pressure:</strong> Developing for real-time systems during peak service hours taught me the critical importance of performance optimization, error handling, and fallback mechanisms in production environments.
                </li>
              </ul>
            </div>

            <div className="learning-block">
              <h3 className="learning-title">Future Enhancements</h3>
              <ul className="learning-list" role="list">
                <li>
                  <strong>Predictive analytics:</strong> Use machine learning to predict preparation times based on historical data and current kitchen load.
                </li>
                <li>
                  <strong>Voice integration:</strong> Explore hands-free voice commands for marking items complete or requesting help during busy periods.
                </li>
                <li>
                  <strong>Inventory integration:</strong> Connect with inventory systems to flag when ingredients are running low and suggest 86-ing menu items proactively.
                </li>
                <li>
                  <strong>Multi-location support:</strong> Enable central kitchen coordination for restaurant groups with multiple locations sharing preparation facilities.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
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

export default CaseStudyKDS
