
const arr = [3, 5, 7];

function MyIndexOf(array, value) {

  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    if (item === value) {
      return index
    } else {
      return -1
    }
  }

  return index
}

console.log(MyIndexOf(arr, 90))