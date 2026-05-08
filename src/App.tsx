/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  ArrowUpRight, 
  Terminal, 
  Linkedin, 
  Github, 
  Mail, 
  Monitor, 
  Server, 
  Code2, 
  Layers, 
  CheckCircle2,
  Square
} from "lucide-react";
import { useRef } from "react";

export default function App() {
  const containerRef = useRef(null);
  
  return (
    <div ref={containerRef} className="relative min-h-screen">
      <div className="scanline" />
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <SkillsMarquee />
        <StatsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center w-full px-6 md:px-12 h-20 bg-surface border-b-2 border-on-surface">
      <div className="text-xl md:text-2xl font-bold font-display uppercase tracking-tighter">
        SYS_ARCHIVE_v1.0
      </div>
      
      <div className="hidden md:flex gap-8 items-center font-mono text-sm font-bold">
        {["WORK", "STACK", "HISTORY", "CONTACT"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-2 py-1 hover:bg-primary-container hover:text-on-primary-container transition-colors active:translate-x-0.5 active:translate-y-0.5"
          >
            {item}
          </a>
        ))}
      </div>
      
      <button className="bg-on-surface text-primary-container font-mono px-4 md:px-6 py-2 md:py-3 uppercase font-bold border-2 border-on-surface hover:bg-primary-container hover:text-on-surface transition-all active:translate-x-1 active:translate-y-1">
        RESUME.EXE
      </button>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row border-b-2 border-on-surface overflow-hidden">
      <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-end">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-[80px] md:text-[140px] lg:text-[180px] uppercase leading-[0.8] mb-8 font-black"
        >
          JIMMY<br />JOSE
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-mono text-lg md:text-2xl flex items-center"
        >
          <span>&gt; Technical Support Engineer && DevOps Enthusiast</span>
          <span className="w-4 h-8 bg-primary-container ml-2 animate-pulse" />
        </motion.div>
      </div>
      
      <div className="w-full md:w-1/3 border-t-2 md:border-t-0 md:border-l-2 border-on-surface relative bg-on-surface">
        <img 
          src="https://res.cloudinary.com/dkt88cldn/image/upload/v1778230892/2763old_ydathv.jpg" 
          alt="Jimmy Jose" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 pointer-events-none border-[12px] md:border-[24px] border-on-surface mix-blend-multiply" />
      </div>
    </section>
  );
}

