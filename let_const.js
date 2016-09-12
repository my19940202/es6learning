'use strict';

// 只在let命令所在的代码块内有效
var arr = [12,1231,23,12,3,10,23,1,2,3];
for (let i = 0; i < arr.length; i++) {}
console.log(i); // i is not defined

for (var i = 0; i < arr.length; i++) {}
console.log(i); // ok


for (let i = 0; i < arr.length; i++) {
    arr[i] = function () {
        console.log(i);
    }
}
// 输出会是 arr.length i每次循环被赋值修改了
arr[6]();

for (var i = 0; i < arr.length; i++) {
    arr[i] = function () {
        console.log(i);
    }
}
// 输出会是 arr.length i每次循环被赋值修改了
arr[6]();


/**
 * 暂时性死区？
 * temporal dead zone，简称TDZ
 * ES6明确规定，如果区块中存在let和const命令，
 * 这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
 * 总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称TDZ）。
 */
console.log('--------暂时性死区--------');
var tmp = 123;
if (true) {
    // console.log(typeof tmp); //进入了TDZ tmp这个变量无法使用了
    // tmp = 'abc'; // ReferenceError
    let tmp;
    tmp = 'abc'; // ok
    console.log(tmp)
}
console.log(tmp);


var norepeatLet = function (param) {
    //let param; // has already been declared
    let a;
    // let a; 不能重复定义
    {
        let param; // ok
    }
}

