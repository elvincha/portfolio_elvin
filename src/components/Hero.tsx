
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center pt-16 section-container"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
        <div className="lg:col-span-3 space-y-6 animate-slide-in">
          <div className="inline-block">
            <div className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-6 animate-slide-in" style={{ animationDelay: '0.3s' }}>
              Master's in Data Science & AI
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance animate-blur-in" style={{ animationDelay: '0.5s' }}>
            Transforming Data into 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"> Meaningful Insights</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: '0.7s' }}>
            Recent graduate with expertise in data analysis, machine learning, and AI solutions. 
            Passionate about solving complex problems through innovative data-driven approaches.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <Button size="lg" className="rounded-md">
              View Projects
            </Button>
            <Button variant="outline" size="lg" className="rounded-md">
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="lg:col-span-2 flex justify-center lg:justify-end animate-blur-in" style={{ animationDelay: '0.8s' }}>
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 blur-3xl opacity-50"></div>
            <div className="relative bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden p-6 h-full w-full glassmorphism">
              <div className="flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">AI</span>
                  </div>
                  <h3 className="text-xl font-medium">Data Scientist & AI Specialist</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'ML', 'Deep Learning', 'Data Analysis'].map(skill => (
                      <span key={skill} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Machine Learning</span>
                    <span>85%</span>
                  </div>
                  
                  <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Data Analysis</span>
                    <span>90%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#projects" className="flex items-center justify-center flex-col">
          <span className="text-xs text-muted-foreground mb-2">Scroll Down</span>
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
