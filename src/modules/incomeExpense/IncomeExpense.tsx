import { Box, Title } from "../core/components";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js"

import { Line } from "react-chartjs-2"
import { useItem } from "../transactionForm/hooks/useItem";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)


export const IncomeExpense = () => {

  const { items } = useItem()

  const dataIncome = items.filter((item) => item.type === "ingreso").map((item) => item.money)
  const dataExpense = items.filter((item) => item.type === "gasto").map((item) => item.money)


  const data = {
    labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],

    datasets: [
      {
        label: "Ingresos",
        data: dataIncome,
        borderColor: "#65a30d",
        tension: 0.4,
        pointRadius: 3,
        pointBackgroundColor: "#65a30d",
      },
      {
        label: "Gastos",
        data: dataExpense,
        borderColor: "#365314",
        tension: 0.4,
        pointRadius: 3,
        pointBackgroundColor: "#365314",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: { display: false },
      }
    }
  };

  return (
    <Box className="col-span-2 h-[120%]">
      <Title>Ingresos y Gastos</Title>
      <div className="flex max-h-[90%] w-full items-start justify-center">
        <Line
          data={data}
          options={options}
        />
      </div>
    </Box>
  )
};
