import { Box, Title } from "../core/components";
import { useItem } from "../transactionForm/hooks/useItem";
import { ItemTransaction } from "./components";

export const TransactionList = () => {

  const { items } = useItem()

  return (
    <Box className="row-span-2 ">
      <Title>Transacciones</Title>
      <div className="flex flex-col gap-4 h-[90%] overflow-scroll pb-8 ">
        {
          items.map((item, index) => (
            <ItemTransaction key={index} index={index} item={item} />
          ))
        }
      </div>
    </Box>
  )
};
