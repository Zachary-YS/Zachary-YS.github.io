import { Card } from "@/components/ui/card";
import { Trophy, Zap, Medal, GraduationCap } from "lucide-react";

const awards = {
  academic: [
    "National Scholarship",
    "Tsinghua University Comprehensive Excellence Scholarship",
    "Baosteel Outstanding Student Scholarship",
  ],
  technical: [
    "Champion, Tsinghua University 2023 Creativity Competition (Team Leader)",
    "Second Prize, 3rd Tsinghua Robotic Dog Development Competition (Team Leader)",
    "Excellence Award, 7th Tsinghua AI Challenge (Team Leader)",
  ],
  athletic: [
    "Third Place, 10,000m Relay, 67th Tsinghua 'Ma John Cup'",
    "Fifth Place, 4x400m Relay, 67th Tsinghua 'Ma John Cup'",
    "Seventh Place, 110m Hurdles, 67th Tsinghua 'Ma John Cup'",
  ],
  highSchool: [
    "First Place, Macau Regional Applied Physics Competition",
    "Gold Medal (Individual), Hong Kong and Macao Cup Mathematical Olympiad",
    "First Prize, Inter-School Mathematics Competition",
    "Gold Medal, 1500m & 3000m, High School Track and Field Meet",
  ],
};

const awardCategories = [
  {
    title: "Academic Excellence",
    icon: GraduationCap,
    items: awards.academic,
    color: "primary",
  },
  {
    title: "Technical Competitions",
    icon: Zap,
    items: awards.technical,
    color: "secondary",
  },
  {
    title: "Athletic Achievements",
    icon: Medal,
    items: awards.athletic,
    color: "accent",
  },
  {
    title: "High School Honors",
    icon: Trophy,
    items: awards.highSchool,
    color: "electric-cyan",
  },
];

const Awards = () => {
  return (
    <section id="awards" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Grants & Awards</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Recognition for academic excellence, technical innovation, and athletic achievement
          </p>
        </div>

        {/* Award categories grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {awardCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="glass p-8 smooth-transition hover:glow border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center glass border ${
                        category.color === "primary"
                          ? "border-primary/50"
                          : category.color === "secondary"
                          ? "border-secondary/50"
                          : category.color === "accent"
                          ? "border-accent/50"
                          : "border-electric-cyan/50"
                      }`}
                    >
                      <Icon
                        className={`w-7 h-7 ${
                          category.color === "primary"
                            ? "text-primary"
                            : category.color === "secondary"
                            ? "text-secondary"
                            : category.color === "accent"
                            ? "text-accent"
                            : "text-electric-cyan"
                        }`}
                      />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>

                  {/* Award list */}
                  <ul className="space-y-3">
                    {category.items.map((award, i) => (
                      <li key={i} className="flex gap-3 text-foreground/90">
                        <span
                          className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            category.color === "primary"
                              ? "bg-primary"
                              : category.color === "secondary"
                              ? "bg-secondary"
                              : category.color === "accent"
                              ? "bg-accent"
                              : "bg-electric-cyan"
                          }`}
                        />
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;
