const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
import bubbleSort from './bubbleSort';
// import randomArray from './randomArray';

describe('Bubble Sort Testing', function () {
  it('should return an array of the same length', function () {
    let arr = [5, 4, 3, 1, 2];
    bubbleSort(arr);
    assert.lengthOf(arr, 5, 'array return from bubble sort should have 5');
  });
  it('Should sort the array of numbers', function () {
    let arr = [5, 3, 1, 2, 4];
    bubbleSort(arr);
    assert.deepEqual(arr, [1, 2, 3, 4, 5]);
  });
  it('Should sort letters', function () {
    let arr = ['d', 'a', 'c', 'b', 'e'];
    bubbleSort(arr);
    assert.deepEqual(arr, ['a', 'b', 'c', 'd', 'e']);
  });
  it('Should sort random array', function () {
    let arr = randomArray(1000);
    bubbleSort(arr);
    assert.deepEqual(arr.sort(), arr)
  });
  it('Should return an array', function () {
    let arr = randomArray(10);
    bubbleSort(arr);
    assert.equal(Array.isArray(arr), true)
  });
});

// map
// object.assign
//

// sort numbers
// sort a very large array
// sort letters

// function returns an array
// return array of same length
// sorted array vs array sort.
// arrays don't equal each other

