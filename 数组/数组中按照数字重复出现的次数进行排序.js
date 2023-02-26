
// 如果次数相同 则按照值排序 比如  2, 2, 2和 1, 1, 1  应排序为 [1, 1, 1, 2, 2, 2]
// 比如 [1,2,1,2,1,3,4,5,4,5,5,2,2] => [3, 4, 4, 1, 1, 1, 5, 5, 5, 2, 2, 2, 2]

function repeatSort(array) {
  const tmpArr = [];
  const tmpObj = {}; // tmpObj =  { val: count }

  // 对象默认key顺序按照原数组的来
  array.forEach(item => {
    tmpObj[item] = tmpObj[item] ? tmpObj[item] += 1 : 1;
  });

  // 根据object的value值，每轮找出最大的count，然后放在数组队头，然后删除object最大键值，直到对象为空
  while (Object.keys(tmpObj).length > 0) {
    let maxVal, maxCount = 0;
    // 每轮找出重复次数最多的值
    for (const key in tmpObj) {
      if (Object.hasOwnProperty.call(tmpObj, key)) {
        const count = tmpObj[key];
        if (count > maxCount) {
          maxCount = count;
          maxVal = key;
        }
      }
    }
    delete (tmpObj[maxVal]);
    // 重复次数最多的放在最后
    for (let i = 0; i < maxCount; i++) {
      tmpArr.unshift(Number(maxVal));
    }
  }

  return tmpArr;
}



console.log(repeatSort([1, 2, 1, 2, 1, 3, 4, 5, 4, 5, 5, 2, 2]));