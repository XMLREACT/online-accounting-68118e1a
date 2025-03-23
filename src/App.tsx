
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BankStatement from "./pages/BankStatement";
import Documents from "./pages/Documents";
import Profile from "./pages/Profile";
import Contract from "./pages/Contract";
import History from "./pages/History";
import Messages from "./pages/Messages";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminDocumentView from "./pages/admin/AdminDocumentView";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/choose" element={<LandingPage />} />
            
            {/* User routes */}
            <Route path="/" element={<Index />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/statement" element={<BankStatement />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/contract" element={<Contract />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/history" element={<History />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Admin routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminDashboard />} />
            <Route path="/admin/client-card" element={<AdminDashboard />} />
            <Route path="/admin/client-card/:id" element={<AdminDashboard />} />
            <Route path="/admin/delete-fop" element={<AdminDashboard />} />
            <Route path="/admin/bank-statements" element={<AdminDashboard />} />
            <Route path="/admin/esv-payments" element={<AdminDashboard />} />
            <Route path="/admin/esv-requisites" element={<AdminDashboard />} />
            <Route path="/admin/esv-receipt" element={<AdminDashboard />} />
            <Route path="/admin/single-tax" element={<AdminDashboard />} />
            <Route path="/admin/single-tax-receipt" element={<AdminDashboard />} />
            <Route path="/admin/single-tax-import" element={<AdminDashboard />} />
            <Route path="/admin/single-tax-requisites" element={<AdminDashboard />} />
            <Route path="/admin/single-tax-payments" element={<AdminDashboard />} />
            <Route path="/admin/verification-act" element={<AdminDashboard />} />
            <Route path="/admin/mailing" element={<AdminDashboard />} />
            <Route path="/admin/document/:id" element={<AdminDocumentView />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
