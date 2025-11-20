import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Task Management Dashboard",
      description: "A full-stack web application for team collaboration with real-time updates, task assignment, and progress tracking.",
      image: project1,
      tags: ["React", "Node.js", "PostgreSQL", "WebSockets"],
      github: "https://github.com",
    },
    {
      title: "E-Commerce Mobile App",
      description: "Cross-platform mobile application with product catalog, shopping cart, payment integration, and order management.",
      image: project2,
      tags: ["React Native", "Express", "MongoDB", "Stripe"],
      github: "https://github.com",
    },
    {
      title: "AI-Powered Analytics Tool",
      description: "Machine learning application that analyzes business data and provides actionable insights through interactive visualizations.",
      image: project3,
      tags: ["Python", "TensorFlow", "React", "FastAPI"],
      github: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-slide-up">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto animate-slide-up">
          A selection of my recent work showcasing different technologies and problem-solving approaches
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="overflow-hidden gradient-card border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-slide-up"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs px-2 py-1 rounded bg-primary/20 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
