import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Navigation, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const SearchLocation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { type } = location.state || { type: "pickup" };
  const [searchQuery, setSearchQuery] = useState("");

  const suggestions = [
    { name: "Current Location", address: "Using GPS", icon: Navigation },
    { name: "MG Road", address: "Bengaluru, Karnataka", icon: MapPin },
    { name: "Koramangala", address: "Bengaluru, Karnataka", icon: MapPin },
    { name: "Indiranagar", address: "Bengaluru, Karnataka", icon: MapPin },
  ];

  const recentLocations = [
    { name: "Home", address: "HSR Layout, Bengaluru" },
    { name: "Office", address: "Whitefield, Bengaluru" },
  ];

  const handleSelectLocation = (locationName: string) => {
    navigate("/home", { state: { [type]: locationName } });
  };

  return (
    <div className="min-h-screen bg-background">
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
            <Input
              type="text"
              placeholder={`Search ${type} location...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="h-12"
            />
          </div>
        </div>
      </header>

      <main className="px-4 py-6 space-y-6">
        {searchQuery === "" && (
          <>
            <div className="space-y-2">
              {suggestions.map((suggestion, index) => {
                const Icon = suggestion.icon;
                return (
                  <Card
                    key={index}
                    className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleSelectLocation(suggestion.name)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{suggestion.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {suggestion.address}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Recent Locations
              </h3>
              {recentLocations.map((loc, index) => (
                <Card
                  key={index}
                  className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handleSelectLocation(loc.name)}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-full">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{loc.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {loc.address}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default SearchLocation;
