
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, User } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Бухгалтерія Онлайн</h1>
        <p className="text-lg text-gray-600">Виберіть тип кабінету для входу в систему</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
        <Card className="hover-effect">
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="mr-2 h-6 w-6" />
              Кабінет користувача
            </CardTitle>
            <CardDescription>
              Особистий кабінет для управління документами та фінансами
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Доступ до персональних документів, банківських виписок, історії платежів та інших послуг для користувачів системи.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link to="/">Увійти до кабінету користувача</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover-effect">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-6 w-6" />
              Кабінет адміністратора
            </CardTitle>
            <CardDescription>
              Адміністративна панель для керування системою
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Керування користувачами, перегляд документів, налаштування системи, генерація звітів та інші адміністративні функції.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link to="/admin">Увійти до кабінету адміністратора</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LandingPage;
