let a = 13.890123
let b = 2.891564
let n = 3
a = a % 1
b = b % 1
a = Math.floor(a * 10 ** n)
b = Math.floor(b * 10 ** n)
console.log('Дробная часть числа a > чем у числа b: ', a>b)
console.log('Дробная часть числа a < чем у числа b: ', a<b)
console.log('Дробная часть числа a ≥ чем у числа b: ', a>=b)
console.log('Дробная часть числа a ≤ чем у числа b: ', a<=b)
console.log('Дробная часть числа a === дробной части числа b: ', a === b)
console.log('Дробная часть числа a ≠ дробной части числа b: ', a != b)