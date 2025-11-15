import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Research />
      <Awards />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2025 Yingsheng Zhang. Built with passion and cutting-edge tech.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
