// 전개연산자

// 나열형 자료 추출/연결 시 사용
// 변수앞에 ... 사용 , 배열, 객체, 함수 인자 표현식 안에( [], {}, () )

//////////////////////////////////////////////////////////////////////
// 배열 전개 연산자 - 잘라내기/연결
// ES5 문법 
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [array1[0], array1[1], array2[0], array2[1]];
var combined = array1.concat(array2);
var combined = [].concat(array1, array2);
var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty';

function func() {
  var args = Array.prototype.slice.call(this, arguments);
  var first = args[0];
  var others = args.slice(1);
}

    // ES6 문법
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [...array1, ...array2];
        // combined = ['one', 'two', 'three', 'four'];
var [first, second, three = 'empty', ...others] = array1;
        // first = 'one', second = 'two', three = 'empty', others = []
        // 올바르지 못한 예
        // var wrongArr = ...array1;

function func(...args) {
  var [first, ...others] = args;
}

function func(first, ...others) {
  var firstInES6 = first;
  var othersInES6 = others;
}

//////////////////////////////////////////////////////////////////////

// 객체 전개 연산자 - 객체의 키, 값 추출 시
// ES5 예제
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };

var combined = {
  one: objectOne.one,
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};
//  assign() - 두객체 병합

var combined = Object.assign({}, objectOne, objectTwo);
// combined = { one: 1, two: 2, three: 3, four: 4, other: -1}
var combined = Object.assign({}, objectOne, objectTwo);
// combined = { one: 1, two: 2, three: 3, four: 4, other: 0}
var others = Object.assign({}, combined);
// delete를 사용하여 특정 데이터 추출 후 다음 새 객체 만듬
delete others.other;

// ES6 예제
var combined = {
  ...objectOne,
  ...objectTwo,
};
// 중복 키 값은 마지막 사용한 객체의 값으로 추출
// combined = { one: 1, two: 2, three: 3, four: 4, other: -1} 
var combined = {
  ...objectTwo,
  ...objectOne,
};
// combined = { one: 1, two: 2, three: 3, four: 4, other: 0}
var { other, ...others } = combined;
/** 객체에서 특정 값 추출 시 추출하려는 키 name을 맞추고 
    나머지는 전개 연산자로 선언된 변수에 할당
*/
// others = { one: 1, two: 2, three: 3, four: 4}
