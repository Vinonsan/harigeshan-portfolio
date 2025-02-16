import { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Row, Col, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaInstagram, FaPrescriptionBottleAlt, FaChalkboardTeacher, FaBalanceScale, FaSyringe, FaMapMarkerAlt, FaPhone, FaGraduationCap, FaHeartbeat, FaSyncAlt, FaLightbulb, FaGlobeAsia, FaAngleRight } from 'react-icons/fa';
import { MdPsychology, MdGavel, MdHealthAndSafety, MdSchool } from 'react-icons/md';
import { BsFillLightbulbFill, BsGearFill } from 'react-icons/bs';
import { FaComments, FaUsers, FaBrain, FaPuzzlePiece, FaClock, FaHandshake, FaFileWord, FaFileExcel, FaSearch, FaSitemap, FaChartBar, FaTasks } from 'react-icons/fa';
import './App.css';

function App() {
  const [activeLink, setActiveLink] = useState('home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds loading time
  }, []);

  const handleNavClick = (section) => {
    setActiveLink(section);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="shapes-container">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
          <h2>Welcome to My Portfolio</h2>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar expand="lg" fixed="top" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Gurumoorthy Harikeshan</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {['home', 'about', 'education', 'experience', 'skills', 'contact'].map((section) => (
                <Nav.Link 
                  key={section}
                  href={`#${section}`}
                  className={activeLink === section ? 'active' : ''}
                  onClick={() => handleNavClick(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section id="home" className="hero-section">
        <Container>
          <Row className="align-items-center">
            
            <Col md={6} className="text-center text-md-start hero-content">
              <h1>Transforming Lives Through Knowledge</h1>
              <p className="lead">
                Merging Law, Psychology, and Health Promotion to create meaningful impact
              </p>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="mailto:your.email@example.com">
                  <FaEnvelope />
                </a>
              </div>
              <Button variant="primary" size="lg" href="#contact">
                Let&apos;s Connect
              </Button>
            </Col>
            <Col md={6} className="text-center">
              <div className="hero-image-container">
                <img src="/src/assets/profile.jpg" alt="Gurumoorthy Harikeshan" className="hero-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about" className="section-padding">
        <Container>
          <div className="section-title">
            <h2>About Me</h2>
          </div>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="about-content">
                <p className="lead main-text">
                  A dedicated professional pursuing multiple disciplines with a passion for making a difference.
                </p>
                
                <Row className="mt-5">
                  <Col md={4} className="mb-4">
                    <div className="about-card">
                      <div className="about-icon law">
                        <MdGavel />
                      </div>
                      <h3>Legal Expertise</h3>
                      <p>Pursuing LLB with focus on human rights and social justice</p>
                    </div>
                  </Col>
                  
                  <Col md={4} className="mb-4">
                    <div className="about-card">
                      <div className="about-icon psychology">
                        <MdPsychology />
                      </div>
                      <h3>Psychology</h3>
                      <p>Specialized in child and counselling psychology</p>
                    </div>
                  </Col>
                  
                  <Col md={4} className="mb-4">
                    <div className="about-card">
                      <div className="about-icon health">
                        <MdHealthAndSafety />
                      </div>
                      <h3>Health Promotion</h3>
                      <p>Dedicated to improving community well-being</p>
                    </div>
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col md={6} className="mb-4">
                    <div className="feature-box">
                      <BsFillLightbulbFill className="feature-icon" />
                      <div className="feature-content">
                        <h4>My Vision</h4>
                        <p>Integrating multiple disciplines to create innovative solutions for complex social challenges</p>
                      </div>
                    </div>
                  </Col>
                  
                  <Col md={6} className="mb-4">
                    <div className="feature-box">
                      <BsGearFill className="feature-icon" />
                      <div className="feature-content">
                        <h4>Approach</h4>
                        <p>Combining theoretical knowledge with practical experience for comprehensive problem-solving</p>
                      </div>
                    </div>
                  </Col>
                </Row>

                <div className="education-highlight">
                  <MdSchool className="education-icon" />
                  <p>Currently pursuing multiple professional qualifications to enhance expertise</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="education" className="section-padding dark-section">
        <Container>
          <div className="section-title">
            <h2>Education Journey</h2>
          </div>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="timeline">
                {[
                 {
                  title: "Marketing Course",
                  status: "Completed",
                  year: "2019-2020",
                  description: "Mastered fundamental marketing principles and strategies",
                  icon: <BsGearFill />
                 },
                 {
                  title: "Diploma in Child and Educational Psychology",
                  status: "Reading",
                  year: "2023 - 2024",
                  description: "Focusing on child development and educational methodologies",
                  icon: <MdPsychology />
                },
                {
                  title: "Diploma in Counselling Psychology",
                  status: "Reading",
                  year: "2023 - 2024",
                  description: "Developing expertise in therapeutic approaches and counseling techniques",
                  icon: <MdPsychology />
                },
                {
                  title: "LLB (Hons) - Law Degree",
                  status: "Reading",
                  year: "2020 - 2024",
                  description: "Studying legal frameworks with focus on human rights",
                  icon: <MdGavel />
                },
                {
                  title: "BSc in Health Promotion",
                  status: "Reading",
                  year: "2022 - Present",
                  description: "Learning comprehensive approaches to community health",
                  icon: <MdHealthAndSafety />
                }
                ].map((edu, index) => (
                  <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <div className="timeline-icon">
                      {edu.icon}
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-date">{edu.year}</div>
                      <h3>{edu.title}</h3>
                      <div className="status-badge">{edu.status}</div>
                      <p>{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="experience" className="section-padding dark-section experience-section">
        <Container>
          <div className="section-title">
            <h2>Experience Journey</h2>
          </div>
          <Row>
            {[
              {
                title: "Pharmacy Assistant",
                duration: "1 Year",
                description: "Assisted in pharmacy operations and customer service.",
                icon: <FaPrescriptionBottleAlt />
              },
              {
                title: "Teacher",
                duration: "1 Year",
                organization: "Webster International School, Hatton",
                description: "Provided comprehensive education and mentoring to students.",
                icon: <FaChalkboardTeacher />
              },
              {
                title: "Law Office Clerk",
                duration: "3 Months",
                description: "Gained practical experience in legal procedures and documentation.",
                icon: <FaBalanceScale />
              },
              {
                title: "COVID-19 Vaccination Campaign",
                type: "Voluntary Work",
                description: "Contributed to public health efforts during the pandemic.",
                icon: <FaSyringe />
              }
            ].map((exp, index) => (
              <Col lg={6} key={index} className="mb-4">
                <div className="experience-card">
                  <div className="experience-icon">
                    {exp.icon}
                  </div>
                  <div className="experience-content">
                    <h3>{exp.title}</h3>
                    <div className="experience-meta">
                      <span className="duration">{exp.duration}</span>
                      {exp.organization && <span className="organization">{exp.organization}</span>}
                      {exp.type && <span className="work-type">{exp.type}</span>}
                    </div>
                    <p>{exp.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="skills" className="section-padding skills-section">
        <Container>
          <div className="section-title">
            <h2>Skills & Expertise</h2>
          </div>
          <div className="skills-container">
            <div className="skills-category">
              <h3>Soft Skills</h3>
              <div className="skills-grid">
                {[
                  { name: "Communication", icon: <FaComments /> },
                  { name: "Leadership", icon: <FaUsers /> },
                  { name: "Decision-Making", icon: <FaBrain /> },
                  { name: "Problem-Solving", icon: <FaPuzzlePiece /> },
                  { name: "Time Management", icon: <FaClock /> },
                  { name: "Collaboration", icon: <FaHandshake /> },
                  { name: "Adaptability", icon: <FaSyncAlt /> },
                  { name: "Critical Thinking", icon: <FaLightbulb /> },
                  { name: "Cultural Awareness", icon: <FaGlobeAsia /> }
                ].map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="skills-category">
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                {[
                  { name: "Microsoft Word", icon: <FaFileWord /> },
                  { name: "Excel", icon: <FaFileExcel /> },
                  { name: "Research", icon: <FaSearch /> },
                  { name: "Interdisciplinary Skills", icon: <FaSitemap /> },
                  { name: "Data Analysis", icon: <FaChartBar /> },
                  { name: "Project Management", icon: <FaTasks /> }
                ].map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="languages" className="section-padding dark-section languages-section">
        <Container>
          <div className="section-title">
            <h2>Language Proficiency</h2>
          </div>
          <Row className="justify-content-center">
            {[
              { language: "Tamil", level: "Fluent", percentage: 100 },
              { language: "Sinhala", level: "Fluent", percentage: 100 },
              { language: "English", level: "Fluent", percentage: 100 }
            ].map((lang, index) => (
              <Col md={4} key={index}>
                <div className="language-card">
                  <div className="language-circle">
                    <div className="percent">
                      <svg>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70" 
                          style={{ 
                            strokeDashoffset: `${440 - (440 * lang.percentage) / 100}` 
                          }}></circle>
                      </svg>
                      <div className="number">
                        <h3>{lang.language}</h3>
                        <p>{lang.level}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <footer className="footer-section">
        <div className="footer-shape"></div>
        
        {/* New Newsletter Section */}
        <div className="footer-newsletter">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <h3>Stay Connected</h3>
                <p>Subscribe to receive updates about my journey and insights</p>
                <div className="newsletter-form">
                  <input type="email" placeholder="Enter your email" />
                  <button type="button">Subscribe</button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="footer-top">
          <Container>
            <Row>
              <Col lg={4} md={6} className="footer-info">
                <h3>Gurumoorthy Harikeshan</h3>
                <p className="footer-about">
                  Dedicated to making a positive impact through the integration of law, psychology, and health promotion.
                </p>
               
                <div className="footer-social">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github">
                    <FaGithub />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
                    <FaTwitter />
                  </a>
                  <a href="mailto:your.email@example.com" className="email">
                    <FaEnvelope />
                  </a>
                </div>
              </Col>

              <Col lg={4} md={6} className="footer-links">
                <h4>Quick Links</h4>
                <div className="quick-links">
                  <p>
                    <FaAngleRight className="link-icon" />
                    <a href="#home">Home</a>
                  </p>
                  <p>
                    <FaAngleRight className="link-icon" />
                    <a href="#about">About</a>
                  </p>
                  <p>
                    <FaAngleRight className="link-icon" />
                    <a href="#education">Education</a>
                  </p>
                  <p>
                    <FaAngleRight className="link-icon" />
                    <a href="#experience">Experience</a>
                  </p>
                  <p>
                    <FaAngleRight className="link-icon" />
                    <a href="#skills">Skills</a>
                  </p>
                </div>
              </Col>

              <Col lg={4} md={12} className="footer-contact">
                <h4>Contact Information</h4>
                <div className="contact-info">
                  <p>
                    <FaMapMarkerAlt className="contact-icon" />
                    <span>Rothes New Bungalow, Hatton</span>
                  </p>
                  <p>
                    <FaPhone className="contact-icon" />
                    <span>0771714910</span>
                  </p>
                  <p>
                    <FaEnvelope className="contact-icon" />
                    <span>harikeshangurumoorthy@gmail.com</span>
                  </p>
                </div>
               
              </Col>
            </Row>
          </Container>
        </div>

        {/* New Middle Section */}
        <div className="footer-middle">
          <Container>
            <Row className="justify-content-center">
              <Col lg={12}>
                <div className="achievements-wrapper">
                  <h4>Professional Memberships</h4>
                  <div className="achievements-list">
                    <div className="achievement-item">
                      <FaGraduationCap className="achievement-icon" />
                      <span>Educational Psychology Association</span>
                    </div>
                    <div className="achievement-item">
                      <FaBalanceScale className="achievement-icon" />
                      <span>Law Society Member</span>
                    </div>
                    <div className="achievement-item">
                      <FaHeartbeat className="achievement-icon" />
                      <span>Health Promotion Council</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="footer-bottom">
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="text-center text-md-start">
                <p className="copyright">
                  © {new Date().getFullYear()} Gurumoorthy Harikeshan. All rights reserved.
                </p>
              </Col>
              <Col md={6} className="text-center text-md-end">
                <div className="footer-extra">
                  <a href="#privacy">Privacy Policy</a>
                  <span className="separator">|</span>
                  <a href="#terms">Terms of Use</a>
                  <span className="separator">|</span>
                  <a href="#sitemap">Sitemap</a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </div>
  );
}

export default App;