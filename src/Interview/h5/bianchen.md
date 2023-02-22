---
title: JS 编程题
icon: 
date: 2023-02-18
category: Interview
---


## 1. 写出下面这段代码的输出结果是？

```javascript
var out = 25,
    inner = {
        out : 20,
        func: function () {
            var out = 30;
            return this.out;
        }
    }
console.log((inner.func, inner.func)());
console.log(inner.func());
console.log((inner.func)());
console.log((inner.func = inner.func)());

//输出结果 :

25
20
20
25
```

解析：

本题考点两个： 1， 作用域；2. 运算符（赋值运算符，逗号运算符）

第一个考的就是逗号运算符，逗号运算符就是运算前面的，返回最后一个；

例如：var i= 1；j = 2; k = 5; console.log((i++, j++, k)),最后输出的是5；

回到题目，逗号运算符会返回inner.func，而inner.func是一个匿名函数，而这个匿名函数是属于window的，所以里面的this指向的是window，输出25；

第二，第三个输出都是20，因为this指向的是inner

最后一个考的是等号运算符，inner.func = inner.func其实返回的是运算的结果，也就是返回的是匿名函数，所以this也是指向window，输出的是25

## 2. 以下代码片段，输出的结果是？简要解释一下

```javascript
var name = '1';
var object = {
    name: '2',
    getNameFunc: function () {
        return function () {
            return this.name;
        }
    }
}
console.log(object.getNameFunc()())

//输出结果： 1
```

解释：

object.getNameFunc()执行完后，返回的是一个匿名函数，所以里面的this指向的就是window，最终结果输出的是1；

## 3. 下面代码的输出是什么？

```javascript
function sayHi() {
    console.log(name);
    console.log(age);
    var name = '张三'；
    let age = 21;
}
sayHi();
```

答案： undefined 和 ReferenceError

在函数中，我们首先使用var关键字声明了name变量。

这意味着变量在创建阶段会被提升（JavaScript会在创建变量创建阶段为其分配内存空间），默认值为undefined，直到我们实际执行到使用该变量的行。

我们还没有为name变量赋值，所以它仍然保持undefined的值。

使用let关键字（和const）声明的变量也会存在变量提升，但与var不同，初始化没有被提升。

在我们声明（初始化）它们之前，它们是不可访问的。 这被称为“暂时死区”。

当我们在声明变量之前尝试访问变量时，JavaScript会抛出一个ReferenceError。

## 4. 下面代码输出是什么？

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

答案：3 3 3 and 0 1 2

由于JavaScript中的事件执行机制，setTimeout函数真正被执行时，循环已经走完。

由于第一个循环中的变量i是使用var关键字声明的，因此该值是全局的。

在循环期间，我们每次使用一元运算符++都会将i的值增加1。

因此在第一个例子中，当调用setTimeout函数时，i已经被赋值为3。

在第二个循环中，使用let关键字声明变量i：使用let（和const）关键字声明的变量是具有块作用域的（块是{}之间的任何东西）。

在每次迭代期间，i将被创建为一个新值，并且每个值都会存在于循环内的块级作用域。

## 5. 下面代码的输出是什么?

```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius *2;
  },
perimeter: () => 2* Math.PI * this.radius
};

shape.diameter();
shape.perimeter();
```

答案： 20 and NaN

请注意，diameter是普通函数，而perimeter是箭头函数。

对于箭头函数，this关键字指向是它所在上下文（定义时的位置）的环境，与普通函数不同！

这意味着当我们调用perimeter时，它不是指向shape对象，而是指其定义时的环境（window）。

没有值radius属性，返回undefined。

## 6. 下面代码的输出是什么?

```javascript
+true;
!"张三";
```

答案：1 and false

一元加号会尝试将boolean类型转换为数字类型。 true被转换为1，false被转换为0。

字符串'Lydia'是一个真值。 我们实际上要问的是“这个真值是假的吗？”。 这会返回false。

## 7、如何判断一个对象是否为数组

```javascript
function isArray(arg) {
    if (typeof arg === 'object') {
        return Object.prototype.toString.call(arg) === '[object Array]';
    }
    return false;
}
```

## 8、冒泡排序

每次比较相邻的两个数，如果后一个比前一个小，换位置

```javascript
var arr = [3, 1, 4, 6, 5, 7, 2];

function bubbleSort(arr) {
for (var i = 0; i < arr.length - 1; i++) {
    for(var j = 0; j < arr.length - 1; j++) {
        if(arr[j + 1] < arr[j]) {
            var temp;
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
return arr;
}

console.log(bubbleSort(arr));
```

