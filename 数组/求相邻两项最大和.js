// 一
let arr1 = [-1, 3, 1, -5, 2]; // 如 [2, 4, -4, -3] => 4


function heMax(array) {
  let max = 0;
  for (let i = 0, j = 1; j < array.length; i++, j++) {
    const he = array[i] + array[j];
    if (he > max) {
      max = he;
    }

  }
  return max;
}

console.log(heMax([-1, 3, 1, -5, 2]));