import { FormValues } from "./form.model";

export class ItemModel {
  product: string;
  money: number;
  type: string;
  date: string;
  hour: string;

  constructor(item: FormValues) {
    this.product = item.product;
    this.money = item.money;
    this.type = item.type;
    this.date = new Date().toISOString().split('T')[0];
    this.hour = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  }
}
