/*
    object는 키, 값 쌍으로 이루어지며, 값(value)에 숫자, 문자열 등 다양한 자료형의 값이 올 수 있지만,
    배열은 index로 자동으로 숫자가 할당된다는 점이 가장 큰 차이점이다. 
*/

var grades = {'kang':10, 'k7706':6, 'soru': 80};

const user_grade ={
    name: kang,
    math: 50
}; //kang(특정 유저)의 과목별 점수 저장하는 객체라고 가정

console.log(grades);
user_grade['korean'] = 70;
user_grade['english'] = 60;
user_grade['science'] = 90;

console.log(user_grade);

console.log(user_grade['korean']);
console.log(user_grade['science']);

console.log(user_grade.korean);
console.log(user_grade.science);

console.log(user_grade['kore' + 'an']);