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
  const projectsRef = useRef(null);

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
      gradient: 'from-purple-500 via-pink-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=1000&fit=crop',
      color: '#C084FC'
    },
    {
      title: 'creative',
      description: 'An immersive digital experience showcasing interactive storytelling and dynamic content.',
      tech: ['Next.js', 'TypeScript', 'GSAP', 'Canvas'],
      gradient: 'from-green-400 via-teal-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&h=1000&fit=crop',
      color: '#34D399'
    },
    {
      title: 'modern',
      description: 'A sleek portfolio platform with seamless transitions and responsive design excellence.',
      tech: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
      gradient: 'from-blue-500 via-indigo-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&h=1000&fit=crop',
      color: '#3B82F6'
    },
    {
      title: 'dynamic',
      description: 'Real-time collaborative workspace with live updates and stunning visual feedback.',
      tech: ['Vue.js', 'Firebase', 'WebSocket', 'D3.js'],
      gradient: 'from-orange-400 via-red-500 to-pink-600',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=1000&fit=crop',
      color: '#F97316'
    },
    {
      title: 'elegant',
      description: 'Minimalist design system with focus on typography and whitespace mastery.',
      tech: ['React', 'Styled Components', 'Storybook'],
      gradient: 'from-yellow-400 via-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&h=1000&fit=crop',
      color: '#FBBF24'
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
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevProject = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const getProjectPosition = (index) => {
    const diff = index - currentProjectIndex;
    const total = projects.length;
    
    let position = diff;
    if (diff > total / 2) position = diff - total;
    if (diff < -total / 2) position = diff + total;
    
    return position;
  };

  const FloatingImage = ({ delay, position, gradient, speed = 2 }) => {
    const xMove = ((mousePosition.x / window.innerWidth) - 0.5) * speed * 30;
    const yMove = ((mousePosition.y / window.innerHeight) - 0.5) * speed * 30;

    return (
      <div
        className={`absolute ${position} w-20 h-20 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br ${gradient} opacity-80 
          transition-transform duration-300 ease-out animate-float hover:scale-110 hover:rotate-6`}
        style={{
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

  return (
    <div className={`${darkMode ? 'dark' : ''} transition-colors duration-300`}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          
          * {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            25% { transform: translateY(-20px); }
            50% { transform: translateY(-10px); }
            75% { transform: translateY(-15px); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          
          .hover-lift {
            transition: transform 0.3s ease;
          }
          
          .hover-lift:hover {
            transform: translateY(-5px);
          }

          .project-card {
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .project-card-enter {
            opacity: 0;
            transform: scale(0.8) rotateY(20deg);
          }

          .project-card-active {
            opacity: 1;
            transform: scale(1) rotateY(0deg);
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
            animation: slideIn 0.6s ease-out forwards;
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .scale-in {
            animation: scaleIn 0.5s ease-out forwards;
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
                    className={`text-sm capitalize transition-colors hover:text-purple-600 dark:hover:text-purple-400 ${
                      activeSection === item ? 'text-purple-600 dark:text-purple-400 font-semibold' : 'text-gray-500'
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
                    className="text-left capitalize text-lg hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
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
            <FloatingImage delay={0} position="top-20 left-10 md:left-20" gradient="from-purple-400 to-pink-600" speed={2} />
            <FloatingImage delay={1} position="top-32 right-10 md:right-32" gradient="from-blue-400 to-cyan-600" speed={3} />
            <FloatingImage delay={2} position="bottom-32 left-16 md:left-40" gradient="from-orange-400 to-red-600" speed={1.5} />
            <FloatingImage delay={3} position="bottom-40 right-16 md:right-24" gradient="from-teal-400 to-green-600" speed={2.5} />
            <FloatingImage delay={4} position="top-1/2 left-1/4" gradient="from-indigo-400 to-purple-600" speed={3.5} />
          </div>

          <div className="container mx-auto px-6 text-center z-10 fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-4 tracking-tight">
              inspired.by
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-2">
              Frontend Developer & Creative Coder
            </p>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-500 mb-8">
              Crafting beautiful digital experiences
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
        <section id="about" className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-center slide-in">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 slide-in" style={{animationDelay: '0.1s'}}>
                I'm a passionate frontend developer with a keen eye for design and a love for creating 
                seamless user experiences. With expertise in modern web technologies, I transform ideas 
                into beautiful, functional applications.
              </p>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed slide-in" style={{animationDelay: '0.2s'}}>
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source 
                projects, or experimenting with the latest web technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section - Carousel Style */}
        <section id="projects" className="py-20 md:py-32 overflow-hidden" ref={projectsRef}>
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">Featured Projects</h2>
            
            <div className="relative h-[600px] md:h-[700px] flex items-center justify-center">
              {/* Background cards */}
              {projects.map((project, index) => {
                const position = getProjectPosition(index);
                const isCenter = position === 0;
                const isVisible = Math.abs(position) <= 2;
                
                if (!isVisible) return null;

                return (
                  <div
                    key={index}
                    className="absolute project-card"
                    style={{
                      transform: `
                        translateX(${position * 280}px) 
                        translateZ(${-Math.abs(position) * 200}px)
                        rotateY(${position * -15}deg)
                        scale(${isCenter ? 1 : 0.8 - Math.abs(position) * 0.1})
                      `,
                      zIndex: 10 - Math.abs(position),
                      opacity: isCenter ? 1 : 0.4,
                      filter: isCenter ? 'none' : 'blur(2px)',
                      pointerEvents: isCenter ? 'auto' : 'none'
                    }}
                  >
                    <div className="relative w-[280px] md:w-[400px] h-[400px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}
                        style={{
                          backgroundImage: `linear-gradient(135deg, ${project.color}50, ${project.color}90)`
                        }}
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                        <h3 className="text-4xl md:text-5xl font-light mb-6 text-center">{project.title}</h3>
                        <button 
                          className="px-8 py-3 bg-white text-gray-900 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                          onClick={() => scrollToSection('contact')}
                        >
                          view projects
                        </button>
                      </div>
                      {/* Side images preview */}
                      {!isCenter && (
                        <div className="absolute inset-0 opacity-30">
                          <div className="w-full h-full bg-cover bg-center" 
                            style={{
                              backgroundColor: project.color,
                              backgroundBlendMode: 'multiply'
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={prevProject}
                className="w-14 h-14 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition-all duration-300 flex items-center justify-center hover:scale-110"
                disabled={isAnimating}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextProject}
                className="w-14 h-14 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 flex items-center justify-center hover:scale-110"
                disabled={isAnimating}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Project details below */}
            <div className="mt-16 max-w-2xl mx-auto text-center scale-in">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">{projects[currentProjectIndex].title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{projects[currentProjectIndex].description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
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
        <section id="skills" className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">Skills & Expertise</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="text-purple-600 dark:text-purple-400">{skill.icon}</div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-8">Let's Work Together</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
            <div className="flex justify-center gap-6 mb-12">
              <a
                href="#"
                className="p-4 bg-white dark:bg-gray-800 rounded-full hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-all hover:-translate-y-2 shadow-lg"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-4 bg-white dark:bg-gray-800 rounded-full hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-all hover:-translate-y-2 shadow-lg"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-4 bg-white dark:bg-gray-800 rounded-full hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-all hover:-translate-y-2 shadow-lg"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <a
              href="mailto:hello@example.com"
              className="inline-block px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
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

