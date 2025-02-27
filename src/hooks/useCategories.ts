import { create } from "zustand";
import { Option } from "../modules/transactionForm/models/option.model";
import { loadFromLocalStorage, saveToLocalStorage } from "../services/localStorageActions";

interface Category {
  categories: Option[],
  addCategory: (category: Option) => void,
  removeCategory: (category: Option) => void
}

const colors = [
  "#D3D3D3",
  "#808080",
  "#8B4513",
  "#D2691E",
  "#DAA520",
  "#006400",
  "#1E3A8A",
  "#4B0082",
  "#9B3A62",
  "#8B0000"
]

export const useCategories = create<Category>((set) => ({
  categories: loadFromLocalStorage("categories", [
    {
      name: "Salario",
      value: "salario"
    },
    {
      name: "Alquiler",
      value: "alquiler"
    }
  ] as Option[]) as Option[],
  addCategory: (category: Option) => set((state) => {
    const newCategories = state.categories.some(c => c.value === category.value)
      ? state.categories
      : [...state.categories, category]

    saveToLocalStorage("categories", newCategories)
    return { categories: newCategories }
  }),

  removeCategory: (category: Option) =>
    set((state) => {
      const newCategories = state.categories.filter((c) => c.value !== category.value)

      saveToLocalStorage("categories", newCategories)
      return { categories: newCategories }
    }),
}))
