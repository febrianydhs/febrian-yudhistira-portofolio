
import { useState } from "react";
import { projects } from "@/data/portfolioData";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Portfolio"
          subtitle="Explore my work in financial analysis and investment strategy"
        />
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-finance-blue-dark hover:bg-finance-blue" 
                : "text-finance-blue-dark border-finance-blue-dark hover:bg-finance-blue-dark/5"
              }
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
