import { Control, Controller } from "react-hook-form"
import { FormValues } from "../models/form.model"
import { Option } from "../models/option.model"
import { ButtonAddCategory } from "./ButtonAddCategory"

interface SelectFormInterface {
  control: Control<FormValues>
  label: string
  options: Option[]
  add?: boolean
}

export const SelectForm = ({ control, label, options, add }: SelectFormInterface) => {
  return (
    <Controller
      name="type"
      control={control}
      render={({ field }) =>
        <label className="relative flex flex-col gap-2 w-full">
          {label}
          <select
            {...field}
            className="bg-white border-2 border-gray-300 rounded-md px-1 py-3 focus:outline-none"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
          {add && (
            <ButtonAddCategory />
          )}
        </label>
      }
    />
  )
}
