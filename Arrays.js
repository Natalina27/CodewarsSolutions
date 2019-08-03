## Arrays methods

//1. Reverse List Order 8 level
```
* https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b
```javascript
const reverseList = list =>  list.reverse();

```
//2. Calculate average 8 level
```
* https://www.codewars.com/kata/calculate-average/javascript

```javascript

const find_average = array => array.reduce((x,y)=>x+y)/array.length;
````
//3.Initialize my name 7level
```
* https://www.codewars.com/kata/5768a693a3205e1cc100071f
```javascript

function initializeNames(name){
nameArr=name.split(' ');
if(nameArr<3){return name;}
for (i=1;i<nameArr.length-1;i++){
nameArr[i]= nameArr[i][0]+'.';
}
return nameArr.join(' ');
}
```

//4. You only need one- Begginer

* https://www.codewars.com/kata/57cc975ed542d3148f00015b
```javascript

const check = (a,x) => a.includes(x);
```
//5.Sum ALL the arrays! 7 level

* https://www.codewars.com/kata/sum-all-the-arrays/javascript
```javascript

function arraySum(arr) {
  return  arr.reduce((a, b) => a + (typeof(b) == "number" ? b : (typeof(b) == "object" ? arraySum(b) : 0)), 0);
}
```
//6. Man in the west 8 level

* https://www.codewars.com/kata/59bd5dc270a3b7350c00008b
```javascript

function checkTheBucket(bucket){
return bucket.includes('gold');
}
```
//7. Kata Example Twist 8 level
* https://www.codewars.com/kata/525c1a07bb6dda6944000031
```javascript
let websites = new Array(1000).fill("codewars");
```

//8. Invert values 8 leverl
* https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

```javascript

const invert = array => array.map(a => (a) ? a * -1 : a );
```
//9. Remove duplicates from list
* https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
```javascript

const distinct = a => [...new Set (a)];
```
//10.Write shortest function to calculate Average number of Array 7 level
* https://www.codewars.com/kata/56c22cdbe0c0f7cae2001789
```javascript
const avg = (a) => a.reduce((x, y) => x + y) / a.length
```

//11.Sort the odd 6 level
````
* https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
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
* https://www.codewars.com/kata/array-array-array/javascript
````
//My solution:
let explode = x => {
  let n = x.filter(a => !isNaN(a)).reduce((b, n) => b + n, 0);
  return n ? Array(n).fill(x) : 'Void!';
}

//13.Create Four Letter Birding Codes from Bird Names 6 level
````
* https://www.codewars.com/kata/create-four-letter-birding-codes-from-bird-names/javascript
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

//14.String Reordering 7 level
````
* https://www.codewars.com/kata/string-reordering/javascript
````
//My solution:
function sentence(a) {
  return a.sort((a,b)=>Object.keys(a)-Object.keys(b)).map(x=>x[+Object.keys(x)]).join` `;
}

//15.Arrays Similar 6level
````
* https://www.codewars.com/kata/51e704f2d8dbace389000279
````
//My solution 1:
function arraysSimilar(arr1, arr2) {
  arr1 = arr1.sort(sortFunc);
  arr2 = arr2.sort(sortFunc);
  return arr1.length == arr2.length && arr1.every(function(a,i) {return a === arr2[i];});
}

function sortFunc(a,b) {return a-b;}

//My solution 2:
function arraysSimilar(arr1, arr2) {
return JSON.stringify(arr1.sort())===JSON.stringify(arr2.sort());
}

//16. A gift well spent 7level
````
* https://www.codewars.com/kata/54554846126a002d5b000854
````
//My solution:
let buy = function(x, arr){
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i]+arr[j] === x) {
        return [i ,j];
      }
    }
  }

  return null;
};

//17. Maximum Triplet Sum (Array Series #7) 7level
````
* https://www.codewars.com/kata/5aa1bcda373c2eb596000112
````
//My solution:
function maxTriSum(numbers){
 let set = new Set(numbers);
  set = [...set].sort((a, b) => b - a);
  return set[0] + set[1] + set[2];
}

//18. Where my anagrams at? 5level
````
* https://www.codewars.com/kata/where-my-anagrams-at/javascript
````
//My solution:

function anagrams(word, words) {
  word = word.split('').sort().join('');
  return words.filter(function(v) {return word == v.split('').sort().join('');});
}

//19.Abbreviate a Two Word Name 8level
````
* https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
````
//My solution:
function abbrevName(name){
return name[0].toUpperCase()+'.'+ name.charAt(name.indexOf(' ')+1).toUpperCase();
}

//20. A needle in the Haystack 8level
````
* https://www.codewars.com/kata/a-needle-in-the-haystack/javascript
````
//My solution:
function findNeedle(haystack) {
  return "found the needle at position "+haystack.indexOf('needle');
}

//21.Sort and star 8level
````
* https://www.codewars.com/kata/sort-and-star/javascript
````
//My solution:

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

//22. Are the numbers in order? 7 level
* https://www.codewars.com/kata/are-the-numbers-in-order/javascript

```javascript
function inAscOrder(arr) {
  return arr.every((elem,i) => i===0 || arr[i] > arr[i-1]);

}

```
//23. Find the missing element between two arrays 7level
* https://www.codewars.com/kata/5a5915b8d39ec5aa18000030

```javascript
function findMissing(arr1, arr2) {

return (arr1.reduce((a,b)=>a+b,0)) - (arr2.reduce((a, b)=>a + b,0));

}
```






