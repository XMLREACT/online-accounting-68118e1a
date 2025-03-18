
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { AccountSummary } from '@/components/bank-statement/AccountSummary';
import { TransactionList } from '@/components/bank-statement/TransactionList';
import { TransactionFilters } from '@/components/bank-statement/TransactionFilters';

const BankStatement = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Банківська виписка</h1>
        <AccountSummary />
        <TransactionFilters />
        <TransactionList />
      </div>
    </DashboardLayout>
  );
};

export default BankStatement;
