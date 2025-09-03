import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, MessageSquare, History, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard
    },
    {
      id: 'chat',
      label: 'Chat',
      icon: MessageSquare
    },
    {
      id: 'history',
      label: 'Chat History',
      icon: History
    }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex bg-background shadow-career-card border-b sticky top-0 z-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-gradient-primary text-white p-2 rounded-lg">
                <LayoutDashboard className="h-6 w-6" />
              </div>
              <h1 className="ml-3 text-xl font-bold text-foreground">AI Career Advisor</h1>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-1">
              <div className="flex space-x-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.id}
                      variant={activeTab === item.id ? "default" : "ghost"}
                      onClick={() => onTabChange(item.id)}
                      className={cn(
                        "flex items-center gap-2",
                        activeTab === item.id && "bg-career-primary text-white"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Button>
                  );
                })}
              </div>
              <div className="ml-4">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-background shadow-career-card border-b sticky top-0 z-50">
        <div className="px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-gradient-primary text-white p-2 rounded-lg">
                <LayoutDashboard className="h-5 w-5" />
              </div>
              <h1 className="ml-2 text-lg font-bold text-foreground">AI Career Advisor</h1>
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="pb-4 border-t">
              <div className="pt-4 space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.id}
                      variant={activeTab === item.id ? "default" : "ghost"}
                      onClick={() => {
                        onTabChange(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={cn(
                        "w-full justify-start gap-2",
                        activeTab === item.id && "bg-career-primary text-white"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};