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
    <div className="flex flex-col md:grid grid-cols-3 gap-4 md:gap-12 pb-4">
      {
        data.map((item, index) => (
          <Box key={index} className="flex flex-col">
            <h3 className={`font-semibold text-black/80 text-sm`}>
              {item.name}
            </h3>
            <p className={`text-2xl font-semibold
                ${item.name === "Ingresos" ? "text-green-600"
                : item.name === "Gastos" ? "text-red-600"
                  : "text-black"}
            `}>
              <small>S/ </small>
              {item.value.toFixed(2)}
            </p>
          </Box>
        ))
      }
    </div>
  );
};
