
import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Receipt, Upload, User } from "lucide-react";
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
                <DialogContent className="sm:max-w-xl w-[90vw]">
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
                <DialogContent className="sm:max-w-xl w-[90vw]">
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
                <DialogContent className="sm:max-w-xl w-[90vw]">
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
                <DialogContent className="sm:max-w-xl w-[90vw]">
                  <DialogHeader>
                    <DialogTitle>Завантажити підтвердження оплати Єдиного податку</DialogTitle>
                  </DialogHeader>
                  <UploadPaymentConfirmation type="податок" onClose={() => setActiveUploadType(null)} />
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Index;
