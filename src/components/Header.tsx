
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/portfolioData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-finance-blue-dark font-playfair">
              {personalInfo.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
              <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
              <MobileNavLink to="/portfolio" onClick={toggleMenu}>Portfolio</MobileNavLink>
              <MobileNavLink to="/blog" onClick={toggleMenu}>Blog</MobileNavLink>
              <MobileNavLink to="/resume" onClick={toggleMenu}>Resume</MobileNavLink>
              <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-finance-blue-dark hover:text-finance-blue transition-colors font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    to={to}
    className="text-finance-blue-dark hover:text-finance-blue py-2 border-b border-gray-100 w-full block"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;
