
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileCheck, Receipt, FileText, Upload } from 'lucide-react';

type Activity = {
  id: string;
  type: 'document' | 'payment' | 'contract' | 'upload';
  description: string;
  date: string;
};

const activities: Activity[] = [
  {
    id: '1',
    type: 'upload',
    description: 'Завантажено паспорт',
    date: '2024-03-18'
  },
  {
    id: '2',
    type: 'payment',
    description: 'Оплата послуг: 1500 грн',
    date: '2024-03-15'
  },
  {
    id: '3',
    type: 'contract',
    description: 'Підписано договір про надання послуг',
    date: '2024-03-10'
  },
  {
    id: '4',
    type: 'document',
    description: 'Завантажено ІПН',
    date: '2024-03-05'
  }
];

const getIcon = (type: Activity['type']) => {
  switch (type) {
    case 'document':
      return <FileCheck className="h-5 w-5 text-blue-500" />;
    case 'payment':
      return <Receipt className="h-5 w-5 text-green-500" />;
    case 'contract':
      return <FileText className="h-5 w-5 text-purple-500" />;
    case 'upload':
      return <Upload className="h-5 w-5 text-orange-500" />;
  }
};

export const ActivityHistory = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="p-2 bg-gray-100 rounded-full">
                {getIcon(activity.type)}
              </div>
              <div className="flex-1">
                <p className="font-medium">{activity.description}</p>
                <p className="text-sm text-gray-500">
                  {new Date(activity.date).toLocaleDateString('uk-UA')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
