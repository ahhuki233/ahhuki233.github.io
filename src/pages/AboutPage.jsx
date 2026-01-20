import { useEffect, useRef } from 'react'
import './AboutPage.css'

// ========================================
// 📸 ADD YOUR IMAGES HERE
// ========================================
// To add images:
// 1. Place your image files in /src/assets/images/
// 2. Uncomment the import lines below and replace with your image filenames
// 3. The images will automatically appear in the about page

import profileImage from '../assets/images/my-photo.jpg'
import catDrawingImage from '../assets/images/cat-drawing.png'
import belayImage from '../assets/images/belay.jpg'
import hotPotImage from '../assets/images/hot-pot.png'

// ========================================

const AboutPage = () => {
  const blocksRef = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    blocksRef.current.forEach((block) => {
      if (block) observer.observe(block)
    })

    return () => {
      blocksRef.current.forEach((block) => {
        if (block) observer.unobserve(block)
      })
    }
  }, [])

  return (
    <div className="about-page">
      <div className="about-grid">
        {/* Section 1 - With Background */}
        <div className="about-section-1-bg">
          {/* Text Block 1 - positioned left */}
          <div
            className="about-block text-block-1 fade-in"
            ref={(el) => (blocksRef.current[0] = el)}
          >
              <h1 className="about-heading section-1-heading">Always exploring new ideas</h1>
            <p>
              I'm Xueer (Yuki) Xu, an insight-driven researcher and user-centered
              designer passionate about creating meaningful digital experiences.
            </p>
            <p>
              I've always been fascinated by the intersection of human behavior
              and technology. I started my career as a graphic designer but quickly adapted to front-end development, gaining 4 years of hands-on experience building websites. </p>
               <p>My approach to design is rooted in curiosity. I like to explore and seek out anything and everything
              that helps me understand how people interact with the digital world.
            </p>
          </div>

          {/* Image Block 1 - positioned right */}
          <div
            className="about-block image-block-1 fade-in"
            ref={(el) => (blocksRef.current[1] = el)}
          >
            {profileImage ? (
              <img
                src={profileImage}
                alt="Xueer (Yuki) Xu"
                className="about-image"
              />
            ) : (
              <div className="image-placeholder">
                <span>Your photo here</span>
              </div>
            )}
          </div>
        </div>

        {/* Section 2 Heading */}
        <h1 className="about-heading section-2-heading">Yuki — Out of Office</h1>

        {/* Text Block 2 - positioned right */}
        <div
          className="about-block text-block-2 fade-in"
          ref={(el) => (blocksRef.current[2] = el)}
        >
          <h3 className="hobby-title">Art lover</h3>
          <p>
            I love drawing and painting since I was a kid. It's my way of seeing the world differently and capturing moments that inspire me.
          </p>
        </div>

        {/* Image Block 2 - positioned left */}
        <div
          className="about-block image-block-2 fade-in"
          ref={(el) => (blocksRef.current[3] = el)}
        >
          <img
            src={catDrawingImage}
            alt="Cat drawing sketch"
            className="about-image"
          />
        </div>

        {/* Text Block 3 - positioned center/left */}
        <div
          className="about-block text-block-3 fade-in"
          ref={(el) => (blocksRef.current[4] = el)}
        >
          <h3 className="hobby-title">Bouldering enthusiast</h3>
          <p>
            I was introduced to bouldering by a friend and love it! It's so relaxing and helps me conquer my fear of heights.
          </p>
        </div>

        {/* Image Block 3 - positioned right */}
        <div
          className="about-block image-block-3 fade-in"
          ref={(el) => (blocksRef.current[5] = el)}
        >
          <img
            src={belayImage}
            alt="Bouldering and climbing"
            className="about-image"
          />
        </div>

        {/* Text Block 4 - Hot pot lover */}
        <div
          className="about-block text-block-4 fade-in"
          ref={(el) => (blocksRef.current[6] = el)}
        >
          <h3 className="hobby-title">Foodie with a love for hot pot :)</h3>
          <p>
            Nothing beats gathering around a hot pot with friends and family. This is also my ultimate comfort food and favorite way to spend quality time together.
          </p>
        </div>

        {/* Image Block 4 - positioned left */}
        <div
          className="about-block image-block-4 fade-in"
          ref={(el) => (blocksRef.current[7] = el)}
        >
          <img
            src={hotPotImage}
            alt="Hot pot dining"
            className="about-image"
          />
        </div>

      </div>
    </div>
  )
}

export default AboutPage
