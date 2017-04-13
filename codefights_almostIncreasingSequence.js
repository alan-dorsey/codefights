/*Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Example

For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false;

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

Input/Output

[time limit] 4000ms (js)
[input] array.integer sequence

Guaranteed constraints:
2 ≤ sequence.length ≤ 105,
-105 ≤ sequence[i] ≤ 105.

[output] boolean

Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.
*/

function almostIncreasingSequence(sequence) {
    var removed = 0;
    var startLoop = function (){
        for (var i=1; i < sequence.length;){
            //checks if index i is < index i-1
            if (sequence[i] <= sequence[i-1]){
                //checks for edge case of larger number needing to be removed and removes if so
                if (sequence[i] > sequence[i-2]){
                    sequence.splice(i-1,1);
                }
                //if not edge case, remove i
                else {
                    sequence.splice(i,1);
                }
                //increments indicator variable
                removed++;
            }
            //checks if indicator variable meets threshold of > 1 and returns if so
            else if (removed > 1){
                return;
            } else {i++;}
        }
    }

    //checks for index 0 being greater than index 1 and removes if so
    if (sequence[0] >= sequence[1]){
        sequence.splice(0,1);
        removed++;
    }
    startLoop();
    if (removed > 1){
        return false;
      }
    return true;
}
