import { Box, Title } from "../core/components";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js"

import { Doughnut } from "react-chartjs-2"
import { useItem } from "../transactionForm/hooks/useItem";

ChartJS.register(ArcElement, Tooltip, Legend)

export const BalanceSheet = () => {

  const { income, expense } = useItem()

  const data = {
    labels: ["Gasto", "Ingreso"],
    datasets: [
      {
        data: [expense, income],
        backgroundColor: ["#365314", "#65a30d"],
        hoverOffset: 6
      },
    ]
  };

  const options = {
    width: 400,
    responsive: true,
    aspectRatio: 1.5,
    radius: 70,
    plugins: {
      legend: {
        position: "right" as const,
      },
    },
    animation: {
      animateScale: true,
    }
  };

  return (
    <Box >
      <Title>Balance General</Title>
      <div className="flex h-[90%] items-start justify-center">
        <Doughnut
          data={data}
          options={options}
        />
      </div>
    </Box >
  )
};
