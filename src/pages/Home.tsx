import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import Navigation from '../components/Navigation'
import TxtRotate from '../components/TxtRotate'
import CountUp from '../components/CountUp'
import { BASE, socialLinks } from '../data/site'

const SLIDE_COUNT = 3
const AUTOPLAY_MS = 7000

const rotatePhrases = [
  'Software Engineer',
  'Full-Stack Developer',
  'Cloud & DevOps Engineer',
  'App Developer',
  'Musician (Beat Producer)',
]

export default function Home() {
  const [slide, setSlide] = useState(0)

  const next = useCallback(() => setSlide((s) => (s + 1) % SLIDE_COUNT), [])
  const prev = useCallback(() => setSlide((s) => (s - 1 + SLIDE_COUNT) % SLIDE_COUNT), [])

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [slide, next])

  // Preload every slide background so switching slides never shows a blank frame.
  useEffect(() => {
    for (const src of [
      `${BASE}img/Back.jpg`,
      `${BASE}img/slider-projects.jpg`,
      `${BASE}img/slider-music.jpg`,
    ]) {
      const img = new Image()
      img.src = src
    }
  }, [])

  return (
    <>
      <Loader />
      <div id="Jcontent">
        <div className="body-content">
          <div className="hero">
            <Navigation tagline="Welcome to my Portfolio" />
            <div className="slider w-slider">
              <div className="slider-tracker">
                <div className="tracker-item">
                  {slide === 0 && <div className="tracker-line" />}
                  <div>
                    <a style={{ textDecoration: 'none', color: 'aliceblue' }} href="#/about">
                      About
                    </a>
                  </div>
                </div>
                <div className="tracker-item">
                  {slide === 1 && <div className="tracker-line" />}
                  <div>
                    <a style={{ textDecoration: 'none', color: 'aliceblue' }} href="#/projects">
                      Projects
                    </a>
                  </div>
                </div>
                <div className="tracker-item">
                  {slide === 2 && <div className="tracker-line" />}
                  <div>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none', color: 'aliceblue' }}
                      href={socialLinks.beatstars}
                    >
                      Music
                    </a>
                  </div>
                </div>
              </div>
              <div className="slider-mask w-slider-mask">
                {/* Slide 1 — Hello / intro */}
                <div className={`slide w-slide${slide === 0 ? ' active' : ''}`}>
                  <div className="project-wrapper w-dyn-list">
                    <div className="w-dyn-items">
                      <div className="w-dyn-item">
                        <div className="project-content">
                          <div style={{ maxWidth: '100%' }} className="project-title">
                            <div style={{ display: 'flex', marginTop: 40 }}>
                              <div className="jayim">
                                <img
                                  style={{ maxWidth: 450, height: 'auto', width: 'auto' }}
                                  id="jay"
                                  src={`${BASE}img/jay.png`}
                                  alt="Jay Sood"
                                />
                              </div>
                              <div className="CardR">
                                <div style={{ color: 'aliceblue', textAlign: 'left' }}>
                                  <h1 style={{ color: 'orange', fontSize: '280%' }}>Hello !</h1>
                                </div>
                                <div className="jaytext" style={{ color: 'aliceblue', textAlign: 'left' }}>
                                  <h1 style={{ fontSize: '160%' }}>
                                    I'm <strong style={{ color: 'aliceblue' }}>Jay Sood </strong>
                                  </h1>
                                  <h1 style={{ color: '#0450E7', fontSize: '200%', fontWeight: 'bold' }}>
                                    <TxtRotate phrases={rotatePhrases} />
                                  </h1>
                                  <h1 style={{ overflowWrap: 'break-word', maxWidth: '94%', lineHeight: 1.6 }}>
                                    Dynamic Computer Engineering graduate passionate about creating efficient,
                                    cutting-edge solutions. Leveraging strong analytical and technical skills to drive
                                    impactful results in fast-paced environments. Seeking to take ownership of
                                    projects, collaborate cross-functionally, and deliver high-quality work that pushes
                                    technological boundaries.
                                  </h1>
                                  <div className="stats-row" style={{ color: 'cornsilk' }}>
                                    <div className="stat">
                                      <img
                                        src="https://img.icons8.com/bubbles/50/000000/project-setup.png"
                                        style={{ maxWidth: 40, maxHeight: 40, width: 'auto', height: 'auto' }}
                                        alt=""
                                      />
                                      <p style={{ color: 'cornsilk' }}>Projects</p>
                                      <CountUp end={10} />
                                    </div>
                                    <div className="stat">
                                      <img
                                        src="https://img.icons8.com/color/48/000000/man-winner-skin-type-3.png"
                                        style={{ maxWidth: 40, maxHeight: 40, width: 'auto', height: 'auto' }}
                                        alt=""
                                      />
                                      <p style={{ color: 'cornsilk' }}>Competitions</p>
                                      <CountUp end={8} />
                                    </div>
                                    <div className="stat">
                                      <img
                                        src="https://img.icons8.com/bubbles/50/000000/student-male.png"
                                        style={{ maxWidth: 40, maxHeight: 40, width: 'auto', height: 'auto' }}
                                        alt=""
                                      />
                                      <p style={{ color: 'cornsilk' }}>Skills</p>
                                      <CountUp end={12} />
                                    </div>
                                  </div>
                                </div>
                                <div style={{ display: 'flex' }}>
                                  <div className="margin-30px slide-in" style={{ marginTop: 10, textAlign: 'left' }}>
                                    <Link to="/about" className="button w-button">
                                      Know More
                                    </Link>
                                  </div>
                                  <div
                                    className="margin-30px slide-in"
                                    style={{ marginLeft: 5, marginTop: 10, textAlign: 'left' }}
                                  >
                                    <a
                                      target="_blank"
                                      rel="noreferrer"
                                      href={socialLinks.linkedin}
                                      className="button w-button"
                                    >
                                      LinkedIn
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{ backgroundImage: `url("${BASE}img/Back.jpg")`, backgroundColor: '#11172B' }}
                            className="project-scale"
                          ></div>
                          <div className="overlay"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slide 2 — Projects */}
                <div className={`slide w-slide${slide === 1 ? ' active' : ''}`}>
                  <div className="project-wrapper w-dyn-list">
                    <div className="w-dyn-items">
                      <div className="w-dyn-item">
                        <div className="project-content">
                          <div className="project-title">
                            <h1 className="project-heading white slide-in">
                              I believe in Learning by Doing, here are my few projects.
                            </h1>
                            <div className="margin-30px slide-in">
                              <Link to="/projects" className="button w-button">
                                View Project
                              </Link>
                            </div>
                          </div>
                          <div
                            style={{ backgroundImage: `url("${BASE}img/slider-projects.jpg")` }}
                            className="project-scale"
                          ></div>
                          <div className="overlay"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slide 3 — Music */}
                <div className={`slide w-slide${slide === 2 ? ' active' : ''}`}>
                  <div className="project-wrapper w-dyn-list">
                    <div className="w-dyn-items">
                      <div className="w-dyn-item">
                        <div className="project-content">
                          <div className="project-title" style={{ marginTop: 54 }}>
                            <h1 className="project-heading white slide-in"> Welcome To my Musical Side</h1>
                            <div className="margin-30px slide-in">
                              <a target="_blank" rel="noreferrer" href={socialLinks.youtube} className="button w-button">
                                <img
                                  src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-128.png"
                                  style={{ marginRight: 7, maxWidth: 30, maxHeight: 30 }}
                                  alt=""
                                />
                                Visit You Tube
                              </a>
                              <p style={{ color: 'cornsilk' }}>For Latest Music release</p>
                            </div>
                            <div className="margin-30px slide-in">
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href={socialLinks.beatstars}
                                className="button w-button"
                              >
                                <img
                                  src="https://www.beatstars.com/assets/img/bs-logos/bs-logo-red.svg"
                                  style={{ marginRight: 7, maxWidth: 30, maxHeight: 30 }}
                                  alt=""
                                />
                                Visit Beat Stars
                              </a>
                              <p style={{ color: 'cornsilk' }}>For Free Beats</p>
                            </div>
                            <div className="margin-30px slide-in">
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href={socialLinks.soundcloud}
                                className="button w-button"
                              >
                                <img
                                  src="https://cdn-icons-png.flaticon.com/512/145/145809.png"
                                  style={{ marginRight: 7, maxWidth: 30, maxHeight: 30 }}
                                  alt=""
                                />
                                Visit Sound Cloud
                              </a>
                              <p style={{ color: 'cornsilk' }}>For Latest Remixes</p>
                            </div>
                          </div>
                          <div
                            style={{ backgroundImage: `url("${BASE}img/slider-music.jpg")` }}
                            className="project-scale"
                          ></div>
                          <div className="overlay"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-arrow jrule" role="button" tabIndex={0} aria-label="previous slide" onClick={prev}>
                <svg className="arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M15 4 L7 12 L15 20" stroke="#000" strokeWidth="2.5" />
                </svg>
              </div>
              <div
                className="slider-arrow right jrule"
                role="button"
                tabIndex={0}
                aria-label="next slide"
                onClick={next}
              >
                <svg className="arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M9 4 L17 12 L9 20" stroke="#000" strokeWidth="2.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
