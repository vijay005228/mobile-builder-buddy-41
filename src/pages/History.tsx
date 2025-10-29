import { ArrowRight, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BottomNav from "@/components/BottomNav";

const History = () => {
  const rideHistory = [
    {
      id: 1,
      from: "MG Road",
      to: "Koramangala",
      platform: "Uber",
      fare: "₹180",
      date: "Today, 2:30 PM",
      vehicleType: "UberGo",
    },
    {
      id: 2,
      from: "Whitefield",
      to: "Indiranagar",
      platform: "Rapido",
      fare: "₹85",
      date: "Yesterday, 9:15 AM",
      vehicleType: "Bike",
    },
    {
      id: 3,
      from: "HSR Layout",
      to: "Electronic City",
      platform: "Ola",
      fare: "₹250",
      date: "Dec 15, 6:45 PM",
      vehicleType: "Mini",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="px-4 py-4">
          <h1 className="text-xl font-bold">Ride History</h1>
        </div>
      </header>

      <main className="px-4 py-6 space-y-4">
        {rideHistory.map((ride) => (
          <Card key={ride.id} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{ride.platform}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {ride.vehicleType}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">{ride.from}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{ride.to}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold">{ride.fare}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{ride.date}</span>
            </div>
          </Card>
        ))}
      </main>

      <BottomNav />
    </div>
  );
};

export default History;
