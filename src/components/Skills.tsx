
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

type Skill = {
  name: string;
  level: number;
  category: 'technical' | 'data' | 'ai' | 'tools';
};

const skillsList: Skill[] = [
  { name: 'Python', category: 'technical' },
  { name: 'R', level: 85, category: 'technical' },
  { name: 'SQL', level: 88, category: 'technical' },
  { name: 'JavaScript', level: 75, category: 'technical' },
  { name: 'Data Analysis', level: 92, category: 'data' },
  { name: 'Data Visualization', level: 88, category: 'data' },
  { name: 'Statistical Modeling', level: 85, category: 'data' },
  { name: 'Data Cleaning', level: 90, category: 'data' },
  { name: 'Machine Learning', level: 87, category: 'ai' },
  { name: 'Deep Learning', level: 80, category: 'ai' },
  { name: 'NLP', level: 78, category: 'ai' },
  { name: 'Computer Vision', level: 75, category: 'ai' },
  { name: 'TensorFlow', level: 82, category: 'tools' },
  { name: 'PyTorch', level: 78, category: 'tools' },
  { name: 'Pandas', level: 95, category: 'tools' },
  { name: 'Scikit-learn', level: 90, category: 'tools' },
];

const categories = [
  { id: 'all', name: 'All Skills' },
  { id: 'technical', name: 'Programming' },
  { id: 'data', name: 'Data Science' },
  { id: 'ai', name: 'AI & ML' },
  { id: 'tools', name: 'Tools & Frameworks' },
];

const SkillItem = ({ skill, delay = 0 }: { skill: Skill, delay?: number }) => {
  const [progressValue, setProgressValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

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

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgressValue(skill.level);
      }, delay * 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, delay]);

  return (
    <div 
      ref={itemRef}
      className={cn(
        "space-y-2 transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0"
      )}
      style={{ transitionDelay: `${delay * 0.05}s` }}
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <Progress value={progressValue} className="h-2" />
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
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

  const filteredSkills = skillsList.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id="skills" ref={sectionRef} className="py-20 section-container">
      <div className={`space-y-4 text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <h2 className="text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
        <p className="text-muted-foreground text-lg">
          My technical proficiency in data science, machine learning, and related technologies.
        </p>
      </div>

      <div className={`flex flex-wrap justify-center gap-2 mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              activeCategory === category.id
                ? "bg-primary text-white"
                : "bg-secondary hover:bg-secondary/80 text-foreground"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {filteredSkills.map((skill, index) => (
          <SkillItem key={skill.name} skill={skill} delay={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
