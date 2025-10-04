import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StatsWidget } from "@/components/StatsWidget";
import { LightCurveChart } from "@/components/LightCurveChart";
import { ConfidenceMeter } from "@/components/ConfidenceMeter";
import { LiveFeed } from "@/components/LiveFeed";
import { PlanetCard } from "@/components/PlanetCard";

const Index = () => {
  const samplePlanets = [
    {
      name: "TOI-5678b",
      starName: "TIC 234567890",
      radius: "1.2 R⊕",
      temperature: "350 K",
      period: "3.2 days",
      distance: "245 light-years",
      status: "confirmed" as const,
      confidence: 94,
    },
    {
      name: "TOI-5679c",
      starName: "TIC 234567891",
      radius: "1.8 R⊕",
      temperature: "420 K",
      period: "5.7 days",
      distance: "312 light-years",
      status: "confirmed" as const,
      confidence: 89,
    },
    {
      name: "TOI-5680d",
      starName: "TIC 234567892",
      radius: "2.3 R⊕",
      temperature: "580 K",
      period: "8.4 days",
      distance: "428 light-years",
      status: "candidate" as const,
      confidence: 76,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <HeroSection />

        <section id="dashboard" className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Mission Dashboard</h2>
          <StatsWidget />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2">
            <LightCurveChart />
          </div>
          <div className="space-y-6">
            <ConfidenceMeter />
            <LiveFeed />
          </div>
        </section>

        <section id="discoveries">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Recent Discoveries</h2>
            <a href="#" className="text-sm text-primary hover:underline">
              View All →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {samplePlanets.map((planet, index) => (
              <PlanetCard key={index} {...planet} />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>ExoPlanet Hunter · Powered by NASA TESS Mission Data</p>
            <p>© 2025 All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
