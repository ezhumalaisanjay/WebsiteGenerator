import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Phone } from "lucide-react";
import { personalInfo, skills, stats } from "@/data/portfolio";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function AboutSection() {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver({ threshold: 0.3 });
  const { ref: contentRef, isIntersecting: contentVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: skillsRef, isIntersecting: skillsVisible } = useIntersectionObserver({ threshold: 0.1 });

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

  const handleDownloadCV = () => {
    // This will trigger the download endpoint
    window.open("/api/download-cv", "_blank");
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 ${titleVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            About Me
          </h2>
          <div className={`w-20 h-1 bg-primary-600 mx-auto rounded-full mb-8 ${titleVisible ? 'animate-scaleIn animate-stagger-1' : 'opacity-0'}`}></div>
          <p className={`text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto ${titleVisible ? 'animate-fadeInUp animate-stagger-2' : 'opacity-0'}`}>
            {personalInfo.summary}
          </p>
        </div>

        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`${contentVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            {/* Professional Photo Placeholder */}
            <div className="relative">
              <img
                src="/profile-image.jpg"
                alt="Ezhumalai P. - Professional Frontend Developer"
                className="rounded-2xl shadow-2xl w-full h-auto max-w-md mx-auto object-cover transform hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className={`space-y-8 ${contentVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Frontend Specialist
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                With strong foundation in React, Next.js, and Node.js, I transform
                complex business requirements into high-quality, user-friendly
                applications. My experience includes developing comprehensive HRMS and
                CRM platforms with features like real-time chat and AI integration.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <Card className="text-center p-4 bg-slate-50 dark:bg-slate-700 transform hover:scale-105 transition-all duration-300 animate-pulse-slow">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 animate-bounceIn">
                      {stats.experience}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Years Experience
                    </div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 bg-slate-50 dark:bg-slate-700 transform hover:scale-105 transition-all duration-300 animate-pulse-slow">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 animate-bounceIn">
                      {stats.projects}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Projects Completed
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Skills Grid */}
            <div ref={skillsRef}>
              <h4 className={`text-xl font-semibold text-slate-900 dark:text-white mb-6 ${skillsVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
                Technical Skills
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <Card
                    key={index}
                    className={`group bg-slate-50 dark:bg-slate-700 p-4 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:rotate-2 ${skillsVisible ? `animate-scaleIn animate-stagger-${(index % 6) + 1}` : 'opacity-0'}`}
                  >
                    <CardContent className="p-0 text-center">
                      <div className="text-2xl mb-2 group-hover:animate-bounceIn">{skill.icon}</div>
                      <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleDownloadCV}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 transform hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white px-6 py-3 transition-all duration-300"
              >
                <Phone className="mr-2 h-4 w-4" />
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
