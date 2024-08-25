interface ItemTransactionProps {
  index: number;
  item: any;
}

export const ItemTransaction = ({ index, item }: ItemTransactionProps) => {
  return (
    <section className="flex items-center justify-between" key={index}>
      <span className="text-lg font-medium">{item.product}</span>
      <div className="flex flex-col  items-end">
        <span className={`${item.type === "gasto" ? "text-red-700" : "text-green-600"}`}>{item.type === "gasto" ? "-" : "+"} S/ {item.money.toFixed(2)}</span>
        <small>{item.hour}</small>
      </div>
    </section>
  )
}
