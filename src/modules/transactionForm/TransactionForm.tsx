import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { Box } from "../core/components"
import { InputForm, SelectForm } from "./components"
import { FormValues, schema } from "./models/form.model"
import { ItemModel } from "./models/item.model"
import { useItem } from "./hooks/useItem"

export const TransactionForm = () => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      type: "gasto",
      product: "",
      money: 0
    }
  })

  const { addItem, setIncome, setExpense } = useItem()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const item = new ItemModel(data)
    addItem(item)

    if (item.type === "gasto") {
      setExpense(item.money)
    } else {
      setIncome(item.money)
    }

    reset()
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <SelectForm control={control} />
        <fieldset className="flex gap-4">
          <InputForm name="product" label="Producto" placeholder="Galleta" control={control} type="text" error={errors.product} />
          <InputForm name="money" label="Dinero" placeholder="S/ 600.00" control={control} type="number" error={errors.money} />
        </fieldset>
        <button
          className="w-full px-4 py-3 font-semibold text-xl text-gray-200 bg-black rounded-md transition-colors
          hover:bg-black/80 hover:scale-105"
        >
          Agregar
        </button>
      </form>
    </Box>
  )
}