## 9、快速排序（二分法）

采用二分法，取出中间数，数组每次和中间数比较，小的放到左边，大的放到右边

```javascript
var arr = [3, 1, 4, 6, 5, 7, 2];

function quickSort(arr) {
    if(arr.length == 0) {
        return [];    // 返回空数组
    }

    var cIndex = Math.floor(arr.length / 2);
    var c = arr.splice(cIndex, 1);
    var l = [];
    var r = [];

    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < c) {
            l.push(arr[i]);
        } else {
            r.push(arr[i]);
        }
    }

    return quickSort(l).concat(c, quickSort(r));
}

console.log(quickSort(arr));
```

## 10. 下面的代码输出什么？

```javascript
const promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve();
    console.log(2);
})

promise.then(() => {
    console.log(3);
})

console.log(4);

// 答案
1
2
4
3
```

解析

首先 Promise 新建后立即执行，所以会先输出 1，2，而 Promise.then() 内部的代码在 当次 事件循环的 结尾 立刻执行 ，所以会继续输出4，最后输出3。

## 11. 下面的代码输出什么？

```javascript
const promise = new Promise((resolve, reject) => {
    resolve('success1');
    reject('error');
    resolve('success2');
});

promise.then((res) => {
    console.log('then:', res);
}).catch((err) => {
    console.log('catch:', err);
})

// 答案
then: success1
```

解析

resolve 函数将 Promise 对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；

reject 函数将 Promise 对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

而一旦状态改变，就不会再变。 所以 代码中的reject('error'); 不会有作用。

Promise 只能 resolve 一次，剩下的调用都会被忽略。 所以 第二次的 resolve('success2'); 也不会有作用。

## 12. 下面代码输出什么？

```javascript
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)
```

解析

Promise.resolve 方法的参数如果是一个原始值，或者是一个不具有 then 方法的对象，则 Promise.resolve 方法返回一个新的 Promise 对象，状态为resolved，Promise.resolve 方法的参数，会同时传给回调函数。

then 方法接受的参数是函数，而如果传递的并非是一个函数，它实际上会将其解释为 then(null)，这就会导致前一个 Promise 的结果会穿透下面。

```javascript
Promise.resolve(1)
  .then(null) // 穿透
  .then(null) // 穿透
  .then(console.log)

// 答案
1
```

## 13. 实现需求

红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？（用Promse实现）三个亮灯函数已经存在：

```javascript
function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}
```

解析

红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次，意思就是3秒，执行一次 red 函数，2秒执行一次 green 函数，1秒执行一次 yellow 函数，不断交替重复亮灯，意思就是按照这个顺序一直执行这3个函数，这步可以就利用递归来实现。

答案

```javascript
function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}

var light = function (timmer, cb) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            cb();
            resolve();
        }, timmer);
    });
};

var step = function () {
    Promise.resolve().then(function () {
        return light(3000, red);
    }).then(function () {
        return light(2000, green);
    }).then(function () {
        return light(1000, yellow);
    }).then(function () {
        step();
    });
}

step();
```

## 14. 以下代码最后输出什么？

```javascript
const first = () => (new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
        console.log(7);
        setTimeout(() => {
            console.log(5);
            resolve(6);
        }, 0)
        resolve(1);
    });
    resolve(2);
    p.then((arg) => {
        console.log(arg);
    });

}));

first().then((arg) => {
    console.log(arg);
});
console.log(4);

// 答案
3
7
4
1
2
5
```

解析

这道题就其实和 Promise 的关系不太大，主要是需要理解 JS执行机制，才能很好的解决这道题。

**第一轮事件循环**

先执行宏任务，主script ，new Promise立即执行，输出【3】，

执行 p 这个new Promise 操作，输出【7】，

发现 setTimeout，将回调放入下一轮任务队列（Event Queue），

p 的 then，姑且叫做 then1，放入微任务队列，

发现 first 的 then，叫 then2，放入微任务队列。

执行console.log(4)，输出【4】，宏任务执行结束。

再执行微任务，执行 then1，输出【1】，

执行 then2，输出【2】。

到此为止，第一轮事件循环结束。开始执行第二轮。

**第二轮事件循环**

先执行宏任务里面的，也就是 setTimeout 的回调，输出【5】。 resolve(6) 不会生效，因为 p 这个 Promise 的状态一旦改变就不会在改变了。

## 15、js 统计一个字符串出现频率最高的字母/数字

