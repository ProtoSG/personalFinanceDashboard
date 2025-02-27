import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { Box } from "../core/components"
import { InputForm, ModalAddCategory, ModalConfirmation, SelectForm } from "./components"
import { FormValues, schema } from "./models/form.model"
import { ItemModel } from "./models/item.model"
import { useItem } from "./hooks/useItem"
import { toast } from "sonner"
import { Option } from "./models/option.model"
import { useCategories } from "../../hooks/useCategories"

export const TransactionForm = () => {
  const { control, handleSubmit, formState: { errors }, reset, trigger } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      type: "gasto",
      category: "",
      product: "",
      money: 0
    }
  })

  const { addItem, setIncome, setExpense } = useItem()
  const { categories } = useCategories()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const item = new ItemModel(data)
    addItem(item)

    if (item.type === "gasto") {
      setExpense(item.money)
    } else {
      setIncome(item.money)
    }

    toast.success("Transacción agregada")
    reset()
  }

  const handleOpenModal = async () => {
    const isValid = await trigger(["product", "money"])
    if (!isValid) return
    const modal = document.getElementById("confimation") as HTMLDialogElement
    modal.showModal()
  }

  const optionsType: Option[] = [
    { name: "Gasto", value: "gasto" },
    { name: "Ingreso", value: "ingreso" }
  ]

  return (
    <Box>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <fieldset className="flex gap-4">
          <SelectForm
            control={control}
            label="Tipo"
            options={optionsType}
          />
          <SelectForm
            control={control}
            label="Categoría"
            options={categories}
            add
          />
        </fieldset>
        <fieldset className="flex gap-4">
          <InputForm name="product" label="Producto" placeholder="Galleta" control={control} type="text" error={errors.product} />
          <InputForm name="money" label="Dinero" placeholder="S/ 600.00" control={control} type="number" error={errors.money} />
        </fieldset>
        <button
          type="button"
          className="w-full px-4 py-3 font-semibold text-xl text-gray-200 bg-black rounded-md transition-colors hover:bg-black/70"
          onClick={handleOpenModal}
        >
          Agregar
        </button>
        <ModalConfirmation />
      </form>
      <ModalAddCategory />
    </Box>
  )
}
