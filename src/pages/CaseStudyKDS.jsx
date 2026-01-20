import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CaseStudyKDS.css'
import ImageSlideshow from '../components/ImageSlideshow'
import kdsExpoStation from '../assets/images/kds-expo-station.png'
import kdsPickupStation from '../assets/images/kds-pickup-station.png'
import kdsLocalConfigBumbar from '../assets/images/kds-local-config-bumbar.png'
import kdsGlobalConfigOrderCard from '../assets/images/kds-gloal-config-order-card.png'
import kdsUserFlowDiagram from '../assets/images/kds-user-flow-diagram.png'
import kdsIteration1 from '../assets/images/kds-expo-iteration-1.png'
import kdsIteration2 from '../assets/images/kds-expo-iteration-2.png'

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
                <dd className="meta-value">Client Team (Panasonic), Management Team, Front-end & Back-end Developers</dd>
              </div>
              <div className="meta-item">
                <dt className="meta-label">My Role</dt>
                <dd className="meta-value">Lead Designer & Front-end Developer</dd>
              </div>
              <div className="meta-item">
                <dt className="meta-label">Technologies</dt>
                <dd className="meta-value">Figma, .NET 8, MySQL Workbench</dd>
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
              <h3 className="glance-title">The Opportunity</h3>
              <p className="glance-text">
              The client needed a scalable Kitchen Display System (KDS) for high-volume quick-service restaurants (QSR) across Canada. The system had to support real-time kitchen operations, customer pickup displays, and flexible internal configuration while balancing complex requirements and diverse stakeholder needs.
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
            Each component addresses specific operational needs identified through kitchen observations and stakeholder communication, creating a workflow from order placement to pickup.
          </p>

          <div className="solution-showcase">
            <article className="solution-item">
              <div className="solution-visual">
                <div className="solution-image-container">
                  {/* Desktop: Grid view */}
                  <div className="solution-images-grid">
                    <div className="image-with-caption">
                      <img
                        src={kdsExpoStation}
                        alt="KDS expo station display showing real-time orders with color-coded priority indicators"
                        className="solution-image"
                      />
                      <p className="image-caption">EXPO Station KDS Display</p>
                    </div>
                    <div className="image-with-caption">
                      <img
                        src={kdsPickupStation}
                        alt="KDS pickup station display for customer order status"
                        className="solution-image"
                      />
                      <p className="image-caption">Pickup Station KDS Display</p>
                    </div>
                  </div>

                  {/* Mobile: Slideshow */}
                  <div className="solution-images-slideshow">
                    <ImageSlideshow
                      images={[
                        {
                          src: kdsExpoStation,
                          alt: 'EXPO Station KDS Display - showing real-time orders with color-coded priority indicators',
                          className: 'solution-image'
                        },
                        {
                          src: kdsPickupStation,
                          alt: 'Pickup Station KDS Display - for customer order status',
                          className: 'solution-image'
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>

              <div className="solution-text">
                <div className="solution-header">
                  {/* <span className="solution-number">01</span> */}
                  <h3 className="solution-title">Real-Time Order Display</h3>
                </div>

                <div className="solution-details-grid">
                  <div className="solution-features-block">
                    <h4 className="block-label">Key Features</h4>
                    <ul className="solution-features" role="list">
                      <li>Instant order updates across all kitchen stations</li>
                      <li>Color-coded priority indicators for urgent orders</li>
                      {/* <li>Automatic routing to correct prep stations</li> */}
                      <li>Real-time countdown timers for elapsed time</li>
                    </ul>
                  </div>

                  <div className="solution-impact-block">
                    <h4 className="block-label">Impact/Why This Matters</h4>
                    <p className="impact-text" style={{ marginBottom: 'var(--spacing-sm)', fontWeight: '600' }}>
                      The Goal: Simplify the high-stress kitchen environment by turning complex data into easy, visual actions.
                    </p>
                    <ul className="solution-features" role="list">
                      <li><strong>Faster Decisions:</strong> Color-coded alerts and timers tell chefs exactly what to cook first without them having to think or calculate.</li>
                      <li><strong>Less Distraction:</strong> Automatic routing sends only relevant orders to specific stations, so staff aren't overwhelmed by extra info.</li>
                      <li><strong>Zero Lag:</strong> Instant updates ensure everyone is looking at the same information, preventing mistakes caused by communication gaps.</li>
                      <li><strong>Reduced Stress:</strong> By tracking "live" status, the system removes the need for shouting and double-checking paper tickets.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>

            <article className="solution-item reverse">
              <div className="solution-visual">
                <div className="solution-image-container">
                  {/* Desktop: Grid view */}
                  <div className="solution-images-grid">
                    <div className="image-with-caption">
                      <img
                        src={kdsLocalConfigBumbar}
                        alt="KDS local configuration for bump bar settings"
                        className="solution-image"
                      />
                      <p className="image-caption">Store Level: Virtual Keypad Mapping</p>
                    </div>
                    <div className="image-with-caption">
                      <img
                        src={kdsGlobalConfigOrderCard}
                        alt="KDS global configuration for order card settings"
                        className="solution-image"
                      />
                      <p className="image-caption">Brand Level: Order Card Template Design</p>
                    </div>
                  </div>

                  {/* Mobile: Slideshow */}
                  <div className="solution-images-slideshow">
                    <ImageSlideshow
                      images={[
                        {
                          src: kdsLocalConfigBumbar,
                          alt: 'Store Level: Virtual Keypad Mapping - KDS local configuration for bump bar settings',
                          className: 'solution-image'
                        },
                        {
                          src: kdsGlobalConfigOrderCard,
                          alt: 'Brand Level: Order Card Template Design - KDS global configuration for order card settings',
                          className: 'solution-image'
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>

              <div className="solution-text">
                <div className="solution-header">
                  {/* <span className="solution-number">02</span> */}
                  <h3 className="solution-title">Store & Brand Level Configurations</h3>
                </div>
                <div className="solution-details-grid">
                  <div className="solution-features-block">
                    <h4 className="block-label">Key Features</h4>
                    <ul className="solution-features" role="list">
                      <li>Store-level configurations for kitchen layout, stations, and routing</li>
                      <li>Brand-level standards for workflows, menus, and prep rules</li>
                      <li>Clear indicators showing whether a setting is brand-locked or store-editable</li>
                      <li>Role-based access for Headquarters (HQ) teams and store managers</li>
                    </ul>
                  </div>

                   <div className="solution-impact-block">
                    <h4 className="block-label">Impact/Why This Matters</h4>
                    <p className="impact-text" style={{ marginBottom: 'var(--spacing-sm)', fontWeight: '600' }}>
                     Balance brand consistency with store-level flexibility so kitchens run smoothly without confusion.
                    </p>
                    <ul className="solution-features" role="list">
                      <li><strong>Operational Clarity:</strong> Staff instantly know which settings they can change locally and which are controlled by the brand, reducing errors.</li>
                      <li><strong>Scalability:</strong> HQ can roll out updates across all locations at once, saving time and ensuring consistency.</li>
                      <li><strong>Local Efficiency:</strong> Stores can adjust settings to match their physical layout and staffing without breaking brand rules.</li>
                      <li><strong>Confidence & Control:</strong> Clear visibility into configuration ownership builds trust and prevents accidental system-wide changes.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="section-transition">
            ↓ Let's take a look at how we got here ↓
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section className="case-study-section research-process">
        <div className="container">
          <h2 className="section-heading">Discover: Understanding the Problem</h2>

          <div className="content-text">
            <h3 className="content-title">Research Methods</h3>
            <p className="content-paragraph">
              To build a solution that truly addressed kitchen workflow challenges, I conducted extensive research in real restaurant environments, observing pain points and gathering insights from both front-of-house and back-of-house staff:
            </p>

            <div className="research-methods">
                <div className="method-card">
                  <div className="method-icon" aria-hidden="true">01</div>
                  <h4 className="method-title">Contextual Inquiry</h4>
                  <p className="method-description">
                    Spent time in three different restaurant kitchens during peak service hours, observing workflows, communication patterns, and pain points with existing ticket systems.
                  </p>
                </div>

                <div className="method-card">
                  <div className="method-icon" aria-hidden="true">02</div>
                  <h4 className="method-title">Client Meetings</h4>
                  <p className="method-description">
                   Met with the Panasonic team to understand the requirements for building a universal design applicable to any fast-food restaurant with configurable displays.
                  </p>
                </div>

                <div className="method-card">
                  <div className="method-icon" aria-hidden="true">03</div>
                  <h4 className="method-title">Competitive Analysis</h4>
                  <p className="method-description">
                    Analyzed three existing KDS solutions to identify industry standards, common pain points, and opportunities for differentiation and improvement.
                  </p>
                </div>

                {/* <div className="method-card">
                  <div className="method-icon" aria-hidden="true">04</div>
                  <h4 className="method-title">Workflow Mapping</h4>
                  <p className="method-description">
                    Mapped current and ideal state workflows to identify bottlenecks and opportunities for automation, documenting touch points between stations and staff roles.
                  </p>
                </div> */}
              </div>

              <p className="content-paragraph" style={{ marginTop: 'var(--spacing-md)' }}>These methods let us answer key research questions efficiently within our 9-month timeline including development and project constraints.</p>
            </div>
        </div>
      </section>

      {/* Coming Soon */}
      {/* <section className="case-study-section" style={{ textAlign: 'center', padding: 'var(--spacing-xl) 0' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--font-size-2xl)', color: 'var(--color-text-light)', fontStyle: 'italic' }}>
            Coming soon...
          </p>
        </div>
      </section> */}

      {/* Key Insights */}
      <section className="case-study-section key-insights">
        <div className="container">
          <h2 className="section-heading">Define: Key Research Insights</h2>

          {/* <p className="content-paragraph" style={{ marginBottom: 'var(--spacing-lg)' }}>
            Through contextual inquiry in three restaurant kitchens, meetings with the Panasonic team, and competitive analysis of existing KDS solutions, we identified four critical themes that shaped our design approach. These insights revealed the gap between current kitchen operations and the ideal state, highlighting specific pain points that our solution needed to address.
          </p> */}

          <div className="insights-grid">
            <article className="insight-card">
              <div className="insight-number">01</div>
              <h3 className="insight-title">Speed is Critical</h3>
              <p className="insight-description">
              From my observations during peak hours, kitchen staff relied on quick, at-a-glance information rather than navigating through the system.
              </p>
              <div className="insight-stat">
                <span className="kds-stat-label">Key Finding</span>
                <span className="stat-label">Competitive analysis revealed successful KDS systems prioritized one-touch interactions and minimal navigation depth</span>
              </div>
            </article>

            <article className="insight-card">
              <div className="insight-number">02</div>
              <h3 className="insight-title">Visual Hierarchy is Essential</h3>
              <p className="insight-description">
                Observations in fast-paced kitchens showed staff scanning displays for urgent orders using visual patterns rather than reading timestamps or order numbers sequentially.
              </p>
              <div className="insight-stat">
                <span className="kds-stat-label">Design Implication</span>
                <span className="stat-label">Color-coding and spatial organization emerged as critical for instant prioritization during high-volume service</span>
              </div>
            </article>

            <article className="insight-card">
              <div className="insight-number">03</div>
              <h3 className="insight-title">Flexible Configuration Needed</h3>
              <p className="insight-description">
                Client requirements emphasized the need for a universal design that could adapt to different fast-food chains across Canada, each with unique kitchen layouts and workflows.
              </p>
              <div className="insight-stat">
                <span className="kds-stat-label">Client Requirement</span>
                <span className="stat-label">System must support both brand-level standards and store-level customization for different operational needs</span>
              </div>
            </article>

            {/* <article className="insight-card">
              <div className="insight-number">04</div>
              <h3 className="insight-title">Physical Integration Constraints</h3>
              <p className="insight-description">
                Kitchen environments present unique challenges with heat, moisture, and limited counter space. Integration with existing bump bars was a non-negotiable client requirement.
              </p>
              <div className="insight-stat">
                <span className="kds-stat-label">Technical Constraint</span>
                <span className="stat-label">Solution must work seamlessly with physical bump bars while supporting touchscreen and customer-facing pickup displays</span>
              </div>
            </article> */}
          </div>
        </div>
      </section> 

      {/* Design Process */}
   <section className="case-study-section design-process">
        <div className="container">
          <h2 className="section-heading">Design Process</h2>

          <div>
            <h3 className="content-title">User Flow Diagram</h3>
            <p className="content-paragraph">
              I mapped the complete user journey from order placement to pickup, identifying all touchpoints across different user roles: kitchen staff, customers, and managers. This diagram helped visualize the entire system workflow.
            </p>
            <div className="process-image-container">
              <img
                src={kdsUserFlowDiagram}
                alt="KDS user flow diagram showing order journey from placement to pickup"
                className="process-image"
              />
            </div>
          </div>

          <h3 className="content-title" style={{ marginTop: 'var(--spacing-xl)' }}>Visual Design & Interaction Patterns</h3>
          <p className="content-paragraph">
            I designed a high-contrast interface optimized for glance-ability in bright kitchen environments. Created color-coded priority systems and large touch targets for gloved hands. Developed interaction patterns that minimize steps and support muscle memory for repeated actions.
          </p>
          <ul className="content-paragraph" style={{ paddingLeft: 'var(--spacing-md)' }}>
            <li>High-contrast color system for visibility in bright lighting</li>
            <li>Large touch targets optimized for gloved hands</li>
            <li>Color-coded priority indicators for urgent orders</li>
            <li>Minimal navigation depth for one-touch interactions</li>
          </ul>

          <h3 className="content-title" style={{ marginTop: 'var(--spacing-xl)' }}>Prototype Testing & Iteration</h3>
          <p className="content-paragraph">
           I conducted internal usability testing with developers and clients using interactive prototypes to evaluate workflow efficiency and gather real-time feedback for design refinement.
          </p>

          <h4 className="content-title" style={{ marginTop: 'var(--spacing-lg)', fontSize: 'var(--font-size-xl)' }}>Key Iterations</h4>
          <p className="content-paragraph" style={{ marginTop: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
            <strong>EXPO Screen Evolution:</strong> Through iterative testing, I refined the design by minimizing color usage to reduce visual clutter, optimizing gaps between order cards for better scanning, and maximizing font sizes for improved readability in fast-paced kitchen environments.
          </p>

          <div className="kds-iterations-container">
            <div className="kds-iteration-item">
              <div className="kds-iteration-number">Iteration 1</div>
              <div className="kds-iteration-image-container">
                <img
                  src={kdsIteration1}
                  alt="KDS iteration 1 - Initial design concept"
                  className="kds-iteration-image"
                />
              </div>
              <p className="kds-iteration-description">
                Initial design concept focusing on basic order card layout and information hierarchy.
              </p>
            </div>

            <div className="kds-iteration-arrow" aria-hidden="true">→</div>

            <div className="kds-iteration-item">
              <div className="kds-iteration-number">Iteration 2</div>
              <div className="kds-iteration-image-container">
                <img
                  src={kdsIteration2}
                  alt="KDS iteration 2 - Refined visual hierarchy"
                  className="kds-iteration-image"
                />
              </div>
              <p className="kds-iteration-description">
                Refined visual hierarchy with improved color coding and spacing based on initial feedback.
              </p>
            </div>

            <div className="kds-iteration-arrow" aria-hidden="true">→</div>

            <div className="kds-iteration-item">
              <div className="kds-iteration-number">Final Design</div>
              <div className="kds-iteration-image-container">
                <img
                  src={kdsExpoStation}
                  alt="KDS final design - EXPO station display"
                  className="kds-iteration-image"
                />
              </div>
              <p className="kds-iteration-description">
                Final design with optimized touch targets, high-contrast colors, and real-time priority indicators.
              </p>
            </div>
          </div>
        </div>
      </section> 

      {/* Development Section */}
     <section className="case-study-section development">
        <div className="container">
          <h2 className="section-heading">Development & Implementation</h2>

          <div className="">
            <div className="content-text">
              <h3 className="content-title">Technical Implementation</h3>
              <p className="content-paragraph">
               This project marked my first experience with .NET 8 Blazor, where I applied it as a front-end developer to implement the design vision while working closely with back-end engineers to ensure a smooth, real-time ordering experience.
              </p>

              <div className="research-methods">
                <div className="">
                  <h4 className="method-title">Component Architecture</h4>
                  <p className="method-description">
                    I extensively used Fluent UI components to build consistent and accessible interfaces for order cards, station views, and control panels. Leveraging Fluent UI helped ensure visual clarity, interaction consistency, and fast comprehension, allowing staff to quickly understand order status without unnecessary interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 

      {/* Solution Deep Dive */}
      {/* <section className="case-study-section solution-details">
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
      </section> */}

      {/* Results & Impact */}
      {/* <section className="case-study-section results">
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
      </section> */}

      {/* Learnings & Reflection */}
       <section className="case-study-section learnings">
        <div className="container">
          <h2 className="section-heading">Key Learnings</h2>

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
                  <strong>Collaboration and communication:</strong> Working closely with stakeholders, managers, and back-end developers taught me the importance of clear communication and continuous alignment. Regular check-ins with the client ensured the design met business requirements, while ongoing collaboration with developers helped bridge the gap between design vision and technical implementation.
                </li>
              </ul>
            </div>

            <div className="learning-block">
              <h3 className="learning-title">Skills Earned</h3>
              <ul className="learning-list" role="list">
                <li>
                  <strong>.NET 8:</strong> Developed front-end components and implemented real-time features using the latest .NET framework.
                </li>
                <li>
                  <strong>FluentUI Library:</strong> Leveraged Microsoft's FluentUI component library to build consistent user interfaces.
                </li>
                <li>
                  <strong>Figma Prototyping:</strong> Created interactive prototypes for stakeholder presentations.
                </li>
                <li>
                  <strong>MySQL Workbench:</strong> Used MySQL Workbench to verify API actions and ensure new data, modified data, and deleted data displayed correctly in the database.
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
