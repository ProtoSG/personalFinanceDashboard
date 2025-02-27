import { create } from "zustand";
import { ItemModel } from "../models/item.model";
import { loadFromLocalStorage, saveToLocalStorage } from "../../../services/localStorageActions";

interface ItemProps {
  items: ItemModel[];
  addItem: (item: ItemModel) => void;

  income: number;
  setIncome: (income: number) => void;

  expense: number;
  setExpense: (expense: number) => void;
}

export const useItem = create<ItemProps>((set) => ({
  items: loadFromLocalStorage<ItemModel[]>("items", []),
  addItem: (item: ItemModel) => set((state) => {
    const updatedItems = [item, ...state.items];
    saveToLocalStorage("items", updatedItems);
    return { items: updatedItems };
  }),

  income: loadFromLocalStorage<number>("income", 0),
  setIncome: (income: number) => set((state) => {
    const updatedIncome = state.income + income;
    saveToLocalStorage("income", updatedIncome);
    return { income: updatedIncome };
  }),

  expense: loadFromLocalStorage<number>("expense", 0),
  setExpense: (expense: number) => set((state) => {
    const updatedExpense = state.expense + expense;
    saveToLocalStorage("expense", updatedExpense);
    return { expense: updatedExpense };
  }),
}))
