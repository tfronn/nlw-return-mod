import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'


export function Dashboard() {
  return (
    <div className="max-w-screen-xl my-0 mx-auto py-10 px-4">
      <Summary />
      <TransactionsTable />
    </div>
  )
}
