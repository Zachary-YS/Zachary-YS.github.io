import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Starry sky background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Animated stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute bg-foreground rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Star trails */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={`trail-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-star-trail opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${100 + Math.random() * 200}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 gradient-bg opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-2xl opacity-30 animate-glow-pulse" />
              <img
                src={profileImage}
                alt="Yingsheng Zhang"
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
              />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-gradient">Yingsheng Zhang</span>
          </h1>

          {/* Subtitle */}
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              AI Researcher
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Exploring the frontiers of Robotics, Reinforcement Learning, and AI Infrastructure
              at <span className="text-primary font-semibold">Tsinghua University</span>
            </p>
          </div>

{/* Stats */}
{/*
<div className="flex flex-wrap justify-center gap-8 pt-8">
  <div className="glass rounded-2xl px-8 py-4 glow">
    <div className="text-3xl font-bold text-primary">3+</div>
    <div className="text-sm text-muted-foreground">Research Projects</div>
  </div>
  <div className="glass rounded-2xl px-8 py-4 glow">
    <div className="text-3xl font-bold text-secondary">10+</div>
    <div className="text-sm text-muted-foreground">Awards</div>
  </div>
  <div className="glass rounded-2xl px-8 py-4 glow">
    <div className="text-3xl font-bold text-accent">GPA 3.9+</div>
    <div className="text-sm text-muted-foreground">Academic Excellence</div>
  </div>
</div>
*/}
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="glass hover:glow smooth-transition text-foreground border border-primary/50 hover:border-primary"
              asChild
            >
              <a href="#research">
                View Research
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass smooth-transition border-border hover:border-primary/50"
              asChild
            >
              <a href="#contact">
                Get in Touch
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center pt-3">
            <a
              href="mailto:yingchen23@mails.tsinghua.edu.cn"
              className="glass rounded-full p-4 hover:glow smooth-transition hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full p-4 hover:glow smooth-transition hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full p-4 hover:glow smooth-transition hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
