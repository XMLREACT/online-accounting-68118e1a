
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="border-b bg-white py-4">
        <div className="container flex justify-between items-center">
          <h1 className="text-2xl font-bold">Особистий кабінет</h1>
          <nav>
            <Link to="/auth">
              <Button>Увійти / Зареєструватися</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 container py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link to="/profile">
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>Профіль</CardTitle>
                <CardDescription>Перегляд та редагування особистих даних</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Керуйте особистою інформацією та налаштуваннями</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/statement">
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>Виписки</CardTitle>
                <CardDescription>Банківські виписки та операції</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Перегляд історії транзакцій та балансу рахунків</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/documents">
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>Документи</CardTitle>
                <CardDescription>Завантаження та перегляд документів</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Керуйте документами та завантажуйте нові файли</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/contract">
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>Договори</CardTitle>
                <CardDescription>Перегляд та управління договорами</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Доступ до всіх ваших договорів та угод</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/history">
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>Історія</CardTitle>
                <CardDescription>Історія операцій та активності</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Перегляд історії дій та операцій у вашому кабінеті</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/messages">
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>Повідомлення</CardTitle>
                <CardDescription>Центр повідомлень та сповіщень</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Перегляд важливих повідомлень та сповіщень</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-6 border-t">
        <div className="container text-center text-gray-600">
          <p>© 2023 Особистий кабінет. Усі права захищено.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
