
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-finance-blue-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">
              {personalInfo.name}
            </h3>
            <p className="mb-4 text-gray-300">{personalInfo.role}</p>
            <p className="mb-4 text-gray-300">{personalInfo.location}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-finance-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-finance-gold transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="hover:text-finance-gold transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-finance-gold transition-colors">Blog</Link></li>
              <li><Link to="/resume" className="hover:text-finance-gold transition-colors">Resume</Link></li>
              <li><Link to="/contact" className="hover:text-finance-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              {personalInfo.socialLinks.linkedin && (
                <a 
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-finance-gold transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
              
              {personalInfo.socialLinks.github && (
                <a 
                  href={personalInfo.socialLinks.github}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-finance-gold transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              )}
              
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-white hover:text-finance-gold transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-300">{personalInfo.email}</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Elegantly designed for finance professionals.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
