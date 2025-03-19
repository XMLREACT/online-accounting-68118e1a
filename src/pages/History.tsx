
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { ActivityHistory } from '@/components/history/ActivityHistory';

const History = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Історія операцій</h1>
        <p className="text-gray-500">Перегляд всіх ваших операцій у системі</p>
        <ActivityHistory />
      </div>
    </DashboardLayout>
  );
};

export default History;
