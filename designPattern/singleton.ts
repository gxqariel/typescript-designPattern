/**
 * 单例模式
 */
export default class AFruit {
  name = '';
  static instance = null;

  constructor(props) {
    this.name = props.name;
    if (!AFruit.instance) {
      AFruit.instance = this;
    }
    return AFruit.instance;
  }
}
const apple = new AFruit({
  name: 'apple',
});
const pear = new AFruit({
  name: 'pear',
});
console.log(apple === pear);
console.log(apple.name);
console.log(pear.name);
