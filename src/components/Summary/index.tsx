import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.withdraws += transaction.amount
        acc.total -= transaction.amount
      }

      return acc
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0
    }
  )

  return (
    <div className="grid grid-cols-3 md:gap-8 -mt-40 sm:gap-2">
      <div className="bg-white py-6 px-8 rounded-md text-title-500 dark:bg-zinc-800 dark:text-zinc-200 drop-shadow-md">
        <header className="flex align-center justify-between">
          <p className="font-semibold md:text-3xl sm:text-sm">Entradas</p>
          <img src={incomeImg} alt="Entradas" className="sm:h-6 sm:w-6 md:h-8 md:w-8" />
        </header>
        <strong className="block mt-4 md:text-4xl sm:text-sm font-medium md:leading-10 text-greenDiv-500">
          {' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits)}
        </strong>
      </div>
      <div className="bg-white py-6 px-8 rounded-md text-title-500 dark:bg-zinc-800 dark:text-zinc-200 drop-shadow-md">
        <header className="flex align-center justify-between">
          <p className="font-semibold md:text-3xl sm:text-sm">Saídas</p>
          <img src={outcomeImg} alt="Saídas" className="sm:h-6 sm:w-6 md:h-8 md:w-8" />
        </header>
        <strong className="block mt-4 md:text-4xl sm:text-sm font-medium md:leading-10 text-red-500">
          -
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="bg-brand-300 py-6 px-8 rounded-md text-white drop-shadow-md">
        <header className="flex align-center justify-between">
          <p className="font-semibold md:text-3xl sm:text-sm">Total</p>
          <img src={totalImg} alt="Total" className="sm:h-6 sm:w-6 md:h-8 md:w-8" />
        </header>
        <strong className="block mt-4 md:text-4xl sm:text-sm font-medium md:leading-10 sm:leading-3">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>
    </div>
  )
}
