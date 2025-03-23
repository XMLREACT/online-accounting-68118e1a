
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { MessageTable } from '@/components/messages/MessageTable';
import { MessageDetail } from '@/components/messages/MessageDetail';

const Messages = () => {
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);

  const handleSelectMessage = (messageId: string) => {
    setSelectedMessageId(messageId);
  };

  const handleBackToList = () => {
    setSelectedMessageId(null);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Центр повідомлень</h1>
        
        {selectedMessageId ? (
          <MessageDetail 
            messageId={selectedMessageId} 
            onBack={handleBackToList} 
          />
        ) : (
          <MessageTable onSelectMessage={handleSelectMessage} />
        )}
      </div>
    </DashboardLayout>
  );
};

export default Messages;
