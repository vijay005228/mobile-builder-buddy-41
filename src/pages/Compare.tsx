import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BottomNav from "@/components/BottomNav";

const Compare = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pickup, destination } = location.state || {};

  const rides = [
    {
      id: "uber",
      platform: "Uber",
      logo: "🚗",
      vehicleType: "UberGo",
      fare: "₹180",
      eta: "5 mins",
      rating: 4.8,
      isCheapest: false,
      isFastest: true,
      surgeMultiplier: null,
    },
    {
      id: "rapido",
      platform: "Rapido",
      logo: "🏍️",
      vehicleType: "Bike",
      fare: "₹65",
      eta: "3 mins",
      rating: 4.6,
      isCheapest: true,
      isFastest: false,
      surgeMultiplier: null,
    },
    {
      id: "ola",
      platform: "Ola",
      logo: "🚕",
      vehicleType: "Mini",
      fare: "₹195",
      eta: "7 mins",
      rating: 4.5,
      isCheapest: false,
      isFastest: false,
      surgeMultiplier: 1.5,
    },
    {
      id: "porter",
      platform: "Porter",
      logo: "🚚",
      vehicleType: "Pickup",
      fare: "₹350",
      eta: "10 mins",
      rating: 4.7,
      isCheapest: false,
      isFastest: false,
      surgeMultiplier: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="px-4 py-4 flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Compare Rides</h1>
          </div>
          <Button variant="ghost" size="sm">
            Filter
          </Button>
        </div>
      </header>

      <main className="px-4 py-6 space-y-4">
        <Card className="p-4 bg-primary/5">
          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center gap-2 pt-1">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <div className="w-0.5 h-8 bg-border" />
              <div className="w-3 h-3 rounded-full bg-accent" />
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <div className="text-sm text-muted-foreground">From</div>
                <div className="font-medium">{pickup || "MG Road"}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">To</div>
                <div className="font-medium">{destination || "Koramangala"}</div>
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-3">
          {rides.map((ride) => (
            <Card
              key={ride.id}
              className="p-4 cursor-pointer hover:shadow-lg transition-all"
              onClick={() => navigate(`/details/${ride.id}`)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{ride.logo}</div>
                  <div>
                    <div className="font-semibold">{ride.platform}</div>
                    <div className="text-sm text-muted-foreground">
                      {ride.vehicleType}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{ride.fare}</div>
                  {ride.surgeMultiplier && (
                    <Badge variant="destructive" className="text-xs">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {ride.surgeMultiplier}x
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{ride.eta}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span>{ride.rating}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {ride.isCheapest && (
                    <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                      Cheapest
                    </Badge>
                  )}
                  {ride.isFastest && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      Fastest
                    </Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Compare;
