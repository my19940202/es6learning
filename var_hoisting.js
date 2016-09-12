/**
 * js变量提升
 * Javascript Hoisting：In javascript, every variable declaration is hoisted to the top of its declaration context
 * 我的理解就是在Javascript语言中，变量的声明(注意不包含变量初始化）会被提升（置顶）到声明所在的上下文
 * 也就是说，在变量的作用域内，不管变量在何处声明，都会被提升到作用域的顶部，但是变量初始化的顺序不变。
 */
// eample1--------------------------
//代码段1--------------------------
var myvar = '变量值'; 
console.log(myvar); // 变量值
//代码段2--------------------------
var myvar = '变量值';  
(function() { 
    console.log(myvar); //变量值
})();
//代码段3----------------------------
var myvar = '变量值'; 
(function() { 
    console.log(myvar); // undefined 
    var myvar = '内部变量值'; 
})();


// example2--------------------------
a = 'a';
b = 'b';
console.log(a + b + c)
var a;
var b;
var c;
c = 'c'

// 等同于下列代码
var a;
var b;
var c;
a = 'a';
b = 'b';
console.log(a + b + c)
c = 'c'


// 再来一个例子
var tmp = new Date();
function f() {
  console.log(tmp);
  // 虽然这个是在false 里面但是依旧还会变量提升
  if (false) {
    var tmp = "hello world";
  }
}

f(); // undefined