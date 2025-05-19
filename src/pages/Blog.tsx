
import { useState } from "react";
import { blogPosts } from "@/data/portfolioData";
import SectionTitle from "@/components/SectionTitle";
import BlogPostCard from "@/components/BlogPostCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTags = selectedTags.length === 0 || 
                        selectedTags.some(tag => post.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prevTags => 
      prevTags.includes(tag) 
        ? prevTags.filter(t => t !== tag) 
        : [...prevTags, tag]
    );
  };

  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Blog & Insights"
          subtitle="Financial analysis, market trends, and investment strategies"
        />
        
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Button
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleTag(tag)}
                className={selectedTags.includes(tag) 
                  ? "bg-finance-blue-dark hover:bg-finance-blue" 
                  : "text-finance-blue-dark border-finance-blue-dark hover:bg-finance-blue-dark/5"
                }
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600">No articles found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setSelectedTags([]);
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
