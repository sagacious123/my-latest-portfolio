import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const HomeNew = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('home');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const projects = [
    {
      title: 'innovative',
      description: 'A cutting-edge web application featuring modern design patterns and advanced animations.',
      tech: ['React', 'Three.js', 'WebGL', 'Framer Motion'],
      color: '#3B82F6'
    },
    {
      title: 'creative',
      description: 'An immersive digital experience showcasing interactive storytelling and dynamic content.',
      tech: ['Next.js', 'TypeScript', 'GSAP', 'Canvas'],
      color: '#2563EB'
    },
    {
      title: 'modern',
      description: 'A sleek portfolio platform with seamless transitions and responsive design excellence.',
      tech: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
      color: '#1D4ED8'
    },
    {
      title: 'dynamic',
      description: 'Real-time collaborative workspace with live updates and stunning visual feedback.',
      tech: ['Vue.js', 'Firebase', 'WebSocket', 'D3.js'],
      color: '#60A5FA'
    },
    {
      title: 'elegant',
      description: 'Minimalist design system with focus on typography and whitespace mastery.',
      tech: ['React', 'Styled Components', 'Storybook'],
      color: '#93C5FD'
    }
  ];

  const skills = [
    { name: 'React & Next.js', level: 95, icon: <Code className="w-5 h-5" /> },
    { name: 'TypeScript', level: 90, icon: <Code className="w-5 h-5" /> },
    { name: 'Tailwind CSS', level: 95, icon: <Palette className="w-5 h-5" /> },
    { name: 'Node.js & Express', level: 85, icon: <Zap className="w-5 h-5" /> },
    { name: 'UI/UX Design', level: 80, icon: <Palette className="w-5 h-5" /> },
    { name: 'Performance Optimization', level: 88, icon: <Zap className="w-5 h-5" /> }
  ];

  const nextProject = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const prevProject = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const FloatingImage = ({ delay, position, color, speed = 2 }) => {
    const xMove = ((mousePosition.x / window.innerWidth) - 0.5) * speed * 30;
    const yMove = ((mousePosition.y / window.innerHeight) - 0.5) * speed * 30;

    return (
      <div
        className={`absolute ${position} w-20 h-20 md:w-32 md:h-32 rounded-2xl opacity-80 
          transition-transform duration-300 ease-out hover:scale-110 hover:rotate-6 slide-up-float`}
        style={{
          backgroundColor: color,
          animationDelay: `${delay}s`,
          transform: `translate(${xMove}px, ${yMove}px)`
        }}
      />
    );
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const getCircularPosition = (index, total, radius = 320) => {
    const angle = ((index - currentProjectIndex) * (360 / total) * Math.PI) / 180;
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;
    const rotateY = -angle * (180 / Math.PI);
    
    return { x, z, rotateY };
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} transition-colors duration-300`}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          
          * {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          }
          
          @keyframes slideUpFloat {
            0% {
              opacity: 0;
              transform: translateY(100px) scale(0.8);
            }
            100% {
              opacity: 0.8;
              transform: translateY(0) scale(1);
            }
          }
          
          .slide-up-float {
            animation: slideUpFloat 1s ease-out forwards;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .fade-in-up {
            opacity: 0;
            animation: fadeInUp 0.8s ease-out forwards;
          }
          
          .section-visible .fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }

          @keyframes textReveal {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .text-reveal {
            opacity: 0;
            animation: textReveal 0.6s ease-out forwards;
          }

          .section-visible .text-reveal {
            animation: textReveal 0.6s ease-out forwards;
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .slide-in {
            opacity: 0;
            animation: slideIn 0.6s ease-out forwards;
          }

          .section-visible .slide-in {
            animation: slideIn 0.6s ease-out forwards;
          }

          .hover-lift {
            transition: transform 0.3s ease;
          }
          
          .hover-lift:hover {
            transform: translateY(-5px);
          }

          .project-card {
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            transform-style: preserve-3d;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          .float-animation {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>

        {/* Header */}
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}>
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-semibold italic">pé</div>
              
              <nav className="hidden md:flex items-center gap-8">
                {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-sm capitalize transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                      activeSection === item ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-500'
                    }`}
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </nav>

              <div className="flex md:hidden items-center gap-4">
                <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
              <nav className="flex flex-col p-6 gap-4">
                {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-left capitalize text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <FloatingImage delay={0.2} position="top-20 left-10 md:left-20" color="#3B82F6" speed={2} />
            <FloatingImage delay={0.4} position="top-32 right-10 md:right-32" color="#2563EB" speed={3} />
            <FloatingImage delay={0.6} position="bottom-32 left-16 md:left-40" color="#1D4ED8" speed={1.5} />
            <FloatingImage delay={0.8} position="bottom-40 right-16 md:right-24" color="#60A5FA" speed={2.5} />
            <FloatingImage delay={1} position="top-1/2 left-1/4" color="#93C5FD" speed={3.5} />
          </div>

          <div className="container mx-auto px-6 text-center z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-4 tracking-tight text-reveal">
              inspired.by
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-2 text-reveal" style={{animationDelay: '0.2s'}}>
              Frontend Developer & Creative Coder
            </p>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-500 mb-8 text-reveal" style={{animationDelay: '0.3s'}}>
              Crafting beautiful digital experiences
            </p>
            <div className="flex gap-4 justify-center flex-wrap fade-in-up" style={{animationDelay: '0.4s'}}>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:shadow-xl hover:-translate-y-1 hover:bg-blue-700 transition-all duration-300"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`py-20 md:py-32 ${visibleSections.has('about') ? 'section-visible' : ''}`}>
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-center text-reveal">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 fade-in-up" style={{animationDelay: '0.1s'}}>
                I'm a passionate frontend developer with a keen eye for design and a love for creating 
                seamless user experiences. With expertise in modern web technologies, I transform ideas 
                into beautiful, functional applications.
              </p>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed fade-in-up" style={{animationDelay: '0.2s'}}>
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source 
                projects, or experimenting with the latest web technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section - 3D Circle */}
        <section id="projects" className={`py-20 md:py-32 overflow-hidden ${visibleSections.has('projects') ? 'section-visible' : ''}`}>
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-light mb-16 text-center text-reveal">Featured Projects</h2>
            
            <div className="relative h-[500px] md:h-[650px]" style={{ perspective: '1500px' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                {projects.map((project, index) => {
                  const pos = getCircularPosition(index, projects.length, window.innerWidth < 768 ? 200 : 320);
                  const isFront = pos.z > 0;
                  const scale = 0.7 + (pos.z / 320) * 0.3;
                  const opacity = 0.4 + (pos.z / 320) * 0.6;

                  return (
                    <div
                      key={index}
                      className="project-card absolute"
                      style={{
                        transform: `translate3d(${pos.x}px, 0, ${pos.z}px) rotateY(${pos.rotateY}deg) scale(${scale})`,
                        zIndex: Math.round(pos.z),
                        opacity: isFront ? opacity : 0.3,
                        pointerEvents: Math.abs(index - currentProjectIndex) === 0 ? 'auto' : 'none'
                      }}
                    >
                      <div className="w-[240px] md:w-[340px] h-[340px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800 float-animation"
                        style={{animationDelay: `${index * 0.2}s`}}
                      >
                        <div 
                          className="w-full h-full flex flex-col items-center justify-center text-white p-8"
                          style={{ backgroundColor: project.color }}
                        >
                          <h3 className="text-3xl md:text-5xl font-light mb-6 text-center">{project.title}</h3>
                          {Math.abs(index - currentProjectIndex) === 0 && (
                            <button 
                              className="px-8 py-3 bg-white text-gray-900 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                              onClick={() => scrollToSection('contact')}
                            >
                              view projects
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-12 fade-in-up" style={{animationDelay: '0.3s'}}>
              <button
                onClick={prevProject}
                className="w-14 h-14 rounded-full bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500 transition-all duration-300 flex items-center justify-center hover:scale-110 text-white"
                disabled={isAnimating}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextProject}
                className="w-14 h-14 rounded-full bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-300 transition-all duration-300 flex items-center justify-center hover:scale-110"
                disabled={isAnimating}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Project details */}
            <div className="mt-16 max-w-2xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-reveal">{projects[currentProjectIndex].title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-reveal" style={{animationDelay: '0.1s'}}>{projects[currentProjectIndex].description}</p>
              <div className="flex flex-wrap gap-2 justify-center fade-in-up" style={{animationDelay: '0.2s'}}>
                {projects[currentProjectIndex].tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm bg-white dark:bg-gray-800 rounded-full shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`py-20 md:py-32 ${visibleSections.has('skills') ? 'section-visible' : ''}`}>
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-light mb-16 text-center text-reveal">Skills & Expertise</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="text-blue-600 dark:text-blue-400">{skill.icon}</div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: visibleSections.has('skills') ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`py-20 md:py-32 ${visibleSections.has('contact') ? 'section-visible' : ''}`}>
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-reveal">Let's Work Together</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto text-reveal" style={{animationDelay: '0.1s'}}>
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
            <div className="flex justify-center gap-6 mb-12 fade-in-up" style={{animationDelay: '0.2s'}}>
              <a
                href="#"
                className="p-4 bg-white dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all hover:-translate-y-2 shadow-lg"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-4 bg-white dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all hover:-translate-y-2 shadow-lg"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-4 bg-white dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all hover:-translate-y-2 shadow-lg"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <a
              href="mailto:hello@example.com"
              className="inline-block px-12 py-4 bg-blue-600 text-white rounded-full text-lg hover:shadow-2xl hover:-translate-y-1 hover:bg-blue-700 transition-all duration-300 fade-in-up"
              style={{animationDelay: '0.3s'}}
            >
              Send Me a Message
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2025 Developer Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

