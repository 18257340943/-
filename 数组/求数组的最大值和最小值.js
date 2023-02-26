

const arr = [4, 6, 8, 9, 33534];

function arrMax(array) {
  let MAX = 0;
  array.forEach(item => {
    if (item > MAX) {
      MAX = item;
    }
  });

  return MAX
}

module.exports.arrMax = arrMax

