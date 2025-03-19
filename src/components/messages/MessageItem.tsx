
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type MessageItemProps = {
  message: {
    id: string;
    title: string;
    content: string;
    date: string;
    read: boolean;
  };
  icon: React.ReactNode;
  onMarkAsRead: (id: string) => void;
};

export const MessageItem = ({ message, icon, onMarkAsRead }: MessageItemProps) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
    if (!message.read) {
      onMarkAsRead(message.id);
    }
  };
  
  return (
    <div 
      className={cn(
        "border rounded-lg p-4 transition-colors",
        message.read ? "bg-white" : "bg-blue-50 border-blue-200"
      )}
    >
      <div className="flex items-start gap-4">
        <div className="p-2 bg-gray-100 rounded-full shrink-0">
          {icon}
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className={cn(
              "font-semibold",
              !message.read && "font-bold"
            )}>
              {message.title}
            </h3>
            <span className="text-sm text-gray-500">
              {new Date(message.date).toLocaleDateString('uk-UA')}
            </span>
          </div>
          
          <div className={cn(
            "mt-1 overflow-hidden transition-all",
            expanded ? "max-h-96" : "max-h-6"
          )}>
            <p className="text-gray-700">{message.content}</p>
          </div>
          
          <div className="flex justify-between items-center mt-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleExpand}
              className="text-sm text-gray-600 gap-1"
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Згорнути
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Детальніше
                </>
              )}
            </Button>
            
            {!message.read && (
              <Button 
                variant="ghost" 
                size="sm"
                className="text-sm text-blue-600 gap-1"
                onClick={() => onMarkAsRead(message.id)}
              >
                <Check className="h-4 w-4" />
                Позначити як прочитане
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
