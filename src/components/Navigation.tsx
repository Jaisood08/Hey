import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BASE, socialIcons, socialLinks } from '../data/site'
import SocialIcons from './SocialIcons'

interface NavigationProps {
  tagline: string
}

const menuLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
]

export default function Navigation({ tagline }: NavigationProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="navigation">
      <div className={`hamburger${open ? ' is-open' : ''}`} onClick={() => setOpen(!open)}>
        <div className="hamburger-icon">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="navigation-content">
        <Link to="/" className="brand-logo w-inline-block w--current">
          <img src={`${BASE}img/signature.png`} loading="lazy" width="110" alt="Jay Sood" className="katen-logo" />
          <div className="logo-divider _1"></div>
          <div className="caveat">{tagline}</div>
        </Link>
        <div className="right-part">
          <div className="social-wrapper hide">
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="social-icon w-inline-block">
              <img src={socialIcons.light.linkedin} loading="lazy" width="23" alt="LinkedIn" />
            </a>
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="social-icon w-inline-block">
              <img src={socialIcons.light.github} loading="lazy" width="23" alt="GitHub" />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="social-icon w-inline-block">
              <img src={socialIcons.light.instagram} loading="lazy" width="20" alt="Instagram" />
            </a>
          </div>
          <div className="social-wrapper">
            <a href={socialLinks.email} target="_blank" rel="noreferrer" className="social-icon w-inline-block">
              <img src={socialIcons.light.email} loading="lazy" width="22" alt="Email" />
            </a>
          </div>
        </div>
      </div>
      <div className={`menu-wrapper${open ? ' is-open' : ''}`}>
        <div className="menu-content">
          <div className="menu-inside-wrapper">
            {menuLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `navigation-link w-inline-block${isActive ? ' w--current' : ''}`}
              >
                <div>{link.label}</div>
                <div className="navigation-line">
                  <div className="line-overlay"></div>
                </div>
              </NavLink>
            ))}
            <a
              href={socialLinks.beatstars}
              target="_blank"
              rel="noreferrer"
              className="navigation-link w-inline-block"
            >
              <div>Music</div>
              <div className="navigation-line">
                <div className="line-overlay"></div>
              </div>
            </a>
            <div className="margin-60px">
              <div className="copyright-flex">
                <p className="copyright">Contact me</p>
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
