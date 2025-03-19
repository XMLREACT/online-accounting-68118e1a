
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { MessageCenter } from '@/components/messages/MessageCenter';

const Messages = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Центр повідомлень</h1>
        <MessageCenter />
      </div>
    </DashboardLayout>
  );
};

export default Messages;
