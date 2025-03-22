
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { DocumentList } from '@/components/documents/DocumentList';
import { DocumentUpload } from '@/components/documents/DocumentUpload';

const Documents = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Документи</h1>
        
        <div className="grid gap-6 md:grid-cols-1">
          <DocumentUpload />
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Мої документи</h2>
          <DocumentList />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Documents;
