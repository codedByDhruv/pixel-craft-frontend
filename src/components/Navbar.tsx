
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-agency-navy flex items-center">
          <span className="text-agency-blue">Pixel</span>Craft
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <Button asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-agency-navy"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container py-5 flex flex-col space-y-4">
            <NavLinks mobile />
            <Button asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const location = useLocation();
  
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/#services' },
    { name: 'Work', path: '/#work' },
  ];

  return (
    <>
      {links.map((link) => {
        const isActive = location.pathname === link.path || 
                         (link.path.includes('#') && location.pathname === '/' && location.hash === link.path.substring(1));
        
        return (
          <Link
            key={link.name}
            to={link.path}
            className={`${
              mobile ? 'block py-2' : ''
            } relative font-medium hover:text-agency-blue transition-colors ${
              isActive ? 'text-agency-blue' : 'text-agency-navy'
            }`}
          >
            {link.name}
            {isActive && (
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-agency-blue"></span>
            )}
          </Link>
        );
      })}
    </>
  );
};

export default Navbar;
