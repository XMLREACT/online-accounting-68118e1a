
import { File, FileCheck, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

type Document = {
  id: string;
  name: string;
  type: string;
  uploadDate: string;
  status: 'pending' | 'verified';
  fileUrl: string;
};

// Sample data for uploaded documents
const uploadedDocuments: Document[] = [
  {
    id: '1',
    name: 'Паспорт',
    type: 'passport',
    uploadDate: '2024-02-15',
    status: 'verified',
    fileUrl: '#'
  },
  {
    id: '2',
    name: 'ІПН',
    type: 'ipn',
    uploadDate: '2024-02-15',
    status: 'verified',
    fileUrl: '#'
  },
  {
    id: '3',
    name: 'Свідоцтво про реєстрацію ФОП',
    type: 'registration',
    uploadDate: '2024-03-01',
    status: 'pending',
    fileUrl: '#'
  },
  {
    id: '4',
    name: 'Довідка з пенсійного фонду',
    type: 'other',
    uploadDate: '2024-03-10',
    status: 'pending',
    fileUrl: '#'
  }
];

export const DocumentList = () => {
  const [documents] = useState<Document[]>(uploadedDocuments);

  return (
    <Card className="mt-6">
      <CardContent className="p-6">
        <h3 className="text-lg font-medium mb-4">Завантажені документи</h3>
        
        {documents.length === 0 ? (
          <div className="text-center py-6 text-gray-500">
            <p>У вас ще немає завантажених документів</p>
          </div>
        ) : (
          <div className="space-y-4">
            {documents.map((doc) => (
              <div 
                key={doc.id} 
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-fintech-50 rounded-full">
                    {doc.status === 'verified' ? (
                      <FileCheck className="h-5 w-5 text-fintech-600" />
                    ) : (
                      <File className="h-5 w-5 text-fintech-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{doc.name}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(doc.uploadDate).toLocaleDateString('uk-UA')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <span 
                    className={`px-2.5 py-0.5 rounded-full text-sm font-medium ${
                      doc.status === 'verified' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {doc.status === 'verified' ? 'Перевірено' : 'Очікує перевірки'}
                  </span>
                  
                  <Button variant="ghost" size="icon" title="Завантажити">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
