import { useNavigate } from "react-router-dom";
import { ArrowLeft, Globe, Bell, Shield, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ChevronRight } from "lucide-react";

const Settings = () => {
  const navigate = useNavigate();

  const settingsSections = [
    {
      title: "Preferences",
      items: [
        {
          icon: Globe,
          label: "Language",
          value: "English",
          hasArrow: true,
        },
        {
          icon: Bell,
          label: "Push Notifications",
          hasSwitch: true,
          defaultChecked: true,
        },
      ],
    },
    {
      title: "Privacy & Security",
      items: [
        {
          icon: Shield,
          label: "Privacy Settings",
          hasArrow: true,
        },
      ],
    },
    {
      title: "About",
      items: [
        {
          icon: Info,
          label: "App Version",
          value: "1.0.0",
        },
        {
          icon: Info,
          label: "Terms of Service",
          hasArrow: true,
        },
        {
          icon: Info,
          label: "Privacy Policy",
          hasArrow: true,
        },
      ],
    },
  ];

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
          <h1 className="text-xl font-bold">Settings</h1>
        </div>
      </header>

      <main className="px-4 py-6 space-y-6">
        {settingsSections.map((section, index) => (
          <div key={index} className="space-y-3">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              {section.title}
            </h2>
            <Card className="divide-y">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <div
                    key={itemIndex}
                    className="px-4 py-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.value && (
                        <span className="text-muted-foreground">
                          {item.value}
                        </span>
                      )}
                      {item.hasSwitch && (
                        <Switch defaultChecked={item.defaultChecked} />
                      )}
                      {item.hasArrow && (
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                );
              })}
            </Card>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Settings;
