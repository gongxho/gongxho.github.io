---
title: Typescript
icon: 
date: 2023-02-18
category: Interview
---

## 什么是TypeScript？

Typescript 是一个强类型的 JavaScript 超集，支持ES6语法，支持面向对象编程的概念，如类、接口、继承、泛型等。Typescript并不直接在浏览器上运行，需要编译器编译成纯Javascript来运行。

## 为什么要使用 TypeScript ? TypeScript 相对于 JavaScript 的优势是什么？

增加了静态类型，可以在开发人员编写脚本时检测错误，使得代码质量更好，更健壮。

优势:

- 杜绝手误导致的变量名写错;
- 类型可以一定程度上充当文档;
- IDE自动填充，自动联想;

TypeScript 中 const 和 readonly 的区别？枚举和常量枚举的区别？接口和类型别名的区别？

const 和 readonly: const可以防止变量的值被修改，readonly可以防止变量的属性被修改。

枚举和常量枚举: 常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除。 常量枚举成员在使用的地方会被内联进来。 之所以可以这么做是因为，常量枚举不允许包含计算成员。

接口和类型别名: 两者都可以用来描述对象或函数的类型。与接口不同，类型别名还可以用于其他类型，如基本类型（原始值）、联合类型、元组。

## typescript中内置类型

```javascript
let str: string = "jimmy";
let num: number = 24;
let bool: boolean = false;
let u: undefined = undefined;
let n: null = null;
let obj: object = {x: 1};
let big: bigint = 100n;
let sym: symbol = Symbol("me"); 
```

## null和undefined的区别

默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给其他类型。

## number和bigint

虽然number和bigint都表示数字，但是这两个类型不兼容。

## any和unknown

any 类型，则允许被赋值为任意类型。

使用 any 类型，可以很容易地编写类型正确但在运行时有问题的代码。

如果我们使用 any 类型，就无法使用 TypeScript 提供的大量的保护机制。

请记住，any 是魔鬼！尽量不要用any。为了解决 any 带来的问题，TypeScript 3.0 引入了 unknown 类型。

unknown与any的最大区别是： 任何类型的值可以赋值给any，同时any类型的值也可以赋值给任何型。

unknown 任何类型的值都可以赋值给它，但它只能赋值给unknown和any。

这种机制起到了很强的预防性，更安全，这就要求我们必须缩小类型，我们可以使用typeof、类型断言等方式来缩小未知范围

## object、Object 和 {}

另外，object（首字母小写，以下称“小 object”）、Object（首字母大写，以下称“大 Object”）和 {}（以下称“空对象”）

小 object 代表的是所有非原始类型，也就是说我们不能把 number、string、boolean、symbol等 原始类型赋值给 object。在严格模式下，null 和 undefined 类型也不能赋给 object。

JavaScript 中以下类型被视为原始类型：string、boolean、number、bigint、symbol、null 和 undefined。

大Object 代表所有拥有 toString、hasOwnProperty 方法的类型，所以所有原始类型、非原始类型都可以赋给 Object。同样，在严格模式下，null 和 undefined 类型也不能赋给 Object。

大 Object 包含原始类型，小 object 仅包含非原始类型，所以大 Object 似乎是小 object 的父类型。实际上，大 Object 不仅是小 object 的父类型，同时也是小 object 的子类型。

{}空对象类型和大 Object 一样，也是表示原始类型和非原始类型的集合，并且在严格模式下，null 和 undefined 也不能赋给 {}

结论：{}、大 Object 是比小 object 更宽泛的类型（least specific），{} 和大 Object 可以互相代替，用来表示原始类型（null、undefined 除外）和非原始类型；而小 object 则表示非原始类型。

## void

void表示没有任何类型，和其他类型是平等关系，不能直接赋值:

```javascript
let a: void; 
let b: number = a; // Error
```

你只能为它赋予null和undefined（在strictNullChecks未指定为true时）。声明一个void类型的变量没有什么大用，我们一般也只有在函数没有返回值时去声明。

值得注意的是，方法没有返回值将得到undefined，但是我们需要定义成void类型，而不是undefined类型。否则将报错:

```javascript
function fun(): undefined {
  console.log("this is TypeScript");
};
fun(); // Error
```

## 函数重载

函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力。 要解决前面遇到的问题，方法就是为同一个函数提供多个函数类型定义来进行函数重载，编译器会根据这个列表去处理函数的调用。

```javascript
type Types = number | string
function add(a:number,b:number):number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a:Types, b:Types) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
const result = add('Semlinker', ' Kakuqo');
result.split(' ');
```

## Array

对数组类型的定义有两种方式：

