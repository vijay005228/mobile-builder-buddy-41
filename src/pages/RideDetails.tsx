import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const RideDetails = () => {
  const { platformId } = useParams();
  const navigate = useNavigate();

  const rideDetails = {
    uber: {
      platform: "Uber",
      logo: "🚗",
      vehicleType: "UberGo",
      fare: "₹180",
      baseFare: "₹40",
      perKm: "₹12",
      perMin: "₹2",
      distance: "8.5 km",
      duration: "22 mins",
      eta: "5 mins",
      rating: 4.8,
      totalRides: "12.5k",
    },
  };

  const details = rideDetails[platformId as keyof typeof rideDetails] || rideDetails.uber;

  const handleBookNow = () => {
    window.open(`https://uber.com`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background pb-6">
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
            <h1 className="text-lg font-semibold">Ride Details</h1>
          </div>
        </div>
      </header>

      <main className="px-4 py-6 space-y-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="text-5xl">{details.logo}</div>
              <div>
                <div className="text-2xl font-bold">{details.platform}</div>
                <div className="text-muted-foreground">{details.vehicleType}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">{details.fare}</div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span>{details.rating}</span>
                <span>({details.totalRides})</span>
              </div>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>ETA</span>
              </div>
              <span className="font-semibold">{details.eta}</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Distance</span>
              </div>
              <span className="font-semibold">{details.distance}</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Duration</span>
              </div>
              <span className="font-semibold">{details.duration}</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Fare Breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Base Fare</span>
              <span className="font-medium">{details.baseFare}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Per Kilometer</span>
              <span className="font-medium">{details.perKm}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Per Minute</span>
              <span className="font-medium">{details.perMin}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg">
              <span className="font-semibold">Total Estimate</span>
              <span className="font-bold text-primary">{details.fare}</span>
            </div>
          </div>
        </Card>

        <Button
          onClick={handleBookNow}
          className="w-full h-14 text-lg font-semibold"
        >
          Book on {details.platform}
          <ExternalLink className="ml-2 h-5 w-5" />
        </Button>
      </main>
    </div>
  );
};

export default RideDetails;
