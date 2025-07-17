import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Ved Tiwari. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Designed and developed with ❤️ for the Rails community
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
