
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/portfolioData';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-finance-blue-dark leading-tight">
              Expert Financial <br />
              <span className="text-finance-blue">Analysis & Investment</span>
            </h1>
            
            <p className="text-lg text-gray-700 max-w-lg">
              {personalInfo.bio}
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <Button 
                asChild
                className="bg-finance-blue-dark hover:bg-finance-blue text-white"
              >
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                className="border-finance-blue-dark text-finance-blue-dark hover:bg-finance-blue-dark/5"
              >
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-finance-blue-dark rounded-full w-64 h-64 md:w-80 md:h-80 overflow-hidden shadow-xl">
                <img 
                  src={personalInfo.photo} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="italic text-lg font-medium text-finance-blue-dark">
                  {personalInfo.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
