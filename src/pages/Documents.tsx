
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { DocumentUpload } from '@/components/documents/DocumentUpload';
import { DocumentList } from '@/components/documents/DocumentList';

const Documents = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Документи</h1>
        <DocumentUpload />
        <DocumentList />
      </div>
    </DashboardLayout>
  );
};

export default Documents;
