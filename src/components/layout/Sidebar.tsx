
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  CreditCard,
  History,
  User,
  Mail,
  FileContract,
  LogOut,
  LogIn,
  UserPlus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    {
      name: "Головна",
      path: "/",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: "Договори",
      path: "/contract",
      icon: <FileContract className="h-5 w-5" />,
    },
    {
      name: "Виписка",
      path: "/statement",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      name: "Документи",
      path: "/documents",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      name: "Історія",
      path: "/history",
      icon: <History className="h-5 w-5" />,
    },
    {
      name: "Профіль",
      path: "/profile",
      icon: <User className="h-5 w-5" />,
    },
    {
      name: "Повідомлення",
      path: "/messages",
      icon: <Mail className="h-5 w-5" />,
    },
  ];

  return (
    <div className="h-full px-3 py-6 flex flex-col">
      <div className="mx-3 mb-10">
        <h2 className="text-xl font-bold">Фінансовий портал</h2>
      </div>
      <div className="flex-1">
        <nav className="grid gap-1">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant={isActive(item.path) ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  isActive(item.path)
                    ? "bg-fintech-600 text-white hover:bg-fintech-700"
                    : "hover:bg-fintech-100 hover:text-fintech-900"
                )}
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </Button>
            </Link>
          ))}
        </nav>
      </div>
      <div className="pt-6 border-t border-gray-200">
        <div className="grid gap-1">
          <Button variant="ghost" className="w-full justify-start">
            <LogOut className="h-5 w-5" />
            <span className="ml-3">Вийти</span>
          </Button>
          <Link to="/login">
            <Button variant="ghost" className="w-full justify-start">
              <LogIn className="h-5 w-5" />
              <span className="ml-3">Вхід</span>
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="ghost" className="w-full justify-start">
              <UserPlus className="h-5 w-5" />
              <span className="ml-3">Реєстрація</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
