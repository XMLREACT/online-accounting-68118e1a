
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, FileSpreadsheet, FileText } from "lucide-react";

export const TransactionFilters = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="grid gap-4 md:grid-cols-4">
        <div>
          <label className="text-sm font-medium">Період</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Оберіть період" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Сьогодні</SelectItem>
              <SelectItem value="week">Тиждень</SelectItem>
              <SelectItem value="month">Місяць</SelectItem>
              <SelectItem value="quarter">Квартал</SelectItem>
              <SelectItem value="year">Рік</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-sm font-medium">Тип операції</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Всі операції" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Всі операції</SelectItem>
              <SelectItem value="incoming">Надходження</SelectItem>
              <SelectItem value="outgoing">Списання</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-sm font-medium">Контрагент</label>
          <Input type="text" placeholder="Пошук за контрагентом" />
        </div>
        
        <div>
          <label className="text-sm font-medium">Сума</label>
          <Input type="number" placeholder="Сума операції" />
        </div>
      </div>
      
      <div className="flex gap-2">
        <Button variant="outline">
          <FileSpreadsheet className="mr-2 h-4 w-4" />
          Excel
        </Button>
        <Button variant="outline">
          <FileText className="mr-2 h-4 w-4" />
          PDF
        </Button>
      </div>
    </div>
  );
};
