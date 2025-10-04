import { Telescope, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Telescope className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-xl font-bold text-gradient">ExoPlanet Hunter</h1>
            <p className="text-xs text-muted-foreground">NASA TESS Mission Data</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#dashboard" className="text-sm text-foreground hover:text-primary transition-colors">
            Dashboard
          </a>
          <a href="#discoveries" className="text-sm text-foreground hover:text-primary transition-colors">
            Discoveries
          </a>
          <a href="#analyze" className="text-sm text-foreground hover:text-primary transition-colors">
            Analyze
          </a>
          <a href="#learn" className="text-sm text-foreground hover:text-primary transition-colors">
            Learn
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
