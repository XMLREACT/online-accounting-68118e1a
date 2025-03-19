
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const userData = {
    name: "Іван Петрович Сидоренко",
    contractStatus: "Активний",
    nextPayment: "2024-03-15",
    documents: [
      { name: "Паспорт", status: "Перевірено" },
      { name: "ІПН", status: "Перевірено" },
      { name: "Договір №123", status: "Очікує підпису" },
    ],
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <h1 className="text-2xl font-semibold">Особистий кабінет</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="glass-panel hover-effect">
            <CardHeader>
              <CardTitle>Персональні дані</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">{userData.name}</p>
            </CardContent>
          </Card>

          <Card className="glass-panel hover-effect">
            <CardHeader>
              <CardTitle>Статус договору</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                {userData.contractStatus}
              </span>
            </CardContent>
          </Card>

          <Card className="glass-panel hover-effect">
            <CardHeader>
              <CardTitle>Наступна оплата</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">{userData.nextPayment}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="glass-panel hover-effect">
          <CardHeader>
            <CardTitle>Документи</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {userData.documents.map((doc, index) => (
                <div
                  key={index}
                  className="py-3 flex items-center justify-between"
                >
                  <span>{doc.name}</span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-sm font-medium ${
                      doc.status === "Перевірено"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Index;
