const memoize = function (func, content) {
  let cache = Object.create(null)
  content = content || this
  return (...key) => {
    console.log(key, '  cache[key]11')
    if (!cache[key]) {
      cache[key] = func.apply(content, key);
      console.log(cache[key], ' cache[key]');
    }
    return cache[key]
  }
}

var add = function (x, y) {
  return x + y;
}

const calc = memoize(add);
const num1 = calc(100, 200)
const num2 = calc(100, 400) // 缓存得到的结果

console.log(num1, 'num1');
console.log(num2, 'num2');
