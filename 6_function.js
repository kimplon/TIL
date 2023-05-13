/*  
 함수 : 일련된 공통의 작업을 처리하기 위해서 연관된 코드들을 모아 놓은 자료형
 함수 선언식(function declarations)
 함수 표현식(function expression)
*/

function Declaration(){
    //code
}   //함수 선언식

function printHello(){
    console.log("function declarations");
}

/* 함수 표현식은 변수에 함수를 할당하는 방식으로 선언하는 것을 말한다 .*/

const expression = function (){
    //code
    console.log("function expression");
};

//자바스크립트는 함수를 실행하는 것을 "함수를 호출한다"라고 한다. 

function gugudan(){
    console.log("3*1=3");
    console.log("3*2=6");
    console.log("3*3=9");
    console.log("3*4=12");
}

gugudan();
gugudan();

const gugudan2 = function thisnot(){
    console.log("4*1=4");
    console.log("4*2=8");
    console.log("4*3=12");
    console.log("4*4=16");
}; //함수 표현식에서 일관된 코드 작성으 위해서 세미콜론을 찍어주어야 한다. 
//thisnot 부분을 없애면 익명함수가 된다. 

gugudan2();
// thisnot(); 