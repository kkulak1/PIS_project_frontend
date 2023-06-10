import { type } from "os";


class Ingredient {
  type
  quantity
  cost
  name
  description
  constructor(type, quantity, cost, name, description) {
    this.type = type;
    this.quantity = quantity;
    this.cost = cost;
    this.name = name;
    this.description = description;
  }

  get estimatedCost() {
    return this.quantity;
  }

}