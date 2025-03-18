
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { GraduationCap, Award, FileText, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
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

  const achievements = [
    {
      icon: GraduationCap,
      title: "Master's in Data Science & AI",
      description: "Graduated with distinction, specialized in machine learning applications.",
    },
    {
      icon: Award,
      title: "Best Thesis Award",
      description: "Received recognition for innovative research in predictive analytics.",
    },
    {
      icon: Briefcase,
      title: "Research Internship",
      description: "Contributed to a cutting-edge AI project at a leading research lab.",
    },
    {
      icon: FileText,
      title: "Published Research",
      description: "Co-authored a paper on novel machine learning techniques.",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 section-container bg-gradient-to-b from-white to-secondary/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div>
            <div className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Passionate Data Scientist & AI Specialist
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a recent graduate with a Master's degree in Data Science and Artificial Intelligence, passionate about leveraging data to solve complex problems and create impactful solutions.
              </p>
              <p>
                My academic journey has equipped me with strong foundations in statistical analysis, machine learning algorithms, and AI applications. I've worked on diverse projects ranging from predictive modeling to natural language processing and computer vision.
              </p>
              <p>
                Beyond technical skills, I bring a creative approach to data problems and strive to communicate complex insights in accessible ways. I'm constantly learning and exploring new technologies to stay at the forefront of this rapidly evolving field.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="default">
              Download CV
            </Button>
            <Button size="lg" variant="outline">
              Contact Me
            </Button>
          </div>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          {achievements.map((item, index) => (
            <div 
              key={index}
              className={cn(
                "p-6 rounded-xl glassmorphism flex flex-col h-full",
                isVisible ? 'animate-scale-in' : 'opacity-0'
              )}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
