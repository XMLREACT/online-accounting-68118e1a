
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDistanceToNow } from 'date-fns';
import { uk } from 'date-fns/locale';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

type Activity = {
  id: string;
  type: string;
  title: string;
  url: string;
  date: Date;
};

// Sample data for history activities
const activities: Activity[] = [
  {
    id: '1',
    type: 'Договір',
    title: 'Підписано договір про надання послуг',
    url: '#',
    date: new Date('2024-03-10')
  },
  {
    id: '2',
    type: 'Платіж',
    title: 'Оплата послуг',
    url: '#',
    date: new Date('2024-03-15')
  },
  {
    id: '3',
    type: 'Документ',
    title: 'Завантажено паспорт',
    url: '#',
    date: new Date('2024-03-18')
  },
  {
    id: '4',
    type: 'Документ',
    title: 'Завантажено ІПН',
    url: '#',
    date: new Date('2024-03-05')
  },
  {
    id: '5',
    type: 'Платіж',
    title: 'Оплата податків',
    url: '#',
    date: new Date('2024-02-28')
  },
  {
    id: '6',
    type: 'Документ',
    title: 'Завантажено виписку з банку',
    url: '#',
    date: new Date('2024-02-20')
  },
  {
    id: '7',
    type: 'Договір',
    title: 'Підписано додаткову угоду',
    url: '#',
    date: new Date('2024-02-15')
  }
];

export const ActivityHistory = () => {
  // Function to format date in a user-friendly way
  const formatDate = (date: Date) => {
    try {
      return formatDistanceToNow(date, { addSuffix: true, locale: uk });
    } catch (error) {
      return 'Невідома дата';
    }
  };

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Тип</TableHead>
              <TableHead>Заголовок</TableHead>
              <TableHead className="w-[200px] text-right">Востаннє оновлено</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell className="font-medium">{activity.type}</TableCell>
                <TableCell>
                  <a 
                    href={activity.url} 
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {activity.title}
                  </a>
                </TableCell>
                <TableCell className="text-right">{formatDate(activity.date)}</TableCell>
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
