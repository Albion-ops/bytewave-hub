import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import { format } from "date-fns";

interface BlogPostCardProps {
  id: string;
  title: string;
  excerpt: string | null;
  featuredImage: string | null;
  publishedAt: string | null;
  slug: string;
  category: {
    name: string;
    slug: string;
  } | null;
  author: {
    username: string;
  };
}

export const BlogPostCard = ({ 
  id, 
  title, 
  excerpt, 
  featuredImage, 
  publishedAt,
  slug,
  category,
  author 
}: BlogPostCardProps) => {
  return (
    <Link to={`/blog/${slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        {featuredImage && (
          <div className="aspect-video w-full overflow-hidden rounded-t-lg">
            <img 
              src={featuredImage} 
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            {category && (
              <Badge variant="secondary">{category.name}</Badge>
            )}
          </div>
          <h3 className="text-xl font-semibold line-clamp-2">{title}</h3>
        </CardHeader>
        <CardContent>
          {excerpt && (
            <p className="text-muted-foreground line-clamp-3 mb-4">{excerpt}</p>
          )}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{author.username}</span>
            </div>
            {publishedAt && (
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{format(new Date(publishedAt), 'MMM d, yyyy')}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
