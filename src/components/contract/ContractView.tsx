
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileDown, Eye } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { formatDistanceToNow } from 'date-fns';

// Sample contract data with history since 2020
const contractHistory = [
  {
    id: 1,
    name: 'Стандартний договір про надання послуг',
    signedDate: new Date('2023-09-15'),
    validUntil: new Date('2024-09-15'),
    content: `ДОГОВІР ПРО НАДАННЯ ПОСЛУГ №2023-09

м. Київ                                                                                                  15 вересня 2023 р.

ТОВ "Сервіс Провайдер", в особі генерального директора Іваненка Івана Івановича, що діє на підставі Статуту, іменований надалі "Виконавець", з однієї сторони, та
Фізична особа-підприємець Петренко Петро Петрович, що діє на підставі Виписки з ЄДР, іменований надалі "Замовник", з іншої сторони,
уклали цей Договір про наступне:

1. ПРЕДМЕТ ДОГОВОРУ
1.1. Виконавець зобов'язується надати Замовнику послуги з ведення бухгалтерського обліку та податкової звітності, а Замовник зобов'язується прийняти та оплатити ці послуги.

2. ПРАВА ТА ОБОВ'ЯЗКИ СТОРІН
2.1. Виконавець зобов'язується:
  - Надавати послуги своєчасно та якісно
  - Зберігати конфіденційність інформації Замовника
  - Консультувати Замовника з питань бухгалтерського та податкового обліку

2.2. Замовник зобов'язується:
  - Своєчасно надавати Виконавцю необхідну для надання послуг інформацію
  - Оплачувати послуги в розмірі та у строки, передбачені цим Договором
  - Прийняти надані послуги

3. ВАРТІСТЬ ПОСЛУГ ТА ПОРЯДОК РОЗРАХУНКІВ
3.1. Вартість послуг становить 5000 грн на місяць.
3.2. Оплата здійснюється до 5 числа поточного місяця.

4. ТЕРМІН ДІЇ ДОГОВОРУ
4.1. Цей Договір вступає в силу з моменту підписання і діє до 15 вересня 2024 року.
4.2. Договір може бути розірвано за згодою сторін або в односторонньому порядку при повідомленні іншої сторони за 30 днів.

5. РЕКВІЗИТИ ТА ПІДПИСИ СТОРІН
[РЕКВІЗИТИ ВИКОНАВЦЯ]                                                      [РЕКВІЗИТИ ЗАМОВНИКА]
[ПІДПИС ВИКОНАВЦЯ]                                                           [ПІДПИС ЗАМОВНИКА]`
  },
  {
    id: 2,
    name: 'Договір про бухгалтерський супровід',
    signedDate: new Date('2022-05-10'),
    validUntil: new Date('2023-05-10'),
    content: `ДОГОВІР ПРО БУХГАЛТЕРСЬКИЙ СУПРОВІД №2022-05

м. Київ                                                                                                  10 травня 2022 р.

ТОВ "Сервіс Провайдер", в особі генерального директора Іваненка Івана Івановича, що діє на підставі Статуту, іменований надалі "Виконавець", з однієї сторони, та
Фізична особа-підприємець Петренко Петро Петрович, що діє на підставі Виписки з ЄДР, іменований надалі "Замовник", з іншої сторони,
уклали цей Договір про наступне:

1. ПРЕДМЕТ ДОГОВОРУ
1.1. Виконавець зобов'язується надати Замовнику послуги з ведення бухгалтерського обліку та податкової звітності, а Замовник зобов'язується прийняти та оплатити ці послуги.

2. ПРАВА ТА ОБОВ'ЯЗКИ СТОРІН
2.1. Виконавець зобов'язується:
  - Надавати послуги своєчасно та якісно
  - Зберігати конфіденційність інформації Замовника
  - Консультувати Замовника з питань бухгалтерського та податкового обліку

2.2. Замовник зобов'язується:
  - Своєчасно надавати Виконавцю необхідну для надання послуг інформацію
  - Оплачувати послуги в розмірі та у строки, передбачені цим Договором
  - Прийняти надані послуги

3. ВАРТІСТЬ ПОСЛУГ ТА ПОРЯДОК РОЗРАХУНКІВ
3.1. Вартість послуг становить 4500 грн на місяць.
3.2. Оплата здійснюється до 5 числа поточного місяця.

4. ТЕРМІН ДІЇ ДОГОВОРУ
4.1. Цей Договір вступає в силу з моменту підписання і діє до 10 травня 2023 року.
4.2. Договір може бути розірвано за згодою сторін або в односторонньому порядку при повідомленні іншої сторони за 30 днів.

5. РЕКВІЗИТИ ТА ПІДПИСИ СТОРІН
[РЕКВІЗИТИ ВИКОНАВЦЯ]                                                      [РЕКВІЗИТИ ЗАМОВНИКА]
[ПІДПИС ВИКОНАВЦЯ]                                                           [ПІДПИС ЗАМОВНИКА]`
  },
  {
    id: 3,
    name: 'Договір про податковий облік',
    signedDate: new Date('2021-03-22'),
    validUntil: new Date('2022-03-22'),
    content: `ДОГОВІР ПРО ПОДАТКОВИЙ ОБЛІК №2021-03

м. Київ                                                                                                  22 березня 2021 р.

ТОВ "Сервіс Провайдер", в особі генерального директора Іваненка Івана Івановича, що діє на підставі Статуту, іменований надалі "Виконавець", з однієї сторони, та
Фізична особа-підприємець Петренко Петро Петрович, що діє на підставі Виписки з ЄДР, іменований надалі "Замовник", з іншої сторони,
уклали цей Договір про наступне:

1. ПРЕДМЕТ ДОГОВОРУ
1.1. Виконавець зобов'язується надати Замовнику послуги з ведення податкового обліку та подання податкової звітності, а Замовник зобов'язується прийняти та оплатити ці послуги.

2. ПРАВА ТА ОБОВ'ЯЗКИ СТОРІН
2.1. Виконавець зобов'язується:
  - Надавати послуги своєчасно та якісно
  - Зберігати конфіденційність інформації Замовника
  - Консультувати Замовника з питань податкового обліку

2.2. Замовник зобов'язується:
  - Своєчасно надавати Виконавцю необхідну для надання послуг інформацію
  - Оплачувати послуги в розмірі та у строки, передбачені цим Договором
  - Прийняти надані послуги

3. ВАРТІСТЬ ПОСЛУГ ТА ПОРЯДОК РОЗРАХУНКІВ
3.1. Вартість послуг становить 4000 грн на місяць.
3.2. Оплата здійснюється до 5 числа поточного місяця.

4. ТЕРМІН ДІЇ ДОГОВОРУ
4.1. Цей Договір вступає в силу з моменту підписання і діє до 22 березня 2022 року.
4.2. Договір може бути розірвано за згодою сторін або в односторонньому порядку при повідомленні іншої сторони за 30 днів.

5. РЕКВІЗИТИ ТА ПІДПИСИ СТОРІН
[РЕКВІЗИТИ ВИКОНАВЦЯ]                                                      [РЕКВІЗИТИ ЗАМОВНИКА]
[ПІДПИС ВИКОНАВЦЯ]                                                           [ПІДПИС ЗАМОВНИКА]`
  },
  {
    id: 4,
    name: 'Базовий договір про послуги',
    signedDate: new Date('2020-01-15'),
    validUntil: new Date('2021-01-15'),
    content: `БАЗОВИЙ ДОГОВІР ПРО ПОСЛУГИ №2020-01

м. Київ                                                                                                  15 січня 2020 р.

ТОВ "Сервіс Провайдер", в особі генерального директора Іваненка Івана Івановича, що діє на підставі Статуту, іменований надалі "Виконавець", з однієї сторони, та
Фізична особа-підприємець Петренко Петро Петрович, що діє на підставі Виписки з ЄДР, іменований надалі "Замовник", з іншої сторони,
уклали цей Договір про наступне:

1. ПРЕДМЕТ ДОГОВОРУ
1.1. Виконавець зобов'язується надати Замовнику послуги з консультування з питань оподаткування, а Замовник зобов'язується прийняти та оплатити ці послуги.

2. ПРАВА ТА ОБОВ'ЯЗКИ СТОРІН
2.1. Виконавець зобов'язується:
  - Надавати послуги своєчасно та якісно
  - Зберігати конфіденційність інформації Замовника
  - Консультувати Замовника з питань податкового обліку

2.2. Замовник зобов'язується:
  - Своєчасно надавати Виконавцю необхідну для надання послуг інформацію
  - Оплачувати послуги в розмірі та у строки, передбачені цим Договором
  - Прийняти надані послуги

3. ВАРТІСТЬ ПОСЛУГ ТА ПОРЯДОК РОЗРАХУНКІВ
3.1. Вартість послуг становить 3500 грн на місяць.
3.2. Оплата здійснюється до 5 числа поточного місяця.

4. ТЕРМІН ДІЇ ДОГОВОРУ
4.1. Цей Договір вступає в силу з моменту підписання і діє до 15 січня 2021 року.
4.2. Договір може бути розірвано за згодою сторін або в односторонньому порядку при повідомленні іншої сторони за 30 днів.

5. РЕКВІЗИТИ ТА ПІДПИСИ СТОРІН
[РЕКВІЗИТИ ВИКОНАВЦЯ]                                                      [РЕКВІЗИТИ ЗАМОВНИКА]
[ПІДПИС ВИКОНАВЦЯ]                                                           [ПІДПИС ЗАМОВНИКА]`
  }
];

