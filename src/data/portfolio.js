import { BrainCircuit, Bus, Camera, Hand, Sandwich, GraduationCap } from 'lucide-react'

export const skills = [
  ['Programming', ['Java', 'JavaScript', 'C', 'Bash']],
  ['Web development', ['HTML', 'CSS', 'JavaScript', 'Spring Boot', 'REST APIs']],
  ['Database', ['MySQL', 'SQL']],
  ['Software development', ['OOP', 'Java Swing', 'CRUD', 'Backend & API']],
  ['AI', ['Computer Vision', 'AI-powered apps']],
  ['Networking', ['DNS', 'TCP/IP', 'Configuration']],
  ['Tools & cloud', ['Git', 'GitHub', 'Linux', 'IntelliJ', 'VirtualBox', 'Cloud fundamentals']],
]

export const projects = [
  { title: 'AI-Powered Livestock Health', type: 'Computer vision', icon: BrainCircuit, color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300', description: 'An AI-assisted concept for helping identify livestock health concerns from visual signals.', tags: ['AI', 'Computer Vision'] },
  { title: 'Sign-Language Translator', type: 'Accessibility', icon: Hand, color: 'bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300', description: 'A translator concept that explores computer vision to make signed communication more accessible.', tags: ['AI', 'Vision'] },
  { title: 'Urban Bus Fleet Management', type: 'Systems', icon: Bus, link: 'https://github.com/aimebyiringiro123/UrbanBusFleetManagementSystem', color: 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300', description: 'A management solution concept for organizing urban bus operations and fleet information.', tags: ['Java', 'Database'] },
  { title: 'Student Management System', type: 'Desktop application', icon: GraduationCap, link: 'https://github.com/aimebyiringiro123/student_management_system', color: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300', description: 'A CRUD-focused application for managing student records through a structured interface.', tags: ['Java', 'Java Swing', 'MySQL'] },
  { title: 'Burger Website', type: 'Web design', icon: Sandwich, link: 'https://github.com/aimebyiringiro123/burger-web', color: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300', description: 'A responsive food website that brings together polished layout, clear navigation, and a lively menu experience.', tags: ['HTML', 'CSS', 'JavaScript'] },
  { title: 'Minde Photos', type: 'Web experience', icon: Camera, link: 'https://github.com/aimebyiringiro123/the-mind-photos', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300', description: 'A photo-centered web experience designed to give imagery space and create an intuitive browsing flow.', tags: ['JavaScript', 'Web Design'] },
]

export const certifications = [
  { title: 'OOPs in Java', issuer: 'Simplilearn SkillUp', date: 'Dec 6, 2025 · ID 9539419', file: '/certificates/oops-in-java.pdf', image: '/images/certificates/oops-in-java.jpg' },
  { title: 'Advanced Network Operations 2.0', issuer: 'Internet Society Learning', date: 'Learning plan complete', file: '/certificates/advanced-network-operations.pdf', image: '/images/certificates/advanced-network-operations.jpg' },
  { title: 'Kubernetes and Cloud Native Essentials (LFS250)', issuer: 'The Linux Foundation', date: 'Jun 29, 2025 · ID LF-l9ucqnetjj', file: '/certificates/kubernetes-cloud-native-essentials.pdf', image: '/images/certificates/kubernetes-cloud-native-essentials.jpg' },
  { title: 'Introduction to Java', issuer: 'Sololearn', date: 'Nov 17, 2025 · ID CC-U9JNOKLO', file: '/certificates/introduction-to-java.pdf', image: '/images/certificates/introduction-to-java.jpg' },
  { title: 'Introduction to Network Operations', issuer: 'Internet Society Learning', date: 'Learning plan complete', file: '/certificates/introduction-to-network-operations.pdf', image: '/images/certificates/introduction-to-network-operations.jpg' },
  { title: 'Networking Basics', issuer: 'Cisco Networking Academy', date: 'Mar 25, 2025', file: '/certificates/networking-basics.jpeg', image: '/certificates/networking-basics.jpeg' },
  { title: 'CC Course Pre-assessment', issuer: 'ISC2', date: 'Issued Oct 15, 2026', file: '/certificates/isc2-cc-course-pre-assessment.jpeg', image: '/certificates/isc2-cc-course-pre-assessment.jpeg' },
]
