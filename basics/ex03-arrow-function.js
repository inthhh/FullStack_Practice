// 일반함수와 화살표 함수(ES6 - ES2015)

// 함수형 변수(함수 표현식)
let h1 = function () {
  return "hellooooooo";
};
console.log(h1());

let sayhi = function (m) {
  console.log(m + "hihi");
};
sayhi("ddd");

let hi2 = () => {
  return "안녕하세요";
};
sayhi(hi2());

let sum = (a, b) => {
  return a + b;
};
console.log(sum(10, 20));

//화살표함수의 수행문이 한줄이면, 중괄호,return 생략 가능
let sub = (a, b) => a - b;
console.log(sub(10, 20));

//매개변수 하나이면, 소괄호 생략 가능
// prettier-ignore
let double = a => a * 2
console.log(double(10));
