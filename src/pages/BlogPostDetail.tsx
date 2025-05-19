
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const BlogPostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="pt-12 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4 text-finance-blue-dark">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft size={16} className="mr-2" /> Back to Blog
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
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6">
          <Button 
            asChild
            variant="outline" 
            className="mb-6"
          >
            <Link to="/blog">
              <ArrowLeft size={16} className="mr-2" /> Back to Blog
            </Link>
          </Button>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-finance-blue-dark font-playfair mb-4">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap gap-4 items-center mb-6 text-gray-600">
          <span>{formatDate(post.date)}</span>
          <span>|</span>
          <span>By {post.author}</span>
        </div>
        
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-auto rounded-lg shadow-md mb-8"
        />
        
        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="bg-finance-blue-light/10 text-finance-blue-dark text-sm px-3 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
