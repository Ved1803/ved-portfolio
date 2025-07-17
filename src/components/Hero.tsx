import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-foreground">Hi, I'm </span>
              <span className="hero-gradient bg-clip-text text-transparent">Ved Tiwari</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light">
              Software Engineer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Associate Software Engineer specializing in Ruby on Rails with expertise in MVC architecture, 
              database management, and modern web development technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto"
            >
              View My Work
            </Button>
            <Button 
              variant="glass" 
              size="xl"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              size="icon"
              className="hover-lift"
              onClick={() => window.open('https://github.com/VedTiwari', '_blank')}
            >
              <Github className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover-lift"
              onClick={() => window.open('https://linkedin.com/in/ved-tiwari303', '_blank')}
            >
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover-lift"
              onClick={() => window.open('mailto:ved.tiwari08@gmail.com', '_blank')}
            >
              <Download className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary"
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;