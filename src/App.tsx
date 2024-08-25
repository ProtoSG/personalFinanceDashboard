import { BalanceSheet } from "./modules/balanceSheet/BalanceSheet"
import { IncomeExpense } from "./modules/incomeExpense/IncomeExpense"
import { TransactionForm } from "./modules/transactionForm/TransactionForm"
import { TransactionList } from "./modules/transactionList/TransactionList"

function App() {
  return (
    <main >
      <h1 className="my-10 text-center text-4xl font-semibold">
        Personal Finance Dashboard
      </h1>
      <div className="grid grid-cols-2 grid-rows-3 gap-4 max-h-[800px]">
        <TransactionForm />
        <TransactionList />
        <BalanceSheet />
        <IncomeExpense />
      </div>
    </main>
  )
}

export default App
