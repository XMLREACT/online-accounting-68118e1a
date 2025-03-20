
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

// Sample contract data
const contractContent = `ДОГОВІР ПРО НАДАННЯ ПОСЛУГ №2023-09

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
[ПІДПИС ВИКОНАВЦЯ]                                                           [ПІДПИС ЗАМОВНИКА]`;

export const ContractView = () => {
  const handlePrint = () => {
    // Open a new window with just the contract content
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Договір</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.5;
                padding: 20px;
              }
              pre {
                white-space: pre-wrap;
                font-family: inherit;
              }
            </style>
          </head>
          <body>
            <pre>${contractContent}</pre>
            <script>
              // Automatically open print dialog when page loads
              window.onload = function() {
                window.print();
              }
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="whitespace-pre-wrap font-mono text-sm bg-gray-50 p-6 rounded border">
              {contractContent}
            </div>
            
            <div className="flex justify-end">
              <Button onClick={handlePrint}>
                <Printer className="mr-2 h-4 w-4" />
                Друкована форма
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
