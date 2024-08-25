import { create } from "zustand";
import { ItemModel } from "../models/item.model";

interface ItemProps {
  items: ItemModel[];
  addItem: (item: ItemModel) => void;

  income: number;
  setIncome: (income: number) => void;

  expense: number;
  setExpense: (expense: number) => void;
}

export const useItem = create<ItemProps>((set) => ({
  items: [],
  addItem: (item: ItemModel) => set((state) => ({ items: [...state.items, item] })),

  income: 0,
  setIncome: (income: number) => set((state) => ({ income: state.income + income })),

  expense: 0,
  setExpense: (expense: number) => set((state) => ({ expense: state.expense + expense })),
}))
