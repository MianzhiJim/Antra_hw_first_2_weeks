const arr = [1,2,3,4,5,10,11,12,13,14,15];

Array.prototype.myFilter = function(callbackFn, thisArg) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        let valid = thisArg === undefined ? callbackFn(this[i]) : callbackFn(this[i], thisArg);
        if (valid) {
            result.push(this[i]);
        }
    }
    return result;
};

// Array.myFilter(callbackFn);
const newArr1 = arr.myFilter((item) => item % 2 !== 0);
console.log('Result from arr.Myfilter(callbackFn): ', newArr1);

// // Array.myFilter(callbackFn, thisArg);
var range = { min: 10, max: 20 };
const newArr2 = arr.myFilter((item) => item % 2 !== 0 && item >= range.min && item <= range.max, range);
console.log('Result from arr.Myfilter(callbackFn, thisArg): ', newArr2);

Array.prototype.myReduce = function(callbackFn, initialValue) {
    let result = initialValue === undefined ? 0 : initialValue;
    for (let item of this) {
        result = callbackFn(result, item);
    }
    return result;
};

// Array.myReduce(callbackFn)
const result1 = arr.myReduce((sum, item) => sum += item);
console.log(`Result from arr.myReduce(callbackFn): ${result1}`);

// Array.myReduce(callbackFn, initialValue)
const result2 = arr.myReduce((sum, item) => sum += item, 10);
console.log(`Result from arr.myReduce(callbackFn, initialValue): ${result2}`);