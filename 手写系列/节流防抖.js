// 防抖（连续多个事件只执行最后一次）：每次事件触发就清除计时器，再过段时间执行；
function debounce(fn) {
  let timeout = null;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...arguments);
      clearTimeout(timeout);
    }, 1000);
  };
}

// 节流（连续执行事件，每隔一段时间执行一次）：首次不执行，依赖定时器，后续每间隔执行，
// 无定时器则创建定时器（并且定时执行回调，关闭），有定时器则不做任何处理
function throttle(fn) {
  let timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...arguments);
        clearTimeout(timer);
        timer = null;
      }, 1000)
    }
  };
}


// 时间戳版本：首次执行，后续每间隔一段时间执行
// 最初始时，prev保存了项目刚开始的时间；首次都会先执行一次，然后持续事件，判断后面的事件是否达到要求的时间间隔
// 达到就执行，并且更新prev值
function throttle1(func, delay) {
  var prev = Date.now();
  return function () {
    var now = Date.now();
    if (now - prev >= delay) {
      func(...arguments);
      prev = Date.now();
    }
  }
}

