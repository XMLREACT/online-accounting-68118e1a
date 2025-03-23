
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowLeft, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import { MessageReplyForm } from './MessageReplyForm';
import { messages } from './message-data';

interface MessageDetailProps {
  messageId: string;
  onBack: () => void;
}

export const MessageDetail = ({ messageId, onBack }: MessageDetailProps) => {
  const [message, setMessage] = useState(messages.find(m => m.id === messageId));
  const [replies, setReplies] = useState<Array<{id: string, content: string, date: Date, isAdmin: boolean}>>([]);
  
  useEffect(() => {
    // Mark message as read when opened
    if (message && !message.read) {
      const updatedMessages = messages.map(m => 
        m.id === messageId ? { ...m, read: true } : m
      );
      // In a real app, we would save this to a database
      const updatedMessage = updatedMessages.find(m => m.id === messageId);
      if (updatedMessage) setMessage(updatedMessage);
    }
  }, [messageId, message]);

  const handleSendReply = (content: string) => {
    const newReply = {
      id: `reply-${Date.now()}`,
      content,
      date: new Date(),
      isAdmin: false,
    };
    setReplies([...replies, newReply]);
  };
  
  if (!message) return <div>Повідомлення не знайдено</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onBack}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Назад до списку
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle>{message.title}</CardTitle>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              {format(message.date, 'PPP p', { locale: uk })}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p>{message.content}</p>
          </div>
        </CardContent>
      </Card>
      
      {replies.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Відповіді</h3>
          {replies.map((reply) => (
            <Card key={reply.id} className={reply.isAdmin ? "border-blue-200" : "border-gray-200 ml-6"}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-medium">
                    {reply.isAdmin ? "Адміністратор" : "Ви"}
                  </div>
                  <div className="text-sm text-gray-500">
                    {format(reply.date, 'PPP p', { locale: uk })}
                  </div>
                </div>
                <p>{reply.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      
      <MessageReplyForm onSendReply={handleSendReply} />
    </div>
  );
};
