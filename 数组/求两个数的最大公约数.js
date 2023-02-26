const { arrMax } = require('./求数组的最大值和最小值');

// 最大公约数（最大公因子）
// 求一个数的所有因子（整数）

function divisor(number1, number2) {

  let i = number1 > number2 ? number1 : number2;
  const tmpArr1 = [];
  while (i != 0) {
    // 利用es6判断整数
    if (Number.isInteger(number1 / i) && Number.isInteger(number2 / i)) {
      if (tmpArr1.indexOf(i) === -1) {
        tmpArr1.push(i);
      }
    }
    i--;
  }

  return arrMax(tmpArr1);
}


console.log(divisor(24, 48));