export const ContractView = () => {
  const [selectedContract, setSelectedContract] = useState<typeof contractHistory[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = (contractId: number) => {
    const contract = contractHistory.find(c => c.id === contractId);
    if (!contract) return;
    
    // Here would be the logic to generate and download PDF
    console.log('Downloading contract as PDF...', contract.name);
    
    // In a real app, you'd use something like this:
    // const blob = new Blob([contract.content], { type: 'text/plain' });
    // const url = window.URL.createObjectURL(blob);
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = `contract-${contract.id}.pdf`;
    // document.body.appendChild(a);
    // a.click();
    // window.URL.revokeObjectURL(url);
    // document.body.removeChild(a);
  };

  const handlePreview = (contract: typeof contractHistory[0]) => {
    setSelectedContract(contract);
    setIsModalOpen(true);
  };

  // Format the date to display as DD.MM.YYYY
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('uk-UA', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    });
  };

  return (
    <div className="space-y-6">
      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Історія договорів</h2>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Назва договору</TableHead>
                  <TableHead>Підписано</TableHead>
                  <TableHead>Дійсний до</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead className="text-right">Дії</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contractHistory.map((contract) => {
                  const isActive = new Date() <= contract.validUntil;
                  return (
                    <TableRow key={contract.id}>
                      <TableCell className="font-medium">{contract.name}</TableCell>
                      <TableCell>{formatDate(contract.signedDate)}</TableCell>
                      <TableCell>{formatDate(contract.validUntil)}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 text-xs rounded-full ${isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {isActive ? 'Активний' : 'Завершений'}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm" onClick={() => handlePreview(contract)}>
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">Переглянути</span>
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleDownload(contract.id)}>
                            <FileDown className="h-4 w-4" />
                            <span className="sr-only">Завантажити</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold mb-4">Поточний договір</h2>
              <p className="text-gray-600">
                Ваш поточний договір сформовано на основі наданих даних у профілі. 
                Ви можете переглянути його онлайн або завантажити у форматі PDF.
              </p>
              
              {/* Дані про останній активний договір */}
              {contractHistory.filter(c => new Date() <= c.validUntil).length > 0 && (
                <div className="mt-4">
                  <p className="text-sm">
                    <strong>Дійсний до:</strong> {formatDate(contractHistory.filter(c => new Date() <= c.validUntil)[0].validUntil)}
                  </p>
                  <p className="text-sm">
                    <strong>Підписано:</strong> {formatDate(contractHistory.filter(c => new Date() <= c.validUntil)[0].signedDate)}
                  </p>
                </div>
              )}
            </div>
            
            <div className="flex gap-4">
              <Button onClick={() => handlePreview(contractHistory.filter(c => new Date() <= c.validUntil)[0] || contractHistory[0])}>
                <Eye className="mr-2 h-4 w-4" />
                Переглянути
              </Button>
              <Button variant="outline" onClick={() => handleDownload(contractHistory.filter(c => new Date() <= c.validUntil)[0]?.id || contractHistory[0].id)}>
                <FileDown className="mr-2 h-4 w-4" />
                Завантажити PDF
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modal dialog for contract preview */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {selectedContract?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <div className="text-sm mb-4">
              <div className="mb-2"><strong>Підписано:</strong> {selectedContract && formatDate(selectedContract.signedDate)}</div>
              <div><strong>Дійсний до:</strong> {selectedContract && formatDate(selectedContract.validUntil)}</div>
            </div>
            <div className="whitespace-pre-wrap font-mono text-sm bg-gray-50 p-4 rounded border">
              {selectedContract?.content}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
