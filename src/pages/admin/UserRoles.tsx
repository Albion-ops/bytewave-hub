import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Shield } from "lucide-react";

const roleColors = {
  admin: "bg-destructive",
  author: "bg-primary",
  reader: "bg-secondary",
};

export default function UserRoles() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: users, isLoading } = useQuery({
    queryKey: ["admin-users"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select(`
          *,
          user_roles(role)
        `)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const updateRoleMutation = useMutation({
    mutationFn: async ({ userId, newRole }: { userId: string; newRole: "admin" | "author" | "reader" }) => {
      // Delete existing role
      await supabase.from("user_roles").delete().eq("user_id", userId);
      
      // Insert new role
      const { error } = await supabase
        .from("user_roles")
        .insert([{ user_id: userId, role: newRole }]);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-users"] });
      toast({
        title: "Success",
        description: "User role updated successfully",
      });
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    },
  });

  const handleRoleChange = (userId: string, newRole: "admin" | "author" | "reader") => {
    updateRoleMutation.mutate({ userId, newRole });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">User Roles</h1>
        <p className="text-muted-foreground">
          Manage user permissions and roles
        </p>
      </div>

      <div className="space-y-3">
        {isLoading ? (
          <Card>
            <CardContent className="p-6">Loading...</CardContent>
          </Card>
        ) : users && users.length > 0 ? (
          users.map((user: any) => {
            const currentRole = user.user_roles?.[0]?.role || "reader";
            return (
              <Card key={user.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{user.username}</p>
                        <p className="text-sm text-muted-foreground">
                          {user.full_name || "No name set"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge className={roleColors[currentRole as keyof typeof roleColors]}>
                        {currentRole}
                      </Badge>
                      <Select
                        value={currentRole}
                        onValueChange={(value: "admin" | "author" | "reader") => handleRoleChange(user.id, value)}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="reader">Reader</SelectItem>
                          <SelectItem value="author">Author</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground">No users found</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
