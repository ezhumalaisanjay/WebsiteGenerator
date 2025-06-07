import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { experience } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            My journey in frontend development, contributing to enterprise-grade SaaS
            products and building scalable web applications.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200 dark:bg-slate-700 hidden lg:block"></div>

          {/* Experience Items */}
          {experience.map((exp, index) => (
            <div key={exp.id} className="relative mb-12 lg:mb-16">
              <div className="lg:flex lg:items-center">
                <div className="lg:w-1/2 lg:pr-8">
                  <Card className="bg-slate-50 dark:bg-slate-700 p-6 shadow-lg lg:mr-8 transform hover:scale-105 transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-4">
                          <Briefcase className="text-primary-600 dark:text-primary-400 h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                            {exp.position}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="mb-4 flex flex-wrap gap-2">
                        <Badge className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300">
                          <Calendar className="mr-2 h-3 w-3" />
                          {exp.period}
                        </Badge>
                        <Badge variant="secondary">
                          <MapPin className="mr-2 h-3 w-3" />
                          {exp.location}
                        </Badge>
                      </div>

                      <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start">
                            <ChevronRight className="text-primary-600 dark:text-primary-400 mt-1 mr-3 flex-shrink-0 h-4 w-4" />
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 border-4 border-white dark:border-slate-800 rounded-full z-10"></div>

                {/* Image Section */}
                <div className="lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                    alt="Professional development team collaboration"
                    className="rounded-2xl shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
