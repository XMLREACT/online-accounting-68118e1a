
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { ProfileForm } from '@/components/profile/ProfileForm';

const Profile = () => {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Профіль</h1>
        <div className="w-full">
          <ProfileForm />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
