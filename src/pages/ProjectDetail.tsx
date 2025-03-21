import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projectsList } from '@/data/projects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id || '0', 10);
  
  // Find the project by ID
  const project = projectsList.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center flex-col p-6">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-28">
        <div className="section-container animate-fade-in">
          <Link to="/#projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h1>
              
              <div className="aspect-video w-full overflow-hidden rounded-lg border mb-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-medium mb-4">Project Overview</h2>
                  <p className="text-muted-foreground">{project.details?.overview || project.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-medium mb-4">Key Features</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                    {project.details?.keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-medium mb-4">Challenges Faced</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                    {project.details?.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-medium mb-4">Goal of the Project</h2>
                  <p className="text-muted-foreground">{project.details?.goal}</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24 border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-medium mb-4">Project Links</h3>
                
                <div className="space-y-4">
                  {project.github && (
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Source Code
                      </a>
                    </Button>
                  )}
                  
                  {project.demo && (
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-medium mb-4">Timeline</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium">Duration:</span> {project.details?.timeline.duration || 'N/A'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Completed:</span> {project.details?.timeline.completed || 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
