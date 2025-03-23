
import React from 'react';
import { useParams } from 'react-router-dom';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, User } from 'lucide-react';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

// Sample document data - in a real app, this would come from an API
const sampleDocuments = [
  {
    id: '1',
    fileName: 'Виписка_ФОП_Петров_2024.pdf',
    fileUrl: '#',
    publisher: 'Петров Іван Степанович',
    userId: '1234567890',
    publishDate: '2024-07-01T14:30:00',
    type: 'Банківські виписки',
  },
  {
    id: '2',
    fileName: 'Акт_звірки_ТОВ_Технології_2024Q2.pdf',
    fileUrl: '#',
    publisher: 'ТОВ "Технології майбутнього"',
    userId: '9876543210',
    publishDate: '2024-06-28T09:15:00',
    type: 'Акти звірки',
  },
  {
    id: '3',
    fileName: 'ЄСВ_Коваленко_I_квартал_2024.pdf',
    fileUrl: '#',
    publisher: 'Коваленко Марія Петрівна',
    userId: '5678901234',
    publishDate: '2024-06-25T16:45:00',
    type: 'Підтвердження сплати ЄСВ',
  },
  {
    id: '4',
    fileName: 'Податкова_декларація_ФОП_Сидоренко_2024Q2.pdf',
    fileUrl: '#',
    publisher: 'ФОП Сидоренко О.В.',
    userId: '3456789012',
    publishDate: '2024-06-20T11:30:00',
    type: 'Податкова',
  },
  {
    id: '5',
    fileName: 'Установчі_документи_Мельник.pdf',
    fileUrl: '#',
    publisher: 'Мельник Олександр Іванович',
    userId: '6789012345',
    publishDate: '2024-06-15T13:20:00',
    type: 'Документи',
  },
  {
    id: '6',
    fileName: 'Квитанція_ЄП_Будівельник_2024Q2.pdf',
    fileUrl: '#',
    publisher: 'ПП "Будівельник"',
    userId: '2345678901',
    publishDate: '2024-06-10T10:00:00',
    type: 'Підтвердження сплати єдиного податку',
  },
];

const AdminDocumentView = () => {
  const { id } = useParams<{ id: string }>();
  const document = sampleDocuments.find(doc => doc.id === id);

  if (!document) {
    return (
      <AdminLayout>
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold mb-4">Документ не знайдено</h1>
          <p>Документ з ідентифікатором {id} не існує або був видалений.</p>
        </div>
      </AdminLayout>
    );
  }

  const formattedDate = format(
    new Date(document.publishDate),
    "d MMMM yyyy – HH:mm",
    { locale: uk }
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Перегляд документа</h1>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <FileText className="h-5 w-5" />
              {document.type}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="text-base font-medium text-muted-foreground mb-2">Опубліковано</h3>
              <div className="flex items-center gap-2 mb-1">
                <User className="h-4 w-4 text-muted-foreground" />
                <a 
                  href={`/admin/client-card/${document.userId}`} 
                  className="text-primary hover:underline"
                >
                  {document.publisher}
                </a>
              </div>
              <div className="text-sm text-muted-foreground pl-6">
                {formattedDate}
              </div>
            </div>

            <div>
              <h3 className="text-base font-medium text-muted-foreground mb-2">Документ</h3>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <a 
                  href={document.fileUrl} 
                  className="text-primary hover:underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {document.fileName}
                </a>
              </div>
              <div className="mt-3">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Завантажити
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDocumentView;
