
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { title: "Home", href: "#hero" },
    { title: "Projects", href: "#projects" },
    { title: "Skills", href: "#skills" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "glassmorphism" : "bg-transparent"
      )}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-xl md:text-2xl font-display font-semibold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Elvin CHA
            </span>
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="navigation-item"
              onClick={closeMobileMenu}
            >
              {item.title}
            </a>
          ))}

          <Button
            className="ml-4"
            variant="default"
            size="sm"
            asChild
          >
            <a href="/CV Elvin CHA eng.pdf" download="CV Elvin CHA eng.pdf" className="flex items-center justify-center gap-2">
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm z-40 pt-20">
          <nav className="flex flex-col items-center space-y-6 p-6 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-lg font-medium"
                onClick={closeMobileMenu}
              >
                {item.title}
              </a>
            ))}
            <Button
              className="mt-4 w-full"
              variant="default"
              asChild
            >
              <a href="/CV Elvin CHA eng.pdf" download="CV Elvin CHA eng.pdf" className="flex items-center justify-center gap-2">
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
