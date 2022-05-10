import { useTransactions } from '../../hooks/useTransactions'




export function TransactionsTable() {
  const { transactions } = useTransactions()

  return (
    
    <div className="mt-16 overflow-scroll scrollbar-none">
      <table className="md:w-full border-separate border border-zinc-100 rounded-md drop-shadow-md dark:border-zinc-900">
        <thead>
          <tr className="first:text-zinc-800 dark:first:text-zinc-100 bg-zinc-50 dark:bg-zinc-800">
            <th className="font-normal py-4 px-8 align-left leading-6">Título</th>
            <th className="text-zinc-500 dark:text-zinc-400 font-normal py-4 px-8 align-left leading-6">Valor</th>
            <th className="text-zinc-500 dark:text-zinc-400 font-normal py-4 px-8 align-left leading-6">Categoria</th>
            <th className="text-zinc-500 dark:text-zinc-400 font-normal py-4 px-8 align-left leading-6">Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr className="first:text-zinc-800 dark:first:text-zinc-100" key={transaction.id}>
              <td className="py-4 px-8 border-none dark:bg-zinc-800 bg-white rounded-md">{transaction.title}</td>
              <td className={transaction.type + " py-4 px-8 border-none dark:bg-zinc-800 bg-white rounded-md"}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td className="py-4 px-8 border-none dark:bg-zinc-800 bg-white text-zinc-500 dark:text-zinc-400 rounded-md">{transaction.category}</td>
              <td className="py-4 px-8 border-none dark:bg-zinc-800 bg-white text-zinc-500 dark:text-zinc-400 rounded-md">
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
