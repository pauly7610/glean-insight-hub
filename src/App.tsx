
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Analytics from "./pages/Analytics";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import AdminLayout from "./components/layout/AdminLayout";
import { ThemeProvider } from "./contexts/ThemeContext";

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Wrap App in a function component to ensure hooks work properly
const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<AdminLayout><Index /></AdminLayout>} />
                <Route path="/analytics" element={<AdminLayout><Analytics /></AdminLayout>} />
                <Route path="/users" element={<AdminLayout><Users /></AdminLayout>} />
                <Route path="/settings" element={<AdminLayout><Settings /></AdminLayout>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
