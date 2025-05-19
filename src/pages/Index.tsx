
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import BlogPostCard from "@/components/BlogPostCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { projects, blogPosts } from "@/data/portfolioData";

const Index = () => {
  const featuredProjects = projects.slice(0, 3);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Hero />
      
      {/* Featured Projects Section */}
      <section className="finance-section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <SectionTitle 
              title="Featured Projects"
              subtitle="Highlighting some of my recent work in finance and investment analysis"
              className="md:mb-0"
            />
            <Button 
              asChild
              variant="outline" 
              className="mt-4 md:mt-0"
            >
              <Link to="/portfolio">
                View All Projects <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="finance-section bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Financial Services" 
            subtitle="Specialized consulting and analytical services to meet your financial goals"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-finance-blue-light/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-finance-blue-dark"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-finance-blue-dark">Investment Analysis</h3>
              <p className="text-gray-600">In-depth market analysis and investment opportunity evaluation to optimize your portfolio.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-finance-blue-light/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-finance-blue-dark"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-7h-2c0-1-1.5-4-5-4z"></path><path d="M2 9v1c0 1.1.9 2 2 2h1"></path><path d="M16 11h0"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-finance-blue-dark">Risk Management</h3>
              <p className="text-gray-600">Comprehensive risk assessment and mitigation strategies for your investments.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-finance-blue-light/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-finance-blue-dark"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-finance-blue-dark">Financial Planning</h3>
              <p className="text-gray-600">Tailored financial strategies to help you achieve your short and long-term financial goals.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Blog Posts Section */}
      <section className="finance-section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <SectionTitle 
              title="Latest Insights"
              subtitle="Financial analysis and market commentary to keep you informed"
              className="md:mb-0"
            />
            <Button 
              asChild
              variant="outline" 
              className="mt-4 md:mt-0"
            >
              <Link to="/blog">
                View All Articles <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-finance-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            Ready to Transform Your Financial Strategy?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto text-gray-200">
            Let's work together to optimize your investments and achieve your financial goals.
          </p>
          <Button 
            asChild
            className="bg-finance-gold hover:bg-finance-gold/90 text-white"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
