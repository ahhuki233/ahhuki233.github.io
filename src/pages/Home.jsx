import Hero from '../components/Hero'
import Projects from '../components/Projects'
import './Home.css'

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <section className="philosophy-section">
        <div className="container">
          <div className="philosophy-content">
            <p>
              Through research and empathetic design, I strive to create
              experiences that are not only functional but also delightful and
              accessible to all users. Every project is an opportunity to learn
              something new about human needs and behaviors.
            </p>
            <p>
              I believe great design starts with understanding the problem, the users, and the context. This belief drives me to dive deep into research, ask thoughtful questions, and challenge assumptions.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
