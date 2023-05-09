let obj = {
    name: 'kimkang',
    age: 5
} //객체는 key와 value로 구성된다. 

// 객체 안의 키(공간) 안에 value 값이 할당되어 있는 형태이다. 
// 객체 변수(obj)에는 객체의 주소값이 할당되어 있다. 

console.log(obj.name);

let obj2 = obj; //obj의 주소값을 obj2에 복사해온다.
console.log(obj2.name); // 동일하게 출력이 된다. 

obj.name = 'james';

console.log(obj.name);
console.log(obj2.name); // 왜 obj.name만 변경했는데도 obj2.name까지 변경이 되었을까?
// obj2가 가리키는 주소가 obj와 동일하기 때문이다. obj의 주소값을 복사했기 때문이다.


let a = 2;
a=5;
a=9;

const num =2; //변경 불가능

const practice ={
    name: 'kdh',
    age:24
}; 
//practice 객체 자체 변경은 불가능하지만 practice가 가리키고 있는 키의 value는 변경 가능하다. 

// practice = { name: 'james', age : 24 } // X
// practice.name = james; practice.age = 25; //O