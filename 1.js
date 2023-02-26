

function curry(fn, ...args) {

  if (args.length >= fn.length) {
    return fn(...args);
  }

  return (...args2) => {
    return curry(fn, ...args, ...args2);
  }
}

function add(x, y, z) {
  return x + y + z;
}

const curryAdd = curry(add, 1);
console.log(curryAdd(2, 3));
console.log(curryAdd(2)(3));


