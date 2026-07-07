import { socialIcons, socialLinks } from '../data/site'

interface SocialIconsProps {
  className?: string
  music?: boolean
}

export default function SocialIcons({ className = 'social-wrapper', music = false }: SocialIconsProps) {
  return (
    <div className={className}>
      <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="social-icon w-inline-block">
        <img src={socialIcons.linkedin} loading="lazy" width="23" alt="LinkedIn" />
      </a>
      <a href={socialLinks.github} target="_blank" rel="noreferrer" className="social-icon w-inline-block">
        <img src={socialIcons.github} loading="lazy" width="23" alt="GitHub" />
      </a>
      <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="social-icon w-inline-block">
        <img src={socialIcons.instagram} loading="lazy" width="20" alt="Instagram" />
      </a>
      <a href={socialLinks.email} target="_blank" rel="noreferrer" className="social-icon w-inline-block">
        <img src={socialIcons.email} loading="lazy" width="22" alt="Email" />
      </a>
      {music && (
        <>
          <a href={socialLinks.youtube} target="_blank" rel="noreferrer" className="social-icon w-inline-block">
            <img src={socialIcons.youtube} style={{ maxWidth: 25, maxHeight: 25 }} alt="YouTube" />
          </a>
          <a href={socialLinks.beatstars} target="_blank" rel="noreferrer" className="social-icon w-inline-block">
            <img src={socialIcons.beatstars} style={{ maxWidth: 20, maxHeight: 20 }} alt="BeatStars" />
          </a>
          <a href={socialLinks.soundcloud} target="_blank" rel="noreferrer" className="social-icon w-inline-block">
            <img src={socialIcons.soundcloud} style={{ maxWidth: 25, maxHeight: 25 }} alt="SoundCloud" />
          </a>
        </>
      )}
    </div>
  )
}
