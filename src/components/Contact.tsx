import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-slide-up">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto animate-slide-up">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        
        <Card className="p-8 gradient-card border-border animate-slide-up">
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="mailto:contact@example.com"
              className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-primary/20 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm text-muted-foreground">contact@example.com</p>
              </div>
            </a>
            
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-primary/20 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold">LinkedIn</p>
                <p className="text-sm text-muted-foreground">Connect with me</p>
              </div>
            </a>
            
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-primary/20 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold">GitHub</p>
                <p className="text-sm text-muted-foreground">View my projects</p>
              </div>
            </a>
            
            <a 
              href="#"
              className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-primary/20 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Resume</p>
                <p className="text-sm text-muted-foreground">Download CV</p>
              </div>
            </a>
          </div>
          
          <div className="mt-8 text-center">
            <Button size="lg" asChild>
              <a href="mailto:contact@example.com">
                Send Me a Message
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
