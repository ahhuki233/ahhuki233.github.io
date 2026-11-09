import { Link } from 'react-router-dom'
import './Projects.css'
import ImageSlideshow from './ImageSlideshow'
import kdsProjectImage from '../assets/images/kds-project-image.png'
import weathercanImage from '../assets/images/weathercan-home-page.png'
import selfAssessmentImage from '../assets/images/self-assessment-portal.png'
import yumgoImage1 from '../assets/images/yumgo-project-image-1.png'
import yumgoImage2 from '../assets/images/yumgo-project-image-2.png'
import yumgoImage3 from '../assets/images/yumgo-project-image-3.png'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'YumGo: Restaurant Discovery and Booking',
      description:
        'Designed a user-centered restaurant discovery and booking app built on familiar map-based interactions. Student group project focused on intuitive navigation and seamless booking experience.',
      role: 'UX Researcher & Designer',
      tags: ['Figma','UX Research', 'Mobile Design', 'User Testing','Leadership'],
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
      tags: ['Figma', 'UI Design', '.NET 8', 'Front-end Development','Cross-Function Team Collaboration'],
      link: '/case-study/kds',
      accentColor: 'orange',
      images: [kdsProjectImage],
    },
    {
      id: 3,
      //title: 'ECCC’s weather services (WeatherCAN and weather.gc.ca)',
      title: 'WeatherCAN and weather.gc.ca',
      description:
        'Helped modernize the forecast and alert features of WeatherCAN, a weather app for Canadians. The focus was accurate local forecasts and a clean, accessible interface built for Canada’s climate and geography.',
      role: 'UX Designer',
      tags: ['UX Research', 'Mobile Design', 'Data Visualization', 'Accessibility'],
      link: '#',
      accentColor: 'orange',
      images: [weathercanImage],
      imageCover: true,
      inProgress: true,
    },
    {
      id: 4,
      title: 'Service Review Self-Assessment Portal',
      description:
        'Designed and developed a self-assessment portal enabling the Service Review Team to conduct service reviews for both internal and external services at Enviornment and Climate Change Canada (ECCC).',
      role: 'UX Researcher, Designer & Developer',
      tags: ['UX Research', 'Information Architecture', 'Service Design', 'Power Apps Canvas Development', 'User Testing'],
      link: '#',
      accentColor: 'orange',
      images: [selfAssessmentImage],
      imageBg: '#ffffff',
      inProgress: true,
    },
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
              className={`project-card card accent-${project.accentColor}${project.inProgress ? ' project-card-in-progress' : ''}`}
              role="article"
              aria-labelledby={`project-title-${project.id}`}
            >
              <div className="project-image" aria-hidden="true">
                {project.images && project.images.length > 0 ? (
                  <div className={`project-images-grid project-images-${project.accentColor}`} style={project.imageBg ? { backgroundColor: project.imageBg } : undefined}>
                    {/* Desktop: Grid view */}
                    <div className="project-images-grid-view">
                      {project.images.map((image, index) => (
                        <div
                          key={index}
                          className="project-image-wrapper"
                          style={project.imageCover ? { aspectRatio: '1194/834', overflow: 'hidden' } : undefined}
                        >
                          <img
                            src={image}
                            alt={`${project.title} preview ${index + 1}`}
                            className="project-image-img"
                            style={project.imageCover ? { objectFit: 'cover', objectPosition: 'top', height: '100%' } : undefined}
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
                {project.inProgress && (
                  <span className="project-badge project-badge-in-progress" aria-label="Project in progress">
                    In Progress
                  </span>
                )}
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

                {project.inProgress && project.link === '#' ? (
                  <span className="project-link-coming-soon" aria-label="Case study coming soon">
                    Case study coming soon
                  </span>
                ) : project.link.startsWith('/') ? (
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
