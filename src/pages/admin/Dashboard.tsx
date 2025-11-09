import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, FolderOpen, Users, MessageSquare } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function AdminDashboard() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const [posts, categories, users, comments] = await Promise.all([
        supabase.from("posts").select("id", { count: "exact", head: true }),
        supabase.from("categories").select("id", { count: "exact", head: true }),
        supabase.from("profiles").select("id", { count: "exact", head: true }),
        supabase.from("comments").select("id", { count: "exact", head: true }),
      ]);

      return {
        posts: posts.count || 0,
        categories: categories.count || 0,
        users: users.count || 0,
        comments: comments.count || 0,
      };
    },
  });

  const statCards = [
    {
      title: "Total Posts",
      value: stats?.posts || 0,
      icon: FileText,
      color: "text-primary",
    },
    {
      title: "Categories",
      value: stats?.categories || 0,
      icon: FolderOpen,
      color: "text-accent",
    },
    {
      title: "Users",
      value: stats?.users || 0,
      icon: Users,
      color: "text-muted-foreground",
    },
    {
      title: "Comments",
      value: stats?.comments || 0,
      icon: MessageSquare,
      color: "text-muted-foreground",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your admin dashboard. Here's an overview of your blog.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-16" />
              ) : (
                <div className="text-3xl font-bold">{stat.value}</div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
