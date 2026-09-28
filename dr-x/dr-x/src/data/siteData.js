// EDIT EVERYTHING HERE. Nothing personal lives inside components.
export const personalData = {
  name: 'Dr. X',
  tagline: 'Technology. AI. Education. Creativity.',
  welcome: 'Welcome to my world.',
  email: 'mq977045@gmail.com',
  facts: [
    { label: 'From', value: 'Egypt 🇪🇬' },
    { label: 'Based in', value: 'Egypt' },
    { label: 'Field', value: 'Computer Science / IT / Artificial Intelligence' },
    { label: 'Focus', value: 'AI • Technology • Education • Creative Work' },
    { label: 'Status', value: 'University Student' },
  ],
  bio: [
    'Some people study technology. Dr. X is trying to understand it.',
    'Artificial intelligence, programming and computer science are the tools. Education, problem solving and digital creativity are the reasons.',
    'Competitions are where ideas get tested. Learning never really stops. And the next thing is always the interesting one.',
  ],
  portrait: { src: '/assets/dr-x.jpeg', alt: 'Silhouette of Dr. X at a desk with a microphone and laptop, lit only by rim light' },
  logo: { src: '/assets/x-logo.png', alt: 'Dr. X crystalline X mark' },
}

// Dates are intentionally empty — fill in when ready.
export const journey = [
  { title: 'Curiosity', date: '', text: 'Discovering technology and programming, and the urge to understand how things work.' },
  { title: 'Creation', date: '', text: 'Experimenting, building, turning ideas into digital experiences.' },
  { title: 'Competition', date: '', text: 'Taking part in technology and science competitions.' },
  { title: 'Learning', date: '', text: 'Continuous education, programming and technology training.' },
  { title: 'Exploration', date: '', text: 'Artificial intelligence, software, creative technology and digital art.' },
  { title: 'Now', date: '', text: 'Studying Computer Science / IT — and exploring what comes next.' },
]

export const education = [
  { title: 'Computer Science / IT', org: 'University name — add here', period: 'Add period', kind: 'University',
    text: 'Current university education in Computer Science / IT.' },
  { title: 'Ministry of Communications and Information Technology (MCIT)', org: 'Digital Egypt Cubs Initiative (DECI)', period: 'Add period', kind: 'Training',
    text: 'Completed multiple DECI learning tracks, including MCIT-related training. Training and professional development, not a degree. Add track names here.' },
]

// logo: path to an official asset you place in /public/assets (e.g. '/assets/nasa-space-apps.png'). Leave '' to show a text mark.
export const achievements = [
  { id: 'nasa', name: 'NASA Space Apps Challenge', mark: 'NASA SPACE APPS', logo: '', year: 'Add year', role: 'Participant', result: 'Participation',
    project: 'Embiggen Your Eyes', text: 'Took part in the NASA Space Apps Challenge with the project “Embiggen Your Eyes”. Add the exact description.' },
  { id: 'isef', name: 'ISEF', mark: 'ISEF', logo: '', year: 'Add year', role: 'Add role', result: '2nd Place',
    project: '', text: 'Second place in an ISEF-related competition. Add the exact competition details.' },
  { id: 'smart', name: 'Smart City', mark: 'SMART CITY', logo: '', year: 'Add year', role: 'Add role', result: 'Add result',
    project: '', text: 'Smart City competition across Web Development, Cybersecurity, Embedded Systems and Digital Art. Add details.' },
  { id: 'mcit', name: 'MCIT · DECI', mark: 'MCIT · DECI', logo: '', year: 'Add year', role: 'Trainee', result: 'Multiple tracks completed',
    project: '', text: 'Digital Egypt Cubs Initiative learning tracks. Add track names.' },
]

export const socialLinks = [
  { id: 'instagram', label: 'Instagram', url: '#PLACEHOLDER-INSTAGRAM-URL', enabled: false },
  { id: 'facebook', label: 'Facebook', url: '#PLACEHOLDER-FACEBOOK-URL', enabled: false },
  { id: 'email', label: 'Email', url: 'mailto:mq977045@gmail.com', enabled: true },
  { id: 'linkedin', label: 'LinkedIn — Coming Soon', url: null, enabled: false },
]
// Set enabled:true and paste the real URL for Instagram / Facebook when ready.

export const nav = ['About', 'Journey', 'Education', 'Achievements', 'Contact']
export const interlude = ['THINK.', 'CREATE.', 'EXPLORE.', 'REPEAT.']
export const traits = ['Always learning.', 'Always experimenting.', 'Always building.', 'Always asking why.']
