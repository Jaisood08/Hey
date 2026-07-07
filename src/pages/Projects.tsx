import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { BASE, projects } from '../data/site'

function GitHubIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42a2.5 2.5 0 0 0-1.76 1.77A26.2 26.2 0 0 0 2 12a26.2 26.2 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.2 26.2 0 0 0 22 12a26.2 26.2 0 0 0-.42-4.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <div className="body-content">
        <div
          style={{
            maxHeight: '40%',
            marginBottom: 20,
            backgroundImage: `url("${BASE}img/bg-silk-navy.jpg")`,
          }}
          className="hero sub _5 b"
        >
          <Navigation tagline="My Projects" />
          <div className="container">
            <div className="sub-flex blog-page">
              <div className="sub-text" style={{ textAlign: 'left', color: '#E9EEF6' }}>
                My Projects
              </div>
              <h1 className="title-3" style={{ color: '#C9D6EA' }}>
                Things I have Done.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="JAYCARD">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <div className="card-text">
              <div className="portada" style={{ backgroundImage: `url('${project.image}')` }}></div>
              <div className="title-total">
                <h2>{project.title}</h2>
                <div className="desc">{project.description}</div>
                <div className="actions">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <GitHubIcon />
                    </a>
                  )}
                  {project.website && (
                    <a href={project.website} target="_blank" rel="noreferrer" aria-label="Website">
                      <GlobeIcon />
                    </a>
                  )}
                  {project.video && (
                    <a href={project.video} target="_blank" rel="noreferrer" aria-label="Video">
                      <PlayIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  )
}
