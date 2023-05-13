//2. variable 읽고 쓰는게 가능 rw(read / write)
//3. const는 read only const를 선언함과 값을 할당하면 읽기만 가능해진다. 


//primitive type -> 변수가 메모리에 바로 저장되는 형식
// object type -> 메모리에 한번에 올라가는게 아니라 const에 ref 주소가 있고,
// ref가 객체의 속성을 가리키는 형식으로 된다. 

// 그래서 만약 const people = { name : "kim", age : 23}; 을 선언했을 때,
// people이라는 객체의 ref는 변경 불가능하게 하여 다른 객체로 변환시킬 수는 없지만
// people의 ref가 가리키는 객체의 속성은 변경가능하다. 

//immutable data type -> primitive data type : 'kim'을 어떤 변수에 저장했을때,
// 'kim'의 데이터가 통째로 올라가고 통째로 빠지는 형식이지, 'kim'의 일부분을 수정할 수 없다. 

//반면 mutable data type은 대부분의 object에 해당하며 변경 가능하다. (배열)


// 1. String concatenation
console.log('my'+' cat');
console.log('1' + 2);
console.log(`string literals : 1 + 2= ${1 + 2}`);

//2. Numeric operators
console.log(1 + 1);  //add
console.log(1 - 1);  //substract
console.log(1 / 1);  //divide
console.log(1 * 1);  //multiply
console.log(1 % 1);  //remainder
console.log(1 ** 1); //exponentiation

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; 
// -> counter = counter + 1; 
//    preIncrement = counter;

console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;

const preDecrement = --counter; 
// -> counter = counter - 1; 
//    preIncrement = counter;

console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postDecrement = counter--;
//postIncrement = counter;
//counter = counter - 1;

//4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10<6);
console.log(10<=6);
console.log(10>6);
console.log(10>=6);

//6. Logical operators : || (or) && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`or: ${value1 || value2 || check()}`); 
console.log(`and: ${value1 || value2 || check()}`); 
// 위 두 콘솔 로그에서 맨 뒤쪽에 함수를 위치시키는 것이 시간 복잡도에서 효율적이다. 
function check(){
    for(let i = 0; i < 10; i++) {
        //wasting time
        console.log('wasting time');
    }
    return true;
}

//! (not)
console.log(!value1);

//7.Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const kang1 = {name :'kang'};
const kang2 = {name :'kang'};
const kang3 = kang1;

console.log(kang1 == kang2);  //false
console.log(kang1 === kang2); //false
console.log(kang1 === kang3); //true

// equality - puzzler
console.log(0 == false);   //true
console.log(0 === false);  //false
console.log('' == false);  //true
console.log('' === false); //false
console.log(null == undefined); //true
console.log(null === undefined);//false

// 8. Conditional operators: if
// if, else if, else
const nickname = 'kang';

if (nickname === 'kang'){
    console.log('Welcome, kang!');
} else if (nickname === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
//condition ? value1 : value2;
console.log(nickname === 'kang' ? 'yes' : 'no');

//10. Switch statement
/*
  use for multiple if checks
  use for enum-like value check
  use for multiple type checks in TS
*/

const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
/*        console.log('love you!');
        break;
*/
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while(i > 0);

//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for(let i = 3; i > 0; i = i - 2){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nested loops
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

//break, continue
//Q1. iterate from 0 to 10 and print only even numbers (use continue)
console.log('print even number: ');
for(let i = 0; i <= 10; i++){
    if(i % 2 === 1){
        continue;
    }
    console.log(` ${i}`);
}
//Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i = 0; i <= 10; i++){
    if(i === 8){
        break;
    }
    console.log(` ${i}`);
}