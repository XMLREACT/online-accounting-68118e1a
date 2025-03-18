
import {
  Home,
  MessageSquare,
  FileText,
  File,
  UserCircle,
  History,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { icon: Home, label: "Головна", path: "/" },
  { icon: MessageSquare, label: "Центр повідомлень", path: "/messages" },
  { icon: FileText, label: "Банківська виписка", path: "/statement" },
  { icon: File, label: "Документи", path: "/documents" },
  { icon: File, label: "Договір", path: "/contract" },
  { icon: UserCircle, label: "Профіль", path: "/profile" },
  { icon: History, label: "Історія", path: "/history" },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "h-screen glass-panel transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex flex-col h-full">
        <Button
          variant="ghost"
          size="icon"
          className="self-end m-2"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>

        <nav className="flex-1 px-3">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-fintech-50 hover:text-fintech-700 transition-colors",
                  "hover-effect"
                )}
              >
                <item.icon className="h-5 w-5" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            ))}
          </div>
        </nav>

        <div className="p-3">
          <Button
            variant="ghost"
            className={cn(
              "w-full text-red-600 hover:text-red-700 hover:bg-red-50",
              collapsed && "px-0 justify-center"
            )}
          >
            <LogOut className="h-5 w-5" />
            {!collapsed && <span className="ml-2">Вийти</span>}
          </Button>
        </div>
      </div>
    </div>
  );
};
