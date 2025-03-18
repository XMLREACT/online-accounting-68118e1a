
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileDown, Eye } from 'lucide-react';

export const ContractView = () => {
  const handleDownload = () => {
    // Here would be the logic to generate and download PDF
    console.log('Downloading contract as PDF...');
  };

  const handlePreview = () => {
    // Here would be the logic to preview the contract
    console.log('Opening contract preview...');
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-4">Договір про надання послуг</h2>
            <p className="text-gray-600">
              Ваш договір сформовано на основі наданих даних у профілі. 
              Ви можете переглянути його онлайн або завантажити у форматі PDF.
            </p>
          </div>
          
          <div className="flex gap-4">
            <Button onClick={handlePreview}>
              <Eye className="mr-2 h-4 w-4" />
              Переглянути
            </Button>
            <Button variant="outline" onClick={handleDownload}>
              <FileDown className="mr-2 h-4 w-4" />
              Завантажити PDF
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
