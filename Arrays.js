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
const check = (a,x) => a.includes(x);





