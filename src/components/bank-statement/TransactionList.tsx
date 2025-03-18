
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const transactions = [
  {
    id: 1,
    date: "2024-02-20 14:30",
    counterparty: "ТОВ 'Сільпо'",
    description: "Оплата за товари",
    amount: -1250.00,
    balance: 128450.00,
    status: "completed"
  },
  {
    id: 2,
    date: "2024-02-20 12:15",
    counterparty: "Іванов П.С.",
    description: "Зарплата",
    amount: 15000.00,
    balance: 129700.00,
    status: "completed"
  },
  {
    id: 3,
    date: "2024-02-19 18:45",
    counterparty: "ПриватБанк",
    description: "Комісія за обслуговування",
    amount: -100.00,
    balance: 114700.00,
    status: "completed"
  },
];

export const TransactionList = () => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Дата та час</TableHead>
            <TableHead>Контрагент</TableHead>
            <TableHead>Призначення платежу</TableHead>
            <TableHead className="text-right">Сума</TableHead>
            <TableHead className="text-right">Залишок</TableHead>
            <TableHead>Статус</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.counterparty}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell className={`text-right ${
                transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {transaction.amount > 0 ? '+' : ''}
                {transaction.amount.toFixed(2)} ₴
              </TableCell>
              <TableCell className="text-right">
                {transaction.balance.toFixed(2)} ₴
              </TableCell>
              <TableCell>
                <Badge variant={transaction.status === 'completed' ? 'default' : 'secondary'}>
                  {transaction.status === 'completed' ? 'Проведено' : 'В обробці'}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
