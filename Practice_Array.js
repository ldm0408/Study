// Array는 객체(object)이다 프로토타입은 Array.prototype이고 다양한 메소드 제공한다.

var emptyArr = []; // 빈 배열 변수 emptyArr 선언 및 값 할당

var arr = [ // 변수 arr 선언 및 값으로 배열 할당
  'zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine'
];

console.log(emptyArr[1]); // emptyArr 배열의 인덱스 1번째 콘솔로그 - undefined(빈 배열이기 떄문) 
console.log(arr[1]); // arr 배열의 인덱스 1번째 콘솔로그, 'one' - 배열의 index 1번째 값
console.log(emptyArr.length); // emptyArr 배열의 길이 - 0
console.log(arr.length); // arr 배열의 길이 - 10
console.log(typeof arr); // arr 의 타입 체크, object

// 어떤 데이터 타입의 조합도 포함 가능하다
var misc = [
  'string', 98.6, true, false, null, undefined, ['nested', 'array'],
  { object: true },
  NaN, Infinity
];
console.log(misc);
console.log(misc.length);

// 배열 요소 추가
// 배열 또한 동적으로 요소 추가 가능하다. 순서 무시 필요한 인덱스 위치에 값을 할당 가능
// 순서 무시 할 시 값 할당 안된 인덱스 값은 undefined
var arr = [];

arr[0] = 'one';
arr[3] = 'three';
arr[7] = 'seven';
console.log(arr);

// 배열 요소의 삭제
// 삭제시 delete 연산자 사용 할 수 있다
// 요소가 삭제되는게 아닌 요소 값이 삭제 되어 undefined가 된다
// 완전 삭제 시 splice 메소드 사용
var numbersArr = ['zero', 'one', 'two', 'three'];

delete numbersArr[2]; // 해당 인덱스의 요소 값만 삭제
console.log(numbersArr);

// 배열의 요소 일부를 삭제
numbersArr.splice(2, 1); // index 2번째 부터 1개 삭제, 즉 2번째 요소만 삭제
console.log(numbersArr);

// 배열 요소의 열거
// 배열 역시 객체 이므로 for in문 사용 가능하다. 하지만 불필요한 프로퍼티까지 출력 될수 있고, 순서를 보장하지 않는다
// 배열 요소 열거시 for 문 사용 권장

var numbersArr = ['zero', 'one', 'two', 'three'];
numbersArr.foo = 10; // Q: 이게 무슨 의미인가?

console.log(numbersArr);

for (var prop in numbersArr) {
  console.log(prop, numbersArr[prop]);
}

// 배열 인덱스가 없는 foo에 대한 값은 나오지 않는다.
for (var i = 0; i < numbersArr.length; i++) {
  console.log(i, numbersArr[i]);
}

// Array Method
// Array.prototype.indexOf()
// 인자로 지정된 요소를 배열에서 검색하여 해당하는 인덱스 번호를 반환한다.
var arr = [1, 2, 2, 3];
arr.indexOf(2); // 인자에 해당하는 요소가 중복 되면 첫번째 인덱스 번호만 반환
arr.indexOf(4); // 해당하는 요소가 없을 시 -1을 반환

// Array.prototype.concat(item...)
// 인수로 넘어온 값들(배열 또는 값)을 자신의 복사본에 요소로 추가하고 반환
// 원본 배열은 변경되지 않는다.
// 추가 된 값은 원본 배열 인덱스 마지막 부터 추가 된다.

var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];

var c = a.concat(b);
console.log(c);

var d = a.concat('string');
console.log(d);

var e = a.concat(b, true, d, 1, 2);
console.log(e);

console.log(a);

// Array.prototype.forEach()
// 배열을 순회하며 배열의 각 요소에 대하여 인자로 주어진 콜백함수 실행
// 원본 배열 변경 되지않는다.
// 원본 배열 요소 값을 참조하여 무언가를 할 때 사용
// 반환 값은 undefined
// break문 사용 못함

var total = 0;
var testArray = [1, 3, 5, 7, 9];

