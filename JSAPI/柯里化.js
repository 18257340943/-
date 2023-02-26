
/**
 * @description: 柯里化函数的核心代码，本质即这部分，
 * @param {*} fn
 * @param {array} args
 * @return {*}
 */

// 达到规定长度直接输出；
// 否则利用闭包缓存了fn和后续未达到长度的参数！
function currying(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args)
  }
  return function (...args2) {
    return currying(fn, ...args, ...args2)
  }
}

/**
 * @description: 最常见应用也就是参数复用
 * @param {*} x
 * @param {*} y
 * @param {*} z
 * @return {*}
 */
function add(x, y, z) {
  return x + y + z;
}

var increment = currying(add, 1, 2)
console.log(increment(4));
console.log(increment(10));