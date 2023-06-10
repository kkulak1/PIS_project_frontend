
class Cost {
  costValue
  costUnit
  constructor(costValue, costUnit) {
    this.costValue = costValue;
    this.costUnit = costUnit;
  }

  get estimatedCost() {
    return String(this.costValue) + " "+ String(this.costUnit)
  }
}