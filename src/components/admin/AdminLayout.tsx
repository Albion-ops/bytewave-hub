import { ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, FileText, FolderOpen, Users, LogOut, Home } from "lucide-react";

interface AdminLayoutProps {
  children: ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Posts", href: "/admin/posts", icon: FileText },
    { name: "Categories", href: "/admin/categories", icon: FolderOpen },
    { name: "User Roles", href: "/admin/roles", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-card border-r border-border">
          <div className="p-6">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BW</span>
              </div>
              <span className="font-bold text-xl">Admin</span>
            </Link>

            <nav className="space-y-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link key={item.name} to={item.href}>
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      className="w-full justify-start gap-3"
                    >
                      <item.icon className="h-5 w-5" />
                      {item.name}
                    </Button>
                  </Link>
                );
              })}
              
              <div className="pt-4 border-t border-border mt-4">
                <Link to="/">
                  <Button variant="ghost" className="w-full justify-start gap-3">
                    <Home className="h-5 w-5" />
                    View Site
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 text-destructive hover:text-destructive"
                  onClick={handleSignOut}
                >
                  <LogOut className="h-5 w-5" />
                  Sign Out
                </Button>
              </div>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
