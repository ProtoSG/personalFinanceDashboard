import { Box, Title } from "../core/components";
import { useItem } from "../transactionForm/hooks/useItem";
import { ItemTransaction } from "./components";

export const TransactionList = () => {

  const { items } = useItem();

  return (
    <Box className="row-span-2">
      <Title>Transacciones</Title>
      <div className="flex flex-col gap-4 h-96 md:h-[90%] overflow-y-scroll pb-8 pr-2">
        {
          items.map((item, index) => (
            <ItemTransaction key={index} index={index} item={item} />
          ))
        }
      </div>
    </Box>
  )
};
