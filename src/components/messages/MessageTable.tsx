
import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { uk } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { messages } from './message-data';

interface MessageTableProps {
  onSelectMessage: (messageId: string) => void;
}

export const MessageTable = ({ onSelectMessage }: MessageTableProps) => {
  const formatMessageDate = (date: Date) => {
    return formatDistanceToNow(date, { addSuffix: true, locale: uk });
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60%]">Назва</TableHead>
            <TableHead className="w-[20%]">Отримано</TableHead>
            <TableHead className="w-[20%] text-right">Дія</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages.map((message) => (
            <TableRow 
              key={message.id}
              className={!message.read ? "bg-blue-50" : ""}
            >
              <TableCell>
                <button
                  onClick={() => onSelectMessage(message.id)}
                  className="text-left font-medium text-blue-600 hover:underline"
                >
                  {message.title}
                </button>
              </TableCell>
              <TableCell>
                {formatMessageDate(message.date)}
              </TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onSelectMessage(message.id)}
                  className="gap-1"
                >
                  <Eye className="h-4 w-4" />
                  Прочитати
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
