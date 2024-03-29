---
title: 面向对象：类的定义和继承的几种方式
icon: 
date: 2022-12-15
category: Interview
---

## 1 前言


> 类与实例：

- 类的声明
- 生成实例

**类与继承：**

- 如何实现继承：继承的本质就是原型链
- 继承的几种方式

## 2 类的定义、实例化

### 2.1 类的定义/类的声明

**方式一**：用构造函数模拟类（传统写法）

```javascript
    function Animal1() {
        this.name = 'smyhvae'; //通过this，表明这是一个构造函数
    }
```

**方式二**：用 class 声明（`ES6`的写法）

```javascript
    class Animal2 {
        constructor() {  //可以在构造函数里写属性
            this.name = name;
        }
    }
```

控制台的效果：

![](http://img.smyhvae.com/20180307_0957.png)

### 2.2 实例化

类的实例化很简单，直接 `new` 出来即可。

```javascript
    console.log(new Animal1(),new Animal2()); //实例化。如果括号里没有参数，则括号可以省略
```

![](http://img.smyhvae.com/20180307_1000.png)

## 3 继承的几种方式

> 继承的本质就是原型链。

**继承的方式有几种？每种形式的优缺点是**？这些问题必问的。其实就是考察你对原型链的掌握程度。

### 3.1 方式一：借助构造函数


```javascript
    function Parent1() {
        this.name = 'parent1 的属性';
    }

    function Child1() {
        Parent1.call(this);         //【重要】此处用 call 或 apply 都行：改变 this 的指向
        this.type = 'child1 的属性';
    }

    console.log(new Child1);
```

>【重要】上方代码中，最重要的那行代码：在子类的构造函数里写了`Parent1.call(this);`，意思是：**让Parent的构造函数在child的构造函数中执行**。发生的变化是：**改变this的指向**，parent的实例 --> 改为指向child的实例。导致 parent的实例的属性挂在到了child的实例上，这就实现了继承。

打印结果：

![](http://img.smyhvae.com/20180307_1015.png)

> 上方结果表明：`child`先有了 `parent` 实例的属性（继承得以实现），再有了`child` 实例的属性。

**分析**：

> 这种方式，虽然改变了 `this` 的指向，但是，**Child1 无法继承 `Parent1` 的原型**。也就是说，如果我给 `Parent1` 的原型增加一个方法：

```javascript
    Parent1.prototype.say = function () {
    };
```

> 上面这个方法是无法被 `Child1` 继承的。如下：

![](http://img.smyhvae.com/20180307_1030.png)

### 3.2 方法二：通过原型链实现继承

```javascript
    /*
    通过原型链实现继承
     */
    function Parent() {
        this.name = 'Parent 的属性';
    }

    function Child() {
        this.type = 'Child 的属性';
    }

    Child.prototype = new Parent(); //【重要】

    console.log(new Child());
```

打印结果：

![](http://img.smyhvae.com/20180307_1109.png)


> 【重要】上方代码中，最重要的那行：每个函数都有`prototype`属性，于是，构造函数也有这个属性，这个属性是一个对象。现在，**我们把`Parent`的实例赋值给了`Child`的`prototye`**，从而实现**继承**。此时，`Child`构造函数、`Parent`的实例、`Child`的实例构成一个三角关系。于是：

- `new Child.__proto__ === new Parent()`的结果为`true`

**分析：**

- 这种继承方式，**Child 可以继承 Parent 的原型**，但有个缺点：

> 缺点是：**如果修改 child1实例的name属性，child2实例中的name属性也会跟着改变**。

如下：

![](http://img.smyhvae.com/20180307_1123.png)

> 上面的代码中， `child1`修改了`arr`属性，却发现，`child2`的`arr`属性也跟着改变了。这显然不太好，在业务中，两个子模块应该隔离才对。如果改了一个对象，另一个对象却发生了改变，就不太好。

> 造成这种缺点的原因是：`child1`和`child2`共用原型。即：`chi1d1.__proto__ === child2__proto__`是严格相同。而 arr方法是在 Parent 的实例上（即 Child实例的原型）的。


### 3.3 方式三：组合的方式：构造函数 + 原型链

就是把上面的两种方式组合起来：


```javascript
    /*
    组合方式实现继承：构造函数、原型链
     */
    function Parent3() {
        this.name = 'Parent 的属性';
        this.arr = [1, 2, 3];
    }

    function Child3() {
        Parent3.call(this); //【重要1】执行 parent方法
        this.type = 'Child 的属性';
    }
    Child3.prototype = new Parent3(); //【重要2】第二次执行parent方法

    var child = new Child3();
```

- 这种方式，能解决之前两种方式的问题：既可以继承父类原型的内容，也不会造成原型里属性的修改。
- 这种方式的缺点是：让父亲`Parent`的构造方法执行了两次。
- `ES6`中的继承方式，一带而过即可，重点是要掌握`ES5`中的继承。
