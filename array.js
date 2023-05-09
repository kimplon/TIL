const str = "안녕하세요";

console.log(str[2]); //"하"
console.log(str[str.length-1]); // "요"

const a = [0,1,2,3,4,5,6,7,8,9];
console.log(a.length);
console.log(a[5]);

console.log(a[3+4]); //7

//배열의 다양한 메서드들

const b = [52,271,'안녕하','십니까?'];
b.push(100);

console.log(b);

//배열 중간에 요수 추가하기 : splice(index, 0, 요소)
b.splice(1, 0,"추가함");

console.log(b);
//인덱스로 배열 요수 제거하기: splice(index, 1)
b.splice(0, 1);

console.log(b);

//배열 내부에서 값의 위치 찾기 : indexOf(요소)

console.log(b.indexOf("안녕하"));
console.log(b.indexOf("4학년")); 
//값으로 배열의 요소 제거하기 : indexOf() + splice() 활용

const index = b.indexOf('십니까?');
b.splice(index,1);
console.log(b);

//선언한 배열에 .을 찍어서 뜨는 함수들의 이름을 보고 어떤 역할을 하는지에 대해서 어느정도 유추할 수 있을 정도로 익히기
//만약 잘모르겠으면 구글링이나 chatGPT를 이용해서 사용방법을 숙지