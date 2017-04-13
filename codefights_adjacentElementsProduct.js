/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

Input/Output

[time limit] 4000ms (js)
[input] array.integer inputArray

An array of integers containing at least two elements.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000.

[output] integer

The largest product of adjacent elements.
*/

function adjacentElementsProduct(inputArray) {
    //set variable to the product of the first two values
    var a = inputArray[0] * inputArray [1]
    //checks each value in the array to determine if the product of that value and the next value is larger than the current value of a; replaces a if so
    for (var x = 1; x < inputArray.length - 1; x++) {
        if ((inputArray[x]*inputArray[x+1]) > a){
            var a = inputArray[x]*inputArray[x+1];
        }
     }
    return a;
}
