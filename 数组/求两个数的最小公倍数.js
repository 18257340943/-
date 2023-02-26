

function least_common_multiple(num1, num2) {
  const tmpObj1 = {}, tmpObj2 = {}; // {  value: count  }
  let tmpObj = {};
  const tmpArr1 = [];
  const tmpArr2 = [];
  let num = num1 > num2 ? num1 : num2;
  let i = num;
  while (i > 0) {
    if (Number.isInteger(num1 / i)) {
      tmpArr1.push(i)
    }

    if (Number.isInteger(num2 / i)) {
      tmpArr2.push(i)
    }
    i--;
  }

  // 判断是否是质数
  if (tmpArr1.length > 2) {
    tmpArr1.shift();
    tmpArr1.pop();
  }


  if (tmpArr2.length > 2) {
    tmpArr2.shift();
    tmpArr2.pop();
  }

  tmpArr1.forEach(item => {
    tmpObj1[item] = tmpObj1[item] ? tmpObj1[item] += 1 : 1;
  });

  tmpArr2.forEach(item => {
    tmpObj2[item] = tmpObj2[item] ? tmpObj2[item] += 1 : 1;
  });

  for (const key in tmpObj2) {
    if (Object.hasOwnProperty.call(tmpObj2, key)) {
      // 只找共同因子部分，其他的非共同因子最后一次性合并
      if (tmpObj1.hasOwnProperty(key)) {
        tmpObj[key] = tmpObj1[key] > tmpObj2[key] ? tmpObj1[key] : tmpObj2[key];
        delete (tmpObj1[key]);
        delete (tmpObj2[key]);
      }
    }
  }

  tmpObj = {
    ...tmpObj,
    ...tmpObj1,
    ...tmpObj2
  }

  // 根据最大因子数计算公倍数
  let accumulate = 1;
  for (const key in tmpObj) {
    if (Object.hasOwnProperty.call(tmpObj, key)) {
      const count = tmpObj[key];
      accumulate = accumulate * Number(key) * count;
    }
  }

  return accumulate;
}

console.log(least_common_multiple(5, 11))