
import { Button } from "@/components/ui/button";
import { FileDown, FileText } from "lucide-react";
import { DialogFooter } from "@/components/ui/dialog";

interface ReceiptDownloadProps {
  type: "єсв" | "податок";
}

export const ReceiptDownload = ({ type }: ReceiptDownloadProps) => {
  // Payment details based on type
  const paymentDetails = type === "єсв" 
    ? {
        recipient: "ДПС України",
        account: "UA123456789012345678901234567",
        edrpou: "12345678",
        purpose: "Єдиний соціальний внесок за 4-й квартал 2024 р.",
        amount: "4125.00 грн.",
        payer: "Сидоренко Іван Петрович",
        recipientCode: "12345678",
        recipientBank: "Держказначейська служба України, м. Київ",
      }
    : {
        recipient: "ДПС України",
        account: "UA987654321098765432109876543",
        edrpou: "87654321",
        purpose: "Єдиний податок за 1-й квартал 2025 р.",
        amount: "8749.86 грн.",
        payer: "Сидоренко Іван Петрович",
        recipientCode: "87654321",
        recipientBank: "Держказначейська служба України, м. Київ",
      };

  const handleDownload = (format: "pdf" | "xls") => {
    // Here would be the actual download logic
    console.log(`Downloading ${type} receipt in ${format} format`);
    // In a real app, you would generate and download the file here
    alert(`Завантаження квитанції у форматі ${format}`);
  };

  return (
    <div className="space-y-6 py-2">
      <div className="bg-gray-50 p-6 rounded-md space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="space-y-2">
            <div>
              <span className="text-gray-500 block">Платник:</span>
              <span className="font-medium">{paymentDetails.payer}</span>
            </div>
            
            <div>
              <span className="text-gray-500 block">Отримувач:</span>
              <span className="font-medium">{paymentDetails.recipient}</span>
            </div>
            
            <div>
              <span className="text-gray-500 block">Код отримувача:</span>
              <span className="font-medium">{paymentDetails.recipientCode}</span>
            </div>
            
            <div>
              <span className="text-gray-500 block">Банк отримувача:</span>
              <span className="font-medium">{paymentDetails.recipientBank}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div>
              <span className="text-gray-500 block">Рахунок:</span>
              <span className="font-medium">{paymentDetails.account}</span>
            </div>
            
            <div>
              <span className="text-gray-500 block">ЄДРПОУ:</span>
              <span className="font-medium">{paymentDetails.edrpou}</span>
            </div>
            
            <div>
              <span className="text-gray-500 block">Призначення платежу:</span>
              <span className="font-medium">{paymentDetails.purpose}</span>
            </div>
            
            <div>
              <span className="text-gray-500 block">Сума:</span>
              <span className="font-medium">{paymentDetails.amount}</span>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-3 mt-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div>
              <span className="text-gray-500 block">М.П. підпис платника:</span>
              <div className="h-10 w-32 border border-dashed border-gray-300 mt-1"></div>
            </div>
            
            <div>
              <span className="text-gray-500 block">Проведено банком:</span>
              <div className="flex items-end gap-3 mt-1">
                <div className="w-32 border-b border-gray-300"></div>
                <span className="text-xs text-gray-500">Дата</span>
              </div>
            </div>
          </div>
          
          <div className="mt-3">
            <span className="text-gray-500 block">Підпис банку:</span>
            <div className="h-10 w-32 border border-dashed border-gray-300 mt-1"></div>
          </div>
        </div>
      </div>
      
      <DialogFooter className="flex gap-3 sm:justify-center sm:space-x-0 pt-2">
        <Button onClick={() => handleDownload("pdf")} variant="outline" className="flex-1 sm:flex-none">
          <FileText className="mr-2 h-4 w-4" />
          Завантажити PDF
        </Button>
        <Button onClick={() => handleDownload("xls")} variant="outline" className="flex-1 sm:flex-none">
          <FileDown className="mr-2 h-4 w-4" />
          Завантажити XLS
        </Button>
      </DialogFooter>
    </div>
  );
};
