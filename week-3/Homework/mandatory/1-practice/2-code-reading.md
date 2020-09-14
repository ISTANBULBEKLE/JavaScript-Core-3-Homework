# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    {
3        let x = 2;
4        console.log(x);
5    }
6    console.log(x);
```

Explain why line 4 and line 6 output different numbers.

A: Variables belong to function scope. So second let x is between the curly bracket is function scope. The first let x is in global scope.

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.
A: When it comes to line 33 the function f1() will called and at the lone 29 console.log () will result to 10 (let x is defined in global scope.). When it comes to line 34 the output will be undefined, because let y is defined in function and is function scope, we can not call outside the function, in global scope there is not any ley y, it is undefined. 

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

A:When it comes to line 52 the f1(x) function will be called with the parameter value x (const x +9) . The function will implemented with a return value but will not be console.logged. When it comes to line 53const x will be console.logged with its value as 9, because it is defined in global scope.
