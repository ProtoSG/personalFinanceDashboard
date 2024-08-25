import { FormValues } from "./form.model";

export class ItemModel {
  product: string;
  money: number;
  type: string;
  hour: string;

  constructor(item: FormValues) {
    this.product = item.product;
    this.money = item.money;
    this.type = item.type;

    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();

    this.hour = `${hours}:${minutes}`;
  }
}
