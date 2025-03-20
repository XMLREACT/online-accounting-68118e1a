
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { ContractView } from '@/components/contract/ContractView';

const Contract = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Договір</h1>
        <p className="text-gray-500">Перегляд вашого поточного договору</p>
        <ContractView />
      </div>
    </DashboardLayout>
  );
};

export default Contract;
