import { Link } from 'react-router-dom'
import './Projects.css'
import ImageSlideshow from './ImageSlideshow'
import kdsProjectImage from '../assets/images/kds-project-image.png'
import yumgoImage1 from '../assets/images/yumgo-project-image-1.png'
import yumgoImage2 from '../assets/images/yumgo-project-image-2.png'
import yumgoImage3 from '../assets/images/yumgo-project-image-3.png'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'YumGo: Restaurant Discovery & Booking',
      description:
        'A user-centered restaurant discovery and booking app built on familiar map-based interactions. Student project focused on intuitive navigation and seamless booking experience.',
      role: 'UX Researcher & Designer',
      tags: ['UX Research', 'Mobile Design', 'User Testing','Leadership'],
      link: '/case-study/yumgo',
      accentColor: 'purple',
      images: [yumgoImage1, yumgoImage2, yumgoImage3],
    },
    {
      id: 2,
      title: 'Kitchen Display System',
      description:
        'Designed and developed a comprehensive Kitchen Display System to streamline restaurant operations. Led the UI/UX design and contributed to front-end development using .NET 8.',
      role: 'Designer & Front-end Developer',
      tags: ['UI Design', '.NET 8', 'Front-end Development','Cross-Function Team Collaboration'],
      link: '/case-study/kds',
      accentColor: 'orange',
      images: [kdsProjectImage],
    },
    // {
    //   id: 3,
    //   title: 'Mobile Banking App',
    //   description:
    //     'Created a user-centered mobile banking experience with focus on security and ease of use for all age groups.',
    //   role: 'UX/UI Designer',
    //   tags: ['Mobile Design', 'User Testing', 'Figma'],
    //   link: '#',
    //   accentColor: 'green',
    // },
    // {
    //   id: 4,
    //   title: 'Design System',
    //   description:
    //     'Built a comprehensive design system and component library to streamline product development across teams.',
    //   role: 'Design Systems Lead',
    //   tags: ['Design Systems', 'React', 'Documentation'],
    //   link: '#',
    //   accentColor: 'purple',
    // },
  ]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">
          Featured <span className="highlight orange">Projects</span>
        </h2>
        <p className="projects-intro">
          A selection of my recent work showcasing user-centered design and development
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`project-card card accent-${project.accentColor}`}
              role="article"
              aria-labelledby={`project-title-${project.id}`}
            >
              <div className="project-image" aria-hidden="true">
                {project.images && project.images.length > 0 ? (
                  <div className={`project-images-grid project-images-${project.accentColor}`}>
                    {/* Desktop: Grid view */}
                    <div className="project-images-grid-view">
                      {project.images.map((image, index) => (
                        <div key={index} className="project-image-wrapper">
                          <img
                            src={image}
                            alt={`${project.title} preview ${index + 1}`}
                            className="project-image-img"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Mobile: Slideshow */}
                    <div className="project-images-slideshow">
                      <ImageSlideshow
                        images={project.images.map((image, index) => ({
                          src: image,
                          alt: `${project.title} preview ${index + 1}`,
                          className: 'project-image-img',
                          wrapperClassName: 'project-image-wrapper'
                        }))}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="image-placeholder">
                    <span>Project image here</span>
                  </div>
                )}
              </div>
              <div className="project-content">
                <h3 id={`project-title-${project.id}`} className="project-title">{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p className="project-description">{project.description}</p>

                <ul className="project-tags" role="list" aria-label="Project technologies">
                  {project.tags.map((tag) => (
                    <li key={tag} className="project-tag">
                      {tag}
                    </li>
                  ))}
                </ul>

                {project.link.startsWith('/') ? (
                  <Link
                    to={project.link}
                    className="project-link underline-animation"
                    aria-label={`View ${project.title} case study`}
                  >
                    View Case Study →
                  </Link>
                ) : (
                  <a
                    href={project.link}
                    className="project-link underline-animation"
                    aria-label={`View ${project.title} case study`}
                  >
                    View Case Study →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
