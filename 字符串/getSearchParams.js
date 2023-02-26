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

function isJSON(str) {
  if (typeof str == 'string') {
    try {
      var obj = JSON.parse(str);
      if (typeof obj == 'object' && obj) {
        console.log(3)
        return true;
      } else {
        return false;
      }
    } catch {
      console.error("输入错误");
    }
  }
}


function getSearchParams(url) {
  const obj = {}
  const arr = url.split('?')[1].split('&');
  arr.forEach(element => {
    // %7B%22a%22%3A%22b%22%2C%22c%22%3A%22d%22%7D是对象类型将其判断一下；
    if (isJSON(element.split('=')[1])) {
      obj[element.split('=')[0]] = JSON.parse(element.split('=')[1]);
    } else {
      obj[element.split('=')[0]] = element.split('=')[1];
    }

  });
  console.log(obj, 'obj');
}


    // 测试代码请勿修改
    // console.log(JSON.stringify(
    //   getSearchParams(
    //     "https://fliggy.com/demo?name=feizhu&from=home&job=frontend&extraInfo=%7B%22a%22%3A%22b%22%2C%22c%22%3A%22d%22%7D"
    //   )
    // ));