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
          className="bg-white border-2 border-gray-300 rounded-md px-2 py-3 focus:outline-none"
        >
          <option value="gasto">Gasto</option>
          <option value="ingreso">Ingreso</option>
        </select>
      }
    />
  )
}
