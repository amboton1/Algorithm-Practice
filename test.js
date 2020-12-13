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

// Removing duplicates of an array and returning an array of only unique elements

function removingDuplicates(array) {
    let uniqueCollection = [... new Set(array)]
    return uniqueCollection;
}

removingDuplicates([1, 2, 3, 5, 1, 5, 9, 1, 2, 8])


//Find the intersection of two arrays. An intersection would be the common elements that exists within both arrays. In this case, these elements should be unique!
function findIntersection(array1, array2) {
    let firstArr = array1;
    let secondArr = array2;

    const result = firstArr.filter(val => secondArr.includes(val));

    return result;
}

findIntersection([2, 2, 4, 1], [1, 2, 0, 2]);


// Given a string, reverse each word in the sentence
function reverseSentence(string) {
    let sentenceArray = string.split('').reverse().join('');
    let reverseAgain = sentenceArray.split(' ').reverse().join(' ');
    
    return reverseAgain;
}

reverseSentence('Welcome to this Javascript Guide!')


// Given two arrays of temperatures, return difference of min and max temperature.
function calcTempAmplitude(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2];
    const minTemp = Math.min(...mergedArray);
    const maxTemp = Math.max(...mergedArray);
    
    return maxTemp - minTemp;
}

calcTempAmplitude([3, -2, -6, -1, 3, 5, 9],[9, 13, 17, 15, 14, 9, 5]);


// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
function twoSum(array, target) {
    const nums = array;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] + nums[index + 1] === target) {
            return [index, index + 1]
        }
    }
}

twoSum([2, 7, 11, 15], 9);


//Given a binary array, find the maximum number of consecutive 1s in this array. The input array will only contain 0 and 1.
function maxConsecutiveOnes(array) {
    const binaryArray = array;
    let counter = 0;
    for (let index = 0; index < binaryArray.length; index++) {
        if (binaryArray[index] === 1) {
            counter += 1;
        } else {
            counter = 0;
        }
    }

    return counter;
}

maxConsecutiveOnes([1,1,0,1,1,1,0,1,1,1,1]);


// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
function mergeSortedArray(arr1, arr2) {
    let mergedArray = arr1.splice(0, arr2.length).concat(arr2).sort((a,b) => a - b);
    return mergedArray;
}

mergeSortedArray([1,2,3,0,0,0], [2,5,6])


// Given an array, nums , of n integers, find all unique triplets (three numbers, a, b, & c) in nums such that a + b + c = 0. Note that there may not be any triplets that sum to zero in nums , and that the triplets must not be duplicates.
function sumZero(array) {
    const newArr = array;
    let lust = [];
    for (let index = 0; index < newArr.length; index++) {
        for (let index2 = 1; index2 < newArr.length; index2++) {
            for (let index3 = 2; index3 < newArr.length; index3++) {
                if(newArr[index] + newArr[index2] + newArr[index3] === 0) {
                    lust.push(newArr[index], newArr[index2], newArr[index3])
                }
            }
        }
    }
    return lust;
}

sumZero([0, -1, 2, -3, 1])


//Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
function consecutiveOddNumbers(array) {
    let copyArray = array;
    let bool = 0;

    for (let index = 1; index < array.length; index++) {
        if ((copyArray[index - 1]) % 2 !== 0) {
            bool += 1;
            if (bool === 3) return true;
        }
    }
    return false;
}

consecutiveOddNumbers([1.7,8,2,4,5,11,7]);