import { Card } from "@/components/ui/card";
import { GraduationCap, Sparkles, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Text content */}
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-5xl md:text-6xl font-bold">
                <span className="text-gradient">About Me</span>
              </h2>
              <div className="space-y-4 text-lg text-foreground/90 leading-relaxed">
                <p>
                Hi, <span className="text-primary font-semibold">I'm Zhang YingSheng (张颖盛)</span>. A passionate AI researcher and engineer currently pursuing my Bachelor's degree
                  in Automation at <span className="text-primary font-semibold">Tsinghua University</span>,
                  where I'm a proud member of the General Artificial Intelligence Experimental Class.
                </p>
                <p>
                  My research journey spans across multiple cutting-edge domains: from developing
                  reinforcement learning algorithms for <span className="text-primary font-semibold"></span>robotics</span> to optimizing <span className="text-primary font-semibold"></span>AI infrastructure</span> for
                  large language models, and exploring the fascinating intersection of AI and
                  <span className="text-primary font-semibold"></span>cognitive neuroscience</span>.
                </p>
                <p>
                  Beyond academics, I'm an <span className="text-primary font-semibold"></span>athlete</span> at heart, competing in track and field events
                  at the university level. This balance between mental and physical challenges
                  drives my holistic approach to problem-solving and innovation.
                </p>
              </div>
            </div>

            {/* Right: Info cards */}
            <div className="space-y-6 animate-slide-in-right">
              <Card className="glass p-6 border-border hover:glow smooth-transition">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Education</h3>
                    <p className="text-foreground/80 mb-1">
                      <span className="font-semibold">Tsinghua University</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Bachelor of Engineering in Automation
                    </p>
                    <p className="text-sm text-muted-foreground">
                      General AI Experimental Class
                    </p>
                    <p className="text-sm text-muted-foreground">Aug 2023 - Jul 2027 (Expected)</p>
                  </div>
                </div>
              </Card>

              <Card className="glass p-6 border-border hover:glow smooth-transition">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Research Interests</h3>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      <li>• Reinforcement Learning for Robotics</li>
                      <li>• Vision-Language-Action Models</li>
                      <li>• AI Infrastructure & LLM Optimization</li>
                      <li>• Imitation Learning & Data Augmentation</li>
                      <li>• Computational Cognitive Neuroscience</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="glass p-6 border-border hover:glow smooth-transition">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Skills & Expertise</h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {["Python", "PyTorch", "RL Algorithms", "Distributed Systems", "Linux", "Git"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs rounded-full glass border border-border"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
