
const arr = [1, 2, 2, 3, 4];

function unique(array) {
  const tmpArr = [];

  array.forEach(item => {
    // 如果tmpArr数组没有，则直接push 
    // 同理此处用indexOf判断同样ok
    if (!tmpArr.some(i => i === item)) {
      tmpArr.push(item)
    }
  });

  return tmpArr;
}

console.log(unique(arr))