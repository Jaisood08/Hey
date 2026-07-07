import { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import FadeUp from '../components/FadeUp'
import SocialIcons from '../components/SocialIcons'
import { BASE, projects, ProjectCategory } from '../data/site'

const filters: { label: string; value: ProjectCategory | '*' }[] = [
  { label: 'All', value: '*' },
  { label: 'Machine Learning', value: 'photography' },
  { label: 'Apps', value: 'logo' },
  { label: 'Website', value: 'graphics' },
  { label: 'Graphics', value: 'ads' },
]

// Technical skills from the latest resume
const skills = [
  { name: 'C ++', icon: 'https://img.icons8.com/color/96/000000/c-plus-plus-logo.png' },
  {
    name: 'SQL',
    icon: 'https://cdn3.iconfinder.com/data/icons/file-extension-11/512/sql-file-extension-format-digital-256.png',
  },
  { name: 'MongoDB', icon: 'https://img.icons8.com/color/96/000000/mongodb.png' },
  { name: 'Node Js', icon: 'https://img.icons8.com/color/96/000000/nodejs.png' },
  { name: 'Express Js', icon: 'https://img.icons8.com/color/96/000000/javascript--v1.png' },
  { name: 'Next Js', icon: 'https://img.icons8.com/color/96/000000/nextjs.png' },
  { name: 'React', icon: 'https://img.icons8.com/color/96/000000/react-native.png' },
  { name: 'React Native', icon: 'https://img.icons8.com/cute-clipart/128/000000/react-native.png' },
  { name: 'TypeScript', icon: 'https://img.icons8.com/color/96/000000/typescript.png' },
  { name: 'Docker', icon: 'https://img.icons8.com/color/96/000000/docker.png' },
  { name: 'Kubernetes & Helm', icon: 'https://img.icons8.com/color/96/000000/kubernetes.png' },
  { name: 'Jenkins', icon: 'https://img.icons8.com/color/96/000000/jenkins.png' },
]

const certifications = [
  {
    name: 'AWS Certified Developer – Associate',
    icon: 'https://img.icons8.com/color/96/000000/amazon-web-services.png',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    icon: 'https://img.icons8.com/color/96/000000/amazon-web-services.png',
  },
  {
    name: 'Associate Cloud Engineer (Google Cloud)',
    icon: 'https://img.icons8.com/color/96/000000/google-cloud.png',
  },
]

interface TimelineItem {
  date: string
  title: string
  titleHref?: string
  subtitle?: string
  body?: React.ReactNode
  verifyHref?: string
}

// Public LinkedIn sections where honors & certifications can be verified
const linkedinHonors = 'https://www.linkedin.com/in/jay-sood/details/honors/'
const linkedinCertifications = 'https://www.linkedin.com/in/jay-sood/details/certifications/'

const education: TimelineItem[] = [
  {
    date: 'May 2018 - 2022',
    title: 'Thapar Institute of Engineering & Technology',
    subtitle: 'Bachelor of Engineering',
    body: (
      <p>
        <strong>Computer Science and Engineering</strong>
        <br />
        CGPA : 8.59/10
      </p>
    ),
  },
  {
    date: '2017',
    title: 'Delhi Public International School, Bikaner, Rajasthan',
    subtitle: 'Higher Secondary Certificate',
    body: (
      <p>
        <strong>Science with Mathematics</strong>
        <br />
        Percentage : 70.6 %
      </p>
    ),
  },
  {
    date: '2015',
    title: 'Seth Tolaram Bafna Academy, Bikaner',
    subtitle: 'Secondary School Certificate',
    body: <p>CGPA : 8.4/10</p>,
  },
]

const achievements: TimelineItem[] = [
  {
    date: 'October 2023',
    title: 'Client Delivery Recognition | Accenture',
    body: <p>Awarded for successfully delivering client solutions.</p>,
    verifyHref: linkedinHonors,
  },
  {
    date: 'February 2021',
    title: 'Cisco Webex Virtual Hackathon',
    body: <p>3rd place category</p>,
    verifyHref: linkedinHonors,
  },
  {
    date: 'February 2020',
    title: "IETE STUDENTS' FORUM ML Competition",
    body: <p>1st position</p>,
    verifyHref: linkedinHonors,
  },
  { date: 'October 2019', title: "Orion'19 DataThon", body: <p>1st position</p>, verifyHref: linkedinHonors },
  {
    date: 'August 2019',
    title: 'Thapar Summer School 2019',
    body: <p>5st position</p>,
    verifyHref: linkedinHonors,
  },
  {
    date: 'April 2019',
    title: 'EXODIA 19, IIT MANDI',
    body: <p>2nd Position in Line Follower Competition</p>,
    verifyHref: linkedinHonors,
  },
  {
    date: 'March 2019',
    title: "Aavriti'19- IIT Bombay | All India Research Championship",
    body: <p>Secured III Position in Special Category "Virtual Winners"</p>,
    verifyHref: linkedinHonors,
  },
  {
    date: 'October 2018',
    title: 'Pitchers 2018 | Entrepreneurship Development Cell,TIET ',
    body: <p>1st Position</p>,
    verifyHref: linkedinHonors,
  },
]

const positions: TimelineItem[] = [
  {
    date: 'March 2021',
    title: 'Mentor at HackOwasp 3.0 ',
    body: <p>Interacted with many teams guided them to achieve their goal.</p>,
  },
  {
    date: 'October 2019',
    title: 'ORION Tech-Fest – 2019 ',
    body: (
      <p>
        Supervised the Designing Team. <br />
        Coordinated a Girls-only Competitive Programming Competition.
        <br />
        Organized Line Follower Competition.
      </p>
    ),
  },
  {
    date: 'April 2018 - November 2019',
    title: 'Linux User Group ',
    body: <p>Served as Designing Head for the society.</p>,
  },
]

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ul className="timeline">
      {items.map((item, i) => (
        <FadeUp as="li" key={i} className="timeline-event">
          <label className="timeline-event-icon"></label>
          <div className="timeline-event-copy">
            <p className="timeline-event-thumbnail">{item.date}</p>
            <h3>
              {item.titleHref ? (
                <a href={item.titleHref} target="_blank" rel="noreferrer">
                  {item.title.split('|')[0].trim()}
                </a>
              ) : (
                item.title
              )}
              {item.titleHref ? ` | ${item.title.split('|')[1]?.trim() ?? ''}` : ''}
            </h3>
            {item.subtitle && <h4>{item.subtitle}</h4>}
            {item.body}
            {item.verifyHref && (
              <a href={item.verifyHref} target="_blank" rel="noreferrer" className="verify-link">
                Verify on LinkedIn ↗
              </a>
            )}
          </div>
        </FadeUp>
      ))}
    </ul>
  )
}

