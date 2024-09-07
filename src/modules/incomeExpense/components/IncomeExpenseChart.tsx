import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";

import { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

import { getLast7DaysExpense, getLast7DaysIncome, getLast7DaysName } from "../services/getLast7Days.service";
import { useItem } from "../../transactionForm/hooks/useItem";

export const IncomeExpenseChart = () => {

  const [daysName, setDaysName] = useState<String[]>([]);
  const [dataIncome, setDataIncome] = useState<number[]>([]);
  const [dataExpense, setDataExpense] = useState<number[]>([]);

  const { items } = useItem();

  useEffect(() => {
    setDaysName(getLast7DaysName());
    setDataIncome(getLast7DaysIncome(items))
    setDataExpense(getLast7DaysExpense(items))
  }, [items])


  const data = {
    labels: daysName,
    datasets: [
      {
        label: "Ingresos",
        data: dataIncome,
        borderColor: "#000000",
        tension: 0.4,
        pointRadius: 3,
        pointBackgroundColor: "#000000",
      },
      {
        label: "Gastos",
        data: dataExpense,
        borderColor: "#e5e7eb",
        tension: 0.4,
        pointRadius: 3,
        pointBackgroundColor: "#e5e7eb",
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
    <div className="flex max-h-[90%] w-full items-start justify-center">
      <Line
        data={data}
        options={options}
      />
    </div>
  )
}
