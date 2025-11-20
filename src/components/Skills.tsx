import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "Python", "Java", "C++", "SQL"]
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Django", "MongoDB"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "UI/UX", "Figma", "Canva"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-slide-up">
          Technical Skills
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto animate-slide-up">
          Technologies and tools I've worked with during my studies and personal projects
        </p>

        <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <Badge
                    key={skillIdx}
                    variant="secondary"
                    className="text-sm px-4 py-2 bg-card hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
