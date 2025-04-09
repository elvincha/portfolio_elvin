import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { projectsList, Project } from '@/data/projects';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden border border-border/50 card-hover group h-full flex flex-col">
      <div className="overflow-hidden h-48 relative">
        <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/10 transition-all duration-300 z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <CardHeader className="pt-6">
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.slice(0, 4).map(tag => (
            <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
              {tag}
            </span>
          ))}
        </div>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="line-clamp-3">{project.description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto pt-4 flex justify-between">
        <div className="flex space-x-2">
          {project.github && (
            <Button variant="outline" size="icon" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.demo && (
            <Button variant="outline" size="icon" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
        <Button variant="default" size="sm" className="ml-auto" asChild>
          <Link to={`/project/${project.id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 section-container bg-secondary/30">
      <div className={`space-y-4 text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        <p className="text-muted-foreground text-lg">
          Showcasing my work in data science, machine learning, and AI applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsList.map((project, index) => (
          <div 
            key={project.id} 
            className={isVisible ? 'animate-slide-in' : 'opacity-0'} 
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      
      <div className={`flex justify-center mt-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
        <Button variant="outline" size="lg" asChild>
          <Link to="/#projects">
            View All Projects
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Projects;
