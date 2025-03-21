
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
      }
    : {
        recipient: "ДПС України",
        account: "UA987654321098765432109876543",
        edrpou: "87654321",
        purpose: "Єдиний податок за 1-й квартал 2025 р.",
        amount: "8749.86 грн.",
      };

  const handleDownload = (format: "pdf" | "xls") => {
    // Here would be the actual download logic
    console.log(`Downloading ${type} receipt in ${format} format`);
    // In a real app, you would generate and download the file here
    alert(`Завантаження квитанції у форматі ${format}`);
  };

  return (
    <div className="space-y-4">
      <div className="bg-gray-50 p-4 rounded-md space-y-2">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <span className="text-gray-500">Отримувач:</span>
          <span className="font-medium">{paymentDetails.recipient}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <span className="text-gray-500">Рахунок:</span>
          <span className="font-medium">{paymentDetails.account}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <span className="text-gray-500">ЄДРПОУ:</span>
          <span className="font-medium">{paymentDetails.edrpou}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <span className="text-gray-500">Призначення платежу:</span>
          <span className="font-medium">{paymentDetails.purpose}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <span className="text-gray-500">Сума:</span>
          <span className="font-medium">{paymentDetails.amount}</span>
        </div>
      </div>
      
      <DialogFooter className="flex gap-3 sm:justify-center sm:space-x-0">
        <Button onClick={() => handleDownload("pdf")} variant="outline">
          <FileText className="mr-2 h-4 w-4" />
          Завантажити PDF
        </Button>
        <Button onClick={() => handleDownload("xls")} variant="outline">
          <FileDown className="mr-2 h-4 w-4" />
          Завантажити XLS
        </Button>
      </DialogFooter>
    </div>
  );
};
