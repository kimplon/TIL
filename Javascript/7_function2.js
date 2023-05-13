/*const num = 1;
const num2= 2;
const result = num + num2;
console.log(result);

const num3 = 1;
const num4 = 2;
const result2 = num3 + num4;



function plus(num1, num2){
    return num1 + num2;
}
*/
function add(a, b){
    return a+b;
}

const sum = add(3,4);
console.log(sum);

const doSomething = add;

const result = doSomething(2,3);
console.log(result);

//함수의 이름을 다른 변수에 할당하면, 이 함수가 가리키는 주소가
//변수에 할당되기 때문에, 결국은 똑같은 함수를 가리키고 있기 때문에 똑같은 함수를 수행하게 된다. 
// 이 부분을 잘 이해해야 콜백함수를 정확히 이해할 수 있다. 

function print(){
    console.log('print');
}
function printSomething(korean_age, age){
    console.log(`${a} ${b}`);
}
print(35, 33);

function divide(num1, num2){
    return num1 / num2;
}

function surprise(operator){
    const result = operator(2,3);
    console.log(result);
} //surprise의 인자(operator)에는 add의 ref(위치)값이 들어가게 된다. 
//따라서 result가 operator()를 호출한다는 것은 add를 수행하는 것과 동일하다. 

surprise(add);
surprise(divide);

//함수를 전달한다는 것은 함수를 가리키는 ref가 전달되는 것이다. 
//그래서 전달된 ref를 통해 일반함수를 호출하는 것과 동일하게 된다. 