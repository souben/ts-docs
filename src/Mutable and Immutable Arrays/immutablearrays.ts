// The read only array :
// The ReadonlyArray is a generic array that only allows you to read from the array once it’s constructed

let list: ReadonlyArray<number> = [1, 2]
//list.push(3);
console.log(list[0]);

let list2: readonly number[] = [1, 2];
list2 = [3, 4, 3, 5];
console.log(list2);


/* 
WHAT'S THE DIFFERENCE BETWEEN :
  - READ-ONLY ARRAY
  - CONST ARRAY
  The answer is that a constant array won’t 
  let you assign values to a list while
  a read-only array blocks you from
  changing values.
*/
