const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  // let pivot = array.slice(array.length - 1);
  let pivot = array[array.length - 1];
  // let pivot = array.splice(Math.floor(array.length / 2), 1);
  const less = [];
  const greater = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] <= pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), ...pivot, ...quickSort(greater)];
};

module.exports = quickSort;