const quickSort = (array) => {
  if (array.length <= 1) return array;
  let pivot = array.slice(array.length - 1);
  const lessThanArray = [];
  const greaterThanArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      lessThanArray.push(array[i]);
    } else {
      greaterThanArray.push(array[i])
    }
  }
  return [...quickSort(lessThanArray), ...pivot, ...quickSort(greaterThanArray)];
};

module.exports = quickSort;