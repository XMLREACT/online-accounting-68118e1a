
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatDistanceToNow } from 'date-fns';
import { uk } from 'date-fns/locale';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

type DocumentStatus = 'approved' | 'rejected' | 'pending';

type Document = {
  id: string;
  type: string;
  title: string;
  url: string;
  status: DocumentStatus;
  updatedAt: Date;
};

// Sample data for documents - updated with ФОП relevant documents
const documents: Document[] = [
  {
    id: '1',
    type: 'Паспорт',
    title: 'Паспорт громадянина України',
    url: '#',
    status: 'approved',
    updatedAt: new Date('2024-03-15')
  },
  {
    id: '2',
    type: 'ІПН',
    title: 'Ідентифікаційний податковий номер',
    url: '#',
    status: 'approved',
    updatedAt: new Date('2024-03-20')
  },
  {
    id: '3',
    type: 'Свідоцтво ФОП',
    title: 'Виписка з ЄДР про реєстрацію ФОП',
    url: '#',
    status: 'approved',
    updatedAt: new Date('2024-04-10')
  },
  {
    id: '4',
    type: 'Податкова',
    title: 'Свідоцтво про сплату єдиного податку',
    url: '#',
    status: 'approved',
    updatedAt: new Date('2024-04-15')
  },
  {
    id: '5',
    type: 'Банківські реквізити',
    title: 'Довідка про відкриття рахунку',
    url: '#',
    status: 'pending',
    updatedAt: new Date('2024-04-25')
  },
  {
    id: '6',
    type: 'ЄСВ',
    title: 'Квитанція про сплату ЄСВ за 1 квартал 2024',
    url: '#',
    status: 'pending',
    updatedAt: new Date(Date.now() - 3600000) // 1 hour ago
  }
];

const getStatusIcon = (status: DocumentStatus) => {
  switch (status) {
    case 'approved':
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case 'rejected':
      return <XCircle className="h-5 w-5 text-red-500" />;
    case 'pending':
      return <Clock className="h-5 w-5 text-amber-500" />;
  }
};

const getStatusText = (status: DocumentStatus) => {
  switch (status) {
    case 'approved':
      return 'Прийнятий';
    case 'rejected':
      return 'Не прийнятий';
    case 'pending':
      return 'На перевірці';
  }
};

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
            <TableHead className="w-[200px]">Тип документа</TableHead>
            <TableHead>Назва документа</TableHead>
            <TableHead className="w-[150px] text-center">Статус</TableHead>
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
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    {getStatusIcon(doc.status)}
                    <span>{getStatusText(doc.status)}</span>
                  </div>
                </TableCell>
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
