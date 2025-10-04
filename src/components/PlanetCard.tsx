import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Thermometer, Clock, Ruler, ExternalLink } from "lucide-react";

interface PlanetCardProps {
  name: string;
  starName: string;
  radius: string;
  temperature: string;
  period: string;
  distance: string;
  status: "confirmed" | "candidate" | "review";
  confidence: number;
}

export const PlanetCard = ({ 
  name, 
  starName, 
  radius, 
  temperature, 
  period, 
  distance,
  status,
  confidence 
}: PlanetCardProps) => {
  const statusConfig = {
    confirmed: { label: "Confirmed", color: "bg-success/20 text-success border-success" },
    candidate: { label: "Candidate", color: "bg-warning/20 text-warning border-warning" },
    review: { label: "Needs Review", color: "bg-primary/20 text-primary border-primary" },
  };

  return (
    <Card className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-lg font-semibold text-foreground mb-1">{name}</h4>
          <p className="text-sm text-muted-foreground">{starName}</p>
        </div>
        <Badge className={statusConfig[status].color}>
          {statusConfig[status].label}
        </Badge>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-sm">
          <Ruler className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Radius:</span>
          <span className="text-foreground font-medium">{radius}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Thermometer className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Temperature:</span>
          <span className="text-foreground font-medium">{temperature}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Orbital Period:</span>
          <span className="text-foreground font-medium">{period}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Globe className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Distance:</span>
          <span className="text-foreground font-medium">{distance}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground">AI Confidence</span>
          <span className="text-xs font-semibold text-primary">{confidence}%</span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent"
            style={{ width: `${confidence}%` }}
          />
        </div>
      </div>

      <Button variant="outline" className="w-full" size="sm">
        View Details <ExternalLink className="ml-2 h-3 w-3" />
      </Button>
    </Card>
  );
};
