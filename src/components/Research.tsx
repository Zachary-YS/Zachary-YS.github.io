import { Card } from "@/components/ui/card";
import { Brain, Server, Microscope } from "lucide-react";

const researchProjects = [
  {
    title: "RL for Robotics",
    role: "Independent Researcher",
    period: "May 2025 - Present",
    icon: Brain,
    color: "primary",
    description: [
      "Researching VLA models, IL data augmentation, and training framework optimization",
      "Hands-on experience implementing algorithms on physical hardware (robodog competition & robotic hardware)",
      "Built foundation in advanced ML and RL via self-study",
    ],
  },
  {
    title: "AI Infrastructure",
    role: "Research Intern",
    period: "Oct 2024 - Jun 2025",
    advisor: "Prof. Kaisheng Ma, Institute for Interdisciplinary Information Sciences",
    icon: Server,
    color: "secondary",
    description: [
      "Focused on AI Infrastructure for LLMs, specializing in multi-machine cooperative optimization",
      "Investigated and analyzed parallel strategies to accelerate LLM inference in distributed systems",
      "Led full-cycle experiments for optimizing multi-turn LLM dialogue systems",
      "Co-authoring a paper currently in submission",
    ],
  },
  {
    title: "Cognitive Neuroscience",
    role: "Project Researcher",
    period: "Aug 2025",
    advisor: "School of Psychological and Cognitive Sciences, Peking University",
    icon: Microscope,
    color: "accent",
    description: [
      "Independently designed and developed a computational framework",
      "Analyzed the 'Semantic Visual Gain' effect",
    ],
  },
];

const Research = () => {
  return (
    <section id="research" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Research Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Pushing the boundaries of AI, from robotics to infrastructure to cognitive science
          </p>
        </div>

        {/* Research cards */}
        <div className="max-w-6xl mx-auto space-y-8">
          {researchProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="glass p-8 smooth-transition hover:glow border-border group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center glass group-hover:glow smooth-transition border ${
                        project.color === "primary"
                          ? "border-primary/50"
                          : project.color === "secondary"
                          ? "border-secondary/50"
                          : "border-accent/50"
                      }`}
                    >
                      <Icon
                        className={`w-10 h-10 ${
                          project.color === "primary"
                            ? "text-primary"
                            : project.color === "secondary"
                            ? "text-secondary"
                            : "text-accent"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">{project.role}</span>
                        <span>•</span>
                        <span>{project.period}</span>
                      </div>
                      {project.advisor && (
                        <p className="text-sm text-muted-foreground mt-2 italic">
                          Advised by {project.advisor}
                        </p>
                      )}
                    </div>

                    <ul className="space-y-2">
                      {project.description.map((item, i) => (
                        <li key={i} className="flex gap-3 text-foreground/90">
                          <span
                            className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              project.color === "primary"
                                ? "bg-primary"
                                : project.color === "secondary"
                                ? "bg-secondary"
                                : "bg-accent"
                            }`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Research;