```javascript
let arr:string[] = ["1","2"];
let arr2:Array<string> = ["1","2"]；
```

定义联合类型数组

```javascript
let arr:(number | string)[];
arr3 = [1, 'b', 2, 'c'];
```

定义指定对象成员的数组：

```javascript
interface Arrobj{
    name:string,
    age:number
}
let arr3:Arrobj[]=[{name:'jimmy',age:22}]
```

## never类型

never类型表示的是那些永不存在的值的类型。

值会永不存在的两种情况：

- 如果一个函数执行时抛出了异常，那么这个函数永远不存在返回值（因为抛出异常会直接中断程序运行，这使得程序运行不到返回值那一步，即具有不可达的终点，也就永不存在返回了）；
- 函数中执行无限循环的代码（死循环），使得程序永远无法运行到函数返回值那一步，永不存在返回

## 接口和类型别名type有什么区别

接口可以继承,还可以重复申明,当有多个命名一样的接口是他们被定义的类型会发生合并,不支持联合/交叉类型

类型别名不可以继承,也不可以重复定义,支持使用联合类型和交叉类型

## 类型收窄

TypeScript 类型收窄就是从宽类型转换成窄类型的过程，其常用于处理联合类型变量的场景。

在TypeScript中，有许多方法可以收窄变量的类型：

- 类型断言
- 类型守卫
- 双重断言

## 类型断言

类型断言可以明确地告诉 TypeScript 值的详细类型。

当在某些场景下，我们非常确认某个值的类型，即使与 TypeScript 推断出来的类型不一致，这时我们就可以使用类型断言，其语法如下：

```javascript
值 as 类型
// or
<类型>值
```

在 tsx 语法（React 的 jsx 语法的 ts 版）中必须使用前者，即 值 as 类型。同时，因为 <> 容易跟泛型语法起冲突，所以建议大家在使用类型断言时，统一使用 值 as 类型 这样的语法。
当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型中共有的属性或方法。

```javascript
interface Cat {
 name: stirng;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}
function getName(animal: Cat | Fish) {
  return animal.name
}
```

而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法，如：

```javascript
interface Cat {
 name: stirng;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}
function isFish(animal: Cat | Fish) {
  if(typeof animal.swim === "function") {
    return true;
  }
  return false;
}
```

上面的例子中，获取 animal.swim 的时候会报错。此时可以使用类型断言，将 animal 断言成 Fish 类型，就可以解决访问 animal.swim 时报错的问题：

```javascript
interface Cat {
 name: stirng;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}
function isFish(animal: Cat | Fish) {
  if(typeof (animal as Fish).swim === "function") {
    return true;
  }
  return false;
}
```

需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：

```javascript
interface Cat {
 name: stirng;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}
function swim(animal: Cat | Fish) {
  (animal as Fish).swim();
}

const tom: Cat = {
  name: "Tom",
  run() {
    console.log("run");
  }
}

swim(tom); // Uncaught TypeError: animal.swim is not a function
```

TypeScript 编译器信任了我们的断言，故在调用 swim() 时没有编译错误，但由于 Cat 上并没有 swim 方法，就会导致在运行时发生错误。

使用类型断言时一定要格外小心，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误。

## 类型保护的方式有哪些

联合类型
当某些特定类型有共有属性的时候,可以使用联合类型结合if/else判断语句,来保护类型指定类型才能调用指定的方法

```javascript
interface Brid {
    fly: boolean
    sing: () => {}
}

interface Dog {
    fly: boolean
    bark: () => {}
}

// 联合类型仅提示共有属性
function tranAnial(animal: Brid | Dog) {
    // 类型断言 实现类型保护
    if (animal.fly) {
        (animal as Brid).sing()
    } else {
        (animal as Dog).bark()
    }
}
```

in 语法

当类型区别于其他方法有特定的属性是可以用in语法来保护类型启用对应的类型方法和属性等

```javascript
interface Brid {
    fly: boolean
    sing: () => {}
}

interface Dog {
    fly: boolean
    bark: () => {}
}

function tranAnialSecond(animal: Brid | Dog) {
    // in 语法实现类型保护
    if ('sing' in animal) {
        animal.sing()
    } else {
        animal.bark()
    }

}
```

typeof

当某数据类型是指定的某原始类型,可以用typeof结合===运算符进行类型保护

```javascript
function add(first: string | number, second: string | number) {
    // typeof 语法实现类型保护
    if (typeof first === 'string' || typeof second === 'string') {
        return `${first}${second}`
    }
    return first + second
}
```

使用instanceof语法

判断某对象类型数据是否来自于对应的构造函数(instanceof用于检查构造函数的prototype属性是否存在于某实例里)

