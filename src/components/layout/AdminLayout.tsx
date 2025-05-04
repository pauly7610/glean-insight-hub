
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  Search, 
  Settings, 
  Users, 
  Bell, 
  HelpCircle, 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from '@/components/ThemeToggle';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const navItems = [
    { name: "Dashboard", path: "/", icon: <Search className="h-5 w-5" /> },
    { name: "Analytics", path: "/analytics", icon: <BarChart className="h-5 w-5" /> },
    { name: "Users", path: "/users", icon: <Users className="h-5 w-5" /> },
    { name: "Settings", path: "/settings", icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen bg-light-gray dark:bg-[#1A1F2C]">
      {/* Top navigation */}
      <header className="bg-white dark:bg-[#221F26] border-b border-border shadow-[var(--shadow-sm)] sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-xl font-bold text-primary flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm3 7h8a1 1 0 0 0 0-2H8a1 1 0 1 0 0 2zm0 4h8a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2zm0 4h5a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2z"/>
              </svg>
              Glean Admin
            </div>
            
            <div className="hidden md:flex items-center relative ml-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                className="pl-9 w-[240px] bg-light-gray dark:bg-sidebar-accent border-0 focus-visible:ring-1 focus-visible:ring-primary/20 transition-all"
                placeholder="Search..."
              />
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path} 
                className={cn(
                  "flex items-center px-3 py-2 rounded-lg text-sm font-medium gap-1.5 transition-all",
                  item.path === location.pathname
                    ? "bg-primary-light dark:bg-accent text-primary dark:text-accent-foreground"
                    : "text-text-secondary hover:bg-light-gray dark:hover:bg-sidebar-accent hover:text-text-primary dark:hover:text-foreground"
                )}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-1">
            <ThemeToggle />
            
            <Button variant="ghost" size="icon" className="rounded-full text-text-secondary hover:text-text-primary hover:bg-light-gray dark:hover:bg-sidebar-accent">
              <Bell className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="rounded-full text-text-secondary hover:text-text-primary hover:bg-light-gray dark:hover:bg-sidebar-accent">
              <HelpCircle className="h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full ml-1">
                  <Avatar className="h-9 w-9 border border-border">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback className="bg-mid-gray dark:bg-sidebar-accent text-secondary dark:text-foreground font-medium">AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Admin User</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      admin@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="py-6">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
