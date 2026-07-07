export const BASE = import.meta.env.BASE_URL

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/jay-sood/',
  github: 'https://github.com/Jaisood08',
  instagram: 'https://www.instagram.com/jaisood08/',
  email: 'mailto:jaisood08@gmail.com',
  youtube: 'https://www.youtube.com/channel/UCdReHO85q1Y4NALw62G32Pw',
  beatstars: 'https://www.beatstars.com/jaisood08',
  soundcloud: 'https://soundcloud.com/jai-sood-375791820',
}

export const socialIcons = {
  linkedin: 'https://cdn-icons-png.flaticon.com/512/1409/1409945.png',
  github: 'https://cdn-icons-png.flaticon.com/512/270/270798.png',
  instagram: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
  email: 'https://cdn-icons-png.flaticon.com/512/2965/2965306.png',
  youtube:
    'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-128.png',
  beatstars: 'https://www.beatstars.com/assets/img/bs-logos/bs-logo-red.svg',
  soundcloud: 'https://cdn-icons-png.flaticon.com/512/145/145809.png',
}

export type ProjectCategory = 'photography' | 'logo' | 'graphics' | 'ads'

export interface Project {
  id: string
  title: string
  description: string
  image: string
  categories: ProjectCategory[]
  github?: string
  website?: string
  video?: string
}

// categories keep the original class names:
// photography = Machine Learning, logo = Apps, graphics = Website, ads = Graphics
export const projects: Project[] = [
  {
    id: 'opioid',
    title: 'Opioid-Overdose-Prediction-System',
    description:
      "A mobile application that can help a person suffering from opioid overdose by using a wristband that will monitor a person's respiration rate and alert his contacts for help.",
    image: `${BASE}img/opioid.png`,
    categories: ['photography', 'logo'],
    github: 'https://github.com/Jaisood08/Opioid-Overdose',
  },
  {
    id: 'ophtho',
    title: 'SMART OPHTHO | Smart Health Solution',
    description:
      'A smart solution for detection of health problems from the fundus image of the eye. Used Convolutional neural network Model with Fundus images for detection of serious diseases at preliminary stages.',
    image: `${BASE}img/ophtho.png`,
    categories: ['graphics', 'photography'],
    github: 'https://github.com/Jaisood08/SmartOphtho',
    website: 'https://smartophtho.herokuapp.com/',
    video: 'https://youtu.be/hqd3PTyAM8U',
  },
  {
    id: 'newsroll',
    title: 'NEWS Roll | Newspaper distribution system',
    description:
      'A website system to manage newspaper distribution and implement a subscription based purchase method for easy payment and managing all newspaper services.',
    image: `${BASE}img/newroll.png`,
    categories: ['graphics'],
    github: 'https://github.com/Jaisood08/NewsRoll',
    website: 'https://newsroll.herokuapp.com/',
  },
  {
    id: 'nlp',
    title: 'NLP Tweet Analysis',
    description:
      'This project was made to focus on topic - "Kumbh Mela" I have taken some positive and negative articles on topic and created a dateset of them. Then i have trained a model on this data. Finally i am fetching tweets on this topic and analyzing them as positive or negative tweets.',
    image: `${BASE}img/NLP.png`,
    categories: ['photography', 'graphics'],
    github: 'https://github.com/Jaisood08/NLP-Tweet-analysis',
  },
  {
    id: 'surveillance',
    title: 'Video-Surveillance-System',
    description:
      'This is a Opencv project with deep learning .In deep learning for face recognition i have used deep metric learning where instead of trying to output a single label (or even the coordinates/bounding box of objects in an image), i am instead outputting a real-valued feature vector that is used to quantify the face.',
    image: `${BASE}img/Video.png`,
    categories: ['photography'],
    github: 'https://github.com/Jaisood08/Video-Surveillance-System',
    video: 'https://github.com/Jaisood08/Video-Surveillance-System/blob/main/Testclip.mp4',
  },
  {
    id: 'topsis',
    title: 'TOPSIS',
    description:
      'Simple Python module for Multiple Criteria Decision Making System using TOPSIS.can be used to compare many machine learning algorithms on multiple decision parameters provided as input.',
    image: `${BASE}img/Topsis.png`,
    categories: ['photography'],
    github: 'https://github.com/Jaisood08/TOPSIS-JAY-101803206',
    website: 'https://pypi.org/project/TOPSIS-Jay-101803206',
  },
  {
    id: 'videoapp',
    title: 'Video App',
    description:
      'A web app to covert video black and white and reduce frame size off video.used flask and python in backend and deployed on heroku.',
    image: `${BASE}img/Videoapp.png`,
    categories: ['graphics'],
    github: 'https://github.com/Jaisood08/Video-app-mini-project',
    website: 'https://video-web-app.herokuapp.com/',
  },
  {
    id: 'flappy',
    title: 'Flappy Bird Game in OpenGl',
    description:
      'Game with speed controls and night mode.The project is based upon GLUT i.e. the OpenGL Utility Toolkit, a window system independent toolkit for writing OpenGL programs. OpenGL is a cross-language, cross- platform application programming interface for rendering 2D and 3D vector graphics.',
    image: `${BASE}img/flappy.png`,
    categories: ['ads'],
    github: 'https://github.com/Jaisood08/Flappy_Bird-OPENGL',
  },
]
