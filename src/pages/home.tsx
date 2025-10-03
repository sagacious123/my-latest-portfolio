/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Mail,
  Phone,
  Code2,
  Rocket,
  Zap,
  Award,
  Briefcase,
  ArrowRight,
  Menu,
  X,
  Sun,
  Moon,
  User,
  ExternalLink,
  Monitor,
  PenTool,
  LucideWaves,
  Box,
  ChevronDown,
  Laptop,
  Download,
  Github,
} from "lucide-react";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiAngular,
  //   SiAmazonaws,
  SiRedux,
  SiReact,
  SiIcloud,
} from "@icons-pack/react-simple-icons";
import BloombeautyScreenshot from "assets/bloombeauty.png";
import MyIturaScreenshot from "assets/myitura.png";
import SixthGearScreenshot from "assets/sixth-gear.png";
import TradelendaScreenshot from "assets/tradelenda.png";
import TradetrackaScreenshot from "assets/tradetracka.png";
import NtlScreenshot from "assets/ntl.png";
import Resume from "assets/Joseph_Bajegbo Resume.pdf";
import { useTheme } from "context/ThemeContext";

export const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  // const [isDark, setIsDark] = useState(
  //   () => window.matchMedia("(prefers-color-scheme: dark)").matches
  // );
  const { isDark, toggleTheme } = useTheme();
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [skillOrbit, setSkillOrbit] = useState(0);
  const [sparkles, setSparkles] = useState<
    {
      id: number;
      x: number;
      y: number;
      createdAt: number;
      size: number;
      color: string;
    }[]
  >([]);
  const [nextSparkleId, setNextSparkleId] = useState(0);
  const [activeExperience, setActiveExperience] = useState<number | null>(0);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const orbitInterval = setInterval(() => {
      setSkillOrbit((prev) => (prev + 1) % 360);
    }, 50);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(orbitInterval);
    };
  }, []);

  const parallaxOffset = scrollY * 0.5;

  const skills = [
    { name: "React.js", icon: <SiReact />, color: "from-cyan-500 to-blue-500" },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "from-teal-400 to-cyan-500",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "from-yellow-400 to-orange-500",
    },
    { name: "Angular", icon: <SiAngular />, color: "from-red-500 to-pink-500" },
    {
      name: "AWS",
      icon: <SiIcloud />,
      color: "from-orange-400 to-yellow-500",
    },
    { name: "Redux", icon: <SiRedux />, color: "from-purple-500 to-pink-500" },
  ];

  const projects = [
    {
      title: "Bloom Beauty Landing Page",
      description:
        "A visually appealing and responsive landing page for a beauty brand, built on WordPress for easy content management.",
      tech: ["WordPress"],
      impact: "",
      screenshot: BloombeautyScreenshot,
      link: "https://bloombeautyafrica.com/",
    },
    {
      title: "MyItura Telemedicine Web App",
      description:
        "Led the frontend development for a comprehensive telemedicine platform, enabling virtual consultations and healthcare access. Built with a modern React and TypeScript stack.",
      tech: ["React", "TypeScript", "Mobx", "Firebase", "SASS"],
      impact: "",
      screenshot: MyIturaScreenshot,
      link: "https://myitura.com/",
    },
    {
      title: "Tradelenda",
      description:
        "Spearheaded the frontend team to build a robust fintech platform, providing financial services and credit solutions to businesses.",
      tech: ["React", "TypeScript", "Mobx", "Firebase", "SASS"],
      impact: "",
      screenshot: TradelendaScreenshot,
      link: "https://tradelenda.com/",
    },
    {
      title: "Sixth Gear Landing Page with CMS",
      description:
        "Developed a dynamic and engaging landing page with an integrated Content Management System (CMS) for a leading automotive company, using Angular and Firebase.",
      tech: ["Angular", "TypeScript", "Firebase"],
      impact: "",
      screenshot: SixthGearScreenshot,
      link: "https://6th-gear.com/",
    },
    {
      title: "Tradetracka",
      description:
        "Directed the frontend efforts for a review platform powered by AI, fostering trust between online shoppers and businesses.",
      tech: ["React", "TypeScript", "Redux", "Firebase", "SASS"],
      impact: "",
      screenshot: TradetrackaScreenshot,
      link: "https://tradetracka.com/",
    },
    {
      title: "NTL Collections",
      description:
        "Engineered a seamless e-commerce experience for a beauty brand by integrating WordPress with WooCommerce for powerful online sales capabilities.",
      tech: ["Wordpress", "Woocommerce"],
      impact: "",
      screenshot: NtlScreenshot,
      link: "https://ntlcollections.com/",
    },
  ];

  const projectss = [
    {
      title: "E-Commerce Platform Redesign",
      description:
        "Built a high-performance e-commerce platform with React & Next.js, achieving 40% faster page loads",
      tech: ["React", "Next.js", "Tailwind", "Stripe"],
      color: "from-blue-500 to-purple-500",
      impact: "40% faster loads",
      icon: "🛍️",
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "Created an interactive data visualization dashboard with real-time updates for business metrics",
      tech: ["React", "TypeScript", "Redux", "D3.js"],
      color: "from-green-500 to-teal-500",
      impact: "10k+ daily users",
      icon: "📊",
    },
    {
      title: "Educational Learning Platform",
      description:
        "Developed a scalable learning management system with video streaming and progress tracking",
      tech: ["Angular", "Firebase", "SASS", "AWS"],
      color: "from-orange-500 to-red-500",
      impact: "50+ students mentored",
      icon: "🎓",
    },
    {
      title: "Marketing Automation Tool",
      description:
        "Built responsive HTML email templates and campaign management system with A/B testing",
      tech: ["React", "Node.js", "MongoDB", "AWS"],
      color: "from-pink-500 to-purple-500",
      impact: "2x engagement",
      icon: "📧",
    },
  ];

  const services = [
    {
      icon: <Monitor className="w-6 h-6 text-blue-400" />,
      title: "Website Development",
      desc: "I create websites based on your ready-made design. Whether it’s a landing page or a business card website, I will make it look great and work smoothly on any device.",
    },
    {
      icon: <PenTool className="w-6 h-6 text-blue-400" />,
      title: "Web App Development",
      desc: "I build web applications ",
    },
    {
      icon: <LucideWaves className="w-6 h-6 text-blue-400" />,
      title: "WordPress Development",
      desc: "I build websites on WordPress, making them easy to update and manage. It’s a great choice for blogs, small businesses, or portfolios.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Product Manager at Techbeaver",
      text: "Joseph transformed our web presence completely. His attention to detail and ability to optimize performance while maintaining beautiful designs is unmatched.",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      name: "David Chen",
      role: "CTO at StartupX",
      text: "Working with Joseph was a game-changer. He delivered a lightning-fast, responsive platform that exceeded all our expectations. A true frontend wizard!",
      rating: 5,
      avatar: "👨‍💻",
    },
    {
      name: "Amaka Johnson",
      role: "Former Student",
      text: "Joseph is an incredible mentor. His teaching style made complex concepts easy to grasp. I landed my first dev job thanks to his guidance!",
      rating: 5,
      avatar: "👩‍🎓",
    },
  ];

  const experiences = [
    {
      company: "Techbeaver",
      role: "Frontend Developer",
      period: "Jan 2022 – Present",
      achievements: [
        "Reduced page load speeds using React.js optimization",
        "Increased website performance through code minification",
        "Led cross-functional teams on high-impact projects",
        "Designed HTML email templates boosting engagement",
      ],
    },
    {
      company: "720Degree Innovation Hub",
      role: "Frontend Developer/Instructor",
      period: "Nov 2020 – Jan 2022",
      achievements: [
        "Achieved 10% increase in website traffic",
        "Mentored 50+ aspiring developers",
        "Built scalable, cross-browser compatible applications",
        "Improved team productivity through collaboration",
      ],
    },
    {
      company: "720Degree Innovation Hub",
      role: "Website Developer Intern",
      period: "Jun 2020 – Oct 2020",
      achievements: [
        "Optimized page elements reducing load time by 20%",
        "Improved user satisfaction by 15%",
        "Debugged code for cross-browser compatibility",
        "Collaborated with design teams seamlessly",
      ],
    },
  ];

  const certifications = [
    "Google Africa Developer Certificate in Mobile Web Development",
    "Jobberman Soft Skills Certificate",
    "Hackerrank CSS Certificate",
    "Diploma in Computer Appreciation",
  ];

  //   const toggleTask = (expIndex, taskIndex) => {
  //     const key = `${expIndex}-${taskIndex}`;
  //     setCompletedTasks((prev) => ({
  //       ...prev,
  //       [key]: !prev[key],
  //     }));
  //   };

  const createSparkle = (x: number, y: number) => {
    const newSparkle = {
      id: nextSparkleId,
      x,
      y,
      createdAt: Date.now(),
      size: Math.random() * 20 + 10,
      color: ["#f59e0b", "#ec4899", "#8b5cf6", "#3b82f6"][
        Math.floor(Math.random() * 4)
      ],
    };
    setSparkles((prev) => [...prev, newSparkle]);
    setNextSparkleId((prev) => prev + 1);
  };

  const bgColor = isDark ? "body-bg" : "body-bg-light";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const cardBg = isDark ? "bg-slate-900/50" : "bg-white/50";
  const whiteBg = isDark ? "bg-slate-950/80" : "bg-white/80";
  const borderColor = isDark ? "border-purple-900" : "border-purple-100";
  // const borderColor = isDark ? 'border-slate-700' : 'border-slate-200';
  const accentColor = isDark ? "text-purple-400" : "text-purple-600";
  // ${
  //           isDark ? "bg-slate-950/80" : "bg-white/80"
  //         }

  // ${
  //             isDark
  //               ? "from-purple-400 to-pink-400"
  //               : "from-purple-600 to-pink-600"
  //           }
  return (
    <div
      className={`min-h-screen ${bgColor} ${textColor} overflow-hidden transition-colors duration-500`}
    >
      {/* Custom Cursor Effect */}
      <div
        className={`fixed w-8 h-8 border-2 ${
          isDark ? "border-purple-500" : "border-purple-600"
        } rounded-full pointer-events-none z-40 mix-blend-difference transition-transform duration-150`}
        style={{
          left: `${mousePosition.x - 16}px`,
          top: `${mousePosition.y - 16}px`,
          transform: hoveredSkill !== null ? "scale(2)" : "scale(1)",
        }}
      />

      {/* Floating Particles */}
      {/* <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 ${
              isDark ? "bg-purple-500/30" : "bg-purple-400/40"
            } rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div> */}

      {/* Navigation */}
      <nav
        className={`fixed max-w-7xl w-[95%] mx-auto top-5 left-1/2 -translate-x-1/2 z-40 rounded-full bg-transparent  backdrop-blur-lg border ${borderColor}`}
      >
        <div className="max-w-7xl mx-auto md:px-6 md:py-4 px-5 py-3 flex justify-between items-center">
          <div
            className={`text-2xl font-bold  flex items-center gap-2 cursor-pointer hover:scale-110 transition-transform ${
              isDark ? "text-purple-200" : "text-purple-900"
            }`}
          >
            <Laptop className="w-6 h-6" />
            JB
          </div>
          {/* Desktop Nav */}
          <div
            className={`flex md:flex-row flex-col md:bg-transparent md:static absolute top-[64%] left-0 right-0 gap-8 items-center md:border-0 md:py-0 py-5 rounded-b-4xl md:rounded-[unset] border border-t-0 ${borderColor} backdrop-blur-md md:opacity-100 opacity-0 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Experience",
              //   "Testimonials",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`hover:${accentColor} transition-colors relative group font-normal`}
                onClick={() => {
                  createSparkle(mousePosition.x, mousePosition.y);
                  setIsMenuOpen(false);
                }}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                    isDark ? "bg-purple-400" : "bg-purple-600"
                  } group-hover:w-full transition-all duration-300`}
                />
              </a>
            ))}
            {/* <button
              onClick={() => {
                setIsDark(!isDark);
                createSparkle(mousePosition.x, mousePosition.y);
              }}
              className={`p-2 rounded-full ${cardBg} border ${borderColor} hover:scale-110 transition-transform`}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-purple-600" />
              )}
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className=" flex items-center gap-4 relative z-[999]">
            <button
              onClick={() => {
                toggleTheme();
                createSparkle(mousePosition.x, mousePosition.y);
              }}
              className={`p-2 rounded-full ${cardBg} border ${borderColor}`}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-purple-600" />
              )}
            </button>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          {/* <div
            className={`flex md:flex-row flex-col md:bg-transparent md:static absolute top-1/2 z-[-1] left-0 right-0 gap-8 items-center md:border-0 md:py-0 py-5 rounded-b-4xl md:rounded-[unset] border border-t-0 ${borderColor} ${whiteBg} md:opacity-100 opacity-0 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Experience",
              //   "Testimonials",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${
                  isDark ? "hover:text-purple-400" : "hover:text-purple-600"
                } transition-colors relative group`}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                    isDark ? "bg-purple-400" : "bg-purple-600"
                  } group-hover:w-full transition-all duration-300`}
                />
              </a>
            ))}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full ${cardBg} border ${borderColor} hover:scale-110 transition-transform`}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-purple-600" />
              )}
            </button>
          </div> */}
          {/* <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button> */}
        </div>
        {/* Mobile Menu */}
        {/* {isMenuOpen && (
          <div className={`md:hidden fixed ${cardBg} border-t ${borderColor} py-4`}>
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Experience",
              "Testimonials",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block px-6 py-3 hover:${accentColor} transition-colors`}
                onClick={() => {
                  setIsMenuOpen(false);
                  createSparkle(mousePosition.x, mousePosition.y);
                }}
              >
                {item}
              </a>
            ))}
          </div>
        )} */}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative pt-20"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translateY(${parallaxOffset}px)`,
            background: `radial-gradient(circle at 50% 50%, ${
              isDark ? "rgba(168, 85, 247, 0.4)" : "rgba(168, 85, 247, 0.2)"
            } 0%, transparent 50%)`,
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          {/* <div className="mb-8 inline-block">
            <Sparkles
              className="w-12 h-12 text-yellow-400 animate-spin"
              style={{ animationDuration: "3s" }}
            />
          </div> */}

          <div className="text-2xl md:text-4xl mb-8 flex items-center justify-center gap-4 flex-wrap gg">
            <Code2
              className={`w-8 h-8 ${
                isDark ? "text-purple-400" : "text-purple-600"
              }`}
            />
            <span className="font-light">Frontend Developer</span>
            {/* <Rocket
              className={`w-8 h-8 ${
                isDark ? "text-pink-400" : "text-pink-600"
              }`}
            /> */}
          </div>
          <h1
            className={`text-4xl md:text-6xl leading-tight font-bold mb-6 animate-fade-in max-w-2xl hover:scale-110 transition-transform text-purple-400 cursor-pointer ${
              isDark ? "gradient-text" : "gradient-text-light"
            }`}
          >
            Your App’s{" "}
            <span className="relative inline-block text-[lightsalmon] ">
              Glow-Up
              <span
                className={`absolute -bottom-2 left-0 w-full h-4 bg-no-repeat bg-bottom bg-contain`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2 10 Q 50 20 98 10' stroke='${
                    isDark ? "%23FBBF24" : "%23F59E0B"
                  }' stroke-width='4' fill='none' stroke-linecap='round'/%3e%3c/svg%3e")`,
                }}
              />
            </span>{" "}
            Starts Here
            {/* <span className="inline-block hover:scale-110 transition-transform cursor-pointer">
              Joseph
            </span>{" "}
            <span
              className={`inline-block hover:scale-110 transition-transform cursor-pointer bg-gradient-to-r ${
                isDark
                  ? "from-purple-400 via-pink-400 to-purple-400"
                  : "from-purple-600 via-pink-600 to-purple-600"
              } bg-clip-text text-transparent`}
            >
              Bajegbo
            </span> */}
          </h1>

          <p
            className={`sm:text-xl text-base ${
              isDark ? "text-gray-300" : "text-gray-700"
            } mb-12 max-w-2xl mx-auto leading-relaxed`}
          >
            I’m Joseph, and I believe the web should feel alive. I turn ideas
            into smooth, interactive, and delightful web apps that users love to
            click.
            {/* Crafting beautiful, interactive web experiences for{" "}
            <span
              className={`${
                isDark ? "text-purple-400" : "text-purple-600"
              } font-semibold`}
            >
              5+ years
            </span>
            . Specializing in React, TypeScript, and performance optimization. */}
          </p>

          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="mailto:damilolaj23@gmail.com"
              className={`group flex items-center gap-2 ${
                isDark ? "gradient-bg" : "gradient-bg-light"
              } text-white px-8 sm:py-4 py-3 rounded-full hover:scale-105 transition-transform`}
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Get in Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/bajegbo-joseph"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 border-2 ${
                isDark
                  ? "border-purple-500 hover:bg-purple-500/20"
                  : "border-purple-600 hover:bg-purple-600/10"
              } px-8 sm:py-4 py-3 rounded-full transition-all`}
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium mb-4 flex items-center justify-center gap-4">
              {/* <User
                className={`w-12 h-12 ${
                  isDark ? "text-purple-400" : "text-purple-600"
                }`}
              /> */}
              About Me
            </h2>
          </div>

          <div
            className={`${cardBg} backdrop-blur border ${borderColor} rounded-3xl p-8 md:p-12 ${
              isDark ? "hover:border-purple-500" : "hover:border-purple-400"
            } transition-all`}
          >
            <div className="space-y-6 text-lg leading-relaxed">
              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                Hey there! I'm Joseph, a passionate Frontend Developer with over
                5 years of experience turning complex problems into elegant,
                user-friendly solutions. I've had the privilege of working with
                amazing teams at Techbeaver and 720Degree Innovation Hub, where
                I've honed my skills in building high-performance web
                applications that users love.
              </p>

              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                I have an eye for creating seamless UI/UX experiences. What
                drives my work? The magic moment when a user interacts with
                something I built and it just works smoothly, beautifully,
                intuitively. I'm obsessed with performance optimization,
                accessibility, and those delightful micro-interactions that make
                interfaces feel alive.
              </p>

              <div
                className={`mt-8 p-6 ${
                  isDark ? "bg-purple-900/20" : "bg-purple-100/50"
                } rounded-2xl border-l-4 ${
                  isDark ? "border-purple-400" : "border-purple-600"
                }`}
              >
                <p className="font-semibold mb-2 flex items-center gap-2">
                  {/* <Sparkles
                    className={`w-5 h-5 ${
                      isDark ? "text-yellow-400" : "text-yellow-600"
                    }`}
                  /> */}
                  Fun Fact & Philosophy
                </p>
                <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                  I've mentored over 50 aspiring developers and believe that
                  great code is not just about functionality, it's about
                  crafting experiences that delight users and inspire fellow
                  developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#0b1120] text-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-medium mb-16 flex items-center justify-center gap-4">
            {/* <Box
              className={`w-12 h-12 ${
                isDark ? "text-purple-400" : "text-purple-600"
              }`}
            /> */}
            My Services
          </h2>
          {/* <h2 className="text-3xl font-semibold mb-12 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            MY SERVICES
          </h2> */}

          {/* Services Grid */}
          <div className="grid gap-10 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative p-6 rounded-xl border border-gray-800 bg-[#111827] shadow-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  {service.icon}
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Solar System Style */}
      <section id="skills" className="min-h-screen py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium mb-4 flex items-center justify-center gap-4">
              {/* <Zap
                className={`w-12 h-12 ${
                  isDark ? "text-yellow-400" : "text-yellow-600"
                }`}
              /> */}
              My Toolkit
            </h2>
            <p
              className={`${
                isDark ? "text-gray-400" : "text-gray-600"
              } text-lg`}
            >
              Hover to see the magic
            </p>
          </div>

          <div className="relative h-96 flex items-center justify-center mb-16">
            {/* Center Sun */}
            <div
              className={`absolute w-24 h-24 rounded-full bg-gradient-to-r ${
                isDark
                  ? "from-yellow-400 to-orange-500"
                  : "from-yellow-500 to-orange-600"
              } flex items-center justify-center text-4xl shadow-2xl animate-pulse`}
            >
              💻
            </div>

            {/* Orbiting Skills */}
            {skills.map((skill, index) => {
              const angle = (skillOrbit + index * 45) * (Math.PI / 180);
              const radius = 150;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={skill.name}
                  className={`absolute w-20 h-20 rounded-full ${cardBg} backdrop-blur border-2 ${borderColor} flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg group`}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="text-3xl group-hover:scale-125 transition-transform">
                    {skill.icon}
                  </div>
                  {hoveredSkill === index && (
                    <div
                      className={`absolute -bottom-12 ${cardBg} px-4 py-2 rounded-lg border ${borderColor} whitespace-nowrap text-sm font-semibold shadow-xl z-[9999] transition-all`}
                    >
                      {skill.name}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Skill Pills */}
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`${cardBg} backdrop-blur border ${borderColor} flex items-center justify-center px-6 py-3 rounded-full ${
                  isDark ? "hover:border-purple-500" : "hover:border-purple-400"
                } transition-all hover:scale-110 cursor-pointer`}
              >
                <span className="mr-2">{skill.icon}</span>
                <span className="font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium mb-4 flex items-center justify-center gap-4">
              {/* <Rocket
                className={`w-12 h-12 ${
                  isDark ? "text-blue-400" : "text-blue-600"
                }`}
              /> */}
              Cool Stuff I've Built
            </h2>
            <p
              className={`${
                isDark ? "text-slate-400" : "text-slate-600"
              } text-lg`}
            >
              Click around and explore!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  setActiveProject(index);
                  createSparkle(e.clientX, e.clientY);
                }}
                className={`relative ${cardBg} backdrop-blur border-1 ${
                  activeProject === index
                    ? isDark
                      ? "border-purple-500"
                      : "border-purple-600"
                    : borderColor
                } rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] group`}
              >
                {/* Project Screenshot */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.screenshot}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 ${
                      isDark ? "bg-gray-900/60" : "bg-gray-900/40"
                    } opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center`}
                  >
                    {/* <Play className="w-16 h-16 text-white" /> */}
                  </div>
                  {project.impact && (
                    <div
                      className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-medium ${
                        isDark
                          ? "bg-green-500/90 text-white"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {project.impact}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-medium mb-3">{project.title}</h3>
                  <p
                    className={`${
                      isDark ? "text-slate-300" : "text-slate-700"
                    } mb-6`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          isDark
                            ? "bg-slate-800 text-purple-300"
                            : "bg-slate-100 text-purple-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    className={`flex items-center gap-2 ${accentColor} font-semibold group-hover:gap-4 transition-all`}
                  >
                    Explore Project
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium mb-4 flex items-center justify-center gap-4">
              {/* <Briefcase
                className={`w-12 h-12 ${
                  isDark ? "text-green-400" : "text-green-600"
                }`}
              /> */}
              My Journey
            </h2>
            <p
              className={`${
                isDark ? "text-slate-400" : "text-slate-600"
              } text-lg`}
            >
              Where the magic happened!
            </p>
          </div>

          <div className="">
            {experiences.map((exp, expIndex) => (
              <div
                key={expIndex}
                className={`${cardBg} backdrop-blur border ${borderColor} rounded-2xl overflow-hidden transition-all mb-4`}
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center"
                  onClick={() =>
                    setActiveExperience(
                      activeExperience === expIndex ? null : expIndex
                    )
                  }
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${
                        isDark
                          ? "from-green-500/20 to-green-700/20"
                          : "from-green-100 to-green-200"
                      } flex items-center justify-center`}
                    >
                      <Briefcase
                        className={`w-6 h-6 ${
                          isDark ? "text-green-300" : "text-green-600"
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">{exp.company}</h3>
                      <p
                        className={`font-semibold ${
                          isDark ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {exp.role}
                      </p>
                      <p
                        className={`text-sm ${
                          isDark ? "text-slate-500" : "text-slate-500"
                        }`}
                      >
                        {exp.period}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform ${
                      activeExperience === expIndex ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeExperience === expIndex && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 space-y-3">
                        {exp.achievements.map((achievement, taskIndex) => (
                          <div
                            key={taskIndex}
                            className="flex items-start gap-3"
                          >
                            <span className="text-lg flex-shrink-0 pt-1">
                              ✨
                            </span>
                            <p className="text-gray-400">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-medium mb-4 flex items-center justify-center gap-4">
              <MessageSquare
                className={`w-12 h-12 ${
                  isDark ? "text-pink-400" : "text-pink-600"
                }`}
              />
              Kind Words
            </h2>
            <p
              className={`${
                isDark ? "text-slate-400" : "text-slate-600"
              } text-lg`}
            >
              What awesome people say about me!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`${cardBg} backdrop-blur border ${borderColor} rounded-3xl p-8 hover:scale-105 hover:-rotate-1 transition-all cursor-pointer`}
                onClick={(e) => createSparkle(e.clientX, e.clientY)}
              >
                <p
                  className={`${
                    isDark ? "text-slate-300" : "text-slate-700"
                  } mb-6 italic leading-relaxed`}
                >
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-full ${
                      isDark ? "bg-purple-600" : "bg-purple-500"
                    } flex items-center justify-center text-3xl`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p
                      className={`text-sm ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Projects Section - Card Carousel */}
      {/* <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-medium mb-4 flex items-center justify-center gap-4">
              <Rocket
                className={`w-12 h-12 ${
                  isDark ? "text-blue-400" : "text-blue-600"
                }`}
              />
              Featured Projects
            </h2>
            <p
              className={`${
                isDark ? "text-gray-400" : "text-gray-600"
              } text-lg`}
            >
              Click cards to explore
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => setActiveProject(index)}
                className={`relative ${cardBg} backdrop-blur border-2 ${
                  activeProject === index
                    ? isDark
                      ? "border-purple-500 scale-105"
                      : "border-purple-600 scale-105"
                    : borderColor
                } rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:scale-105 group overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{project.icon}</div>
                    <div
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        isDark
                          ? "bg-green-500/20 text-green-400"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {project.impact}
                    </div>
                  </div>

                  <h3 className="text-2xl font-medium mb-3">{project.title}</h3>
                  <p
                    className={`${
                      isDark ? "text-gray-300" : "text-gray-700"
                    } mb-6`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDark
                            ? "bg-purple-500/20 text-purple-300"
                            : "bg-purple-100 text-purple-700"
                        } border ${borderColor}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    className={`flex items-center gap-2 ${
                      isDark
                        ? "text-purple-400 hover:text-purple-300"
                        : "text-purple-600 hover:text-purple-700"
                    } font-semibold group-hover:gap-4 transition-all`}
                  >
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Certifications */}
      {/* <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium mb-4 flex items-center justify-center gap-4">
              <Award
                className={`w-12 h-12 ${
                  isDark ? "text-yellow-400" : "text-yellow-600"
                }`}
              />
              Achievement Unlocked
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={` ${
                  isDark
                    ? "from-yellow-900/20 to-orange-900/20 border border-yellow-500/50 hover:border-yellow-500"
                    : " border border-yellow-300 hover:border-yellow-500"
                } rounded-2xl p-6 transition-all hover:scale-102 group`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${
                      isDark
                        ? "from-yellow-400 to-orange-500"
                        : "from-yellow-500 to-orange-600"
                    } rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform`}
                  >
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg font-semibold">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-medium mb-8">
            Let's Build Something Amazing
          </h2>
          <p
            className={`text-xl ${
              isDark ? "text-gray-300" : "text-gray-700"
            } mb-12`}
          >
            Ready to level up your web presence? Let's connect!
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="mailto:damilolaj23@gmail.com"
              className={`flex items-center gap-3 ${cardBg} border ${borderColor} px-8 py-4 rounded-full ${
                isDark ? "hover:border-purple-500" : "hover:border-purple-400"
              } transition-all hover:scale-105`}
            >
              <Mail
                className={`w-6 h-6 ${
                  isDark ? "text-purple-400" : "text-purple-600"
                }`}
              />
              <span>damilolaj23@gmail.com</span>
            </a>
            <a
              href="tel:+2348166716781"
              className={`flex items-center gap-3 ${cardBg} border ${borderColor} px-8 py-4 rounded-full ${
                isDark ? "hover:border-purple-500" : "hover:border-purple-400"
              } transition-all hover:scale-105`}
            >
              <Phone
                className={`w-6 h-6 ${
                  isDark ? "text-green-400" : "text-green-600"
                }`}
              />
              <span>+234 816 671 6781</span>
            </a>
          </div>

          {/* Download Resume Button */}
          <a
            href={Resume}
            download="Joseph Bajegbo Resume"
            className={`inline-flex items-center gap-3 ${
              isDark ? "gradient-bg" : "gradient-bg-light"
            } text-white px-10 py-5 rounded-full hover:scale-105 transition-all shadow-2xl group font-medium text-lg`}
          >
            <Download className="w-6 h-6 group-hover:animate-bounce" />
            Grab my Resume
          </a>
          {/* <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert(
                "Resume download functionality would be implemented with an actual PDF file URL"
              );
            }}
            className={`inline-flex items-center gap-3 ${
              isDark ? "gradient-bg" : "gradient-bg-light"
            } text-white px-10 py-5 rounded-full hover:scale-110 transition-all shadow-2xl group font-medium text-lg`}
          >
            <Download className="w-6 h-6 group-hover:animate-bounce" />
            <span>Download Resume</span>
          </a> */}

          {/* Social Links */}
          <div className="flex gap-6 justify-center mt-12">
            <a
              href="https://linkedin.com/in/bajegbo-joseph"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-14 h-14 rounded-full ${cardBg} border ${borderColor} flex items-center justify-center hover:scale-110 transition-transform`}
              onClick={(e) => createSparkle(e.clientX, e.clientY)}
            >
              <Linkedin className={`w-6 h-6 ${accentColor}`} />
            </a>
            <a
              href="https://github.com/sagacious123"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-14 h-14 rounded-full ${cardBg} border ${borderColor} flex items-center justify-center hover:scale-110 transition-transform`}
              onClick={(e) => createSparkle(e.clientX, e.clientY)}
            >
              <Github className={`w-6 h-6 ${accentColor}`} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center border-t ${borderColor}`}>
        <p className={isDark ? "text-gray-500" : "text-gray-600"}>
          © 2025 Joseph Bajegbo
        </p>
      </footer>
    </div>
  );
};
