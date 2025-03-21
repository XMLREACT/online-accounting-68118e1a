
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DialogFooter } from "@/components/ui/dialog";
import { Upload, Check } from "lucide-react";

interface UploadPaymentConfirmationProps {
  type: "єсв" | "податок";
  onClose: () => void;
}

export const UploadPaymentConfirmation = ({ type, onClose }: UploadPaymentConfirmationProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    
    setUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setUploading(false);
      setUploaded(true);
      
      // Auto close after successful upload
      setTimeout(() => {
        onClose();
      }, 1500);
    }, 1500);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm text-gray-500">
          Завантажте підтвердження оплати {type === "єсв" ? "Єдиного соціального внеску" : "Єдиного податку"}
        </p>
        
        <Input
          type="file"
          onChange={handleFileChange}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
          accept=".pdf,.jpg,.jpeg,.png"
          disabled={uploading || uploaded}
        />
        
        <p className="text-xs text-gray-400">
          Підтримувані формати: PDF, JPG, PNG
        </p>
      </div>
      
      <DialogFooter>
        {uploaded ? (
          <div className="flex items-center text-green-600 gap-2">
            <Check className="h-5 w-5" />
            <span>Файл успішно завантажено</span>
          </div>
        ) : (
          <Button 
            onClick={handleUpload} 
            disabled={!file || uploading}
            className="w-full sm:w-auto"
          >
            {uploading ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                Завантаження...
              </span>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Завантажити
              </>
            )}
          </Button>
        )}
      </DialogFooter>
    </div>
  );
};
