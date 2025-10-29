import { Bell, TrendingUp, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BottomNav from "@/components/BottomNav";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: "surge",
      title: "Surge Pricing Alert",
      message: "Uber rates are 1.5x higher than usual in your area",
      time: "5 mins ago",
      unread: true,
      icon: TrendingUp,
    },
    {
      id: 2,
      type: "info",
      title: "New Feature Available",
      message: "Try our new AI-powered route recommendations",
      time: "2 hours ago",
      unread: true,
      icon: Info,
    },
    {
      id: 3,
      type: "price",
      title: "Price Drop Detected",
      message: "Rapido fares are now 20% lower for your recent route",
      time: "Yesterday",
      unread: false,
      icon: Bell,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Notifications</h1>
          <Button variant="ghost" size="sm">
            Clear All
          </Button>
        </div>
      </header>

      <main className="px-4 py-6 space-y-4">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <Card
              key={notification.id}
              className={`p-4 ${notification.unread ? "bg-primary/5" : ""}`}
            >
              <div className="flex gap-4">
                <div
                  className={`p-3 rounded-full flex-shrink-0 ${
                    notification.type === "surge"
                      ? "bg-destructive/10"
                      : notification.type === "price"
                      ? "bg-secondary/10"
                      : "bg-primary/10"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      notification.type === "surge"
                        ? "text-destructive"
                        : notification.type === "price"
                        ? "text-secondary"
                        : "text-primary"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold">{notification.title}</h3>
                    {notification.unread && (
                      <Badge variant="secondary" className="ml-2">
                        New
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {notification.message}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {notification.time}
                  </span>
                </div>
              </div>
            </Card>
          );
        })}

        {notifications.length === 0 && (
          <div className="text-center py-12">
            <div className="p-6 bg-muted rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <Bell className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No notifications</h3>
            <p className="text-muted-foreground">
              You're all caught up!
            </p>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default Notifications;
