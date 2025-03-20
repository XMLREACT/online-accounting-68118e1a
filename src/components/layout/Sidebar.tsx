
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  MessageSquareText, 
  FileText, 
  FileCheck, 
  History, 
  User, 
  LogOut, 
  LogIn,
  UserPlus
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-gray-200 p-4 flex flex-col">
      <div className="text-xl font-bold mb-8 text-primary">
        Фінтех Адмін Хаб
      </div>
      
      <nav className="flex-1 space-y-1">
        <SidebarLink 
          to="/" 
          icon={<HomeIcon className="w-5 h-5" />} 
          label="Головна" 
          isActive={isActive('/')} 
        />
        <SidebarLink 
          to="/messages" 
          icon={<MessageSquareText className="w-5 h-5" />} 
          label="Повідомлення" 
          isActive={isActive('/messages')} 
        />
        <SidebarLink 
          to="/statement" 
          icon={<FileText className="w-5 h-5" />} 
          label="Виписка" 
          isActive={isActive('/statement')} 
        />
        <SidebarLink 
          to="/documents" 
          icon={<FileText className="w-5 h-5" />} 
          label="Документи" 
          isActive={isActive('/documents')} 
        />
        <SidebarLink 
          to="/contract" 
          icon={<FileCheck className="w-5 h-5" />} 
          label="Договір" 
          isActive={isActive('/contract')} 
        />
        <SidebarLink 
          to="/profile" 
          icon={<User className="w-5 h-5" />} 
          label="Профіль" 
          isActive={isActive('/profile')} 
        />
        <SidebarLink 
          to="/history" 
          icon={<History className="w-5 h-5" />} 
          label="Історія" 
          isActive={isActive('/history')} 
        />
      </nav>
      
      <div className="pt-4 border-t border-gray-200 space-y-2">
        <SidebarLink 
          to="#" 
          icon={<LogOut className="w-5 h-5" />} 
          label="Вийти" 
          isActive={false} 
        />
        <div className="flex space-x-4 mt-2 px-3 py-2">
          <Link to="/login" className="text-gray-600 hover:text-primary transition-colors">
            <LogIn className="w-5 h-5" />
          </Link>
          <Link to="/register" className="text-gray-600 hover:text-primary transition-colors">
            <UserPlus className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const SidebarLink = ({ to, icon, label, isActive }: SidebarLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
        isActive
          ? "bg-primary/10 text-primary"
          : "text-gray-600 hover:text-primary hover:bg-primary/5"
      )}
    >
      <div className="mr-3">{icon}</div>
      {label}
    </Link>
  );
};

export default Sidebar;
