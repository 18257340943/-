
// “回文字符串”是一个正读和反读都一样的字符串。


function isPalindrome(str) {
  let reg = /[\W_]/g, // 匹配所有非单词的字符以及下划线
    newStr = str.replace(reg, '').toLowerCase(), // 替换为空字符并将大写字母转换为小写
    reverseStr = newStr.split('').reverse().join(''); // 将字符串反转

  return reverseStr === newStr;
}
