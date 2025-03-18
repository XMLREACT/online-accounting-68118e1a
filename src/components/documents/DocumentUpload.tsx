
import { useState } from 'react';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Upload } from 'lucide-react';

const documentTypes = [
  { id: 'passport', label: 'Паспорт' },
  { id: 'ipn', label: 'ІПН' },
  { id: 'registration', label: 'Свідоцтво про реєстрацію' },
  { id: 'other', label: 'Інший документ' },
];

const DocumentUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const form = useForm({
    defaultValues: {
      documentType: '',
      file: null,
    },
  });

  const onSubmit = (data: any) => {
    console.log('Form data:', data, 'File:', file);
  };

  return (
    <div className="max-w-2xl p-6 bg-white rounded-lg shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="documentType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Тип документа</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Оберіть тип документа" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {documentTypes.map((type) => (
                      <SelectItem key={type.id} value={type.id}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormItem>
            <FormLabel>Файл документа</FormLabel>
            <div className="flex items-center gap-4">
              <Input
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-fintech-50 file:text-fintech-600 hover:file:bg-fintech-100"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Підтримувані формати: PDF, DOC, DOCX, JPG, PNG (макс. 10MB)
            </p>
          </FormItem>

          <Button type="submit" className="w-full sm:w-auto">
            <Upload className="mr-2 h-4 w-4" />
            Завантажити
          </Button>
        </form>
      </Form>
    </div>
  );
};

export { DocumentUpload };
