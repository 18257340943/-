/*
 * @Author: RZJ
 * @Date: 2023-02-24 18:14:59
 * @LastEditors: hyman
 * @LastEditTime: 2023-02-26 17:16:05
 * @Description: 请填写简介
 */
// 初次构思，只支持一层扁平
// function flat(array) {
//   const newArr = [];
//   array.forEach(item => {
//     if (Array.isArray(item)) {
//       newArr.push(...item);
//     } else {
//       newArr.push(item);
//     }
//   });
//   return newArr;
// }
const arr = [1, 1, [1, 2, [1, 2, [1, 2]]], 3, 4];

// 支持自定义层数扁平化
function flat(array, depth = 1) {
  const newArr = [];
  array.forEach(item => {
    if (Array.isArray(item) && depth > 0) {
      depth--;
      newArr.push(...flat(item, depth));
    } else {
      newArr.push(item);
    }
  });
  return newArr;
}

console.log(flat(arr, 2));


