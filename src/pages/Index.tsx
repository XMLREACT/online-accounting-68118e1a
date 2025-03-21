
import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Receipt, Upload, User, FileDown } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { ReceiptDownload } from "@/components/payment/ReceiptDownload";
import { UploadPaymentConfirmation } from "@/components/payment/UploadPaymentConfirmation";

const Index = () => {
  const { user } = useAuth();
  const [activeReceiptType, setActiveReceiptType] = useState<"єсв" | "податок" | null>(null);
  const [activeUploadType, setActiveUploadType] = useState<"єсв" | "податок" | null>(null);
  
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

  // Extract first name for greeting
  const firstName = userData.name.split(" ")[0];

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Greeting */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-full">
            <User className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-2xl font-semibold">Вітаємо, {firstName}!</h1>
        </div>
        
        {/* Main Dashboard Cards */}
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

        {/* ЄСВ Section */}
        <Card className="glass-panel">
          <CardHeader>
            <CardTitle>Єдиний соціальний внесок</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm md:text-base">
                Вам потрібно сплатити Єдиний соціальний внесок за Четвертий квартал 2024 року до 19 січня 2025 року
              </p>
              <Dialog open={activeReceiptType === "єсв"} onOpenChange={(open) => !open && setActiveReceiptType(null)}>
                <DialogTrigger asChild>
                  <Button 
                    onClick={() => setActiveReceiptType("єсв")}
                    variant="default" 
                    className="whitespace-nowrap"
                  >
                    <Receipt className="mr-2 h-4 w-4" /> 
                    Отримати квитанцію
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Реквізити для оплати ЄСВ</DialogTitle>
                  </DialogHeader>
                  <ReceiptDownload type="єсв" />
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm md:text-base">
                Завантажити підтвердження про сплату ЄСВ
              </p>
              <Dialog open={activeUploadType === "єсв"} onOpenChange={(open) => !open && setActiveUploadType(null)}>
                <DialogTrigger asChild>
                  <Button 
                    onClick={() => setActiveUploadType("єсв")}
                    variant="outline" 
                    className="whitespace-nowrap"
                  >
                    <Upload className="mr-2 h-4 w-4" /> 
                    Завантажити
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Завантажити підтвердження сплати ЄСВ</DialogTitle>
                  </DialogHeader>
                  <UploadPaymentConfirmation type="єсв" onClose={() => setActiveUploadType(null)} />
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        {/* Єдиний податок Section */}
        <Card className="glass-panel">
          <CardHeader>
            <CardTitle>Єдиний податок</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm md:text-base">
                Вам необхідно сплатити Єдиний податок 8749,86 грн. до 19 лютого 2025 року
              </p>
              <Dialog open={activeReceiptType === "податок"} onOpenChange={(open) => !open && setActiveReceiptType(null)}>
                <DialogTrigger asChild>
                  <Button 
                    onClick={() => setActiveReceiptType("податок")}
                    variant="default" 
                    className="whitespace-nowrap"
                  >
                    <Receipt className="mr-2 h-4 w-4" /> 
                    Отримати квитанцію
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Реквізити для оплати Єдиного податку</DialogTitle>
                  </DialogHeader>
                  <ReceiptDownload type="податок" />
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm md:text-base">
                Завантажити підтвердження про оплату Єдиного Податку
              </p>
              <Dialog open={activeUploadType === "податок"} onOpenChange={(open) => !open && setActiveUploadType(null)}>
                <DialogTrigger asChild>
                  <Button 
                    onClick={() => setActiveUploadType("податок")}
                    variant="outline" 
                    className="whitespace-nowrap"
                  >
                    <Upload className="mr-2 h-4 w-4" /> 
                    Завантажити
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Завантажити підтвердження оплати Єдиного податку</DialogTitle>
                  </DialogHeader>
                  <UploadPaymentConfirmation type="податок" onClose={() => setActiveUploadType(null)} />
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
        
        {/* Documents Card */}
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
