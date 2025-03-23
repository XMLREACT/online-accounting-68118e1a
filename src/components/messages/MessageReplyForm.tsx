
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Send } from 'lucide-react';

interface MessageReplyFormProps {
  onSendReply: (content: string) => void;
}

export const MessageReplyForm = ({ onSendReply }: MessageReplyFormProps) => {
  const [replyContent, setReplyContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!replyContent.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      onSendReply(replyContent);
      setReplyContent('');
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Відповісти на повідомлення</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Textarea
            placeholder="Введіть ваше повідомлення..."
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            className="min-h-[120px]"
          />
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button
            type="submit"
            disabled={!replyContent.trim() || isSubmitting}
            className="gap-2"
          >
            <Send className="h-4 w-4" />
            Відповісти
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
