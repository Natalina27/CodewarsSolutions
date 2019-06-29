* https://www.codewars.com/kata/magnet-particules-in-boxes/javascript
```
function doubles(maxk, maxn) {
    let n;
    let fn = (a,b) => 1/(k * Math.pow((n + 1), 2*k)), k = 1, s = 0;
    while(k <= maxk) {
      for(n = 1; n <= maxn; n++)
        s += fn(k,n);
      k++;
    }
    return s;
}
```
add new branch
add new commit