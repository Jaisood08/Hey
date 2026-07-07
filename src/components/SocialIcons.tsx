import { socialIcons, socialLinks } from '../data/site'

interface SocialIconsProps {
  className?: string
  music?: boolean
  variant?: 'light' | 'dark'
}

export default function SocialIcons({
  className = 'social-wrapper',
  music = false,
  variant = 'light',
}: SocialIconsProps) {
  const icons = socialIcons[variant]
  return (
    <div className={className}>
      <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="social-icon w-inline-block">
        <img src={icons.linkedin} loading="lazy" width="23" alt="LinkedIn" />
      </a>
      <a href={socialLinks.github} target="_blank" rel="noreferrer" className="social-icon w-inline-block">
        <img src={icons.github} loading="lazy" width="23" alt="GitHub" />
      </a>
      <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="social-icon w-inline-block">
        <img src={icons.instagram} loading="lazy" width="20" alt="Instagram" />
      </a>
      <a href={socialLinks.email} target="_blank" rel="noreferrer" className="social-icon w-inline-block">
        <img src={icons.email} loading="lazy" width="22" alt="Email" />
      </a>
      {music && (
        <>
          <a href={socialLinks.youtube} target="_blank" rel="noreferrer" className="social-icon w-inline-block">
            <img src={icons.youtube} style={{ maxWidth: 25, maxHeight: 25 }} alt="YouTube" />
          </a>
          <a href={socialLinks.beatstars} target="_blank" rel="noreferrer" className="social-icon w-inline-block">
            <img src={icons.beatstars} style={{ maxWidth: 20, maxHeight: 20 }} alt="BeatStars" />
          </a>
          <a href={socialLinks.soundcloud} target="_blank" rel="noreferrer" className="social-icon w-inline-block">
            <img src={icons.soundcloud} style={{ maxWidth: 25, maxHeight: 25 }} alt="SoundCloud" />
          </a>
        </>
      )}
    </div>
  )
}
