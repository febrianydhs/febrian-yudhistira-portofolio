
import { Project } from '@/data/portfolioData';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge className="bg-finance-gold text-white hover:bg-finance-gold/90">
            {project.category}
          </Badge>
          <span className="text-sm text-gray-500">{formatDate(project.date)}</span>
        </div>
        <CardTitle className="text-xl font-bold mt-2 text-finance-blue-dark">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700">{project.description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          asChild
          variant="ghost" 
          className="text-finance-blue hover:text-finance-blue-dark hover:bg-gray-100 p-0 h-auto"
        >
          <Link to={`/portfolio/${project.id}`} className="flex items-center">
            View Details <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
