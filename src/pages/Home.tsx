import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Navigation, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BottomNav from "@/components/BottomNav";

const Home = () => {
  const navigate = useNavigate();
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const recentSearches = [
    { from: "MG Road", to: "Indiranagar", fare: "₹180" },
    { from: "Whitefield", to: "Koramangala", fare: "₹320" },
  ];

  const handleCompare = () => {
    if (pickup && destination) {
      navigate("/compare", { state: { pickup, destination } });
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-xl font-bold">RideWise</h1>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => navigate("/profile")}
          >
            <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-primary">U</span>
            </div>
          </Button>
        </div>
      </header>

      <main className="px-4 py-6 space-y-6">
        <Card className="p-6 space-y-4">
          <h2 className="text-lg font-semibold">Where to?</h2>
          
          <div
            className="flex items-center gap-3 p-4 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 transition-colors"
            onClick={() => navigate("/search-location", { state: { type: "pickup" } })}
          >
            <div className="p-2 bg-primary rounded-full">
              <Navigation className="h-4 w-4 text-primary-foreground" />
            </div>
            <input
              type="text"
              placeholder="Pickup location"
              value={pickup}
              readOnly
              className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div
            className="flex items-center gap-3 p-4 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 transition-colors"
            onClick={() => navigate("/search-location", { state: { type: "destination" } })}
          >
            <div className="p-2 bg-accent rounded-full">
              <MapPin className="h-4 w-4 text-accent-foreground" />
            </div>
            <input
              type="text"
              placeholder="Where to?"
              value={destination}
              readOnly
              className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <Button
            onClick={handleCompare}
            disabled={!pickup || !destination}
            className="w-full h-12 text-base font-semibold"
          >
            Compare Rides
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Card>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Recent Searches
          </h3>
          {recentSearches.map((search, index) => (
            <Card
              key={index}
              className="p-4 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => {
                setPickup(search.from);
                setDestination(search.to);
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium">{search.from}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{search.to}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="h-3 w-3 fill-accent text-accent" />
                    <span className="text-xs text-muted-foreground">Best price: {search.fare}</span>
                  </div>
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

export default Home;
