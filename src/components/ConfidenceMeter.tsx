import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ConfidenceMeter = () => {
  const confidence = 94;

  return (
    <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">AI Confidence</h3>
        <Badge className="bg-success/20 text-success border-success">
          Confirmed Planet
        </Badge>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <div className="h-8 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 glow-primary"
              style={{ width: `${confidence}%` }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold text-foreground drop-shadow-lg">
              {confidence}% Confident
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-secondary/50 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">Transit Score</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-success" style={{ width: "96%" }} />
              </div>
              <span className="text-xs font-semibold text-success">96%</span>
            </div>
          </div>
          
          <div className="p-3 bg-secondary/50 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">False Positive</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-destructive" style={{ width: "6%" }} />
              </div>
              <span className="text-xs font-semibold text-muted-foreground">6%</span>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground mb-2">Classification Breakdown</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Signal Quality</span>
              <span className="font-semibold text-success">Excellent</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Periodic Pattern</span>
              <span className="font-semibold text-success">Detected</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Stellar Activity</span>
              <span className="font-semibold text-warning">Low</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
