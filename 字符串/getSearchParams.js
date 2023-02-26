// 编写一个 JavaScript 函数 getSearchParams()

// 它的用途是把一个url query字符串解析为一个对象，如果某个值是一个json，也需要把它解析为一个对象，如：

// const url = "https://fliggy.com/demo?name=feizhu&from=home&job=frontend&extraInfo=%7B%22a%22%3A%22b%22%2C%22c%22%3A%22d%22%7D"
// const params= getSearchParams(url)
// params结果为:

// {
//   name:"feizhu",
//   from:'home',
//   job:'frontend',
//   extraInfo: {a: 'b', c: 'd'}
// }
// console.log(JSON.parse(decodeURIComponent("%7B%22a%22%3A%22b%22%2C%22c%22%3A%22d%22%7D")));

function getSearchParams(url) {
  const obj = {}
  const paramsStr = url.split('?')[1];    // 将 ? 后面的字符串取出来
  const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中

  paramsArr.forEach(element => {
    let [key, val] = element.split('=');
    // %7B%22a%22%3A%22b%22%2C%22c%22%3A%22d%22%7D 是中文需要解码；
    if (val[0] == "%") {
      val = decodeURIComponent(val);
      if (val[0] == '{') {
        val = JSON.parse(val);
      }
    }
    obj[key] = val;
  });
  return obj
}


// 测试代码请勿修改
console.log(JSON.stringify(
  getSearchParams(
    "https://fliggy.com/demo?name=feizhu&from=home&job=frontend&extraInfo=%7B%22a%22%3A%22b%22%2C%22c%22%3A%22d%22%7D"
  )
));