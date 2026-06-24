import { useState, useEffect } from 'react'
import developerAvatar from './assets/developer_avatar.png'
import './App.css'

// Built-in Inline SVG Icons to prevent packaging issues and load instantly
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
)

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
)

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
)


const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
)

const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
)

const GraduationCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
)

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
)

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
)

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
)

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
)

const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2Z"/><path d="M9 22v-4h-4Z"/></svg>
)

const BloodIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7Z"/></svg>
)

const VerifyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
)

const TeamIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
)

function App() {
  const [isDark, setIsDark] = useState(true)
  const [activeTab, setActiveTab] = useState('hard')
  const [animateSkills, setAnimateSkills] = useState(false)
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  // Apply Light/Dark Class
  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  // Scroll effect on Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsNavbarScrolled(true)
      } else {
        setIsNavbarScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Skill Animation triggering
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateSkills(true)
    }, 400)
    return () => clearTimeout(timer)
  }, [activeTab])

  const copyToClipboard = (text, message) => {
    navigator.clipboard.writeText(text)
    showToast(message)
  }

  const showToast = (message) => {
    setToastMessage(message)
    setTimeout(() => setToastMessage(''), 3000)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill out all fields!')
      return
    }
    showToast(`Thanks ${formData.name}! Message simulated successfully.`)
    setFormData({ name: '', email: '', message: '' })
  }

  const hardSkillsList = [
    { name: 'Java with DSA', level: 88 },
    { name: 'Spring Boot & Microservices', level: 82 },
    { name: 'React', level: 78 },
    { name: 'Postgres', level: 75 },
    { name: 'Docker', level: 70 },
    { name: 'Git & GitHub', level: 85 }
  ]

  const softSkillsList = [
    { name: 'Communication', level: 90 },
    { name: 'Teamwork & Collaboration', level: 88 },
    { name: 'Problem Solving', level: 85 },
    { name: 'Data Analytics', level: 76 },
    { name: 'Content Writing & Blogging', level: 80 },
    { name: 'Innovation & Research', level: 82 }
  ]

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && <div className="toast-msg">{toastMessage}</div>}

      {/* Background Neon Glows */}
      <div className="glow-blob blob-1"></div>
      <div className="glow-blob blob-2"></div>

      {/* Navigation Header */}
      <header className={`navbar ${isNavbarScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#" className="logo" onClick={() => setMobileMenuOpen(false)}>
            VIB.DEV
          </a>

          <nav>
            <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
              <li>
                <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#education" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Education & Certs
                </a>
              </li>
              <li>
                <a href="#activities" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Activities
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="nav-actions">
            <button
              onClick={() => setIsDark(!isDark)}
              className="theme-toggle-btn"
              aria-label="Toggle Theme"
              id="theme-toggler"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              className="hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
              <span style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
              <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none' }}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="container">
        <div className="hero-wrapper">
          <div className="hero-text">
            <span className="badge-tag">
              <span className="pulse-dot"></span> Available for Opportunities
            </span>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Vibavikas V</span>
            </h1>
            <h2 className="hero-subtitle">
              Student & Software Engineer Enthusiast
            </h2>
            <p className="hero-desc">
              Aspiring to dive into the tech industry with a passion for learning and growth. Eager to explore entry-level opportunities that offer hands-on experience and the chance to contribute to impactful software engineering and product management projects.
            </p>
            <div className="btn-group">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a
                href="https://github.com/Vibavikas-V"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                GitHub Profile <ExternalLinkIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/vvibavikas"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                LinkedIn Profile <ExternalLinkIcon />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="avatar-container">
              <img
                src={developerAvatar}
                alt="Vibavikas V Avatar"
                className="avatar-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Brief Intro</span>
            <h2 className="section-title">About Me</h2>
            <div className="section-underline"></div>
          </div>

          <div className="about-grid">
            <div className="glass-card about-intro-card">
              <h3>My Background</h3>
              <p>
                Currently pursuing my Bachelor's degree in Computer Science and Engineering at SNS College of Technology. Over the course of my academic journey, I have developed a strong analytical mindset and a genuine interest in designing robust backend systems and building engaging user interfaces.
              </p>
              <p>
                Outside of direct programming, I write content and blog, bringing communication and storytelling skills to technical teamwork. I am focused on software development, data metrics, and technical product workflows.
              </p>

              <div className="interest-section">
                <h4 className="interest-title">Areas of Interest</h4>
                <div className="interest-tags">
                  <span className="interest-tag">Software Engineering</span>
                  <span className="interest-tag">Product Management</span>
                  <span className="interest-tag">Content Writing & Tech Blogging</span>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <h3>Key Information</h3>
              <div className="about-info-grid" style={{ marginTop: '24px' }}>
                <div className="info-item">
                  <span className="info-label">Current College</span>
                  <span className="info-value">SNS College of Technology</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Degree & Major</span>
                  <span className="info-value">B.E. Computer Science & Engineering</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Academic Standing</span>
                  <span className="info-value">8.3 CGPA</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Location</span>
                  <span className="info-value">Tirupur, Tamil Nadu, India</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Primary Email</span>
                  <span className="info-value">vibavikas.v.cse.2023@snsce.ac.in</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Alternate Email</span>
                  <span className="info-value">vibavikas599@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Competences</span>
            <h2 className="section-title">My Skills</h2>
            <div className="section-underline"></div>
          </div>

          <div className="skills-tabs">
            <button
              className={`tab-btn ${activeTab === 'hard' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('hard')
                setAnimateSkills(false)
              }}
            >
              <CodeIcon /> Hard Skills
            </button>
            <button
              className={`tab-btn ${activeTab === 'soft' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('soft')
                setAnimateSkills(false)
              }}
            >
              <TeamIcon /> Soft Skills
            </button>
          </div>

          <div className="glass-card">
            <div className="skills-grid">
              {(activeTab === 'hard' ? hardSkillsList : softSkillsList).map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon-wrap">
                    {activeTab === 'hard' ? <CodeIcon /> : <VerifyIcon />}
                  </div>
                  <div className="skill-details">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-bar-bg">
                      <div
                        className="skill-bar-fill"
                        style={{ width: animateSkills ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Achievements */}
      <section id="education">
        <div className="container">
          <div className="section-header">
            <span className="section-label">History & Milestones</span>
            <h2 className="section-title">Education & Achievements</h2>
            <div className="section-underline"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }}>
            {/* Timeline */}
            <div>
              <h3 style={{ marginBottom: '32px', textAlign: 'left', fontSize: '22px' }}>Education Timeline</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="glass-card timeline-card">
                    <span className="timeline-date">B.E. Computer Science & Engineering</span>
                    <h4 className="timeline-title">SNS College of Technology</h4>
                    <p className="timeline-sub">Undergraduate Degree | 8.3 CGPA</p>
                    <p className="timeline-desc">
                      Focusing on software development, algorithmic complexity, databases, and microservices architecture. Active participant in college hackathons and engineering events.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="glass-card timeline-card">
                    <span className="timeline-date">12th Grade Studies</span>
                    <h4 className="timeline-title">SKL Public School</h4>
                    <p className="timeline-sub">Higher Secondary Certificate | 83%</p>
                    <p className="timeline-desc">
                      Completed standard curriculum with key focus areas in Mathematics, Physics, Chemistry, and Computer Science.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 style={{ marginBottom: '32px', textAlign: 'left', fontSize: '22px' }}>Certifications & Hackathons</h3>
              <div className="achievements-grid">
                <div className="glass-card achievement-card">
                  <div className="achievement-header">
                    <AwardIcon />
                    <h4 className="achievement-title">Java Certification</h4>
                  </div>
                  <p className="achievement-body">
                    Earned formal credential in Java programming through PrepInsta, validating core programming constructs, object-oriented concepts, and API styling.
                  </p>
                </div>

                <div className="glass-card achievement-card">
                  <div className="achievement-header">
                    <AwardIcon />
                    <h4 className="achievement-title">SQL Certification</h4>
                  </div>
                  <p className="achievement-body">
                    Acquired credential in SQL databases by PrepInsta, highlighting familiarity with relational schemas, entity relationships, and aggregate querying.
                  </p>
                </div>

                <div className="glass-card achievement-card">
                  <div className="achievement-header">
                    <AwardIcon />
                    <h4 className="achievement-title">Coursera C Language</h4>
                  </div>
                  <p className="achievement-body">
                    Completed specialized certificate program covering core procedural programming foundations and memory management using the C language.
                  </p>
                </div>

                <div className="glass-card achievement-card">
                  <div className="achievement-header">
                    <VerifyIcon />
                    <h4 className="achievement-title">PPT Event - Kongu Engineering</h4>
                  </div>
                  <p className="achievement-body">
                    Participated and presented a technical topic presentation at the inter-collegiate PPT symposium conducted by Kongu Engineering College.
                  </p>
                </div>

                <div className="glass-card achievement-card">
                  <div className="achievement-header">
                    <VerifyIcon />
                    <h4 className="achievement-title">Inter-Level Hackathon</h4>
                  </div>
                  <p className="achievement-body">
                    Competed in college hackathons, building solutions, managing teamwork, and coding prototypes under restricted timelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social & Extracurricular Activities */}
      <section id="activities">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Giving Back</span>
            <h2 className="section-title">Social Activities</h2>
            <div className="section-underline"></div>
          </div>

          <div className="activities-grid">
            <div className="glass-card activity-card">
              <div className="activity-icon-wrap">
                <LeafIcon />
              </div>
              <div className="activity-content">
                <h4 className="activity-title">Planted 25+ Trees</h4>
                <p className="activity-desc">
                  Committed to environmental sustainability by actively planting and maintaining over 25 saplings in community and college drives.
                </p>
              </div>
            </div>

            <div className="glass-card activity-card">
              <div className="activity-icon-wrap">
                <BloodIcon />
              </div>
              <div className="activity-content">
                <h4 className="activity-title">Blood Donation Volunteer</h4>
                <p className="activity-desc">
                  Participated and donated blood in community outreach and donor camps hosted inside our college campus.
                </p>
              </div>
            </div>

            <div className="glass-card activity-card">
              <div className="activity-icon-wrap">
                <VerifyIcon />
              </div>
              <div className="activity-content">
                <h4 className="activity-title">Viksit Bharat Certification</h4>
                <p className="activity-desc">
                  Obtained certificate representing active integration and response to national progress initiatives and technological reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title">Contact Me</h2>
            <div className="section-underline"></div>
          </div>

          <div className="contact-layout">
            {/* Contact cards & details */}
            <div className="contact-info">
              <div
                className="glass-card contact-card"
                onClick={() =>
                  copyToClipboard(
                    'vibavikas.v.cse.2023@snsce.ac.in',
                    'Primary Email copied!'
                  )
                }
                title="Click to copy primary email"
              >
                <div className="contact-icon-wrap">
                  <MailIcon />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Primary Email (Click to copy)</span>
                  <span className="contact-value">vibavikas.v.cse.2023@snsce.ac.in</span>
                </div>
              </div>

              <div
                className="glass-card contact-card"
                onClick={() =>
                  copyToClipboard('vibavikas599@gmail.com', 'Alternate Email copied!')
                }
                title="Click to copy alternate email"
              >
                <div className="contact-icon-wrap">
                  <MailIcon />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Alternate Email (Click to copy)</span>
                  <span className="contact-value">vibavikas599@gmail.com</span>
                </div>
              </div>

              <div className="glass-card contact-card">
                <div className="contact-icon-wrap">
                  <PhoneIcon />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Call / Phone</span>
                  <span className="contact-value">+91 7956422890</span>
                </div>
              </div>

              <div className="glass-card contact-card">
                <div className="contact-icon-wrap">
                  <MapPinIcon />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Tirupur, Tamil Nadu, India</span>
                </div>
              </div>

              {/* Profiles */}
              <div className="social-links-grid">
                <a
                  href="https://github.com/Vibavikas-V"
                  target="_blank"
                  rel="noreferrer"
                  className="social-item"
                >
                  <span className="social-icon" style={{ display: 'flex', alignItems: 'center' }}><GithubIcon /></span>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/vvibavikas"
                  target="_blank"
                  rel="noreferrer"
                  className="social-item"
                >
                  <span className="social-icon" style={{ fontSize: '20px' }}>🔗</span>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://leetcode.com/u/Vibavikas_v"
                  target="_blank"
                  rel="noreferrer"
                  className="social-item"
                >
                  <span className="social-icon" style={{ fontSize: '20px' }}>💻</span>
                  <span>LeetCode</span>
                </a>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="glass-card">
              <form onSubmit={handleFormSubmit} className="contact-form-card">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message..."
                    className="form-control"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            © {new Date().getFullYear()} Vibavikas V. All Rights Reserved. Built with React & Vite.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
