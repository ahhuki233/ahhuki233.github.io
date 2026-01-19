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
import yumgoFinalSketch from '../assets/images/yumgo-final-sketch.jpg'
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
                A user-centered mobile app that reimagines restaurant discovery through intuitive map-based interactions and straightfoward booking experiences.
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
                href="https://www.figma.com/proto/xklBS0ojXLmnUPRxRkd261/INF1611_PRA0101_A8_XueerXu_FinalPrototype_2025-12-01?node-id=112-5258&t=19oNj9l7xCmVXKgi-1"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View YumGo interactive prototype (opens in new tab)"
              >
                View Prototype
                <span className="external-link-icon" aria-hidden="true">↗</span>
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
              <h3 className="glance-title">The Opportunity</h3>
              <p className="glance-text">
                International foodie tourists need a personalized and centralized way to discover and book restaurants, so their travel experiences can be memorable, culturally-immersive, high-value, and easy.
              </p>
            </div>

            <div className="glance-item">
              <h3 className="glance-title">The Problem</h3>
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

          <div className="yumgo-solution-showcase">
            <article className="yumgo-solution-item">
              <div className="yumgo-visual">
                <div className="yumgo-image-container">
                  {/* Desktop: Grid view */}
                  <div className="yumgo-screens-grid">
                    <img
                      src={yumgoProjectImage3}
                      alt="YumGo Learn About page showing cultural and local guide features"
                      className="yumgo-solution-image"
                    />
                    <img
                      src={learnAbout2}
                      alt="YumGo Learn About page additional view"
                      className="yumgo-solution-image"
                    />
                  </div>

                  {/* Mobile: Slideshow */}
                  <div className="yumgo-solution-images-slideshow">
                    <ImageSlideshow
                      images={[
                        {
                          src: yumgoProjectImage3,
                          alt: 'YumGo Learn About page showing cultural and local guide features',
                          className: 'yumgo-solution-image'
                        },
                        {
                          src: learnAbout2,
                          alt: 'YumGo Learn About page additional view',
                          className: 'yumgo-solution-image'
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>

              <div className="yumgo-solution-text">
                <div className="solution-header">
                  {/* <span className="solution-number">01</span> */}
                  <h3 className="solution-title">Cultural & Local Guide</h3>
                </div>

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

            <article className="yumgo-solution-item yumgo-reverse">
              <div className="yumgo-visual">
                <div className="yumgo-image-container">
                  {/* Desktop: Grid view */}
                  <div className="yumgo-screens-grid">
                    <img
                      src={yumgoProjectImage2}
                      alt="YumGo Smart Filtering interface showing filter options"
                      className="yumgo-solution-image"
                    />
                    <img
                      src={yumgoReviewPage}
                      alt="YumGo review page showing filter icons"
                      className="yumgo-solution-image"
                    />
                  </div>

                  {/* Mobile: Slideshow */}
                  <div className="yumgo-solution-images-slideshow">
                    <ImageSlideshow
                      images={[
                        {
                          src: yumgoProjectImage2,
                          alt: 'YumGo Smart Filtering interface showing filter options',
                          className: 'yumgo-solution-image'
                        },
                        {
                          src: yumgoReviewPage,
                          alt: 'YumGo review page showing filter icons',
                          className: 'yumgo-solution-image'
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>

              <div className="yumgo-solution-text">
                <div className="solution-header">
                  {/* <span className="solution-number">02</span> */}
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

            <article className="yumgo-solution-item">
              <div className="yumgo-visual">
                <div className="yumgo-image-container">
                  {/* Desktop: Grid view */}
                  <div className="yumgo-screens-grid">
                    <img
                      src={yumgoRestaurantDetails1}
                      alt="YumGo restaurant details page showing comprehensive information"
                      className="yumgo-solution-image"
                    />
                    <img
                      src={yumgoRestaurantDetails2}
                      alt="YumGo restaurant details page additional view"
                      className="yumgo-solution-image"
                    />
                  </div>

                  {/* Mobile: Slideshow */}
                  <div className="yumgo-solution-images-slideshow">
                    <ImageSlideshow
                      images={[
                        {
                          src: yumgoRestaurantDetails1,
                          alt: 'YumGo restaurant details page showing comprehensive information',
                          className: 'yumgo-solution-image'
                        },
                        {
                          src: yumgoRestaurantDetails2,
                          alt: 'YumGo restaurant details page additional view',
                          className: 'yumgo-solution-image'
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>

              <div className="yumgo-solution-text">
                <div className="solution-header">
                  {/* <span className="solution-number">03</span> */}
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
                      <span className="stat-large">6/8</span>
                      <p className="stat-description">participants mentioned cross-referencing different apps to get different types of information before making a decision
</p>
                    </div>
                    <p className="impact-text">
                      An all-in-one experience from discovery to booking to directions, enhancing the user journey and resolving common app navigation and booking issues.
                    </p>
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
              </div>
            </div>
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

    

          <h3 className="content-title" style={{ marginTop: 'var(--spacing-xl)' }}>User Personas</h3>
          <p className="content-paragraph">
            We created two user personas to capture the goals and pain points, ensuring our design decisions stayed aligned with their needs and addressing their existing pain points.
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

          <p className="content-paragraph" style={{ marginTop: 'var(--spacing-md)' }}>
            <strong>Frame 1-2:</strong> The traveler arrives in Toronto with luggage, excited to explore, but feels frustrated trying to find suitable meat-free food options. <strong>Frame 3-5:</strong> They discover the "FindEat" app, use dietary filters like gluten-free and vegan to find a nearby restaurant, and quickly reserve a spot just a one-minute walk away. <strong>Frame 6:</strong> They enjoy the meal and leave a 5-star review on the app.
          </p>

          <h3 className="content-title" style={{ marginTop: 'var(--spacing-xl)' }}>UI Flow</h3>
          <p className="content-paragraph">
            After gathering commonality and ideas from the low-fidelity sketches created by my team members, I synthesized the key concepts into this comprehensive UI flow diagram. This sketch helped align the team on the overall navigation structure and user journey before moving into higher-fidelity wireframes.
          </p>

          <div className="storyboard-image-wrapper">
            <img
              src={yumgoFinalSketch}
              alt="YumGo UI flow diagram showing comprehensive user journey and navigation structure"
              className="storyboard-image"
            />
          </div>

          <h3 className="content-title" style={{ marginTop: 'var(--spacing-xl)' }}>Design Goals</h3>
          <p className="content-paragraph">
            Based on our research insights, we established four design goals to guide our solution: creating a personalized experience, ensuring inclusivity across cultures, building reliability and trust, and providing end-to-end support throughout the dining journey.
          </p>

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
              <p className="goal-text">Optimize the full dining journey with wishlist, routing, and social media cues.</p>
            </div>
          </div>
        </div>
      </section>

   

      {/* Develop & Test */}
      <section className="case-study-section development">
        <div className="container">
          <h2 className="section-heading">Design & Test: Iterative Testing & Adaptation</h2>

      
            <div>
              <h3 className="content-title">Design Collaboration</h3>
              <p className="content-paragraph">
               I collaborated closely with the team during the wireframe and prototype phase, contributing design ideas for the Learn About page and providing clarifications to ensure smooth execution and alignment.
              </p>
              <ul className="content-paragraph" style={{ paddingLeft: 'var(--spacing-md)' }}>
                <li>Created and led UI sketches before translating them into Figma wireframes</li>
    <li>Conducted usability tests and gathered feedback to refine designs</li>
    <li>Maintained continuous communication with teammates to ensure design consistency</li>
    <li>Ensured final designs aligned with project goals and user needs</li>
              </ul>
            </div>

          <h3 className="content-title" style={{ marginTop: 'var(--spacing-xl)' }}>Usability Test</h3>
          <p className="section-intro">
            I conducted think-aloud usability tests with two participants to evaluate the <a href="https://www.figma.com/proto/yWp71F0guPfT0ayefFTor3/INF1611_PRA0101_A5_Group-8_-WireframePrototype_2025-11-03?node-id=1-2&t=Mn2DQxJktr0i7ZK2-1" target="_blank" rel="noopener noreferrer" className="inline-link">mid-fidelity prototype</a>, capturing real-time insights as they navigated the system.
          </p>

          <p className="content-paragraph" style={{ marginBottom: 'var(--spacing-md)' }}>
            Participants were prompted to complete two tasks:
          </p>

          <div className="research-methods">
            <div className="method-card">
              <div>
                <h4 className="method-title">1. Find and Book a Restaurant</h4>
                <p className="method-description">
                  A vegan user and their gluten-free friend with a dog search for pet-friendly restaurants, review details like menu, photos, and distance, and successfully make a reservation.
                </p>
              </div>
            </div>

            <div className="method-card">
              <div>
                <h4 className="method-title">2. Leave a Review After Dining</h4>
                <p className="method-description">
                  Navigate to the restaurant's page and post feedback easily and intuitively.
                </p>
              </div>
            </div>
          </div>

          <h3 className="content-title" style={{ marginTop: 'var(--spacing-xl)' }}>Key Testing Insights</h3>

          <div className="insights-grid">
            <div className="insight-card">
              <h4 className="insight-title">Filter Discoverability</h4>
              <p className="insight-description">
                "I didn't notice the dietary filter icons at first, cause they blended in too much with the other elements."
              </p>
              <p className="insight-stat">
                <strong>Action Taken:</strong> Increased visual prominence of filter icons and added subtle animation on page load.
              </p>
            </div>

            <div className="insight-card">
              <h4 className="insight-title">Booking Confirmation</h4>
              <p className="insight-description">
                "I wasn't sure if my booking went through. Nothing happens after I click the reserve button."
              </p>
              <p className="insight-stat">
                <strong>Action Taken:</strong> Added a clear confirmation button transition to indicate successful booking.
              </p>
            </div>

            <div className="insight-card">
              <h4 className="insight-title">Navigation Visibility</h4>
              <p className="insight-description">
                "How can I leave a review? I couldn't find the review section."
              </p>
              <p className="insight-stat">
                <strong>Action Taken:</strong> Improved visibility of the review tab.
              </p>
            </div>

            <div className="insight-card">
              <h4 className="insight-title">Cultural Context</h4>
              <p className="insight-description">
                "The tipping culture information was exactly what I needed as someone new to Canada!"
              </p>
              <p className="insight-stat">
                <strong>Success:</strong> Cultural guidance features were highly valued by international users, validating our research insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="case-study-section results">
        <div className="container">
          <h2 className="section-heading">Results & Reflection</h2>

          <div className="content-block">
            <div>
              <h3 className="content-title">Outcome</h3>
              <ul className="content-paragraph" style={{ paddingLeft: 'var(--spacing-md)' }}>
                <li>Users can discover restaurants using dietary filters with no errors;</li>
                <li>User feedback emphasized positive reactions to the engaging app interaction and the user-friendly approach for exploring local food and booking tables.</li>
                <li>User commented that the familiar patterns such as layout inspired by Google Maps reduced the learning curve;</li>
                <li>User feedback highlights the 'cultural tips' as a standout new feature that adds significant value for exloring a new place.</li>
              </ul>
            </div>

            <div>
              <h3 className="content-title">What I'd Do Differently</h3>
              <ul className="content-paragraph" style={{ paddingLeft: 'var(--spacing-md)' }}>
                <li>Conduct more extensive usability testing with a larger sample size to validate design decisions across diverse user groups;</li>
                <li>Implement A/B testing for key features like the filter interface to compare different design approaches;</li>
                <li>Gather quantitative metrics alongside qualitative feedback to measure task completion rates and time-on-task;</li>
                <li>Test with users in actual travel contexts to better understand real-world usage patterns and pain points.</li>
              </ul>
            </div>
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
                  <strong>Context matters:</strong> Understanding the user's environment (often on-the-go, time-constrained) shaped critical design decisions like the map-first approach and simplifying booking.
                </li>
                <li>
                  <strong>Test early and often:</strong> Each round of usability testing revealed assumptions that would have created friction in the final product. Low-fidelity testing saved significant time.
                </li>
                <li>
                  <strong>Accessibility drives better design:</strong> Designing for accessibility (color contrast and tap targets support) resulted in a more usable product for everyone.
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
