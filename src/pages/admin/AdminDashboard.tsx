
import React, { useState } from 'react';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const documents = [
  {
    id: 1,
    publishDate: '2024-07-01T14:30:00',
    timeAgo: '2 дні тому',
    user: 'Петров Іван Степанович',
    userId: '1234567890',
    type: 'Банківські виписки',
  },
  {
    id: 2,
    publishDate: '2024-06-28T09:15:00',
    timeAgo: '5 днів тому',
    user: 'ТОВ "Технології майбутнього"',
    userId: '9876543210',
    type: 'Акти звірки',
  },
  {
    id: 3,
    publishDate: '2024-06-25T16:45:00',
    timeAgo: '1 тиждень тому',
    user: 'Коваленко Марія Петрівна',
    userId: '5678901234',
    type: 'Підтвердження сплати ЄСВ',
  },
  {
    id: 4,
    publishDate: '2024-06-20T11:30:00',
    timeAgo: '1 тиждень 5 днів тому',
    user: 'ФОП Сидоренко О.В.',
    userId: '3456789012',
    type: 'Податкова',
  },
  {
    id: 5,
    publishDate: '2024-06-15T13:20:00',
    timeAgo: '2 тижні 3 дні тому',
    user: 'Мельник Олександр Іванович',
    userId: '6789012345',
    type: 'Документи',
  },
  {
    id: 6,
    publishDate: '2024-06-10T10:00:00',
    timeAgo: '3 тижні тому',
    user: 'ПП "Будівельник"',
    userId: '2345678901',
    type: 'Підтвердження сплати єдиного податку',
  },
];

const documentTypes = [
  { value: 'all', label: 'Усі' },
  { value: 'verification-acts', label: 'Акти звірки' },
  { value: 'bank-statements', label: 'Банківські виписки' },
  { value: 'documents', label: 'Документи' },
  { value: 'tax', label: 'Податкова' },
  { value: 'esv-confirmation', label: 'Підтвердження сплати ЄСВ' },
  { value: 'single-tax-confirmation', label: 'Підтвердження сплати єдиного податку' },
];

const AdminDashboard = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [filteredDocs, setFilteredDocs] = useState(documents);

  const handleApplyFilter = () => {
    let filtered = documents;

    // Filter by document type
    if (selectedType !== 'all') {
      const typeLabel = documentTypes.find(type => type.value === selectedType)?.label;
      filtered = filtered.filter(doc => doc.type === typeLabel);
    }

    // Filter by date range
    if (startDate || endDate) {
      filtered = filtered.filter(doc => {
        const docDate = new Date(doc.publishDate);
        if (startDate && endDate) {
          return docDate >= startDate && docDate <= endDate;
        } else if (startDate) {
          return docDate >= startDate;
        } else if (endDate) {
          return docDate <= endDate;
        }
        return true;
      });
    }

    setFilteredDocs(filtered);
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Останні оновлення</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="w-64">
            <label className="block text-base font-medium mb-2">Тип документа</label>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Оберіть тип документа" />
              </SelectTrigger>
              <SelectContent>
                {documentTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-64">
            <label className="block text-base font-medium mb-2">Дата початку</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !startDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, 'PPP', { locale: uk }) : "Оберіть дату"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="w-64">
            <label className="block text-base font-medium mb-2">Дата кінця</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !endDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? format(endDate, 'PPP', { locale: uk }) : "Оберіть дату"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="flex items-end">
            <Button onClick={handleApplyFilter} className="mb-0">
              Застосувати
            </Button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Дата публікації</TableHead>
                <TableHead className="w-[180px]">Година тому</TableHead>
                <TableHead className="w-[300px]">Користувач</TableHead>
                <TableHead className="w-[250px]">Тип</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDocs.length > 0 ? (
                filteredDocs.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell>
                      {format(new Date(doc.publishDate), 'dd.MM.yyyy HH:mm')}
                    </TableCell>
                    <TableCell>{doc.timeAgo}</TableCell>
                    <TableCell>
                      <Link
                        to={`/admin/client-card/${doc.userId}`}
                        className="text-primary hover:underline"
                      >
                        {doc.user}
                        <div className="text-sm text-muted-foreground">
                          №{doc.userId}
                        </div>
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link
                        to={`/admin/document/${doc.id}`}
                        className="text-primary hover:underline"
                      >
                        {doc.type}
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-6">
                    Документи не знайдено
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
