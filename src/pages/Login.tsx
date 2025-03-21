
import React from 'react';
import { LoginForm } from '@/components/auth/LoginForm';
import { Shield, Key, User } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      {/* Left column - Service Info */}
      <div className="md:w-1/3 p-6">
        <div className="text-center md:text-left mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Бухгалтерія Онлайн
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Вхід до вашого особистого кабінету
          </p>
        </div>
        
        <div className="space-y-6">
          <ServiceInfoBlock 
            icon={<User className="w-8 h-8 text-primary" />}
            title="Особистий кабінет"
            description="Доступ до всіх ваших фінансових даних та операцій в одному місці."
          />
          
          <ServiceInfoBlock 
            icon={<Shield className="w-8 h-8 text-primary" />}
            title="Захищений доступ"
            description="Багаторівнева система автентифікації для захисту ваших даних."
          />
          
          <ServiceInfoBlock 
            icon={<Key className="w-8 h-8 text-primary" />}
            title="Відновлення доступу"
            description="Проста процедура відновлення доступу у випадку втрати даних для входу."
          />
        </div>
      </div>
      
      {/* Right column - Login Form */}
      <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-sm">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Вхід в особистий кабінет
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Введіть свої облікові дані для доступу до системи
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

interface ServiceInfoBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceInfoBlock = ({ icon, title, description }: ServiceInfoBlockProps) => {
  return (
    <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
      <div className="flex-shrink-0 mr-4">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Login;
