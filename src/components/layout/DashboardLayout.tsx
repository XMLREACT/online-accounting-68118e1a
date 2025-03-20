
import { Header } from "./Header";
import Sidebar from "./Sidebar";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex min-h-screen bg-fintech-50">
      <Sidebar />
      <div className="flex-1 flex flex-col pl-64">
        <Header />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};
