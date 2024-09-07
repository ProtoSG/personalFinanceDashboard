import { Control, Controller, FieldError } from "react-hook-form"
import { FormValues } from "../models/form.model"

interface InputFormInterface {
  name: keyof FormValues
  placeholder: string
  control: Control<FormValues>
  label: string
  type: "text" | "number" | "email" | "password"
  error?: FieldError
}

export const InputForm = ({ name, placeholder, control, label, type, error }: InputFormInterface) => {
  return (
    <div className="relative">
      <label className="flex flex-col gap-2 ">
        {label}
        <Controller
          name={name}
          control={control}
          render={({ field }) =>
            <input
              type={type}
              placeholder={placeholder}
              {...field}
              className={`border-2 border-gray-300 w-full rounded-md pl-2 py-2 focus:outline-none`}
            />
          }
        />
      </label>
      {error &&
        <div className="absolute z-10 py-1 bg-gray-800/80 px-2 rounded-sm ">
          <small className="text-yellow-400 text-xs font-semibold">{error.message}</small>
        </div>
      }
    </div>
  )
}
