/*
 * @Author: RZJ
 * @Date: 2023-02-25 12:46:30
 * @LastEditors: hyman
 * @LastEditTime: 2023-02-25 20:03:48
 * @Description: 如：‘aabbccddeexxxxaa’ => ‘abcdexa’
 */

// 由于字符串没有直接删除指定字符串，故最佳办法就是转成数组处理！
function str_repeat(str) {
  const strArr = str.split('');
  for (let pre = 0, cur = 1; cur < strArr.length;) {
    if (strArr[pre] === strArr[cur]) {
      strArr.splice(pre, 1);
    } else {
      pre++;
      cur++;
    }
  }
  return strArr.join('');
}

console.log(str_repeat('aabbccddeexxxxaa'));

