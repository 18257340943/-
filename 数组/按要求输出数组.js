/**
 * 排序后输出 id
 * before 2，意思是排在 id 2 的前面，after 5，意思是排在 id 5 的后面
 * first 意思是排数组最前面，last 意思是排在数组最后面，可能有多个 first 和 last
 * @param {Array<Object>} list
 * @returns {Array<string>}
 * @example
 * [
 *  { id: '1', before: '2' },
 *  { id: '2', before: '3' },
 *  { id: '3', before: '6' },
 *  { id: '5', first: true },
 *  { id: '6', last: true },
 *  { id: '7', before: '5' },
 *  { id: '8', after: '6' },
 * ];
 * 输出为

 * ['7', '5', '1', '2', '3', '6', '8'];
 */

// 此题解题核心是移动元素，并且控制好索引的位置！
function sort(array) {
  const newArr = [...array];
  for (let index = 0; index < newArr.length;) {
    const item = newArr[index];
    if (Object.hasOwnProperty.call(item, 'before')) {
      newArr.splice(index, 1);
      const findIdx = newArr.findIndex(i => i?.id === item.before);
      newArr.splice(findIdx, 0, { id: item.id });
      if (findIdx > index) {
      } else {
        index++;
      }
    } else if (Object.hasOwnProperty.call(item, 'after')) {
      newArr.splice(index, 1);
      const findIdx = newArr.findIndex(i => i?.id === item.after);
      newArr.splice(findIdx + 1, 0, { id: item.id });
      if (findIdx > index) {
      } else {
        index++;
      }
    } else if (Object.hasOwnProperty.call(item, 'first')) {
      newArr.splice(index, 1);
      newArr.unshift({ id: item.id });
      index++;
    } else if (Object.hasOwnProperty.call(item, 'last')) {
      newArr.splice(index, 1);
      newArr.push({ id: item.id });
    } else {
      index++;
    }
  }
  return newArr.map(i => i.id);
}

console.log(sort([
  { id: '1', before: '2' },
  { id: '2', before: '3' },
  { id: '3', before: '6' },
  { id: '5', first: true },
  { id: '6', last: true },
  { id: '7', before: '5' },
  { id: '8', after: '6' },
]));

