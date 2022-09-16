/**
 * 👇单例模式 饿汉式👇
 */
export class AFruit {
  static instance = new AFruit();

  getInstance() {
    return AFruit.instance;
  }
}

// const apple = new AFruit().getInstance();
// const pear = new AFruit().getInstance();
// console.log(apple == pear);

// /**
//  * 👇单例模式 懒汉式👇
//  */
// export class BFruit {
//   static instance;

//   getInstance() {
//     if (!BFruit.instance) {
//       BFruit.instance = new BFruit();
//     }
//     return BFruit.instance;
//   }
// }

// const apple = new BFruit().getInstance();
// const pear = new BFruit().getInstance();
// console.log(apple == pear);

// ————👉————拓展开始————👉————
/**
 * 👇装饰器模式🎩 实现单例👇
 */

// @Singleton
// class CFruit {
//   name;
//   constructor(name) {
//     this.name = name;
//   }
// }
// function Singleton(fn: any): any {
//   let instance;
//   return function (props?) {
//     if (!instance) {
//       instance = new fn(props);
//     }
//     return instance;
//   };
// }
// const apple = new CFruit('apple');
// const pear = new CFruit('pear');
// console.log(apple === pear);

/**
 * 👇代理模式💁 实现单例👇
 */
// export class DFruit {
//   name;
//   constructor(name) {
//     this.name = name;
//   }
// }
// const ProxySingletonDFruit = (function () {
//   var instance;
//   return function (name) {
//     if (!instance) {
//       instance = new DFruit(name);
//     }
//     return instance;
//   };
// })();
// const apple = ProxySingletonDFruit('apple');
// const pear = ProxySingletonDFruit('pear');
// console.log(apple === pear);

/**
 * 👇 我觉得用的比较舒服的模式 通过可选参数❓ 实现单例👇
 */
// export class EFruit {
//   private static instance;
//   constructor(props?) {
//     if (props?.nonSingconston) return this;
//     if (!EFruit.instance) {
//       EFruit.instance = this;
//     }
//     return EFruit.instance;
//   }
// }

// const apple = new EFruit({ nonSingconston: true });
// const pear = new EFruit({ nonSingconston: true });
// const c = new EFruit();
// console.log(apple == pear);

// ————👈————拓展结束🔚————👈————
