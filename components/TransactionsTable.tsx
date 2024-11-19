import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { transactionCategoryStyles } from "@/constants"
  import { cn, formatAmount, formatDateTime, getTransactionStatus, removeSpecialCharacters } from "@/lib/utils"
import { useEffect } from "react"
  
  const CategoryBadge = ({ category }: CategoryBadgeProps) => {
    const {
      borderColor,
      backgroundColor,
      textColor,
      chipBackgroundColor,
     } = transactionCategoryStyles[category as keyof typeof transactionCategoryStyles] || transactionCategoryStyles.default
  
    return (
      <div className={cn('category-badge !bg-white', borderColor, chipBackgroundColor)}>
        <div className={cn('size-2 rounded-full', backgroundColor)} />
        <p className={cn('text-[12px] font-medium', textColor)}>{category}</p>
      </div>
    )
  } 
  
  const TransactionsTable = ({ transactions }: TransactionTableProps) => {

    useEffect(() => {
      console.log("Transactions data:", transactions);
    }, [transactions]);
    
    return (
      <Table>
        <TableHeader className="bg-transparent text-white">
          <TableRow>
            <TableHead className="px-2">Transaction</TableHead>
            <TableHead className="px-2">Amount</TableHead>
            <TableHead className="px-2">Status</TableHead>
            <TableHead className="px-2">Date</TableHead>
            <TableHead className="px-2">Channel</TableHead>
            <TableHead className="px-2">Category</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((t: Transaction) => {
            const status = getTransactionStatus(new Date(t.date))
            const amount = formatAmount(t.amount)
  
            const isDebit = t.type === 'debit';
            const isCredit = t.type === 'credit';
  
            return (
              <TableRow key={t.id} className={`${isDebit || amount[0] === '-' ? ' bg-transparent' : ' bg-transparent'} !over:bg-none !border-b-DEFAULT `}>
                <TableCell className="max-w-[250px] pl-2 pr-10 max-md:pr-6 ">
                  <div className="flex items-center gap-3">
                    <h1 className="text-14 truncate font-semibold text-white">
                      {removeSpecialCharacters(t.name)}
                    </h1>
                  </div>
                </TableCell>
  
                <TableCell className={`pl-2 pr-10 font-semibold max-md:text-center  min-w-24 max-md:pr-5  ${
                  isDebit || amount[0] === '-' ?
                    'text-[#f04438]'
                    : 'text-[#039855]'
                }`}>
                  {isDebit ? `${amount}` : isCredit ? amount : amount}
                </TableCell>
  
                <TableCell className="pl-2 pr-10">
                  <CategoryBadge category={status} /> 
                </TableCell>
  
                <TableCell className="min-w-32 pl-2 pr-10 text-white">
                  {formatDateTime(new Date(t.date)).dateTime}
                </TableCell>
  
                <TableCell className="pl-2 pr-10 capitalize min-w-24  text-white">
                 {t.paymentChannel}
                </TableCell>
  
                <TableCell className="pl-2 pr-10">
                 <CategoryBadge category={t.category} /> 
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    )
  }
  
  export default TransactionsTable