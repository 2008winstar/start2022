/*
var greeting = "hello";
console.log(greeting);
greeting = ."Hi";
*/
/**
 * 没有输出hello的内容，程序"没有"一行一行的执行，而是抛出SyntaxError，说明JS不是简单的从上往下执行，在执行前有"解析/编译"的过程
 */

/*
console.log('Howdy');
saySomething('Hello', 'Hi');
function saySomething(greeting, greeting) {
  'use strict';
  console.log(greeting);
}
 */

function saySomething() {
  var greeting = 'Hello';
  {
    greeting = 'Howdy'; // TDZ
    let greeting = 'Hi';
    console.log(greeting);
  }
}

saySomething();