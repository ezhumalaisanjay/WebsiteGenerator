import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, ChevronDown } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const phrases = [
  "Frontend Developer",
  "React Specialist",
  "Next.js Expert",
  "UI/UX Enthusiast",
  "Full-Stack Developer"
];

export function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = phrases[currentPhrase];
      
      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-slate-50 to-accent-400/10 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      <div 
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-float">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-slate-900 dark:text-white">Hi, I'm </span>
            <span className="text-primary-600 dark:text-primary-400">
              {personalInfo.name}
            </span>
          </h1>
          
          <div className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-8 h-12 flex items-center justify-center">
            <span className="font-mono">
              {displayText}
            </span>
            <span className="animate-pulse ml-1">|</span>
          </div>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Building modern, scalable web applications with{" "}
            <span className="text-primary-600 dark:text-primary-400 font-semibold">
              React
            </span>
            ,{" "}
            <span className="text-primary-600 dark:text-primary-400 font-semibold">
              Next.js
            </span>
            , and cutting-edge technologies. Passionate about creating exceptional
            user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => scrollToSection("#projects")}
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 hover:bg-primary-600 hover:text-white px-8 py-3 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 text-2xl transition-colors transform hover:scale-110"
            >
              <Github />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 text-2xl transition-colors transform hover:scale-110"
            >
              <Linkedin />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 text-2xl transition-colors transform hover:scale-110"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-slate-400 text-xl" />
      </div>
    </section>
  );
}
