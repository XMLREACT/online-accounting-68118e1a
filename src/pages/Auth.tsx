
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from '@/components/auth/LoginForm';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { DashboardLayout } from '@/components/layout/DashboardLayout';

const Auth = () => {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Система реєстрації та авторизації користувачів</h1>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="login">Авторизація</TabsTrigger>
            <TabsTrigger value="register">Реєстрація</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="p-6 bg-white rounded-lg shadow">
            <LoginForm />
          </TabsContent>
          
          <TabsContent value="register" className="p-6 bg-white rounded-lg shadow">
            <RegisterForm />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Auth;
