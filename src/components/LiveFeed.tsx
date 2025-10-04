import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Star } from "lucide-react";

const recentDiscoveries = [
  { id: 1, name: "TOI-5678b", time: "2 min ago", type: "Hot Jupiter" },
  { id: 2, name: "TOI-5679c", time: "5 min ago", type: "Super-Earth" },
  { id: 3, name: "TOI-5680d", time: "12 min ago", type: "Neptune-like" },
  { id: 4, name: "TOI-5681e", time: "18 min ago", type: "Rocky Planet" },
  { id: 5, name: "TOI-5682f", time: "25 min ago", type: "Mini-Neptune" },
];

export const LiveFeed = () => {
  return (
    <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="h-5 w-5 text-accent animate-pulse" />
        <h3 className="text-lg font-semibold text-foreground">Live Discovery Feed</h3>
        <Badge className="bg-accent/20 text-accent border-accent ml-auto">LIVE</Badge>
      </div>

      <div className="space-y-3">
        {recentDiscoveries.map((discovery) => (
          <div
            key={discovery.id}
            className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors border border-transparent hover:border-primary/30"
          >
            <Star className="h-4 w-4 text-primary" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">{discovery.name}</p>
              <p className="text-xs text-muted-foreground">{discovery.type}</p>
            </div>
            <span className="text-xs text-muted-foreground">{discovery.time}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Updates every 30s</span>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-success rounded-full animate-pulse" />
            <span className="text-success text-xs">Connected</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
