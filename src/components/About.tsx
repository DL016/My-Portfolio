import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-slide-up">
          About Me
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto animate-slide-up">
          I'm a recent software engineering graduate with a passion for problem-solving and creating elegant solutions
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 animate-slide-up">
          <Card className="p-6 gradient-card border-border hover:border-primary transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Clean Code</h3>
            <p className="text-muted-foreground">
              Writing maintainable, efficient, and well-documented code following industry best practices
            </p>
          </Card>
          
          <Card className="p-6 gradient-card border-border hover:border-primary transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Problem Solver</h3>
            <p className="text-muted-foreground">
              Breaking down complex challenges into manageable solutions through analytical thinking
            </p>
          </Card>
          
          <Card className="p-6 gradient-card border-border hover:border-primary transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Fast Learner</h3>
            <p className="text-muted-foreground">
              Quick to adapt to new technologies and frameworks, always eager to expand my skill set
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