function SkillsMarquee() {
  const skills = ["LINUX", "DOCKER", "KUBERNETES", "CPANEL", "REACT.JS", "LINUX", "DOCKER", "KUBERNETES", "CPANEL", "REACT.JS"];
  
  return (
    <section id="stack" className="py-16 overflow-hidden border-b-2 border-on-surface bg-primary-container">
      <div className="marquee border-y-2 border-on-surface py-4 bg-on-surface text-primary-container font-mono">
        <div className="marquee-content gap-12">
          {skills.concat(skills).map((skill, i) => (
            <span key={i} className="flex items-center gap-2 px-4 font-bold text-lg">
              {skill} <Square className="w-2 h-2 fill-current" />
            </span>
          ))}
        </div>
      </div>
      
      <div className="px-8 md:px-12 pt-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-8">
          <p className="font-display text-2xl md:text-4xl lg:text-5xl leading-tight font-bold text-on-surface-variant">
            "Architecting robust server environments and scaling digital infrastructures with the precision of a master builder. Bridging the gap between code and production."
          </p>
        </div>
        
        <div className="md:col-span-4 flex flex-col gap-12 border-l-2 border-on-surface pl-8">
          <div>
            <span className="font-display text-6xl md:text-7xl block font-bold">1.5+</span>
            <span className="font-mono text-xs uppercase font-bold tracking-widest">Years of Experience</span>
          </div>
          <div className="border-t border-on-surface pt-6">
            <span className="font-display text-6xl md:text-7xl block font-bold">6</span>
            <span className="font-mono text-xs uppercase font-bold tracking-widest">Industry Certifications</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return null; // Integrated into SkillsMarquee as per design
}

function ExperienceSection() {
  return (
    <section id="history" className="py-24 px-6 md:px-12 border-b-2 border-on-surface bg-surface">
      <h2 className="font-display text-5xl md:text-7xl uppercase mb-12 underline decoration-4 underline-offset-8 font-bold">Experience</h2>
      
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-on-surface p-6 md:p-8 terminal-shadow border-2 border-on-surface max-w-5xl mx-auto"
      >
        <div className="flex gap-2 mb-8 border-b border-surface/20 pb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-primary-container rounded-full" />
          <div className="w-3 h-3 bg-gray-600 rounded-full" />
          <span className="ml-4 font-mono text-[10px] text-surface/50">jimmy@dev-terminal: ~</span>
        </div>
        
        <div className="font-mono space-y-6">
          <div className="space-y-1">
            <p className="text-primary-container">$ whoami</p>
            <div className="text-surface border-l-2 border-primary-container/30 pl-4 py-2">
              <p>Technical Support Engineer specialized in DevOps workflows and Linux infrastructure management.</p>
              <p className="mt-2">Dedicated to high-uptime environments and automated deployments.</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-primary-container">$ history --jobs</p>
            
            <div className="border-l-2 border-primary-container/30 pl-6 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-2 h-2 bg-primary-container rounded-full" />
                <p className="text-primary-container font-bold">[2024-PRESENT]</p>
                <h3 className="text-surface text-xl md:text-2xl font-display font-bold">Software Engineer – Technical Support</h3>
                <p className="text-gray-400">Bobcares</p>
                <p className="text-surface/70 mt-2 text-sm max-w-2xl">
                  Implementing enterprise-grade support solutions for server administration, 
                  handling complex migrations, and ensuring 24/7 reliability for critical web services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ProjectsSection() {
  const currentIndex = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "DevOps Pipeline – Uptime Kuma",
      description: "Comprehensive monitoring pipeline with automated alerting and performance visualization.",
      tags: ["DOCKER", "K8S", "GRAFANA"],
      status: "STABLE",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "People's Ration – Web App",
      description: "Community-driven resource distribution platform focused on transparency and accessibility.",
      tags: ["REACT.JS", "SUPABASE"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Augment Space – AR App",
      description: "Spatial visualization tool for interior design utilizing mobile augmented reality technology.",
      tags: ["UNITY", "ARCORE"],
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=800",
    }
  ];

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const scrollAmount = index * (scrollRef.current.offsetWidth * 0.8 + 32); // card width + gap
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="bg-on-surface text-surface py-24">
      <div className="px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h2 className="font-display text-5xl md:text-7xl uppercase font-bold">Projects</h2>
          <span className="font-mono text-xs font-bold text-primary-container">[03_ACTIVE_DEPLOYMENTS]</span>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={() => {
              currentIndex.current = Math.max(0, currentIndex.current - 1);
              scrollToIndex(currentIndex.current);
            }}
            className="border-2 border-primary-container p-3 hover:bg-primary-container hover:text-on-surface transition-colors"
          >
            <ArrowUpRight className="w-6 h-6 rotate-[225deg]" />
          </button>
          <button 
            onClick={() => {
              currentIndex.current = Math.min(projects.length - 1, currentIndex.current + 1);
              scrollToIndex(currentIndex.current);
            }}
            className="border-2 border-primary-container p-3 hover:bg-primary-container hover:text-on-surface transition-colors"
          >
            <ArrowUpRight className="w-6 h-6 rotate-45" />
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-8 snap-x scrollbar-hide scroll-smooth"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 0.98 }}
            className="min-w-[80%] md:min-w-[70%] lg:min-w-[60%] aspect-video border-2 border-gray-800 relative group overflow-hidden snap-center cursor-pointer"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 opacity-60"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute inset-0 bg-on-surface/80 opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
              <div className="font-mono flex gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="border border-primary-container text-primary-container px-2 py-0.5 text-[10px] font-bold">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-3xl font-bold text-surface mb-2">{project.title}</h3>
              <p className="font-mono text-sm text-gray-400 max-w-md">{project.description}</p>
            </div>
            
            {project.status && (
              <div className="absolute top-0 right-0 bg-primary-container text-on-surface font-mono px-4 py-1 text-[10px] font-black">
                {project.status}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CertificationsSection() {
  const certs = ["CPP", "CWA", "CWSA", "MODSECURITY", "LITESPEED", "CPHULK", "ENGLISH_B2", "PYTHON"];
  
  return (
    <section className="border-y-2 border-on-surface bg-surface overflow-hidden">
      <div className="marquee py-12">
        <div className="marquee-content gap-8">
          {certs.concat(certs).map((cert, i) => (
            <div 
              key={i} 
              className={`border-2 border-on-surface px-6 py-3 font-mono text-sm font-bold flex items-center gap-2 
                ${i % 3 === 0 ? "bg-on-surface text-surface" : "bg-transparent text-on-surface"}`}
            >
              {cert} 
              {i % 2 === 0 && <CheckCircle2 className="w-4 h-4 text-primary-container" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] uppercase mb-8 font-black shrink-0"
          >
            GOT A PROBLEM?<br />
            <span className="text-primary underline underline-offset-8">LET'S FIX IT.</span>
          </motion.h2>
          <p className="font-mono text-lg md:text-xl mb-12 max-w-md text-on-surface-variant font-medium">
            I specialize in debugging the impossible and optimizing the neglected. 
            Ready for your next deployment.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          {[
            { label: "EMAIL", value: "jimmyjose13j@gmail.com", icon: Mail, href: "mailto:jimmyjose13j@gmail.com" },
            { label: "LINKEDIN", value: "PROFILE", icon: Linkedin, href: "https://linkedin.com/in/jimmy-jose-5039a9201" },
            { label: "GITHUB", value: "REPOSITORIES", icon: Github, href: "https://github.com/jimmyj13" }
          ].map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="group flex items-center justify-between border-b-2 border-on-surface py-6 hover:bg-primary-container transition-colors px-6"
            >
              <div className="flex flex-col">
                <span className="font-mono text-sm font-bold opacity-60">{link.label}</span>
                <span className="font-display text-2xl md:text-3xl font-bold">{link.value}</span>
              </div>
              <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-12 py-8 bg-on-surface text-surface border-t-2 border-on-surface gap-8">
      <div className="font-display text-2xl font-bold uppercase tracking-tight">SYS_ARCHIVE</div>
      
      <div className="flex gap-8 font-mono text-xs font-bold">
        <a href="https://github.com/jimmyj13" className="hover:text-primary-container transition-colors uppercase">GITHUB</a>
        <a href="https://linkedin.com/in/jimmy-jose-5039a9201" className="hover:text-primary-container transition-colors uppercase">LINKEDIN</a>
        <a href="mailto:jimmyjose13j@gmail.com" className="hover:text-primary-container transition-colors uppercase">CONTACT</a>
      </div>
      
      <div className="font-mono text-[10px] text-surface/50 uppercase tracking-widest text-center md:text-right">
        © 2026 TERMINAL_EDITORIAL. ALL_RIGHTS_RESERVED.
      </div>
    </footer>
  );
}
