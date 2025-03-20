
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Upload, Download, File } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const BankStatement = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [currencyOption, setCurrencyOption] = useState<string | null>(null);
  const [additionalIncome, setAdditionalIncome] = useState<string | null>(null);
  
  const generatePeriodOptions = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth(); // 0-11
    const currentQuarter = Math.floor(currentMonth / 3) + 1; // 1-4
    
    const previousYear = currentYear - 1;
    const options = [];
    
    for (let quarter = 1; quarter <= 4; quarter++) {
      options.push({ 
        value: `${quarter}_quarter_${previousYear}`, 
        label: `${toRomanNumeral(quarter)} квартал ${previousYear} року` 
      });
    }
    
    const monthNames = [
      'січень', 'лютий', 'березень', 'квітень', 'травень', 'червень',
      'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень'
    ];
    
    for (let month = 0; month < 12; month++) {
      options.push({ 
        value: `${month + 1}_month_${previousYear}`, 
        label: `${monthNames[month]} ${previousYear} року` 
      });
    }
    
    for (let quarter = 1; quarter < currentQuarter; quarter++) {
      options.push({ 
        value: `${quarter}_quarter_${currentYear}`, 
        label: `${toRomanNumeral(quarter)} квартал ${currentYear} року` 
      });
    }
    
    return options;
  };
  
  const toRomanNumeral = (num: number): string => {
    const romanNumerals = ['I', 'II', 'III', 'IV'];
    return romanNumerals[num - 1];
  };
  
  const periodOptions = generatePeriodOptions();
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with files:', selectedFiles);
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Банківська виписка</h1>
        
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Завантаження банківської виписки</CardTitle>
            <CardDescription>
              Виберіть період та завантажте файли виписки для обробки
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="period">Період банківської виписки</Label>
                <Select>
                  <SelectTrigger className="w-full md:w-80">
                    <SelectValue placeholder="Оберіть період" />
                  </SelectTrigger>
                  <SelectContent>
                    {periodOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Завантаження файлів</Label>
                <div className="border-2 border-dashed rounded-md p-6 text-center border-gray-300 hover:border-primary">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80">
                      <span>Натисніть для завантаження</span>
                      <Input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        multiple
                        accept=".dbf,.csv,.xls,.xlsx"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="text-xs text-gray-500">
                      Файли мають бути меншими ніж 1000 МБ. Дозволені типи файлів: dbf, csv, xls, xlsx.
                    </p>
                  </div>
                </div>
                
                {selectedFiles.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Обрані файли:</h4>
                    <ul className="space-y-2">
                      {selectedFiles.map((file, index) => (
                        <li key={index} className="text-sm flex items-center">
                          <File className="h-4 w-4 mr-2 text-gray-500" />
                          {file.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <div className="border-t pt-4">
                  <Label className="font-medium">Валюта виписки</Label>
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="usd" 
                        checked={currencyOption === 'usd'} 
                        onCheckedChange={() => setCurrencyOption('usd')}
                      />
                      <label 
                        htmlFor="usd"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Я маю банківську виписку в Доларах США
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="eur" 
                        checked={currencyOption === 'eur'} 
                        onCheckedChange={() => setCurrencyOption('eur')}
                      />
                      <label 
                        htmlFor="eur"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Я маю банківську виписку в ЄВРО
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <Label className="font-medium">Додаткові доходи</Label>
                  <RadioGroup className="mt-2" value={additionalIncome || ''} onValueChange={setAdditionalIncome}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no-income" />
                      <label htmlFor="no-income" className="text-sm">Додаткові доходи відсутні</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="has-income" />
                      <label htmlFor="has-income" className="text-sm">Ні, я маю додаткові доходи за період</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no-additional" id="no-additional-income" />
                      <label htmlFor="no-additional-income" className="text-sm">Так, я не маю додаткових доходів за період</label>
                    </div>
                  </RadioGroup>
                  <p className="text-xs text-gray-500 mt-2">
                    В даному розділі вказуються дані про доходи, отримані із інших джерел аніж від співпраці з Globallogic
                  </p>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button type="submit" className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Завантажити виписку
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default BankStatement;
