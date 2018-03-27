let unsorted = [5, 4, 3, 2, 1];

function bubbleSort (array) {
  // loop through our array from start to finish
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      // if the element before the one we're currently checking
      // is LARGER
      if (array[j - 1] > array[j]) {
        // eval(locus)exit
        // swap the two elements by assigning them to their new positions
        // [ index0, index1 ] = [index1, index0]
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
        // for each iteration we want to subtract by 1
      }
    }
  }
  return array;
}

let sorted = bubbleSort(unsorted);

export default bubbleSort;

// for each iteration we want to subtract by 1