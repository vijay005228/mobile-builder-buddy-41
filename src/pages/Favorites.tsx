import { MapPin, Home as HomeIcon, Briefcase, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BottomNav from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const navigate = useNavigate();

  const favorites = [
    {
      id: 1,
      name: "Home",
      address: "HSR Layout, Sector 2, Bengaluru",
      icon: HomeIcon,
      category: "home",
    },
    {
      id: 2,
      name: "Office",
      address: "Whitefield, ITPL Main Road, Bengaluru",
      icon: Briefcase,
      category: "work",
    },
    {
      id: 3,
      name: "Gym",
      address: "Koramangala, 5th Block, Bengaluru",
      icon: MapPin,
      category: "other",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Favorites</h1>
          <Button
            size="icon"
            onClick={() => navigate("/search-location", { state: { type: "favorite" } })}
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="px-4 py-6 space-y-4">
        {favorites.map((favorite) => {
          const Icon = favorite.icon;
          return (
            <Card
              key={favorite.id}
              className="p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{favorite.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {favorite.address}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate("/home", { state: { destination: favorite.name } })}
                >
                  Go
                </Button>
              </div>
            </Card>
          );
        })}

        {favorites.length === 0 && (
          <div className="text-center py-12">
            <div className="p-6 bg-muted rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <MapPin className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No favorites yet</h3>
            <p className="text-muted-foreground mb-6">
              Add your frequently visited places for quick access
            </p>
            <Button onClick={() => navigate("/search-location", { state: { type: "favorite" } })}>
              <Plus className="mr-2 h-4 w-4" />
              Add Favorite
            </Button>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default Favorites;
