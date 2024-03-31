// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223 
function q1(num) {
    let result = "";
    const str = num.toString();
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return +result;
}

const i1 = 32243;
const r1 = q1(i1);
console.log('q1: ', r1);

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function q2(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i++] !== str[j--]) {
            return false;
        }
    }
    return true;
}

const i2 = "aabbaa";
const r2 = q2(i2);
console.log('q2: ', r2);

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g
function q3(str) {
    let result = new Set();
    dfs(str, "", 0 ,result);
    return Array.from(result);
}

function dfs(input, str, index, result) {
    if (index === input.length) {
        return;
    }
    str += input[index];
    result.add(str);
    dfs(input, str, index + 1, result);
    str = str.substring(index + 1);
    result.add(str);
    dfs(input, str, index + 1, result);
}

const i3 = "dog";
const r3 = q3(i3);
console.log('q3: ', r3);

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function q4(str) {
    return str.split('').sort().join('');
}

const i4 = "webmaster";
const r4 = q4(i4);
console.log('q4: ', r4);

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '
function q5(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i === 0 || str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        }
        else {
            result += str[i];
        }
    }
    return result;
}

const i5 = "the quick brown fox";
const r5 = q5(i5);
console.log('q5: ', r5);

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'
function q6(str) {
    let array = str.split(' ');
    let max = Number.MIN_VALUE;
    let result = '';
    for (let s of array) {
        if (s.length > max) {
            max = s.length;
            result = s;
        }
    }
    return result;
}

const i6 = "Web Development Tutorial"
const r6 = q6(i6);
console.log('q6: ', r6);

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5
function q7(i7) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    let array = i7.split('');
    array.forEach((char) => {
        if (vowels.has(char)) {
            count++;
        }
    });
    return count;
}

const i7 = 'The quick brown fox';
const r7 = q7(i7);
console.log('q7: ', r7);

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function q8(num) {
    // one is not a prime number
    if (num === 1) {
        return false;
    }
    for (let i = 2; i <= num; i++) {
        if (num != i && num % i === 0) {
            return false;
        }
    }
    return true;
}

const i8 = 23;
const r8 = q8(i8);
console.log('q8: ', r8);

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function q9(input) {
    return typeof input;
}

const i9 = new Set();
const r9 = q9(i9);
console.log('q9: ', r9);

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function q10(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push(0);
        }
        matrix.push(row);
    }
    return matrix;
}

const i10 = 3;
const r10 = q10(i10);
console.log('q10: ', r10);

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 
function q11(array) {
    array.sort((a, b) => a - b);
    return [array[1], array[array.length - 2]];
}

const i11 = [1,2,3,4,5];
const r11 = q11(i11);
console.log('q11: ', r11);

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function q12(num) {
    let divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    let sum = divisors.reduce((sum, cur) => sum += cur);
    return sum / 2 === num;
}

const i12 = 8128;
const r12 = q12(i12);
console.log('q12: ', r12);

// 13. Write a JavaScript function to compute the factors of a positive integer.
function q13(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

const i13 = 28;
const r13 = q13(i13);
console.log('q13: ', r13);

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1
function q14(amount, coins) {
    let remains = amount;
    let result = [];
    for (let c of coins) {
        while (remains >= c) {
            remains -= c;
            result.push(c);
        }
    }
    return result;
}

const r14 = q14(46, [25, 10, 5, 2, 1]);
console.log('q14: ', r14);

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
function q15(b, n) {
    if (n === 0) {
        return 1;
    }
    if (n % 2 === 0) {
        let halfPower = q15(b, n / 2);
        return halfPower * halfPower;
    }
    else {
        return b * q15(b, n - 1);
    }
}

const r15 = q15(2, 5);
console.log('q15: ', r15);

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
function q16(str) {
    let set = new Set();
    for (let char of str) {
        set.add(char);
    }
    return Array.from(set).join('');
}

const i16 = "thequickbrownfoxjumpsoverthelazydog";
const r16 = q16(i16);
console.log('q16: ', r16);

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function q17(str) {
    let map = new Map();
    for (let char of str) {
        if (char in map) {
            map[char]++;
        }
        else {
            map[char] = 1;
        }
    }
    return map;
}

const i17 = "aaabbc";
const r17 = q17(i17);
console.log('q17: ', r17);

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
function q18(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (array[mid] === target) {
            return mid;
        }
        else if (array[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}

const r18 = q18([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23);
console.log('q18: ', r18);

// 19. Write a JavaScript function that returns array elements larger than a number.
function q19(array, num) {
    return array.filter((item) => item > num);
}

const r19 = q19([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23);
console.log('q19: ', r19);

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function q20(n) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = characters.length;
    for (let i = 0; i < n; i++) {
        result += characters.charAt(Math.floor(Math.random() * length));
    }

    return result;
}

const r20 = q20(50);
console.log('q20: ', r20);

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]
function q21(array, n) {
    if (n >= array.length) {
        return array;
    }
    let result = [];
    function dfs(index, cur) {
        if (cur.length === n) {
            result.push([...cur]);
            return;
        }
        for (let i = index; i < array.length; i++) {
            cur.push(array[i]);
            dfs(i + 1, cur);
            cur.pop();
        }
    }
    dfs(0, []);
    return result;
}

const r21 = q21([1, 2, 3], 2);
console.log('q21: ', r21);

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3
function q22(str, target) {
    let count = 0;
    for (let char of str) {
        if (char === target) {
            count++;
        }
    }
    return count;
}

const r22 = q22('microsoft.com', 'o');
console.log('q22: ', r22);

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 
function q23(str) {
    let first = '';
    let set = new Set();
    for (let c of str) {
        if (!set.has(c)) {
            first = c;
            set.add(c);
        }
    }
    return first;
}

const i23 = 'abacddbec';
const r23 = q23(i23);
console.log('q23: ', r23);

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
function q24(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const i24 = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 21];
const r24 = q24(i24);
console.log('q24: ', r24);

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
function q25(arr) {
    let result = '';
    let max = 0;
    for (let a of arr) {
        if (a.length > max) {
            max = a.length;
            result = a;
        }
    }
    return result;
}

const i25 = ["Australia", "Germany", "United States of America"];
const r25 = q25(i25);
console.log('q25: ', r25);