export default function About() {
  const [filter, setFilter] = useState<ProjectCategory | '*'>('*')
  const visibleProjects = projects.filter((p) => filter === '*' || p.categories.includes(filter))

  return (
    <div className="about-page">
      <div className="body-content">
        <Navigation tagline="About me" />
      </div>

      <div
        style={{ backgroundImage: `url("${BASE}img/bg-geo-about.svg")` }}
        className="hero sub _5 b jaytry"
      >
        <div className="container">
          <div className="sub-flex blog-page" style={{ color: '#E9EEF6' }}>
            <img
              src={`${BASE}img/jay-about.png`}
              style={{
                maxWidth: '80%',
                maxHeight: 320,
                borderRadius: 16,
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
              }}
              alt="Jay Sood"
            />
            <div
              className="sub-text"
              style={{
                fontWeight: 700,
                fontSize: '330%',
                textAlign: 'center',
                color: '#f3f6fb',
                marginTop: 12,
              }}
            >
              Jay Sood
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 7,
                marginTop: 16,
                marginBottom: 6,
                fontSize: 17,
                color: '#f3f6fb',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)',
              }}
            >
              <p style={{ margin: 0, color: '#f3f6fb' }}>
                <strong style={{ color: '#e8a33d' }}>Date of birth :</strong> October 10, 2000
              </p>
              <p style={{ margin: 0, color: '#f3f6fb' }}>
                <strong style={{ color: '#e8a33d' }}>Address :</strong> Rajasthan, India
              </p>
              <p style={{ margin: 0, color: '#f3f6fb' }}>
                <strong style={{ color: '#e8a33d' }}>Email :</strong> jaisood08@gmail.com
              </p>
              <p style={{ margin: 0, color: '#f3f6fb' }}>
                <strong style={{ color: '#e8a33d' }}>Phone :</strong> +91 9602132597
              </p>
            </div>
            <SocialIcons />
            <div className="margin-30px">
              <a
                href="https://www.linkedin.com/in/jay-sood"
                target="_blank"
                rel="noreferrer"
                className="button w-button"
              >
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-styles">
        <div className="section" id="experience">
          <div className="container">
            <div className="col-md-12">
              <h4>01</h4>
              <h1 className="size-50" style={{ fontSize: '270%' }}>
                Education{' '}
              </h1>
              <div className="h-50"></div>
            </div>
            <div className="col-md-12">
              <Timeline items={education} />
            </div>
          </div>
          <hr />

          <div className="container">
            <div className="col-md-12">
              <h4>02</h4>
              <h1 className="size-50" style={{ fontSize: '270%' }}>
                Experience{' '}
              </h1>
              <div className="h-50"></div>
            </div>
            <div className="col-md-12">
              <ul className="timeline">
                <FadeUp as="li" className="timeline-event">
                  <label className="timeline-event-icon"></label>
                  <div className="timeline-event-copy">
                    <p className="timeline-event-thumbnail">October 2022 - Present</p>
                    <h3>
                      <a href="https://www.accenture.com/in-en" target="_blank" rel="noreferrer">
                        Accenture India
                      </a>{' '}
                      | FULL TIME
                    </h3>
                    <h4>Advanced Application/Cloud Supp &amp; Engineering Senior Analyst (June 2024 - Present)</h4>
                    <ul>
                      <li>
                        Designing and implementing highly scalable, fault-tolerant on-premise solutions for a major
                        banking client with a vast customer base.
                      </li>
                      <li>Implemented CI/CD pipelines with Jenkins, optimizing deployment efficiency by 40%.</li>
                    </ul>
                    <p>
                      <strong>Tech Stack</strong> - Jenkins, Docker, Kubernetes (EKS, Tanzu), Helm
                    </p>
                    <h4>Advanced Application Engineering Analyst (October 2022 - May 2024)</h4>
                    <ul>
                      <li>Developed a cutting-edge micro frontend application for a financial services platform.</li>
                      <li>
                        Engineered robust RESTful microservices using Nest.js, enhancing system modularity and
                        scalability.
                      </li>
                    </ul>
                    <p>
                      <strong>Tech Stack</strong> - React Js, React Native, Nest Js, Typescript
                    </p>
                  </div>
                </FadeUp>
                <FadeUp as="li" className="timeline-event">
                  <label className="timeline-event-icon"></label>
                  <div className="timeline-event-copy">
                    <p className="timeline-event-thumbnail">January 2022 - July 2022</p>
                    <h3>
                      <a href="https://msmex.in/" target="_blank" rel="noreferrer">
                        MSMEx
                      </a>{' '}
                      | INTERN
                    </h3>
                    <p>
                      Full-stack development initiatives using Next.js, React.js, and Node.js, driving product
                      improvements and feature expansions that resulted in a 40% increase in user engagement and a 30%
                      reduction in application load times.
                    </p>
                  </div>
                </FadeUp>
              </ul>
            </div>
          </div>
          <hr />

          <div className="container">
            <div className="col-md-12">
              <h4>03</h4>
              <h1 className="size-50" style={{ fontSize: '270%' }}>
                Achievements
              </h1>
              <div className="h-50"></div>
            </div>
            <div className="col-md-12">
              <Timeline items={achievements} />
            </div>
          </div>
          <hr />

          <div className="container">
            <div className="col-md-12">
              <h4>04</h4>
              <h1 className="size-50" style={{ fontSize: '270%' }}>
                Certifications
              </h1>
              <div className="h-50"></div>
            </div>
            <div className="col-md-12 jay" style={{ display: 'flex' }}>
              {certifications.map((cert) => (
                <div key={cert.name} style={{ flex: 1 }}>
                  <img src={cert.icon} alt={cert.name} />
                  <h1>{cert.name}</h1>
                  <a href={linkedinCertifications} target="_blank" rel="noreferrer" className="verify-link">
                    Verify on LinkedIn ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
          <hr />

          <div className="container">
            <div className="col-md-12">
              <h4>05</h4>
              <h1 className="size-50" style={{ fontSize: '270%' }}>
                {' '}
                Skills
              </h1>
              <div className="h-50"></div>
            </div>
            {[0, 4, 8].map((start) => (
              <div key={start} className="col-md-12 jay" style={{ display: 'flex' }}>
                {skills.slice(start, start + 4).map((skill) => (
                  <div key={skill.name} style={{ flex: 1 }}>
                    <img src={skill.icon} alt={skill.name} />
                    <h1>{skill.name}</h1>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <hr />

          <div className="container">
            <div className="col-md-12">
              <h4>06</h4>
              <h1 className="size-40" style={{ fontSize: '270%' }}>
                POSITIONS OF RESPONSIBILITY
              </h1>
              <div className="h-50"></div>
            </div>
            <div className="col-md-12">
              <Timeline items={positions} />
            </div>
          </div>
        </div>

        <div className="section" id="projects">
          <div className="container">
            <div className="col-md-12">
              <h4>07</h4>
              <h1 className="size-50">
                My <br /> Projects
              </h1>
            </div>
            <div className="portfolio-div">
              <div className="portfolio">
                <div className="categories-grid">
                  <nav className="categories">
                    <ul className="portfolio_filter">
                      {filters.map((f) => (
                        <li key={f.value}>
                          <a
                            href="#projects"
                            className={filter === f.value ? 'active' : ''}
                            onClick={(e) => {
                              e.preventDefault()
                              setFilter(f.value)
                            }}
                          >
                            {f.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <FadeUp className="no-padding portfolio_container clearfix">
                  <div className="portfolio-grid">
                    {visibleProjects.map((project) => (
                      <div key={project.id} className="portfolio-cell">
                        <a
                          href={project.github ?? '#'}
                          target="_blank"
                          rel="noreferrer"
                          className="portfolio_item"
                        >
                          <img src={project.image} alt={project.title} className="img-responsive" />
                          <div className="portfolio_item_hover">
                            <div className="portfolio-border clearfix">
                              <div className="item_info">
                                <span>{project.title}</span> <em>{project.description}</em>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
