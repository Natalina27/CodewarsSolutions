//1. Vsya-Clerk *** (3 hours with hint) 6level
````
https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8

```
function tickets(peopleInLine){
// portfolio[25 $, 50$]
    let arr = [0, 0];
  for (var i = 0; i < peopleInLine.length; i++) {
    switch (peopleInLine[i]) {
      case 25:
        arr[0]++;
        break;
      case 50:
        [arr[0]--, arr[1]++]
        break;
        //case 100:
      default:
        (arr[1]) ? arr[1]-- : arr[0] -= 2;
        arr[0]--;
        break;
    }
    if (arr[0] < 0) { return 'NO'; }
  }
  return 'YES';
}
```