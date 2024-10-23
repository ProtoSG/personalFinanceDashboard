import { Box, Title } from "../core/components";

import { IncomeExpenseChart } from "./components/IncomeExpenseChart";

export const IncomeExpense = () => {
  return (
    <Box className="col-span-2 h-[120%] flex flex-col justify-between">
      <Title>Ingresos y Gastos</Title>
      <IncomeExpenseChart />
    </Box>
  )
};
