
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatDistanceToNow } from 'date-fns';
import { uk } from 'date-fns/locale';

type Document = {
  id: string;
  type: string;
  title: string;
  url: string;
  updatedAt: Date;
};

// Sample data for documents
const documents: Document[] = [
  {
    id: '1',
    type: 'Банківська виписка',
    title: 'Виписка за березень 2024 року',
    url: '#',
    updatedAt: new Date('2024-03-15')
  },
  {
    id: '2',
    type: 'Податкова',
    title: 'Декларація ФОП за 1 квартал 2024',
    url: '#',
    updatedAt: new Date('2024-04-20')
  },
  {
    id: '3',
    type: 'Підтвердження оплати',
    title: 'Квитанція про сплату ЄСВ',
    url: '#',
    updatedAt: new Date('2024-04-25')
  },
  {
    id: '4',
    type: 'Підтвердження оплати',
    title: 'Квитанція про сплату єдиного податку',
    url: '#',
    updatedAt: new Date('2024-04-25')
  },
  {
    id: '5',
    type: 'Договір',
    title: 'Договір про надання послуг',
    url: '#',
    updatedAt: new Date('2024-02-10')
  },
  {
    id: '6',
    type: 'Інше',
    title: 'Довідка з пенсійного фонду',
    url: '#',
    updatedAt: new Date(Date.now() - 3600000) // 1 hour ago
  }
];

export const DocumentList = () => {
  // Function to format date in a user-friendly way
  const formatDate = (date: Date) => {
    try {
      return formatDistanceToNow(date, { addSuffix: true, locale: uk });
    } catch (error) {
      return 'Невідома дата';
    }
  };

  return (
    <div className="rounded-lg border shadow-sm bg-white overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Тип</TableHead>
            <TableHead>Заголовок</TableHead>
            <TableHead className="w-[200px] text-right">Востаннє оновлено</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documents.length > 0 ? (
            documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell className="font-medium">{doc.type}</TableCell>
                <TableCell>
                  <a 
                    href={doc.url} 
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {doc.title}
                  </a>
                </TableCell>
                <TableCell className="text-right">{formatDate(doc.updatedAt)}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="h-24 text-center">
                У вас ще немає документів
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
