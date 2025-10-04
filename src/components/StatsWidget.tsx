import { TrendingUp, CheckCircle2, AlertCircle, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    label: "Confirmed Planets",
    value: "6,047",
    change: "+23 today",
    icon: CheckCircle2,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    label: "Candidates Analyzed",
    value: "18,342",
    change: "+156 this week",
    icon: Activity,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    label: "Success Rate",
    value: "94.2%",
    change: "+2.1% vs last month",
    icon: TrendingUp,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    label: "Pending Review",
    value: "342",
    change: "Needs attention",
    icon: AlertCircle,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
];

export const StatsWidget = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card
            key={index}
            className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
                <p className={`text-xs ${stat.color}`}>{stat.change}</p>
              </div>
              <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
                <Icon className="h-6 w-6" />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
