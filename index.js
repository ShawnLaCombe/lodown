'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the action 
 * Function to each value in the collection.
 * 
 * @param {Array or Object} collection The collection over which to iterate.
 * @param {Function} action The Function to be applied to each value in the 
 * collection
 */
 
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Returns a value unchanged.
 * Exmaples:
 *  _.identity(5) === 5;
 *  _.identity({a: "b"}) === {a: "b"}
 * 
 * @param {Any}: Any object or value.
 * @return{Any}: The object or value that was passed in.
 */
 
function identity(anything){
    return anything;    
}
module.exports.identity = identity;

/** 
* typeOf(): Returns the type of object or value as a string.
* Types are one of:
*   - "string"
*   - "array"
*   - "object"
*   - "undefined"
*   - "number"
*   - "boolean"
*   - "null"
*   - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
* @param {Any}: Any object or value.
* @return "string": The object or value that was passed in.
*/
 
function typeOf (anything){
   if(anything === null) {
        return anything = "null";
   }else if(Array.isArray(anything)){
       return "array";
   }
    return typeof anything;    
}
module.exports.typeOf = typeOf;

/**
 * first:
 * 
 * 
 */
 
function first(arr, number){
    var newArr = [];
    if(!Array.isArray(arr)){
        return [];
    }else if(isNaN(number) || number === undefined ){
        return arr[0];   
    }else if(number < 0){ 
        return newArr;
    }else if(number > arr.length){
        return arr;
    }else{ 
        for(var i =0; i < number; i++){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
module.exports.first = first;

/**
 * last:
 * 
 * 
 */

function last(arr, number){
   var newArr = [];
    if(!Array.isArray(arr)){
        return [];
    }else if(isNaN(number) || number === undefined ){
        return arr[arr.length - 1];   
    }else if(number < 0){ 
        return newArr;
    }else if(number > arr.length){
        return arr;
    }else{ 
        for(var i =arr.length - number; i < arr.length; i++){
            newArr.push(arr[i]);
        }
    }
    return newArr;
    } 
    
module.exports.last = last;

/**
 * indexOf:
 * 
 * 
 */ 
 
function indexOf(arr, value){
     var x = -1;
     var y =[];
    each(arr, function(el, i, arr){
       
    if(value === el && value !== x ) { // el = one value in the array, it is a string // arr = entire array
            y.push(i); 
        }
    });
    if (y[0] === undefined){
        return x;
    }
    
    return y[0]; 
}
module.exports.indexOf = indexOf;

/**
 * filter:
 * 
 * 
 */ 

function filter(arr, test){
    var newArr= [];
    each(arr, (el, i, arr) =>{
        if(test(el, i, arr)){ 
        newArr.push(el);
    }
    });
    return newArr;
}
module.exports.filter = filter;

/**
 * reject:
 * 
 * 
 */ 

function reject(arr, test){
    let newArr = [];
    each(arr, (el, i, arr) =>{
        if(!test(el, i, arr)){
            newArr.push(el);
        }
    });
    
    return newArr;   
}
module.exports.reject = reject;

/**
 * partition:
 * 
 * 
 */ 
 
 function partition(arr, fn) {
    var truthArr = [];
    var falseArr = [];
    each(arr, (el, i, arr) =>{
        if(fn(el, i , arr)){
            truthArr.push(el);
        }else{
            falseArr.push(el);
        } 
            
              
    });

return [truthArr, falseArr];
}
module.exports.partition = partition;

/**
 * partition:
 * 
 * 
 */
 
function unique(arr) {
    var newArr =[];
        each(arr, function(el, i, arr) { // arr and parameters in a function of arr
            if(newArr.indexOf(el) === -1){
                newArr.push(el);
            }
        });
return newArr;   
}
module.exports.unique = unique;

/**
 * unique:
 * 
 * 
 */

function map(col, fn){
    var values =[];
    each(col, (el, i, col) =>{
       values.push(fn(el, i, col))
    });
    return values;
} 
module.exports.map = map;

/**
 * map:
 * 
 * 
 */
 

function pluck(arrOfObj, prop){
    var values = [];
    map(arrOfObj, function(el, i, col){
        values.push(el[prop]);
    });
    return values;
};
module.exports.pluck = pluck;

/** _.pluck()
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/ 

function every(col, test) {
    if(!test) test = identity;
    let passed = true;
    each(col, (item, i, col) =>{
        if(!test(item, i, col)) passed = false;
});
    return passed;
};

/** _.every()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
module.exports.every = every;


function contains(array, value){
    var output = false;
    each(array, function(el, i, arr){
        output =array[i] === value || output === true ? output = true : output = false;
    
    })
    return output;
  
}

/** _.contains()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Gotchas:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*   _.contains([1,"taco", 3.14], "two") -> false
*/

module.exports.contains = contains;

function some(col,func){
    if(func === undefined) func = identity;
    var passed = false;
        each(col, function(el, i, col){
        if(func(el, i, col) || passed === true) passed = true;
        });
        return passed;
 }   
/** _.some()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

module.exports.some = some;

function reduce(col, func, seed){
     if(seed === undefined){
         var previous = col[0];
     }else previous = seed;
     console.log(previous);
     each(col, (el, i, list)=>{
         previous = func(previous, el, i);
     });
     return previous;
}; 

module.exports.reduce = reduce;
/** _.reduce()
// * Arguments:
// *   1) An array
// *   2) A function
// *   3) A seed
// * Objectives:
// *   1) Call <function> for every element in <collection> passing the arguments:
// *         previous result, element, index
// *   2) Use the return value of <function> as the "previous result"
// *      for the next iteration
// *   3) On the very first iteration, use <seed> as the "previous result"
// *   4) If no <seed> was given, use the first element/value of <collection> as <seed>
// *   5) After the last iteration, return the return value of the final <function> call
// * Gotchas:
// *   1) What if <seed> is not given?
// * Examples:
// *   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
// */

module.exports.extend = extend;

function extend(...objects){
    const target = objects[0];
    each(objects, (obj, i, objects) =>{
        if(i === 0) {
            return;
        }
        each(obj, (val, key, obj) => {
            target[key] = val;    
    });
    
})
return target;
}
module.exports.extend = extend;

/**
 * extend:
 * 
 * 
 */

