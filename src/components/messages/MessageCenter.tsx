
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageItem } from './MessageItem';
import { 
  FileWarning, 
  CalendarClock, 
  FileSignature, 
  AlertTriangle,
  PercentCircle
} from 'lucide-react';

type Message = {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'tax' | 'deadline' | 'contract' | 'urgent' | 'other';
  read: boolean;
};

const messages: Message[] = [
  {
    id: '1',
    title: 'Зміна ставки податку',
    content: 'Повідомляємо про зміну ставки податку на доходи фізичних осіб з 18% до 19.5% починаючи з 1 липня 2024 року. Будь ласка, врахуйте це у ваших фінансових розрахунках.',
    date: '2024-06-15',
    type: 'tax',
    read: false
  },
  {
    id: '2',
    title: 'Зміна терміну подання квартальних звітів',
    content: 'У зв\'язку зі змінами в законодавстві, термін подання квартальних звітів змінено. Тепер звіти необхідно подавати до 25 числа місяця, наступного за звітним кварталом.',
    date: '2024-06-10',
    type: 'deadline',
    read: false
  },
  {
    id: '3',
    title: 'Нові умови до стандартного договору',
    content: 'Просимо ознайомитися з новими умовами стандартного договору та підписати додаткову угоду до 30 червня 2024 року. Зміни стосуються порядку надання послуг та умов оплати.',
    date: '2024-06-05',
    type: 'contract',
    read: true
  },
  {
    id: '4',
    title: 'Терміново: технічні роботи на сервері',
    content: 'Повідомляємо, що 20 червня з 22:00 до 06:00 будуть проводитися технічні роботи на сервері. У цей період можливі перебої в роботі сервісу. Просимо завершити всі важливі операції до вказаного часу.',
    date: '2024-06-02',
    type: 'urgent',
    read: true
  },
  {
    id: '5',
    title: 'Нова форма податкової декларації',
    content: 'З 1 липня 2024 року вводиться нова форма податкової декларації. Зразок нової форми та інструкцію щодо її заповнення ви можете знайти в розділі "Документи".',
    date: '2024-05-28',
    type: 'other',
    read: true
  }
];

const getIcon = (type: Message['type']) => {
  switch (type) {
    case 'tax':
      return <PercentCircle className="h-5 w-5 text-green-500" />;
    case 'deadline':
      return <CalendarClock className="h-5 w-5 text-blue-500" />;
    case 'contract':
      return <FileSignature className="h-5 w-5 text-purple-500" />;
    case 'urgent':
      return <AlertTriangle className="h-5 w-5 text-red-500" />;
    case 'other':
      return <FileWarning className="h-5 w-5 text-orange-500" />;
  }
};

export const MessageCenter = () => {
  const [activeMessages, setActiveMessages] = useState<Message[]>(messages);
  const [activeTab, setActiveTab] = useState<string>('all');
  
  const unreadCount = messages.filter(message => !message.read).length;
  
  const handleMarkAsRead = (id: string) => {
    setActiveMessages(prev => 
      prev.map(msg => 
        msg.id === id ? { ...msg, read: true } : msg
      )
    );
  };
  
  const handleMarkAllAsRead = () => {
    setActiveMessages(prev => prev.map(msg => ({ ...msg, read: true })));
  };
  
  const filterMessages = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'all') {
      setActiveMessages(messages);
    } else if (tab === 'unread') {
      setActiveMessages(messages.filter(message => !message.read));
    } else {
      setActiveMessages(messages.filter(message => message.type === tab));
    }
  };
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Повідомлення</h2>
          <Button 
            variant="outline" 
            onClick={handleMarkAllAsRead}
            disabled={unreadCount === 0}
          >
            Позначити все як прочитане
          </Button>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-6 mb-4">
            <TabsTrigger value="all" onClick={() => filterMessages('all')}>
              Всі
              <Badge className="ml-2" variant="secondary">{messages.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="unread" onClick={() => filterMessages('unread')}>
              Непрочитані
              <Badge className="ml-2" variant="secondary">{unreadCount}</Badge>
            </TabsTrigger>
            <TabsTrigger value="tax" onClick={() => filterMessages('tax')}>Податки</TabsTrigger>
            <TabsTrigger value="deadline" onClick={() => filterMessages('deadline')}>Терміни</TabsTrigger>
            <TabsTrigger value="contract" onClick={() => filterMessages('contract')}>Договори</TabsTrigger>
            <TabsTrigger value="urgent" onClick={() => filterMessages('urgent')}>Термінові</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-0">
            {activeMessages.length > 0 ? (
              <div className="space-y-4">
                {activeMessages.map((message) => (
                  <MessageItem 
                    key={message.id}
                    message={message}
                    icon={getIcon(message.type)}
                    onMarkAsRead={handleMarkAsRead}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                Немає повідомлень у цій категорії
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
