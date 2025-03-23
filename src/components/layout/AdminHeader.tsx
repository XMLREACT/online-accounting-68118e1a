
import { Bell } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const AdminHeader = () => {
  return (
    <header className="w-full px-6 py-4 bg-gray-100 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Адміністративна панель</div>
        <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-primary">
                  2
                </Badge>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0">
              <div className="p-4">
                <h4 className="font-medium mb-2 text-lg">Сповіщення</h4>
                <div className="space-y-2">
                  <NotificationItem
                    message="Новий користувач зареєстрований"
                    time="10 хв тому"
                  />
                  <NotificationItem
                    message="Завантажено нову банківську виписку"
                    time="1 година тому"
                  />
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <span className="text-base font-medium">admin@buhgalteriya.com</span>
        </div>
      </div>
    </header>
  );
};

const NotificationItem = ({
  message,
  time,
}: {
  message: string;
  time: string;
}) => (
  <div className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
    <p className="text-base">
      {message}
    </p>
    <span className="text-sm text-muted-foreground">
      {time}
    </span>
  </div>
);
