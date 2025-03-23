
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  Users, 
  User, 
  FileText, 
  CreditCard, 
  Database, 
  Receipt, 
  Banknote, 
  FileCheck, 
  Mail, 
  Trash2
} from 'lucide-react';
import { cn } from '@/lib/utils';

const AdminSidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="h-screen w-64 fixed left-0 top-0 z-30 bg-gray-800 border-r border-gray-700 flex flex-col shadow-sm">
      <div className="text-2xl font-bold px-4 py-6 text-white border-b border-gray-700">
        Бухгалтерія Онлайн
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <div className="space-y-1">
          <SidebarLink 
            to="/admin" 
            icon={<HomeIcon className="w-5 h-5" />} 
            label="Головна" 
            isActive={isActive('/admin')} 
          />
          <SidebarLink 
            to="/admin/users" 
            icon={<Users className="w-5 h-5" />} 
            label="Користувачі" 
            isActive={isActive('/admin/users')} 
          />
          <SidebarLink 
            to="/admin/client-card" 
            icon={<User className="w-5 h-5" />} 
            label="Карта клієнта" 
            isActive={isActive('/admin/client-card')} 
          />
          <SidebarLink 
            to="/admin/delete-fop" 
            icon={<Trash2 className="w-5 h-5" />} 
            label="Видалення ФОП" 
            isActive={isActive('/admin/delete-fop')} 
          />
          <SidebarLink 
            to="/admin/bank-statements" 
            icon={<FileText className="w-5 h-5" />} 
            label="Банківські виписки" 
            isActive={isActive('/admin/bank-statements')} 
          />
          <SidebarLink 
            to="/admin/esv-payments" 
            icon={<CreditCard className="w-5 h-5" />} 
            label="Платежі ЄСВ" 
            isActive={isActive('/admin/esv-payments')} 
          />
          <SidebarLink 
            to="/admin/esv-requisites" 
            icon={<Database className="w-5 h-5" />} 
            label="Адміністрування реквізитами ЄСВ" 
            isActive={isActive('/admin/esv-requisites')} 
          />
          <SidebarLink 
            to="/admin/esv-receipt" 
            icon={<Receipt className="w-5 h-5" />} 
            label="Квитанція ЄСВ" 
            isActive={isActive('/admin/esv-receipt')} 
          />
          <SidebarLink 
            to="/admin/single-tax" 
            icon={<Banknote className="w-5 h-5" />} 
            label="Єдиний налог" 
            isActive={isActive('/admin/single-tax')} 
          />
          <SidebarLink 
            to="/admin/single-tax-receipt" 
            icon={<Receipt className="w-5 h-5" />} 
            label="Квитанція ЄП" 
            isActive={isActive('/admin/single-tax-receipt')} 
          />
          <SidebarLink 
            to="/admin/single-tax-import" 
            icon={<Database className="w-5 h-5" />} 
            label="Імпорт ЄП" 
            isActive={isActive('/admin/single-tax-import')} 
          />
          <SidebarLink 
            to="/admin/single-tax-requisites" 
            icon={<Database className="w-5 h-5" />} 
            label="Адміністрування реквізитами ЄП" 
            isActive={isActive('/admin/single-tax-requisites')} 
          />
          <SidebarLink 
            to="/admin/single-tax-payments" 
            icon={<CreditCard className="w-5 h-5" />} 
            label="Платежі ЄП" 
            isActive={isActive('/admin/single-tax-payments')} 
          />
          <SidebarLink 
            to="/admin/verification-act" 
            icon={<FileCheck className="w-5 h-5" />} 
            label="Акт звірки" 
            isActive={isActive('/admin/verification-act')} 
          />
          <SidebarLink 
            to="/admin/mailing" 
            icon={<Mail className="w-5 h-5" />} 
            label="Поштове розсилання" 
            isActive={isActive('/admin/mailing')} 
          />
        </div>
      </nav>
      
      <div className="p-4 border-t border-gray-700">
        <div className="flex space-x-2">
          <Link 
            to="/" 
            className="flex-1 text-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
          >
            Кабінет користувача
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
        "flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors",
        isActive
          ? "bg-gray-700 text-white"
          : "text-gray-300 hover:text-white hover:bg-gray-700/60",
        className
      )}
    >
      <div className="mr-3">{icon}</div>
      {label}
    </Link>
  );
};

export default AdminSidebar;
