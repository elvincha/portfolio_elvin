
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "elvin.cha08@gmail.com",
      link: "mailto:elvin.cha08@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+33 6 31 01 81 64",
      link: "tel:+33631018164",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Paris, France",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 section-container">
      <div className={`space-y-4 text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <h2 className="text-3xl md:text-4xl font-bold">Let's Connect</h2>
        <p className="text-muted-foreground text-lg">
          Have a project in mind or want to discuss opportunities? Feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className={`lg:col-span-1 space-y-6 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className={cn(
                "flex items-start p-6 rounded-xl glassmorphism",
                isVisible ? 'animate-scale-in' : 'opacity-0'
              )}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                <info.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0 flex-1"> {/* Added min-w-0 and flex-1 to allow text to shrink */}
                <h3 className="text-sm font-medium mb-1">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="text-muted-foreground hover:text-primary transition-colors break-all" {/* Added break-all */}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground break-words">{info.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={`lg:col-span-2 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <form onSubmit={handleSubmit} className="p-8 rounded-xl glassmorphism space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-background/50"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="I'd like to discuss a potential project..."
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[150px] bg-background/50"
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  Sending
                  <span className="ml-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                </span>
              ) : (
                <span className="flex items-center">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