```javascript
// 使用 instanceof 语法做类型保护
class NumberObj {
    // 声明变量
    count: number
    // 创建构造函数
    constructor(count: number) {
        this.count = count
    }
}
function addSecond(first: object | NumberObj, second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count
    }
    return 0
```

## 元祖越界问题

```javascript
let aaa: [string, number] = ['aaa', 5];
// 添加时不会报错
aaa.push(6);
// 打印整个元祖不会报错
console.log(aaa); // ['aaa',5,6];
// 打印添加的元素时会报错
console.log(aaa[2]); // error
```

## 常量枚举与普通枚举的区别

- 常量枚举会在编译阶段被删除
- 枚举成员只能是常量成员

```javascript
const enum Colors {
    Red,
    Yellow,
    Blue
}
// 常量枚举会在编译阶段被删除
let myColors = [Colors.Red, Colors.Yellow, Colors.Blue];
```

编译成 JS

```javascript
"use strict";
var myColors = [0 /* Red */, 1 /* Yellow */, 2 /* Blue */];
```

常量枚举***不能包含计算成员，如果***包含了计算成员，则会在编译阶段报错

```javascript
// 报错
const enum Color {Red, Yellow, Blue = "blue".length};
console.log(Colors.RED);
```

## 什么是函数类型接口

对方法传入的参数和返回值进行约束

```javascript
// 注意区别

// 普通的接口
interface discount1{
  getNum : (price:number) => number
}

// 函数类型接口
interface discount2{
  // 注意:
  // “:” 前面的是函数的签名，用来约束函数的参数
  // ":" 后面的用来约束函数的返回值
  (price:number):number
}
let cost:discount2 = function(price:number):number{
   return price * .8;
}

// 也可以使用类型别名
type Add = (x: number, y: number) => number
let add: Add = (a: number, b: number) => a + b
```

## 继承 vs 多态

- 继承：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
- 多态：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应

```javascript
class Animal {
    speak(word: string): string {
        return 'Animal: ' + word;
    }
}

class Cat extends Animal {
    speak(word: string): string {
        return 'Cat:' + word;
    }
}

class Dog extends Animal {
    speak(word: string): string {
        return 'Dog:' + word;
    }
}

let cat = new Cat();
console.log(cat.speak('hello'));
let dog = new Dog();
console.log(dog.speak('hello'));
```

## 什么是泛型

泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，使用时再去指定类型的一种特性。

可以把泛型理解为代表类型的参数

## 非空断言符的使用

TS 3.7版本正式支持使用

```javascript
let root: any = document.getElementById('root');
root.style.color = 'red';

let root2: (HTMLElement | null) = document.getElementById('root');
// 非空断言操作符--> 这样写只是为了骗过编译器，防止编译的时候报错，打包后的代码可能还是会报错
root2!.style.color = 'red';
```

## TypeScript 中 ?.、??、!、!.、_、* 等符号的含义？*

`?. 可选链` 遇到 null 和 undefined 可以立即停止表达式的运行。

`?? 空值合并运算符` 当左侧操作数为 null 或 undefined 时，其返回右侧的操作数，否则返回左侧的操作数。

`! 非空断言运算符` x! 将从 x 值域中排除 null 和 undefined `!.` 在变量名后添加，可以断言排除undefined和null类型

`_ 数字分割符` 分隔符不会改变数值字面量的值，使人更容易读懂数字 .e.g 1_101_324。

`**求幂`

## declare，declare global是什么？

declare 是用来定义全局变量、全局函数、全局命名空间、js modules、class等 declare global 为全局对象 window 增加新的属性

```javascript
declare global { 
   interface Window { 
        csrf: string; 
   }
}
```

## 对 TypeScript 类中成员的 public、private、protected、readonly 修饰符的理解？

- public: 成员都默认为public，被此限定符修饰的成员是可以被外部访问；
- private: 被此限定符修饰的成员是只可以被类的内部访问；
- protected: 被此限定符修饰的成员是只可以被类的内部以及类的子类访问;
- readonly: 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

## keyof 和 typeof 关键字的作用？

keyof 索引类型查询操作符 获取索引类型的属性名，构成联合类型。 typeof 获取一个变量或对象的类型。

简述工具类型 Exclude、Omit、Merge、Intersection、Overwrite的作用。

```
Exclude<T, U> 从 T 中排除出可分配给 U的元素。 
Omit<T, K> 的作用是忽略T中的某些属性。 
Merge<O1, O2> 是将两个对象的属性合并。 
Compute<A & B> 是将交叉类型合并 
Intersection<T, U>的作用是取T的属性,此属性同样也存在与U。 
Overwrite<T, U> 是用U的属性覆盖T的相同属性。
```
