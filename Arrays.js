//1. Reverse List Order 8 level
````
https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b
```
// My solution:

const reverseList = list =>  list.reverse();
````
//2. Calculate average 8 level
````
https://www.codewars.com/kata/calculate-average/javascript
````
//My solution:

const find_average = array => array.reduce((x,y)=>x+y)/array.length;
````
//3.Initialize my name 7level
````
https://www.codewars.com/kata/5768a693a3205e1cc100071f
````
//My solution:

function initializeNames(name){
nameArr=name.split(' ');
if(nameArr<3){return name;}
for (i=1;i<nameArr.length-1;i++){
nameArr[i]= nameArr[i][0]+'.';
}
return nameArr.join(' ');
}
````
https://www.codewars.com/kata/57cc975ed542d3148f00015b
````
//My solution:

const check = (a,x) => a.includes(x);

//5.Sum ALL the arrays! 7 level
````
https://www.codewars.com/kata/sum-all-the-arrays/javascript
````
//My solution:

function arraySum(arr) {
  return  arr.reduce((a, b) => a + (typeof(b) == "number" ? b : (typeof(b) == "object" ? arraySum(b) : 0)), 0);
}

//6. Man in the west 8 level
````
https://www.codewars.com/kata/59bd5dc270a3b7350c00008b
````
//My solution:

function checkTheBucket(bucket){
return bucket.includes('gold');
}

//7. Kata Example Twist 8 level
````
https://www.codewars.com/kata/525c1a07bb6dda6944000031
````

//My solution:
let websites = new Array(1000).fill("codewars");

//8. Invert values 8 leverl
````
https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

````
//My solution:

const invert = array => array.map(a => (a) ? a * -1 : a );

//9. Remove duplicates from list
````
https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
````
// My solution:

const distinct = a => [...new Set (a)];

//10.Write shortest function to calculate Average number of Array 7 level
````
https://www.codewars.com/kata/56c22cdbe0c0f7cae2001789
````
//My solution:

const avg = (a) => a.reduce((x, y) => x + y) / a.length

//11.Sort the odd 6 level
````
https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
````
let sortArray = function(arr) {
  let idx = arr.map((a, i) => a%2===1 ? i : '').filter(a => a !== '');
  let odds = arr.filter(a => a % 2 === 1).sort((a,b) => a - b);
  for(let i = 0; i < idx.length; i+=1) {
    arr[idx[i]] = odds[i];
  }
  return arr;
}

//12. Array Array Array 7 level
````
https://www.codewars.com/kata/array-array-array/javascript
````
//My solution:
let explode = x => {
  let n = x.filter(a => !isNaN(a)).reduce((b, n) => b + n, 0);
  return n ? Array(n).fill(x) : 'Void!';
}

//13.Create Four Letter Birding Codes from Bird Names 6 level
````
https://www.codewars.com/kata/create-four-letter-birding-codes-from-bird-names/javascript
````
//My solution:

function birdCode(arr){
let fourLetterCode = [];
let subArray = [];

for (let i = 0; i < arr.length; i++){
subArray = arr[i].replace(/-/g,' ').toUpperCase().split(' '); // .split(/[ -]/);
switch(subArray.length){
  case 1 :  fourLetterCode.push(subArray[0].slice(0,4)); break;
  case 2 :  fourLetterCode.push(subArray[0].slice(0,2) + subArray[1].slice(0,2)); break;
  case 3 :  fourLetterCode.push(subArray[0][0] + subArray[1][0] +subArray[2].slice(0,2)); break;
  default:  fourLetterCode.push(subArray[0][0] + subArray[1][0] + subArray[2][0] + subArray[3][0]);
  }
}
return fourLetterCode;
}








