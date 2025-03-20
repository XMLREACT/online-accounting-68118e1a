
import React from 'react';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { FileText, CheckCircle, Shield, Clock } from 'lucide-react';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      {/* Left column - Service Info */}
      <div className="md:w-1/3 p-6">
        <div className="text-center md:text-left mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Фінтех Адмін Хаб
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Сучасна система для управління фінансовими даними
          </p>
        </div>
        
        <div className="space-y-6">
          <ServiceInfoBlock 
            icon={<Shield className="w-8 h-8 text-primary" />}
            title="Безпека даних"
            description="Всі ваші дані зашифровані та надійно захищені за сучасними стандартами безпеки."
          />
          
          <ServiceInfoBlock 
            icon={<CheckCircle className="w-8 h-8 text-primary" />}
            title="Зручний інтерфейс"
            description="Інтуїтивний дизайн для легкого управління фінансовими операціями."
          />
          
          <ServiceInfoBlock 
            icon={<Clock className="w-8 h-8 text-primary" />}
            title="Швидкий доступ"
            description="Миттєвий доступ до всіх ваших даних в будь-який час та з будь-якого пристрою."
          />
          
          <ServiceInfoBlock 
            icon={<FileText className="w-8 h-8 text-primary" />}
            title="Документообіг"
            description="Автоматизована система для швидкого оформлення та підписання документів."
          />
        </div>
      </div>
      
      {/* Right column - Registration Form */}
      <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-sm">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Реєстрація нового користувача
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Заповніть форму для створення облікового запису
            </p>
          </div>
          <RegisterForm />
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

export default Register;
