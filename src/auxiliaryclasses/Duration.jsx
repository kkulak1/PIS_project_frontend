


class Duration {
  amountOfTime
  timeUnit
  constructor(amountOfTime, timeUnit) {
    this.amountOfTime = amountOfTime;
    this.timeUnit = timeUnit;
  }

  get preparationTime() {
    return String(this.amountOfTime) + " " + String(this.timeUnit)
  }
}