const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const leftSide = array.slice(0, middle);
  const rightSide = array.slice(middle);

  return merge(mergeSort(leftSide), mergeSort(rightSide));
};

const merge = (leftSide, rightSide) => {
  const sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftSide.length && rightIndex < rightSide.length) {
    if (leftSide[leftIndex] > rightSide[rightIndex]) {
      sortedArray.push(rightSide[rightIndex]);
      rightIndex++;
    } else {
      sortedArray.push(leftSide[leftIndex]);
      leftIndex++;
    }
  }
  return [...sortedArray, ...leftSide.slice(leftIndex), ...rightSide.slice(rightIndex)];
};

module.exports = mergeSort;