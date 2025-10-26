
import { Scene3D } from '@/components/3D/Scene3D';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import Experience from '../components/Experience';
import { Education } from '@/components/Education';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import  Contact  from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingBackground } from '@/components/FloatingBackground';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
        {/* Global Floating Background - More Prominent */}
        <FloatingBackground className="z-0" />
        
        <Scene3D />
        <ThemeToggle />
        <Navigation />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </main>
        
        <Footer />
        
        {/* Additional floating sparkles for extra effect */}
        <div className="fixed inset-0 pointer-events-none z-5">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-neon-purple rounded-full sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Toast Notifications */}
        <Toaster />
      </div>
    </ThemeProvider>
  );
};

export default Index;
