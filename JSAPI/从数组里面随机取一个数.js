/* 2、实现一个方法 factory，每次调用从数组里面随机取一个数，且不能与上一次为同一个 */

// randomchoice = factory([1, 2, 3, 4, 5]) 
// randomchoice() // -> 2 // randomchoice() // -> 5 // randomchoice() // -> 3

/* 先实现单次操作时随机取数功能 */
// function factory(arr) {
//   const newArr = [...arr];
//   const randomIndex = Math.floor(Math.random() * newArr.length);
//   const curRandomVal = newArr[randomIndex];
//   return curRandomVal;
// }


/* 本题考查闭包保存外部函数的核心特性，利用闭包保存了newArr数组， */
function factory(arr) {
  const newArr = [...arr];
  return () => {
    const randomIndex = Math.floor(Math.random() * newArr.length);
    const curRandomVal = newArr[randomIndex];
    newArr.splice(randomIndex, 1);
    return curRandomVal;
  }
}

const randomchoice = factory([1, 2, 3, 4, 5]);
console.log(randomchoice(), 'randomchoice1');
console.log(randomchoice(), 'randomchoice2');
console.log(randomchoice(), 'randomchoice3');
console.log(randomchoice(), 'randomchoice3');
console.log(randomchoice(), 'randomchoice3');
