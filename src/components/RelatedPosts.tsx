import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { BlogPostCard } from "@/components/BlogPostCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

interface RelatedPostsProps {
  currentPostId: string;
  categoryId: string | null;
}

export const RelatedPosts = ({ currentPostId, categoryId }: RelatedPostsProps) => {
  const { toast } = useToast();
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categoryId) {
      fetchRelatedPosts();
    } else {
      setLoading(false);
    }
  }, [currentPostId, categoryId]);

  const fetchRelatedPosts = async () => {
    setLoading(true);
    
    const { data, error } = await supabase
      .from("posts")
      .select(`
        *,
        categories (name, slug),
        profiles (username)
      `)
      .eq("status", "published")
      .eq("category_id", categoryId)
      .neq("id", currentPostId)
      .order("published_at", { ascending: false })
      .limit(3);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to load related posts",
        variant: "destructive",
      });
    } else {
      setPosts(data || []);
    }
    setLoading(false);
  };

  if (!categoryId || (!loading && posts.length === 0)) {
    return null;
  }

  return (
    <div className="border-t pt-12 mt-12">
      <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
      
      {loading ? (
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="aspect-video w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogPostCard
              key={post.id}
              id={post.id}
              title={post.title}
              excerpt={post.excerpt}
              featuredImage={post.featured_image}
              publishedAt={post.published_at}
              slug={post.slug}
              category={post.categories}
              author={post.profiles}
            />
          ))}
        </div>
      )}
    </div>
  );
};
