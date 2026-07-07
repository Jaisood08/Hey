import { Link } from 'react-router-dom'
import { BASE, socialLinks } from '../data/site'
import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <div className="footer">
      <div className="bottom-part">
        <div className="container">
          <div className="align-center">
            <img src={`${BASE}img/blacksign.png`} loading="lazy" width="110" alt="Jay Sood" className="katen-logo" />
          </div>
          <div className="margin-25px">
            <div className="footer-nav">
              <Link to="/" className="navigation-link in-footer w-inline-block">
                <div>Home</div>
                <div className="navigation-line _5px">
                  <div className="line-overlay"></div>
                </div>
              </Link>
              <Link to="/about" className="navigation-link in-footer w-inline-block">
                <div>About</div>
                <div className="navigation-line _5px">
                  <div className="line-overlay"></div>
                </div>
              </Link>
              <Link to="/projects" className="navigation-link in-footer w-inline-block">
                <div>Projects</div>
                <div className="navigation-line _5px">
                  <div className="line-overlay"></div>
                </div>
              </Link>
              <a href={socialLinks.beatstars} target="_blank" rel="noreferrer" className="navigation-link in-footer w-inline-block">
                <div>Music</div>
                <div className="navigation-line _5px">
                  <div className="line-overlay"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="margin-30px">
            <SocialIcons className="social-wrapper center" music variant="dark" />
          </div>
          <div className="margin-30px">
            <div className="copyright-flex">
              <p className="copyright"> Jay Sood | PortFolio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
