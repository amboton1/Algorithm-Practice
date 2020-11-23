//Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value. Your algorithm's runtime complexity must be in the order of O(log n).
function getIndex(arrayOfNumbers, target) {
    let arrOfNums = arrayOfNumbers;
    let indexOfTarget = [];
    let counter = 0;

    for (let index = 0; index < arrOfNums.length; index++) {
        if (arrOfNums[index] === target) {
            indexOfTarget.push(index);
        } else {
            counter += 1;
        }
    }
    if (counter === arrOfNums.length) indexOfTarget.push(-1, -1);

    return indexOfTarget;
}

getIndex([1, 3, 5, 7], 5);


// Given a multiset of integers, return whether it can be partitioned into two subsets whose sums are the same.
function getEqualSum(setOfIntegers) {
    let arrayCopy = setOfIntegers;
    let firstMaxNumber = Math.max(...arrayCopy);
    let spliceFirstMaxNumber = Number(arrayCopy.splice(arrayCopy.indexOf(firstMaxNumber), 1));

    let secondMaxNumber = Math.max(...arrayCopy);
    let spliceSecondMaxNumber = Number(arrayCopy.splice(arrayCopy.indexOf(secondMaxNumber), 1));

    let sumOfTwoMaxNumbers = spliceFirstMaxNumber + spliceSecondMaxNumber;
    let sumOfArrayElements = arrayCopy.reduce((a, b) => a + b)

    return sumOfArrayElements === sumOfTwoMaxNumbers ? true : false;
}

getEqualSum([15, 5, 20, 10, 35, 15, 10])

// Given a multiset of integers, return whether it can be partitioned into two subsets whose sums are the same.
function getEqualSum2(setOfInt) {
    let sortedArray = setOfInt.sort((a, b) => b - a);
    let twoMaxNumbers = sortedArray[0] + sortedArray[1];
    let sumOfLeftoverNumbers = 0;

    for (let index = 2; index < sortedArray.length; index++) {
        sumOfLeftoverNumbers += sortedArray[index];
    }

    return twoMaxNumbers === sumOfLeftoverNumbers ? true : false;
}

getEqualSum2([15, 5, 20, 10, 35, 15, 10]);


// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
function moveAllZerosToEnd(arrayOfNumbers) {
    let arrOfNums = arrayOfNumbers;
    let zerosArr = [];
    let nonZeros = [];
    let resultsArray = [];

    for (let index = 0; index < arrOfNums.length; index++) {
        if (arrOfNums[index] !== 0) {
            nonZeros.push(arrOfNums[index]);
        } else {
            zerosArr.push(arrOfNums[index]);
        }
    }

    resultsArray.push(...nonZeros, ...zerosArr);
    return resultsArray;
}

moveAllZerosToEnd([0,1,0,3,12]);