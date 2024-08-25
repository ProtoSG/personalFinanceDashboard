import { Control, Controller } from "react-hook-form"
import { FormValues } from "../models/form.model"

interface SelectFormInterface {
  control: Control<FormValues>
}

export const SelectForm = ({ control }: SelectFormInterface) => {
  return (
    <Controller
      name="type"
      control={control}
      render={({ field }) =>
        <select
          {...field}
          className="border-2 border-lime-800 rounded-md px-2 py-3 bg-lime-100 focus:outline-none"
        >
          <option value="gasto">Gasto</option>
          <option value="ingreso">Ingreso</option>
        </select>
      }
    />
  )
}
