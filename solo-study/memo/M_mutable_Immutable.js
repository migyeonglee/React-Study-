// 가변 변수 불변 변수
// 기존 JS : 변수선언 시 var 사용
// ES6 : let (값 수정(할당) 가능한 가변변수), const (값 수정(할당) 불가한 불변변수, 변겅은 가능)

/////////////////////////////////////////////////////////////////////////////
// ES6 가변 변수

let num = 1;
num = num * 3; 

let str = '문자';
str = '다른 문자'; 

let arr = [];
arr = [1, 2, 3]; 

let obj = {};
obj = { name: '새 객체' }; 

///////////////////////

// ES6 불변 변수

const cNum = 1;
cNum = 3; // 타입 에러가 발생합니다

const cStr = '문자';
cStr = '새 문자'; // 타입 에러가 발생합니다

const cArr = [];
cArr = [1, 2, 3]; // 타입 에러가 발생합니다

const cObj = {};
cObj = { name: '내 이름' }; // 타입 에러가 발생합니다

// 배열, 객체를 불변 변수로 선언 후 JS 내장 함수로 값 변경한 것

const arr2 = [];
arr2.push(1); // arr2 = [1]
arr2.splice(0, 0, 0); // arr2 = [0,1]
arr2.pop(); // arr2 = [1]

const obj2 = {};
obj2['name'] = '내이름'; // obj2 = { name: '내이름' }

Object.assign(obj2, { name: '새이름' }); //obj2 = { name: '새이름' }
delete obj2.name; //obj2 = {}

// 무결성 제약 조건
const num1 = 1;
const num2 = num1 * 3; // num2 = 3

const str1 = '문자';
const str2 = str1 + '추가'; // str2 = '문자추가'

const arr3 = [];
const arr4 = arr3.concat(1); // arr4 = [1]
const arr5 = [...arr4, 2, 3]; // arr5 = [1, 2, 3]
const arr6 = arr5.slice(0, 1); // arr6 = [1], arr5 = [1, 2, 3]
const [first, ...arr7] = arr5; // arr7 = [2, 3], first = 1

const obj3 = { name: '내이름', age: 20 };
const obj4 = { ...obj3, name: '새이름' }; // obj4 = { name: '새이름', age: 20}
const { name, ...obj5 } = obj4; // obj5 = { age: 20 }

/** 가변 내장 함수 -> 무결성 내장 함수
 * 배열에 새 값 추가 : push() -> concat()
 * 삭제 시 : pop(), shift() -> slice(), concat()
 */
/**
const arr = [1, 2, 3];
// 가변 변수를 사용한 예
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// iterator 방식의 for-in 루프와 함께 불변 변수를 사용한 예
for (const item in arr) {
  console.log(item);
}

// forEach 함수를 활용한 예
arr.forEach((item, index) => {
  console.log(item);
  console.log(index);
});

*/