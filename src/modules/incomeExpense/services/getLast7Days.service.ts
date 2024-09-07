import { ItemModel } from "../../transactionForm/models/item.model";

export const getLast7DaysName = () => {
  const days: String[] = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const day = new Date(today)
    day.setDate(today.getDate() - i)
    const dayName = day.toLocaleDateString('es-Es', { weekday: 'short' });
    days.push(dayName)
  }
  return days.reverse();
}

export const getLast7DaysData = (items: ItemModel[], type: "ingreso" | "gasto") => {
  const days: number[] = [];
  const today = new Date();

  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const day = new Date(today);
    day.setDate(today.getDate() - i);
    return day.toISOString().split('T')[0];
  });

  last7Days.forEach(dayString => {
    const total = items
      .filter(item => item.date === dayString && item.type === type)
      .reduce((acc, item) => acc + item.money, 0);
    days.push(total);
  });

  return days.reverse();
};

export const getLast7DaysIncome = (items: ItemModel[]) => getLast7DaysData(items, "ingreso");

export const getLast7DaysExpense = (items: ItemModel[]) => getLast7DaysData(items, "gasto")
