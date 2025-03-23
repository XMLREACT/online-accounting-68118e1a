
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
  KeyRound,
  UserPlus
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="h-screen w-64 fixed left-0 top-0 z-30 bg-[#404040] border-r border-gray-500 flex flex-col shadow-sm">
      <div className="text-xl font-bold px-4 py-6 text-white border-b border-gray-500">
        Бухгалтерія Онлайн
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <div className="space-y-1">
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
        </div>
      </nav>
      
      <div className="p-4 border-t border-gray-500">
        <SidebarLink 
          to="#" 
          icon={<LogOut className="w-5 h-5" />} 
          label="Вийти" 
          isActive={false}
          className="text-red-400 hover:text-red-300 hover:bg-red-900/30"
        />
        <div className="flex flex-col mt-4 space-y-2">
          <Link to="/login" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors">
            <KeyRound className="w-5 h-5 mr-3" />
            <span>Вхід</span>
          </Link>
          <Link to="/register" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors">
            <UserPlus className="w-5 h-5 mr-3" />
            <span>Реєстрація</span>
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
  className?: string;
}

const SidebarLink = ({ to, icon, label, isActive, className }: SidebarLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
        isActive
          ? "bg-gray-600 text-white"
          : "text-gray-300 hover:text-white hover:bg-gray-500/60",
        className
      )}
    >
      <div className="mr-3">{icon}</div>
      {label}
    </Link>
  );
};

export default Sidebar;
