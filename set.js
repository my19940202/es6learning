'use strict';
// map对象中所有元素不重复
var s = new Set();
[2, 3, 5, 4, 5, 2, 2].map(x => s.add(x));

let key = 'kkkkey';
s.add({key});

console.log(s, s.size);