/*
Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true.
Input/Output

[time limit] 4000ms (js)
[input] string inputString

A non-empty string consisting of lowercase characters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 10.
*/

function checkPalindrome(inputString) {
    //variable set to be used as indicator for return value
    var a = 0;
    //loop through string characters and check for condition that indicates palindrome and increment a if condition exists
    for (var x = 0; x < inputString.length; x++){
        //checks that each index of the string is equal to its counterpart on the other end of the string and increments indicator variable if so
        if (inputString[x] == inputString[inputString.length - (x + 1)]){
            a++;
            }
    }
    console.log(a);
    //if every value checked in the loop meets condition, a will be equal to length of string
    if (a == inputString.length){
        return true;
    }
        return false;
}
