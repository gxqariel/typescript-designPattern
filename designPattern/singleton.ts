/**
 * ๐ๅไพๆจกๅผ ้ฅฟๆฑๅผ๐
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
//  * ๐ๅไพๆจกๅผ ๆๆฑๅผ๐
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

// โโโโ๐โโโโๆๅฑๅผๅงโโโโ๐โโโโ
/**
 * ๐่ฃ้ฅฐๅจๆจกๅผ๐ฉ ๅฎ็ฐๅไพ๐
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
 * ๐ไปฃ็ๆจกๅผ๐ ๅฎ็ฐๅไพ๐
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
 * ๐ ๆ่งๅพ็จ็ๆฏ่พ่ๆ็ๆจกๅผ ้่ฟๅฏ้ๅๆฐโ ๅฎ็ฐๅไพ๐
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

// โโโโ๐โโโโๆๅฑ็ปๆ๐โโโโ๐โโโโ
