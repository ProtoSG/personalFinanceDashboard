import { Toaster } from "sonner"
import { BalanceSheet } from "./modules/balanceSheet/BalanceSheet"
import { DataInformation } from "./modules/dataInformation/DataInformation"
import { IncomeExpense } from "./modules/incomeExpense/IncomeExpense"
import { TransactionForm } from "./modules/transactionForm/TransactionForm"
import { TransactionList } from "./modules/transactionList/TransactionList"

function App() {
  return (
    <main className="max-w-[920px] mx-auto px-20 md:px-0 overflow-y-scroll min-h-dvh">
      <h1 className="my-10 text-center text-4xl font-semibold">
        Personal Finance Dashboard
      </h1>
      <DataInformation />
      <div className="flex flex-col md:grid grid-cols-2 grid-rows-3 gap-4 md:max-h-[900px]">
        <TransactionForm />
        <TransactionList />
        <BalanceSheet />
        <IncomeExpense />
        <div className="min-h-20 w-full"></div>
      </div>
      <Toaster richColors />
    </main>
  )
}

export default App
