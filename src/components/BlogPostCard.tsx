
import { Post } from '@/data/portfolioData';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BlogPostCardProps {
  post: Post;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
          <span className="text-sm text-gray-500">{post.author}</span>
        </div>
        <CardTitle className="text-xl font-bold mt-2 text-finance-blue-dark">
          {post.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-finance-blue-light/10 text-finance-blue-dark text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link 
          to={`/blog/${post.id}`} 
          className="flex items-center text-finance-blue font-medium hover:text-finance-blue-dark transition-colors"
        >
          Read More <ArrowRight size={16} className="ml-2" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;
