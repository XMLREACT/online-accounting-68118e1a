
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FileCheck, Receipt, FileText, Upload } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

type Activity = {
  id: string;
  type: 'document' | 'payment' | 'contract' | 'upload';
  description: string;
  date: string;
  amount?: number;
  status: 'completed' | 'pending' | 'cancelled';
};

const activities: Activity[] = [
  {
    id: '1',
    type: 'upload',
    description: 'Завантажено паспорт',
    date: '2024-03-18',
    status: 'completed'
  },
  {
    id: '2',
    type: 'payment',
    description: 'Оплата послуг',
    date: '2024-03-15',
    amount: 1500,
    status: 'completed'
  },
  {
    id: '3',
    type: 'contract',
    description: 'Підписано договір про надання послуг',
    date: '2024-03-10',
    status: 'completed'
  },
  {
    id: '4',
    type: 'document',
    description: 'Завантажено ІПН',
    date: '2024-03-05',
    status: 'completed'
  },
  {
    id: '5',
    type: 'payment',
    description: 'Оплата податків',
    date: '2024-02-28',
    amount: 2200,
    status: 'completed'
  },
  {
    id: '6',
    type: 'upload',
    description: 'Завантажено виписку з банку',
    date: '2024-02-20',
    status: 'completed'
  },
  {
    id: '7',
    type: 'contract',
    description: 'Підписано додаткову угоду',
    date: '2024-02-15',
    status: 'pending'
  }
];

const getIcon = (type: Activity['type']) => {
  switch (type) {
    case 'document':
      return <FileCheck className="h-5 w-5 text-blue-500" />;
    case 'payment':
      return <Receipt className="h-5 w-5 text-green-500" />;
    case 'contract':
      return <FileText className="h-5 w-5 text-purple-500" />;
    case 'upload':
      return <Upload className="h-5 w-5 text-orange-500" />;
  }
};

const getStatusBadge = (status: Activity['status']) => {
  switch (status) {
    case 'completed':
      return <Badge variant="default" className="bg-green-500">Виконано</Badge>;
    case 'pending':
      return <Badge variant="secondary" className="bg-yellow-500 text-white">В обробці</Badge>;
    case 'cancelled':
      return <Badge variant="destructive">Скасовано</Badge>;
  }
};

export const ActivityHistory = () => {
  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Тип операції</TableHead>
              <TableHead>Дата</TableHead>
              <TableHead>Опис</TableHead>
              <TableHead className="text-right">Сума</TableHead>
              <TableHead>Статус</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-gray-100 rounded-full">
                      {getIcon(activity.type)}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{new Date(activity.date).toLocaleDateString('uk-UA')}</TableCell>
                <TableCell>{activity.description}</TableCell>
                <TableCell className="text-right">
                  {activity.amount ? `${activity.amount.toFixed(2)} ₴` : '-'}
                </TableCell>
                <TableCell>
                  {getStatusBadge(activity.status)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
