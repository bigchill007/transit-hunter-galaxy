import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

export const LightCurveChart = () => {
  return (
    <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Light Curve Analysis</h3>
          <p className="text-sm text-muted-foreground">TIC 123456789 - Sector 45</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="relative h-64 bg-secondary/50 rounded-lg p-4 border border-border">
        <svg className="w-full h-full" viewBox="0 0 800 200">
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="800" height="200" fill="url(#grid)" />
          
          {/* Light curve path with transits */}
          <path
            d="M 0,100 L 100,95 L 200,105 L 250,100 L 280,140 L 310,100 L 400,98 L 500,102 L 550,100 L 580,135 L 610,100 L 700,105 L 800,100"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            className="drop-shadow-[0_0_8px_hsl(var(--primary))]"
          />
          
          {/* Transit markers */}
          <circle cx="280" cy="140" r="4" fill="hsl(var(--accent))" className="animate-pulse" />
          <circle cx="580" cy="135" r="4" fill="hsl(var(--accent))" className="animate-pulse" />
        </svg>

        <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-md border border-border">
          <p className="text-xs text-muted-foreground">2 transits detected</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="text-center p-3 bg-secondary/50 rounded-lg">
          <p className="text-xs text-muted-foreground mb-1">Period</p>
          <p className="text-sm font-semibold text-foreground">3.2 days</p>
        </div>
        <div className="text-center p-3 bg-secondary/50 rounded-lg">
          <p className="text-xs text-muted-foreground mb-1">Depth</p>
          <p className="text-sm font-semibold text-foreground">0.8%</p>
        </div>
        <div className="text-center p-3 bg-secondary/50 rounded-lg">
          <p className="text-xs text-muted-foreground mb-1">Duration</p>
          <p className="text-sm font-semibold text-foreground">2.1 hrs</p>
        </div>
      </div>
    </Card>
  );
};
