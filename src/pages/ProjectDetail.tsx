
import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="pt-12 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4 text-finance-blue-dark">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/portfolio">
              <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Button 
            asChild
            variant="outline" 
            className="mb-6"
          >
            <Link to="/portfolio">
              <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
            </Link>
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-bold text-finance-blue-dark font-playfair mb-4">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <Badge className="bg-finance-gold text-white hover:bg-finance-gold/90">
              {project.category}
            </Badge>
            <span className="text-gray-600">{formatDate(project.date)}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto rounded-lg shadow-md mb-6"
            />
            
            <div className="prose max-w-none">
              <h2>Project Overview</h2>
              <p>{project.description}</p>
              
              <h2>Methodology</h2>
              <p>
                A comprehensive approach was taken for this project, combining quantitative analysis with qualitative 
                market research. The process involved data collection from multiple sources, statistical analysis, 
                and expert consultation to ensure robust results.
              </p>
              
              <h2>Key Findings</h2>
              <ul>
                <li>Market trends indicate significant growth potential in targeted sectors</li>
                <li>Risk analysis revealed optimal diversification strategies for portfolio stability</li>
                <li>Long-term projections suggest above-average returns with moderate risk exposure</li>
                <li>Competitive analysis identified strategic investment opportunities</li>
              </ul>
              
              <h2>Implementation Strategy</h2>
              <p>
                The implementation phase focused on translating analytical insights into actionable investment 
                decisions. A phased approach was recommended to optimize entry points and minimize market timing risks.
              </p>
              
              <h2>Results & Impact</h2>
              <p>
                The strategies developed through this project resulted in portfolio performance exceeding benchmarks 
                by 12%, with reduced volatility compared to similar investment approaches. Client feedback highlighted 
                the clarity of recommendations and the practical implementation framework.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-finance-blue-dark font-playfair">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-600">Category</h4>
                  <p className="text-finance-blue-dark">{project.category}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-600">Date</h4>
                  <p className="text-finance-blue-dark">{formatDate(project.date)}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-600">Client</h4>
                  <p className="text-finance-blue-dark">Investment Firm Inc.</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-600">Duration</h4>
                  <p className="text-finance-blue-dark">3 Months</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-600">Tools & Methods</h4>
                  <p className="text-finance-blue-dark">Financial Modeling, Risk Analysis, Market Research</p>
                </div>
                
                {project.link && (
                  <div className="pt-2">
                    <Button 
                      asChild
                      className="w-full bg-finance-blue-dark hover:bg-finance-blue"
                    >
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View Project Resource
                      </a>
                    </Button>
                  </div>
                )}
                
                <div className="pt-2">
                  <Button 
                    asChild
                    variant="outline" 
                    className="w-full"
                  >
                    <Link to="/contact">
                      Request Similar Analysis
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
