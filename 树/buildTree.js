/*
 * @Author: RZJ
 * @Date: 2023-01-16 15:17:46
 * @LastEditors: hyman
 * @LastEditTime: 2023-02-26 19:55:06
 * @Description: 请填写简介
 */

/* 入参格式参考：
const arr = [
  { id: 1, name: "i1" },
  { id: 2, name: "i2", parentId: 1 },
  { id: 4, name: "i4", parentId: 3 },
  { id: 3, name: "i3", parentId: 2 },
  { id: 8, name: "i8", parentId: 7 }
];
出参格式可自行设计, 举例：
const printf = {
  id: 1,
  name: 'i1',
  children: [
    {
      id: 2,
      name: 'i2',
      children: []
    }
  ]
} */

function buildTree1(arr) {
  const tmpArr = [...arr];
  for (let index = 0; index < tmpArr.length; index++) {
    const item = tmpArr[index];
    if (Object.hasOwnProperty.call(item, 'parentId')) {
      tmpArr.splice(index, 1);
      const findIdx = tmpArr.findIndex(i => i.id === item.parentId);
      if (findIdx === -1) {
        continue;
      }
      tmpArr[findIdx].children = tmpArr[findIdx].children ? [...tmpArr[findIdx].children, item] : [item];
    }
  }
  return tmpArr;
}

console.log(buildTree1([
  { id: 1, name: "i1" },
  { id: 2, name: "i2", parentId: 1 },
  { id: 4, name: "i4", parentId: 3 },
  { id: 3, name: "i3", parentId: 2 },
  { id: 8, name: "i8", parentId: 7 }
]))




