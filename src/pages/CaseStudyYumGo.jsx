import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CaseStudyYumGo.css'
import ImageSlideshow from '../components/ImageSlideshow'
import yumgoProjectImage1 from '../assets/images/yumgo-project-image-1.png'
import yumgoProjectImage2 from '../assets/images/yumgo-project-image-2.png'
import yumgoProjectImage3 from '../assets/images/yumgo-project-image-3.png'
import learnAbout2 from '../assets/images/yumgo-learn-about-2.png'
import yumgoReviewPage from '../assets/images/yumgo-review-page.png'
import yumgoRestaurantDetails1 from '../assets/images/yumgo-restaurant-details-1.png'
import yumgoRestaurantDetails2 from '../assets/images/yumgo-restaurant-details-2.png'
import yumgoPersona1 from '../assets/images/yumgo-persona-1.png'
import yumgoPersona2 from '../assets/images/yumgo-persona-2.png'
import yumgoStoryboard from '../assets/images/yumgo-storyboard.jpeg'
import yumgoBooking1 from '../assets/images/yumgo-booking-1.png'
import yumgoBooking2 from '../assets/images/yumgo-booking-2.png'

const CaseStudyYumGo = () => {
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
          <span className="breadcrumb-current" aria-current="page">YumGo Case Study</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="case-study-hero" aria-labelledby="case-study-title">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 id="case-study-title" className="case-study-title">
                YumGo: Restaurant Discovery & Booking
              </h1>
              <p className="case-study-subtitle">
                A user-centered mobile app that reimagines restaurant discovery through intuitive map-based interactions and seamless booking experiences.
              </p>
            </div>

            <dl className="project-meta" aria-label="Project information">
              <div className="meta-item">
                <dt className="meta-label">Type</dt>
                <dd className="meta-value">Student Project at UofT</dd>
              </div>
              <div className="meta-item">
                <dt className="meta-label">Timeline</dt>
                <dd className="meta-value">12 Weeks (Sept-Dec 2025)</dd>
              </div>
              <div className="meta-item">
                <dt className="meta-label">Team</dt>
                <dd className="meta-value">Keyan Huang, Talor Fergusson, Zifan (Merlin) Ye</dd>
              </div>
              <div className="meta-item">
                <dt className="meta-label">My Role</dt>
                <dd className="meta-value">UX Researcher & Designer</dd>
              </div>
              <div className="meta-item">
                <dt className="meta-label">Methods</dt>
                <dd className="meta-value">UX Research, Mobile Design, User Testing</dd>
              </div>
            </dl>

            <div className="hero-actions">
              <a
                 target="_blank"
                href="https://www.figma.com/proto/xklBS0ojXLmnUPRxRkd261/INF1611_PRA0101_A8_XueerXu_FinalPrototype_2025-12-01?node-id=112-5258&t=19oNj9l7xCmVXKgi-1"
                className="view-prototype-btn"
                aria-label="View YumGo interactive prototype"
              >
                View Prototype →
              </a>
            </div>
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
                International foodie tourists need a personalized and centralized way to discover and book restaurants, so their travel experiences can be memorable, culturally-immersive, high-value, and easy.
              </p>
            </div>

            <div className="glance-item">
              <h3 className="glance-title">The Challenge</h3>
              <p className="glance-text">
                How might we support foodie international tourists in discovering and choosing restaurants by reducing information fragmentation, improving reliability, and providing cultural context during high stakes travel decisions?
              </p>
            </div>

            <div className="glance-item">
              <h3 className="glance-title">The Solution</h3>
              <p className="glance-text">
                YumGo integrates discovery, filtering, and booking into a single mobile experience, reducing the need for app hopping and lowering decision fatigue.
              </p>
            </div>
          </div>
        </div>
      </section>
        <section className="case-study-section solution-details">
        <div className="container">
          <h2 className="section-heading">Key Screens</h2>
          <p className="section-intro">
            Each screen addresses specific user needs identified through research, creating a cohesive experience from discovery to booking.
          </p>

          <div className="solution-showcase">
            <article className="solution-item">
              <div className="solution-visual">
                <div className="solution-image-container">
                  {/* Desktop: Grid view */}
                  <div className="solution-images-grid">
                    <img
                      src={yumgoProjectImage3}
                      alt="YumGo Learn About page showing cultural and local guide features"
                      className="solution-image"
                    />
                    <img
                      src={learnAbout2}
                      alt="YumGo Learn About page additional view"
                      className="solution-image"
                    />
                  </div>

                  {/* Mobile: Slideshow */}
                  <div className="solution-images-slideshow">
                    <ImageSlideshow
                      images={[
                        {
                          src: yumgoProjectImage3,
                          alt: 'YumGo Learn About page showing cultural and local guide features',
                          className: 'solution-image'
                        },
                        {
                          src: learnAbout2,
                          alt: 'YumGo Learn About page additional view',
                          className: 'solution-image'
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>

              <div className="solution-text">
                <div className="solution-header">
                  <span className="solution-number">01</span>
                  <h3 className="solution-title">Cultural & Local Guide</h3>
                </div>

                {/* <p className="solution-description">
                  The Learn About page helps users discover useful local knowledge, from unspoken rules like Canadian tipping culture to recommended local restaurants. Users can explore curated tips and insights that make it easier to fit in and feel comfortable in their local environment.
                </p> */}

                <div className="solution-details-grid">
                  <div className="solution-features-block">
                    <h4 className="block-label">Key Features</h4>
                    <ul className="solution-features" role="list">
                      <li>Guides to local norms and ways of doing things</li>
                      <li>Restaurant and neighborhood recommendations</li>
                      <li>Quick tips for everyday interactions</li>
                      <li>Curated content for travelers and newcomers</li>
                    </ul>
                  </div>

                  <div className="solution-impact-block">
                    <h4 className="block-label">Impact/Why This Matters</h4>
                    <div className="impact-quote">
                      <blockquote className="user-quote">
                        "I'm an observer, I don't belong."
                      </blockquote>
                      <cite className="quote-attribution">— User Interview Participant</cite>
                      <p className="quote-context">6/8 users felt they didn't belong when exploring new places</p>
                    </div>
                    <p className="impact-text">
                      By providing clear, practical guidance, users can navigate local culture confidently, avoid social awkwardness, and feel more connected to their surroundings.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className="solution-item reverse">
              <div className="solution-visual">
                <div className="solution-image-container">
                  {/* Desktop: Grid view */}
                  <div className="solution-images-grid">
                    <img
                      src={yumgoProjectImage2}
                      alt="YumGo Smart Filtering interface showing filter options"
                      className="solution-image"
                    />
                    <img
                      src={yumgoReviewPage}
                      alt="YumGo review page showing filter icons"
                      className="solution-image"
                    />
                  </div>

                  {/* Mobile: Slideshow */}
                  <div className="solution-images-slideshow">
                    <ImageSlideshow
                      images={[
                        {
                          src: yumgoProjectImage2,
                          alt: 'YumGo Smart Filtering interface showing filter options',
                          className: 'solution-image'
                        },
                        {
                          src: yumgoReviewPage,
                          alt: 'YumGo review page showing filter icons',
                          className: 'solution-image'
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>

              <div className="solution-text">
                <div className="solution-header">
                  <span className="solution-number">02</span>
                  <h3 className="solution-title">Filter icons for search and restaurant details</h3>
                </div>

                <div className="solution-details-grid">
                  <div className="solution-features-block">
                    <h4 className="block-label">Key Features</h4>
                    <ul className="solution-features" role="list">
                        <li>Tourist-specific filters, including dietary restrictions and accessibility options</li>
                      <li>Filter icons visible in both search results and restaurant detail pages</li>
                      <li>Menu item icons for easier scanning</li>
                    
                      <li>Accessible tap targets (44x44px minimum)</li>
                    </ul>
                  </div>
                    <div className="solution-impact-block">
                    <h4 className="block-label">Impact/Why This Matters</h4>
                    <div className="impact-stat">
                      <span className="stat-large">8/8</span>
                      <p className="stat-description">users struggled to find restaurant for their dietary needs</p>
                    </div>
                    <p className="impact-text">
                     Filter icons and visual cues make searching and browsing faster, more intuitive, and enhance personalized, authentic experiences.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className="solution-item">
              <div className="solution-visual">
                <div className="solution-image-container">
                  {/* Desktop: Grid view */}
                  <div className="solution-images-grid">
                    <img
                      src={yumgoRestaurantDetails1}
                      alt="YumGo restaurant details page showing comprehensive information"
                      className="solution-image"
                    />
                    <img
                      src={yumgoRestaurantDetails2}
                      alt="YumGo restaurant details page additional view"
                      className="solution-image"
                    />
                  </div>

                  {/* Mobile: Slideshow */}
                  <div className="solution-images-slideshow">
                    <ImageSlideshow
                      images={[
                        {
                          src: yumgoRestaurantDetails1,
                          alt: 'YumGo restaurant details page showing comprehensive information',
                          className: 'solution-image'
                        },
                        {
                          src: yumgoRestaurantDetails2,
                          alt: 'YumGo restaurant details page additional view',
                          className: 'solution-image'
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>

              <div className="solution-text">
                <div className="solution-header">
                  <span className="solution-number">03</span>
                  <h3 className="solution-title">Restaurant Details</h3>
                </div>

                <div className="solution-details-grid">
                  <div className="solution-features-block">
                    <h4 className="block-label">Key Features</h4>
                    <ul className="solution-features" role="list">
                      <li>Photo gallery with user-generated content</li>
                      <li>Menu preview with dietary indicators</li>
                      <li>Recent reviews with helpful sorting</li>
                      <li>Distance and directions integration</li>
                    </ul>
                  </div>

                  <div className="solution-impact-block">
                    <h4 className="block-label">Impact/Why This Matters</h4>
                    <div className="impact-stat">
                      <span className="stat-large">10/12</span>
                      <p className="stat-description">users seek authentic user-generated content to make decisions</p>
                    </div>
                    <p className="impact-text">
                      Comprehensive details with authentic photos and reviews help users make confident decisions about where to dine, reducing uncertainty and building trust before booking.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* <article className="solution-item reverse">
              <div className="solution-visual">
                <div className="image-placeholder large">
                  <span>Booking Flow</span>
                  <p>Simple three-step reservation process</p>
                </div>
              </div>

              <div className="solution-text">
                <div className="solution-header">
                  <span className="solution-number">04</span>
                  <h3 className="solution-title">Streamlined Booking</h3>
                </div>

                <p className="solution-description">
                  The booking flow was reduced to three simple steps: select date/time, enter party size, and confirm. Real-time availability prevents failed bookings. Guest checkout option removes unnecessary barriers, while account creation is offered as a value-add for easy rebooking.
                </p>

                <div className="solution-details-grid">
                  <div className="solution-features-block">
                    <h4 className="block-label">Key Features</h4>
                    <ul className="solution-features" role="list">
                      <li>Three-step booking process</li>
                      <li>Calendar view with available slots highlighted</li>
                      <li>Automatic confirmation and calendar sync</li>
                      <li>Easy modification and cancellation</li>
                    </ul>
                  </div>

                  <div className="solution-impact-block">
                    <h4 className="block-label">Impact</h4>
                    <div className="impact-stat">
                      <span className="stat-large">8/8</span>
                      <p className="stat-description">users mentioned frustrations from missing information on restaurant apps</p>
                    </div>
                    <p className="impact-text">
                      Having to open another app to make a reservation causes frustration. By integrating booking directly into the discovery flow, users save time and reduce context switching.
                    </p>
                  </div>
                </div>
              </div>
            </article> */}
          </div>

          <div className="section-transition">
            ↓ Let's take a look at how we got here ↓
          </div>
        </div>
      </section>

      {/* Key Features */}
      {/* <section className="case-study-section key-features">
        <div className="container">
          <h2 className="section-heading">Key Solution Features</h2>

          <div className="features-list">
            <article className="feature-row">
              <div className="feature-visual">
                <div className="feature-image-container">
                  <img
                    src={yumgoProjectImage1}
                    alt="Map-based restaurant discovery interface"
                    className="feature-image"
                  />
                </div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Intuitive Map-Based Discovery</h3>
                <p className="feature-description">
                  Browse restaurants visually on an interactive map. See real-time availability, ratings, and dietary options at a glance. The familiar map interface leverages existing mental models, making exploration natural and engaging.
                </p>
                <div className="feature-why">
                  <h4 className="feature-why-title">Why This Matters</h4>
                  <p className="feature-why-text">
                    User interviews showed that 6 out of 8 users prioritize location and proximity when searching for restaurants. A map-first approach reduces cognitive load by presenting spatial information visually, allowing users to make faster, more confident decisions based on their context and location.
                  </p>
                </div>
                  <div>↓ Let’s take a look at how we got here ↓</div>
              </div>
            </article>

            <article className="feature-row reverse">
              <div className="feature-visual">
                <div className="feature-image-container">
                  <img
                    src={yumgoProjectImage2}
                    alt="Smart filtering system interface"
                    className="feature-image"
                  />
                </div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Smart Filtering System</h3>
                <p className="feature-description">
                  Narrow down options quickly with intelligent filters for distance, price range, dietary restrictions, and ambiance. Filter combinations are persistent and easily adjustable.
                </p>
                <div className="feature-why">
                  <h4 className="feature-why-title">Why This Matters</h4>
                  <p className="feature-why-text">
                    Users reported decision fatigue when browsing too many options. Smart filters help reduce the paradox of choice by letting users quickly narrow results based on their preferences, while persistent filter states save time for users who search frequently.
                  </p>
                </div>
              </div>
            </article>

            <article className="feature-row">
              <div className="feature-visual">
                <div className="feature-image-container">
                  <img
                    src={yumgoProjectImage3}
                    alt="Seamless booking experience interface"
                    className="feature-image"
                  />
                </div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Seamless Booking Experience</h3>
                <p className="feature-description">
                  Complete reservations in just one tap. Real-time availability updates, automatic confirmation, and calendar integration eliminate common booking pain points. Users maintain full control with easy modification and cancellation.
                </p>
                <div className="feature-why">
                  <h4 className="feature-why-title">Why This Matters</h4>
                  <p className="feature-why-text">
                   8/8 mentioned frustrations from missing information on restaurant apps, and they stated that having to open another app to make a reservation causes frustration.
                  </p>
                </div>
              </div>
                  <div>↓ Let’s take a look at how we got here ↓</div>
            </article>
          </div>
        </div>
    
      </section> */}

      {/* Research Process */}
      <section className="case-study-section research-process">
        <div className="container">
          <h2 className="section-heading">Discover: Understanding the Problem</h2>

          <div className="">
            <div className="content-text">
              <h3 className="content-title">Research Approach</h3>
              <p className="content-paragraph">
                To build a solution grounded in real user needs, we decided that we needed to first answer the following research questions:
              </p>

              <div className="research-questions">
                <div className="research-question-item">
                  <span className="question-number">01</span>
                  <p className="question-text">What have been tourists' experiences with current online restaurant discovery and booking platforms, including how they navigate them and their attitudes toward them?</p>
                </div>
                <div className="research-question-item">
                  <span className="question-number">02</span>
                  <p className="question-text">What contextual factors related to tourism (time constraints, unfamiliarity, group dynamics) most significantly impact dining decisions?</p>
                </div>
                <div className="research-question-item">
                  <span className="question-number">03</span>
                  <p className="question-text">What factors contribute to providing foodie tourists with a valuable food experience?</p>
                </div>
              </div>

              <h3 className="content-title">Research Methods</h3>
              <div className="research-methods">
                  <div className="method-card">
                  <div className="method-icon" aria-hidden="true">01</div>
                  <h4 className="method-title">Literature Review</h4>
                  <p className="method-description">
                  Reviewed 6 academic sources to address key research questions, identify knowledge gaps, and highlight the importance of authenticity, immersion, and personalization in food tourism.

                  </p>
                </div>
                  <div className="method-card">
                  <div className="method-icon" aria-hidden="true">02</div>
                  <h4 className="method-title">Competitive Analysis</h4>
                  <p className="method-description">
                   Analyzed 6 restaurant discovery and booking platforms to identify industry standards, gaps, and opportunities. Findings showed that tourists must switch between multiple apps, leading to decision fatigue and difficulty finding authentic, tourist-relevant dining information.
                  </p>
                </div>
                <div className="method-card">
                  <div className="method-icon" aria-hidden="true">03</div>
                  <h4 className="method-title">User Interviews</h4>
                  <p className="method-description">
                   Conducted 8 semi-structured interviews with non-Canadian travelers who had visited a city over 100 km away, valued food during travel, used online tools to find restaurants, and spoke English. The goal was to uncover behaviors, pain points, and decision-making processes.
                  </p>
                </div>

              <p className="content-paragraph">These methods let us answer key research questions efficiently within our 4-month timeline and limited research budget.</p>
         {/* <p className="content-paragraph">Research Insights</p>
           <p className="content-paragraph">Here are some of the key takeaways:</p>  */}

                {/* <div className="method-card">
                  <div className="method-icon" aria-hidden="true">03</div>
                  <h4 className="method-title">User Journey Mapping</h4>
                  <p className="method-description">
                    Mapped current-state journeys to visualize pain points and emotional highs and lows throughout the restaurant discovery and booking process.
                  </p>
                </div>

                <div className="method-card">
                  <div className="method-icon" aria-hidden="true">04</div>
                  <h4 className="method-title">Task Analysis</h4>
                  <p className="method-description">
                    Observed 8 participants completing restaurant selection and booking tasks to identify usability issues and areas of friction.
                  </p>
                </div> */}
              </div>
            </div>
{/* 
            <div className="content-visual">
              <div className="image-placeholder large">
                <span>Research Process</span>
                <p>Photos from user interviews and testing sessions</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="case-study-section key-insights">
        <div className="container">
          <h2 className="section-heading">Define: Insights & User Understanding</h2>
 <h3 className="content-title">Key Research Insights</h3>
          <div className="insights-grid">
            <article className="insight-card">
              <div className="insight-number">01</div>
              <h3 className="insight-title">Information Fragmentation</h3>
              <p className="insight-description">
                "Every platform has a piece of the puzzle, but nothing has the complete picture."
              </p>
              <div className="insight-stat">
                <span className="stat-number">6/8</span>
                <span className="stat-label">participants mentioned cross-referencing different apps to get different types of information before making a decision
</span>
              </div>
            </article>

            <article className="insight-card">
              <div className="insight-number">02</div>
              <h3 className="insight-title">Outdated/Misleading/Missing Details</h3>
              <p className="insight-description">
                “very official and reputable and good restaurants that have been around for decades might have no online presence.”
              </p>
              <div className="insight-stat">
                <span className="stat-number">8/8</span>
                <span className="stat-label">interviewees mentioned frustrations from missing information on restaurant apps
</span>
              </div>
            </article>

            <article className="insight-card">
              <div className="insight-number">03</div>
              <h3 className="insight-title">Cultural Context & Barriers</h3>
              <p className="insight-description">
               “I had to switch between Chinese, English, and Korean.”
              </p>
              <div className="insight-stat">
                <span className="stat-number">6/8</span>
                <span className="stat-label">participants were from countries where English isn’t the primary language
</span>
              </div>
            </article>

            <article className="insight-card">
              <div className="insight-number">04</div>
              <h3 className="insight-title">High-Stakes Decision-Making</h3>
              <p className="insight-description">
                “Being hungry made every single decision feel heavier.”
              </p>
              <div className="insight-stat">
                <span className="stat-number">5/8</span>
                <span className="stat-label">participants mentioned group pressure in decision-making
</span>
              </div>
            </article>
          </div>

          <h3 className="content-title" style={{ marginTop: 'var(--spacing-xl)' }}>Design Goals</h3>

          <div className="design-goals">
            <div className="design-goal-item">
              <span className="goal-number">01</span>
              <h4 className="goal-title">Personalized & Relevant Results</h4>
              <p className="goal-text">Tailor recommendations with profiles, filters, allergen options, and AI suggestions.</p>
            </div>
            <div className="design-goal-item">
              <span className="goal-number">02</span>
              <h4 className="goal-title">Inclusion & Cultural Mediation</h4>
              <p className="goal-text">Support translation, cultural guidance, and group decision-making.</p>
            </div>
            <div className="design-goal-item">
              <span className="goal-number">03</span>
              <h4 className="goal-title">Reliability & Trustworthiness</h4>
              <p className="goal-text">Provide verified info, transparent suggestions, and real-time alerts.</p>
            </div>
            <div className="design-goal-item">
              <span className="goal-number">04</span>
              <h4 className="goal-title">End-to-End Support</h4>
              <p className="goal-text">Streamline the full dining journey with wishlist, routing, and social media cues.</p>
            </div>
          </div>

          <h3 className="content-title" style={{ marginTop: 'var(--spacing-xl)' }}>User Personas</h3>
          <p className="content-paragraph">
            We created two user personas (eastern and western foodies) to capture the goals and pain points, ensuring our design decisions stayed aligned with their needs and addressing their existing pain points.
          </p>

          {/* Desktop: Grid view */}
          <div className="persona-images persona-images-grid">
            <div className="persona-image-wrapper">
              <img
                src={yumgoPersona1}
                alt="Eastern foodie user persona"
                className="persona-image"
              />
            </div>
            <div className="persona-image-wrapper">
              <img
                src={yumgoPersona2}
                alt="Western foodie user persona"
                className="persona-image"
              />
            </div>
          </div>

          {/* Mobile: Slideshow */}
          <div className="persona-images persona-images-slideshow">
            <ImageSlideshow
              images={[
                {
                  src: yumgoPersona1,
                  alt: 'Eastern foodie user persona',
                  className: 'persona-image'
                },
                {
                  src: yumgoPersona2,
                  alt: 'Western foodie user persona',
                  className: 'persona-image'
                }
              ]}
            />
          </div>

          <h3 className="content-title" style={{ marginTop: 'var(--spacing-xl)' }}>Storyboard</h3>
          <p className="content-paragraph">
            I visualized the user journey to highlight pain points, like unfamiliar environments and dietary needs, while aligning the team on key user scenarios.
          </p>

          <div className="storyboard-image-wrapper">
            <img
              src={yumgoStoryboard}
              alt="YumGo user journey storyboard"
              className="storyboard-image"
            />
          </div>
        </div>
      </section>

      {/* Design Process */}
      {/* <section className="case-study-section design-process">
        <div className="container">
          <h2 className="section-heading">Develop: Design Process</h2>

          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-marker" aria-hidden="true"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Ideation & Sketching</h3>
                <p className="timeline-description">
                  Generated multiple concepts through rapid sketching sessions. Explored different approaches to information architecture and navigation patterns. Created low-fidelity wireframes to test core concepts with users.
                </p>
                <div className="image-placeholder medium">
                  <span>Initial Sketches</span>
                  <p>Early wireframes and concept exploration</p>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker" aria-hidden="true"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Prototyping & Testing</h3>
                <p className="timeline-description">
                  Built interactive prototypes in Figma to validate assumptions. Conducted usability testing with 8 participants across 3 iterations. Each round of testing informed specific refinements to the navigation, filtering system, and booking flow.
                </p>
                <div className="prototype-images">
                  <div className="prototype-image-wrapper">
                    <img
                      src={yumgoBooking1}
                      alt="YumGo prototype testing - booking flow"
                      className="prototype-image"
                    />
                  </div>
                  <div className="prototype-image-wrapper">
                    <img
                      src={yumgoBooking2}
                      alt="YumGo prototype testing - user feedback"
                      className="prototype-image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker" aria-hidden="true"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Visual Design & Refinement</h3>
                <p className="timeline-description">
                  Developed a cohesive visual language that balances playfulness with professionalism. Created a design system with reusable components. Ensured WCAG AA compliance for color contrast and interactive elements.
                </p>
                <div className="image-placeholder medium">
                  <span>Design System</span>
                  <p>Colors, typography, and component library</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Solution Deep Dive */}
      {/* <section className="case-study-section solution-details">
        <div className="container">
          <h2 className="section-heading">Solution: Key Screens</h2>

          <div className="solution-showcase">
            <article className="solution-item">
              <div className="solution-text">
                <h3 className="solution-title">Map-First Discovery</h3>
                <p className="solution-description">
                  The home screen centers around an interactive map showing nearby restaurants. Users can pan and zoom to explore different areas, with restaurant markers providing quick preview information on tap. This visual approach reduces cognitive load and leverages familiar interaction patterns.
                </p>
                <ul className="solution-features" role="list">
                  <li>Real-time availability indicators</li>
                  <li>Clustered markers for better readability</li>
                  <li>Quick preview cards on marker tap</li>
                  <li>Toggle between map and list views</li>
                </ul>
                <div className="feature-why">
                  <h4 className="feature-why-title">Why This Matters</h4>
                  <p className="feature-why-text">
                    User interviews showed that 6 out of 8 users prioritize location and proximity when searching for restaurants. A map-first approach reduces cognitive load by presenting spatial information visually, allowing users to make faster, more confident decisions based on their context and location.
                  </p>
                </div>
              </div>
              <div className="solution-visual">
                <div className="image-placeholder large">
                  <span>Map Screen</span>
                  <p>Interactive map view with restaurant markers</p>
                </div>
              </div>
            </article>

            <article className="solution-item reverse">
              <div className="solution-text">
                <h3 className="solution-title">Smart Filtering</h3>
                <p className="solution-description">
                  Filters are designed for quick access without cluttering the interface. The bottom sheet design allows users to apply multiple filters while maintaining context of the map. Filter chips show active selections, and a clear all option provides easy reset.
                </p>
                <ul className="solution-features" role="list">
                  <li>Contextual filter suggestions based on time and location</li>
                  <li>Save filter combinations as presets</li>
                  <li>Real-time result count updates</li>
                  <li>Accessible tap targets (44x44px minimum)</li>
                </ul>
              </div>
              <div className="solution-visual">
                <div className="image-placeholder large">
                  <span>Filter Interface</span>
                  <p>Bottom sheet with filter options</p>
                </div>
              </div>
            </article>

            <article className="solution-item">
              <div className="solution-text">
                <h3 className="solution-title">Restaurant Details</h3>
                <p className="solution-description">
                  The details page provides comprehensive information while maintaining scanability. Key information (hours, location, price range) is front and center. User photos and reviews build trust, while the prominent booking CTA drives action.
                </p>
                <ul className="solution-features" role="list">
                  <li>Photo gallery with user-generated content</li>
                  <li>Menu preview with dietary indicators</li>
                  <li>Recent reviews with helpful sorting</li>
                  <li>Distance and directions integration</li>
                </ul>
              </div>
              <div className="solution-visual">
                <div className="image-placeholder large">
                  <span>Restaurant Details</span>
                  <p>Comprehensive information and booking CTA</p>
                </div>
              </div>
            </article>

            <article className="solution-item reverse">
              <div className="solution-text">
                <h3 className="solution-title">Streamlined Booking</h3>
                <p className="solution-description">
                  The booking flow was reduced to three simple steps: select date/time, enter party size, and confirm. Real-time availability prevents failed bookings. Guest checkout option removes unnecessary barriers, while account creation is offered as a value-add for easy rebooking.
                </p>
                <ul className="solution-features" role="list">
                  <li>Three-step booking process</li>
                  <li>Calendar view with available slots highlighted</li>
                  <li>Automatic confirmation and calendar sync</li>
                  <li>Easy modification and cancellation</li>
                </ul>
              </div>
              <div className="solution-visual">
                <div className="image-placeholder large">
                  <span>Booking Flow</span>
                  <p>Simple three-step reservation process</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section> */}

      {/* Results & Impact */}
      <section className="case-study-section results">
        <div className="container">
          <h2 className="section-heading">Results & Impact</h2>

          <div className="results-grid">
            <div className="result-card">
              <div className="result-metric">85%</div>
              <p className="result-description">
                Task completion rate for finding and booking a restaurant in usability testing (up from 60% in initial tests)
              </p>
            </div>

            <div className="result-card">
              <div className="result-metric">3 min</div>
              <p className="result-description">
                Average time to complete booking reduced from 8 minutes to 3 minutes
              </p>
            </div>

            <div className="result-card">
              <div className="result-metric">4.6/5</div>
              <p className="result-description">
                Average user satisfaction score in post-test surveys
              </p>
            </div>

            <div className="result-card">
              <div className="result-metric">92%</div>
              <p className="result-description">
                Of participants said they would use YumGo over current solutions
              </p>
            </div>
          </div>

          <div className="testimonial">
            <blockquote className="testimonial-quote">
              "This is exactly what I've been looking for. The map makes it so easy to find places near me, and booking was incredibly simple. I'd definitely use this."
            </blockquote>
            <cite className="testimonial-author">— Usability Test Participant</cite>
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
                  <strong>Less is more:</strong> Removing features is often harder than adding them. The most impactful improvements came from simplifying the booking flow, not adding features.
                </li>
                <li>
                  <strong>Context matters:</strong> Understanding the user's environment (often on-the-go, time-constrained) shaped critical design decisions like the map-first approach and streamlined booking.
                </li>
                <li>
                  <strong>Test early and often:</strong> Each round of usability testing revealed assumptions that would have created friction in the final product. Low-fidelity testing saved significant time.
                </li>
                <li>
                  <strong>Accessibility drives better design:</strong> Designing for accessibility (color contrast, tap targets, screen reader support) resulted in a more usable product for everyone.
                </li>
              </ul>
            </div>

            <div className="learning-block">
              <h3 className="learning-title">Future Enhancements</h3>
              <ul className="learning-list" role="list">
                <li>
                  <strong>Social features:</strong> Allow users to share restaurants and coordinate group dining with friends.
                </li>
                <li>
                  <strong>Personalization:</strong> Machine learning to suggest restaurants based on past bookings and preferences.
                </li>
                <li>
                  <strong>Waitlist integration:</strong> For restaurants that don't take reservations, add to waitlist and get notified when table is ready.
                </li>
                <li>
                  <strong>Dietary restrictions:</strong> Enhanced filtering and menu annotations for allergies and dietary needs.
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

export default CaseStudyYumGo
