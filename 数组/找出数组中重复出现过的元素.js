// 例如：[1，2，4，4，3，3，1，5，3]
// 输出：[1，3，4]

function arr_repeat(array) {
  const tmpArr = [];
  const tmpObj = {}; // tmpObj: { key: count }
  array.forEach(item => {
    tmpObj[item] = tmpObj[item] ? tmpObj[item] += 1 : 1
  });

  for (const key in tmpObj) {
    if (Object.hasOwnProperty.call(tmpObj, key)) {
      const count = tmpObj[key];
      if (count > 1) {
        tmpArr.push(Number(key));
      }
    }
  }

  return tmpArr;
}

console.log(arr_repeat([1, 2, 4, 4, 3, 3, 1, 5, 3]));