```javascript
let str = 'asdfghjklaqwertyuiopiaia';
const strChar = str => {
    let string = [...str],
        maxValue = '',
        obj = {},
        max = 0;
    string.forEach(value => {
        obj[value] = obj[value] == undefined ? 1 : obj[value] + 1
        if (obj[value] > max) {
            max = obj[value]
            maxValue = value
        }
    })
return maxValue;
}
console.log(strChar(str))    // a
```

## 16、不借助临时变量，进行两个整数的交换

```javascript
let a = 2,
    b = 3;
    [b,a] = [a,b]
    console.log(a,b)   // 3 2
```

## 下面代码输出什么结果？

```javascript
function *printLog(array) {
    let nextIndex = 0;
    while(nextIndex < array.length) {
        yield array[nextIndex++]
    }
    return 5;
}

let gen = printLog([3, 4])
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

//答案：
{value: 3, done: false}
{value: 4, done: false}
{value: 5, done: true}
{value: undefined, done: true}
```

## 下面代码中什么情况下会打印1？

```javascript
var a = ?
if (a == 1 && a == 2 && a== 3) {
    console.log(1)
}
var a = {
    i:1,
    toString() {
        return a.i++;
    }
}
```

## 下面代码运行的结果？

```javascript
async function async1() {
    console.log('async1 start')
    await async2();
    console.log('async1 end')
}

async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(function () {
    console.log('setTimeout')
}, 0)

async1();
new Promise(function (resolve) {
    console.log('promise1')
    resolve();
}).then(function () {
    console.log('promise2')
})
console.log('script end')

//答案：
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
```

## 实现一个sleep函数

比如sleep(1000)意味着等待1000毫秒

```javascript
const sleep = time => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    })
}
sleep(1000).then(() => {
    console.log(1)
})
```

## 如何把一个字符串的大小写取反（大写变小写，小写变大写），例如'AbC' 变成 'aBc'?

```javascript
let str = 'aBc';
str = str.replace(/[a-zA-Z]/g, content => {
    return content.toUpperCase() === content ? content.toLowerCase() : content.toUpperCase();
})
```

## 请自定义一个函数，实现字符串的反转

```javascript
function reverse(str) {
    return str.split('').reverse().join('');
}
```

## 请写出三种对象合并的方法

```javascript
let arr1 = {
    a:1,
    b:2,
    c:3
};
let arr2 = {
    d:4,
    e:5,
    a:6
};
//方法一拓展运算符，后面相同的属性覆盖前一个
let arr3={...arr1,...arr2};

//方法二Object.assign()，后面相同的属性覆盖前一个
let arr3=Object.assign(arr1,arr2);

//方法三Object.keys()，相同的属性只取第一个
Object.keys(arr1).forEach(key => {
    arr2[key] = arr1[key]
})
```

## 数组去重的方法

1.ES6 的 Set

```javascript
let arr = [1,1,2,3,4,5,5,6]
let arr2 = [...new Set(arr)] // 两种写法均可：Array.from(new Set(arr))
```

2.reduce()

```javascript
let arr = [1,1,2,3,4,5,5,6]
let arr2 = arr.reduce(function(ar,cur) {
  if(!ar.includes(cur)) {
    ar.push(cur)
  }

  return ar
},[])
```

3.filter()

```javascript
// 这种方法会有一个问题：[1,'1']会被当做相同元素，最终输入[1]
let arr = [1,1,2,3,4,5,5,6]
let arr2 = arr.filter(function(item,index) {
  // indexOf() 方法可返回某个指定的 字符串值 在字符串中首次出现的位置
  return arr.indexOf(item) === index
})
```

## 手写一个递归方法求斐波那契数列的第N项的值

```javascript
function fn(n){
    if(n==1 || n==2){
        return 1;
    }else {
        return fn(n-1)+fn(n-2);
    }
}
```

## 将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组

```javascript
Array.from(new Set(arr.flat(Infinity))).sort((a,b)=>{ return a-b})
```

## 实现 add(1)(2)(3)

考点：函数柯里化

```javascript
function add (...args) {
    //求和
    return args.reduce((a, b) => a + b)
}

function currying (fn) {
    let args = []
    return function temp (...newArgs) {
        if (newArgs.length) {
            args = [
                ...args,
                ...newArgs
            ]
            return temp
        } else {
            let val = fn.apply(this, args)
            args = [] //保证再次调用时清空
            return val
        }
    }
}

let addCurry = currying(add)
console.log(addCurry(1)(2)(3)(4, 5)())  //15
console.log(addCurry(1)(2)(3, 4, 5)())  //15
console.log(addCurry(1)(2, 3, 4, 5)())  //15
```
