/**
 * 模板方法模式
 */
export abstract class Drink {
  init() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.add();
  }

  boilWater() {
    console.log('把水煮沸');
  }

  abstract brew(): void;
  abstract pourInCup(): void;
  abstract add(): void;
}

export class Coffee extends Drink {
  constructor() {
    super();
  }

  brew() {
    console.log('用沸水冲泡咖啡');
  }
  pourInCup() {
    console.log('把咖啡倒进杯子');
  }
  add() {
    console.log('加糖和牛奶');
  }
}
const coffee = new Coffee();
coffee.init();
