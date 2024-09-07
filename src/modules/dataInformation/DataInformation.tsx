import { Box } from "../core/components";
import { useItem } from "../transactionForm/hooks/useItem";

export const DataInformation = () => {
  const { income, expense } = useItem()

  const data = [
    { name: "Ingresos", value: income },
    { name: "Gastos", value: expense },
    { name: "Saldo", value: income - expense }
  ]

  return (
    <div className="grid grid-cols-3">
      {
        data.map((item, index) => (
          <Box key={index}>
            <h3 className="font-semibold">
              {item.name}
            </h3>
            <p className="text-2xl mt-4 font-semibold">
              S/. {item.value.toFixed(2)}
            </p>
          </Box>
        ))
      }
    </div>
  );
};
