require('locus');

function insertionSort (array) {
  // console.log('Array :', array);
  for (let i = 1; i < array.length; i++) {
    let firstUnsortedList = array[i];
    let j = i;

    while (j > 0 && array[j - 1] > firstUnsortedList) {
      // console.log('minus 1: ', array[j -1]);
      // console.log('First from unsortedList: ', firstUnsortedList);
      array[j] = array[j - 1];
      j = j - 1;
    }
    array[j] = firstUnsortedList;
  }
  return array;
}

// Data is divided into sorted and unsorted portions.
// One by one, the unsorted values are inserted into their appropriate positions in the sorted subarray.

// divide list into sorted portion

// first of list compared to sorted

// need to iterate over every element in the list except the first
// keep track of of current place in unsorted portion
// we will iterate through the sorted portion from right to left.
// shift element one space to the right
// inserting the element into the sorted portion of the list.

module.exports = insertionSort;