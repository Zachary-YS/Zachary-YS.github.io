import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Get in Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing research opportunities, collaborations, or just having
              a conversation about AI and technology
            </p>
          </div>

          {/* Contact grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Email */}
            <a
              href="mailto:yingchen23@mails.tsinghua.edu.cn"
              className="glass p-8 rounded-2xl smooth-transition hover:glow border-border group animate-slide-in-left block"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">yingchen23@mails.tsinghua.edu.cn</p>
                </div>
              </div>
            </a>

            {/* Phone */}
            <div className="glass p-8 rounded-2xl border-border animate-slide-in-right">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Instagram</h3>
                  <p className="text-sm text-muted-foreground">zachary_zys</p>
                </div>
              </div>
            </div>

            {/* WeChat */}
            <div className="glass p-8 rounded-2xl border-border animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">WeChat</h3>
                  <p className="text-sm text-muted-foreground">ZYS726655273</p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="glass p-8 rounded-2xl border-border animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric-purple/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-electric-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">+853 6888 6223</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="glass p-8 rounded-2xl border-border mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-electric-cyan/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-electric-cyan" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">
                  Tsinghua University, Beijing, China | Hometown: Macao, China
                </p>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="text-center space-y-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-semibold">Connect on Social Media</h3>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                className="glass hover:glow smooth-transition border border-primary/50 hover:border-primary"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                size="lg"
                className="glass hover:glow smooth-transition border border-secondary/50 hover:border-secondary"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
