/**
 * 说明：
 *   写个转换函数，把一个JSON对象的key从下划线形式（Pascal）转换到小驼峰形式（Camel）
 * 示例：
 *   converter({"a_bc_def": 1,"_fgsd_jl": 2}); // 返回 {"aBcDef": 1}
 */

var str = "a_bc_def"
function toCamel(str) {
  const newStr = str.replace(/_\w/g, function (pipeiStr, index) {
    // tmp[index] = pipeiStr;
    return pipeiStr[1].toUpperCase()
  });
  // **forEach会自动过滤数组为empty的值**
  // tmp.forEach(item => {
  //   newStr = newStr.replace(item, item[1].toUpperCase())
  // });
  return newStr;
}

toCamel(str);

function converter(object) {

  const tmpObj = { ...object };
  for (const key in tmpObj) {
    if (Object.hasOwnProperty.call(tmpObj, key)) {
      // console.log(key, 'key');
      value = tmpObj[key];
      const newKey = toCamel(key);
      tmpObj[newKey] = value;
      delete tmpObj[key];
    }
  }
  return tmpObj;
}
// console.log(converter({ "a_bc_def": 1, "_fgsd_jl": 2 }));
