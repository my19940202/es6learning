/**
 * 模板字符串（template string）是增强版的字符串
 */
// 之前连接长字符串
var str = 'asdf d'
    + '丢雷老母 '
    + '脑子滑脱啦';
console.log(str);

str = `字符串
模板这个不报错呀
可以好好利用一下`;
console.log(str);
console.log(str.replace(/\n/g, ''));// 不要换行的情况

console.log(`string text line 1
string text line 2`);


// 字符串中嵌入变量和函数
var strfn = function () {
  return 'es6 is so awesome';
}

var name = 'Bob', time = 'today';
console.log(`Hello ${name}, how are you ${time}?. ${strfn()}`)

// 模板之前的嵌套
str = `string  tpl nesting example
    ${`nesting content`}
    6666
`;
console.log(str);