import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import POSDetails from "./pages/POSDetails";
import CCTVDetails from "./pages/CCTVDetails";
import { ProtectedRoute } from "./components/admin/ProtectedRoute";
import { AdminLayout } from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminPosts from "./pages/admin/Posts";
import AdminCategories from "./pages/admin/Categories";
import UserRoles from "./pages/admin/UserRoles";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/services/pos" element={<POSDetails />} />
          <Route path="/services/cctv" element={<CCTVDetails />} />
          
          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/posts"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <AdminPosts />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/categories"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <AdminCategories />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/roles"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <UserRoles />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
