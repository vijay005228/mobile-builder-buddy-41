import { useNavigate } from "react-router-dom";
import { Settings, ChevronRight, HelpCircle, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import BottomNav from "@/components/BottomNav";

const Profile = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Total Rides", value: "42" },
    { label: "Money Saved", value: "₹1,240" },
    { label: "Avg. Rating", value: "4.8" },
  ];

  const menuItems = [
    {
      icon: Settings,
      label: "Settings",
      path: "/settings",
    },
    {
      icon: HelpCircle,
      label: "Help & Support",
      path: "/help",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-card border-b border-border">
        <div className="px-4 py-4">
          <h1 className="text-xl font-bold">Profile</h1>
        </div>
      </header>

      <main className="px-4 py-6 space-y-6">
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="h-10 w-10 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-muted-foreground">john.doe@email.com</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="divide-y">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="w-full px-4 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">{item.label}</span>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            );
          })}
        </Card>

        <Button
          variant="destructive"
          className="w-full"
          onClick={() => console.log("Logout")}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;
