import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

const contactFormSchema = insertContactMessageSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = contactFormSchema.parse(formData);
      contactMutation.mutate(validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast({
          title: "Validation Error",
          description: firstError.message,
          variant: "destructive",
        });
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Ready to discuss your next project? I'm always interested in new
            opportunities and exciting challenges. Let's create something amazing
            together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                I'm based in {personalInfo.location}, and available for both remote
                and local opportunities. Whether you have a project in mind or just
                want to chat about technology, feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-4 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-0 flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-primary-600 dark:text-primary-400 h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-slate-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-0 flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="text-primary-600 dark:text-primary-400 h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-slate-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-0 flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-primary-600 dark:text-primary-400 h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                    <p className="text-slate-900 dark:text-white font-medium">
                      {personalInfo.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white dark:bg-slate-800 shadow-lg p-8">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-slate-700 dark:text-slate-300">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-slate-700 dark:text-slate-300">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-700 dark:text-slate-300">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 resize-none"
                    placeholder="Tell me about your project or what you'd like to discuss..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white py-3 transform hover:scale-105 disabled:scale-100 transition-all duration-300"
                >
                  {contactMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
