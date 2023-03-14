//ArrowFunction

let myFunction = (a, b) => a * b;

console.log(myFunction(5, 7));

//Function       ||

function JustFunction(a, b) {
  return a * b;
}

console.log(JustFunction(5, 7));
//----------------------------------------------------

//ArrowFunction
const mult = (x, y) => {
  console.log(`${x}와 ${y}를 곱합니다`);
  console.log(`결과는 ${x * y}입니다.`);
  return x * y;
};

console.log(mult(2, 7));

//Function           ||

const mult1 = function (x, y) {
  console.log(`${x}와 ${y}를 곱합니다`);
  console.log(`결과는 ${x * y}입니다.`);
  return x * y;
};

console.log(mult1(2, 7));

//-------------------------------------

// 자바스크립트 호이스팅

console.log(Hoisting(4, 3)); //64출력

function Hoisting(a, b) {
  return a ** b;
}
//일반 function은 호이스팅 가능

console.log(sum(5, 5)); //Error!!😥

const sum = function (x, y) {
  return x + y;
};
//함수를 어디에 담고(const let...) 사용하면 호이스팅 안댐

console.log(a(5, 4)); //Error!!😥

let a = (x, y) => x ** y;
//화살표함수도 hoisting 안댐
