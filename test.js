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


function twoNumberSum(array, target) {
    let copiedArray = array;
    let result = [];
    for (let index = 0; index < copiedArray.length; index++) {
        for (let index2 = index + 1; index2 < copiedArray.length; index2++) {
            if (copiedArray[index] + copiedArray[index2] === target) {
                result.push(copiedArray[index], copiedArray[index2]);
            }
        }
    }
    return result;
}

twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);


function reverse(string) {
    return string.split('').reverse().join('');
}

reverse('Greetings!')


function reverse2(string) {
    let reversed = '';
    for (let iterator of string) {
        reversed = iterator + reversed;
    }
}

reverse2('apple');


function reverse3(string) {
    let splittedArray = string.split('').reduce((reversed, b) => b + reversed, '');
    
    return splittedArray;
}

reverse3('apple');


function isPalindrome(string) {
    const originalString = string;
    const reversedString = originalString.split('').reverse().join('');
    
    return originalString === reversedString;
}

isPalindrome('abcdefg');


function isPalindrome2(string) {
    let count = 0;
    const originalString = string;

    for (let index = 0; index < originalString.length; index++) {
        for (let index2 = originalString.length - 1; index2 > 0; index2--) {
            if (originalString[index] === originalString[index2]) {
                count += 1;
            }
        }
    }

    return count === originalString.length;
}

isPalindrome2('abcdefg');

// Given a numbers, reverse them - be careful with negative numbers. Exclude zeros from number.
function reverseInt(int) {
    let convertedInt = int.toString();

    let splitted = convertedInt.split('').reverse();

    for (let index = 0; index < splitted.length; index++) {
        if (splitted[index] === '0') {
            splitted.splice(index, 1);
        }
    }

    if (splitted[splitted.length - 1] === '-') {
        splitted.pop();
        splitted.unshift('-');
    }

    return parseInt(splitted.join(''));

}

reverseInt(189);


function maxChar(string) {
    let copiedString = string;
    let chars = {};

    for (let char of copiedString) {
        chars[char] = chars[char] + 1 || 1;
    }

    return Object.keys(chars).reduce((a,b) => chars[a] > chars[b] ? a : b);
}

maxChar("apple 1231172911");


function fizzBuzz(number) {
    for (let index = 1; index <= number; index++) {
        if(index % 3 === 0 && index % 5 === 0) {
            console.log('fizzbuzz');
        } else if (index % 3 === 0) {
            console.log('fizz');
        } else if (index % 5 === 0) {
            console.log('buzz');
        }
        console.log(index);
    }
}

// fizzBuzz(51)


function arrayChunking(array, chunksSize) {
    let copiedArray = array;
    let newArr = [];
    let numberOfChunks = Math.ceil(copiedArray.length / chunksSize);

    for (let index = 0; index < numberOfChunks; index++) {
        newArr.push(copiedArray.splice(0, chunksSize));
    }

    return newArr;
}

arrayChunking([1, 2, 3, 4, 5], 2);

function arrayChunking2(array, chunkSize) {
    const chunked = [];

    for (let element of array) {
        const last = chunked[chunked.length - 1];

        if (!last || last.length === chunkSize) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }

    return chunked;
}

arrayChunking2([1, 2, 3, 4, 5], 2);


function anagarms(str1, str2) {
    const string1 = str1.replace(/[^\w]/g, '').toLowerCase();
    const string2 = str2.replace(/[^\w]/g, '').toLowerCase();

    const sortedFirstOne = string1.split('').sort();
    const sortedSecondOne = string2.split('').sort();

    return sortedFirstOne.every((value, index) => value === sortedSecondOne[index]);
}

anagarms('rail safety', 'fairy tales');


function anagrams2(string1, string2) {
    const charMap1 = {};
    const charMap2 = {};

    for (const char of string1.replace(/[^\w]/g, '').toLowerCase()) {
        charMap1[char] = charMap1[char] + 1 || 1;
    }

    for (const char of string2.replace(/[^\w]/g, '').toLowerCase()) {
        charMap2[char] = charMap2[char] + 1 || 1;
    }

    if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
        return false;
    }

    for (const char in charMap1) {
        if (charMap1[char] !== charMap2[char]) {
            return false;
        }
    }

    return false;

}

anagrams2('rail safety', 'fairy tales');


function startSentenceCloseToTarget(string, wordsBefore, wordsAfter, target) {
    let sentence = string;
    let arrayOfWords = sentence.toLowerCase().split(' ').map(word => word.replace(/\W/, ''));
    
    let indexOfMatchedWord = arrayOfWords.indexOf(target.toLowerCase());

    if (indexOfMatchedWord === -1) {
        return sentence;
    }

    let startIndex = indexOfMatchedWord - wordsBefore;
    let endIndex = indexOfMatchedWord + wordsAfter + 1;

    startIndex = startIndex < 0 ? 0 : startIndex;
    endIndex = endIndex >= arrayOfWords.length ? arrayOfWords.length : endIndex;

    let finalResult = sentence.split(' ').slice(startIndex, endIndex).join(' ');

    return finalResult;
}

startSentenceCloseToTarget('Gle malu vocku poslije kise, puna je kapi pa se njise! I blijesti suncem obasjana cudesna je raskos njenih grana. Al nek se sunce malko skrije nestane sve te carolije. I ona je opet kao prvo obicno malo jadno drvo.', 5, 5, 'carolije');


function makeKeywordBold(sentence, keyword) {
    let sentenceWords = sentence.toLowerCase().split(' ').map(word => word.replace(/\W/, ''));

    let indexOfMatchedWord = sentenceWords.indexOf(keyword.toLowerCase());

    if (indexOfMatchedWord === -1) return sentence;

    const originalArraySplitted = sentence.split(' ');
    
    for (let index = 0; index < originalArraySplitted.length; index++) {
        if (index === indexOfMatchedWord) {
            originalArraySplitted[index] = originalArraySplitted[index].replace(keyword, `<b>${keyword}</b>`);
        }
    }

    return originalArraySplitted.join(' ');
}

makeKeywordBold('Gle malu vocku poslije kise, puna je kapi pa se njise! I blijesti suncem obasjana cudesna je raskos njenih grana. Al nek se sunce malko skrije nestane sve te carolije. I ona je opet kao prvo obicno malo jadno drvo.', 'carolije')