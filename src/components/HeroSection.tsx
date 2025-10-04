import { Button } from "@/components/ui/button";
import { Upload, Telescope, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-space.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[500px] flex items-center overflow-hidden rounded-xl mb-8">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 py-16">
        <div className="max-w-2xl">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 border border-primary/50 rounded-full text-sm text-primary">
              <span className="h-2 w-2 bg-primary rounded-full animate-pulse" />
              TESS Mission Active
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            Discover New <span className="text-gradient">Exoplanets</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-xl">
            Harness the power of AI to analyze light curves from NASA's TESS mission. 
            Join thousands of citizen scientists helping find planets beyond our solar system.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
              <Upload className="mr-2 h-5 w-5" />
              Upload Data
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              <Telescope className="mr-2 h-5 w-5" />
              Start Analyzing
            </Button>
            <Button size="lg" variant="ghost">
              <BookOpen className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm">
            <div>
              <p className="text-2xl font-bold text-primary">6,047</p>
              <p className="text-muted-foreground">Confirmed Planets</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <p className="text-2xl font-bold text-accent">18,342</p>
              <p className="text-muted-foreground">Analyzed Today</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <p className="text-2xl font-bold text-success">94.2%</p>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