testArray.forEach(function(item, index, array) {
  console.log('[' + index + '] = ' + item); // 배열 요소 순회하면서 index와 해당 값 호출
  total += item; // 각 요소 값을 모두 한번씩 더해준다.
})
console.log(total); // 23
console.log(testArray); // [1,3,5,7,9] //원본값 변경 안됨

testArray = [1, 2, 3, 4] // testArray 값 재할당
  // 원본 배열을 변경 하려면 콜백 함수의 3번쨰 인자를 사용한다.
testArray.forEach(function(item, index, array) {
  array[index] = Math.pow(item, 2);
});
console.log(testArray);

// 두번째 인자로 this전달 할 수 있다.
function Counter() { // Counter 오브젝트 생성자 함수 선언
  this.sum = 0; // sum 프로퍼티 생성 및 값 할당 // this는 생성자 함수로 생성될 인스턴스
  this.count = 0; // count 프로퍼티 생성 및 값 할당// this는 생성자 함수로 생성될 인스턴스
}
Counter.prototype.add = function(array) { // Q prototype.add는 무엇인가?
  array.forEach(function(entry) { //entry는  array 배열 요소의 값
    this.sum += entry;
    this.count++;
  }, this);
};
var obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count);
console.log(obj.sum);
console.log(obj);
console.log(Counter.prototype);

// Array.prototype.map()
// 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수의 반환값(결과값)으로 새로운 배열을 생성하여 반환한다.
// 배열을 순회하면 요소 값을 다른 값으로 맵핑하기 위한 함수이다.
// 원본 배열 변경되지 않는다

var numbers = [1, 4, 9];

var roots = numbers.map(function(item) {
  return Math.sqrt(item); // item 값을 양의 제곱근 반환
});

// 변수 roots에 위 함수의 리턴 값을 담은 배열 할당됨
console.log(roots);

// 원본 배열은 변경하지 않는다.
console.log(numbers);

roots = numbers.map(function(item) {
  return ++item // 리턴 하지 않으면 새로운 배열에 반영되지 않는다.
});
console.log(roots);


// 두번째 인자로 this를 전달할 수 있다.
function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr) { // Q 객채에 배열요소를 맵핑해서 새로운 배열 생성?
  return arr.map(function(x) {
    return this.prefix + x;
  }, this);
};
var pre = new Prefixer('-webkit-');
console.log(pre);
var preArr = pre.prefixArray(['linear-gradient', 'border-radius']);
console.log(preArr);
console.log(Prefixer.prototype);


// Array.prototype.filter()
// 콜백 함수의 실행 결과가 true인 배열 요소의 값만을 추출한 새로운 배열 반환
// 배열에 특정 케이스만 추출 하여 새로운 배열 만들 때 사용
// 두번째 인자로 this 전달 가능

var result = [1, 2, 3, 4, 5].filter(function(item, index, array) {
  console.log('[' + index + '] = ' + item);
  return item % 2; // 각 요소값에 2를 나눈 Boolean값이 true 이면 반환 
  // 나머지 값이 1이면 true, 0 이면 flase

});
console.log(result);


// Array.prototype.reduce()
// 배열을 순회하며 각 요소에 대하여 이전의 콜백함수 실행 반환값을 전달하여 콜백함수를 실행
// 결과 반환
// 콜백함수의 첫번째 인자는 이전 콜백함수 반환값이지만, 처음 호출 시에는 다른다
// reduce메소드의 두번째 인자는 첫 호출에 첫 번째 인수로 사용되고 이를 initialValue라고한다
// initialValue가 없을시 previousValue는 배열의 첫 번째 요소 값이고 currentValue는 두 번째 값이다.

/*
previousValue: 이전 콜백의 반환값
currentValue : 배열 요소의 값
currentIndex : 인덱스
array        : 순회할 배열
*/
var result = [1, 2, 3, 4, 5].reduce(function(previousValue, currentValue,
  currentIndex, array) {
  console.log(previousValue + '+' + currentValue + '=' + (previousValue + currentValue));
  return previousValue + currentValue; // 결과는 다음 콜백의 첫번째 인자로 전달된다
});
console.log(result);

// 2차원 배열을 1차원화 할 때도 유용하다.
var flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
].reduce(function(a, b) {
  return a.concat(b);
});
console.log(flattened);


// 끝