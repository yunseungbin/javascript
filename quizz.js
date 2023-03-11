/* 
이름: 여러분들의 성함 ----> 변수 / 상수
국어: 80점
수학: 70점
영어: ..점
탐구: ..점

평균
학점

이 네가지의 점수의 평균을 구하여
90점 이상이면 a학점
80점 이상이면 b학점
70점 이상이면 c학점
그 외 F학점

if문 사용
console.log()

OOO님의 이번학기 성적인 O학점 입니다.
*/

/*
입력 - 연산 - 출력
설계하지 않고 무작정 코드를 구현하려는 것이 있습니다.

출력값은 이미 알고 있다
console.log로 OOO님의 이번학기 성적인 O학점 입니다를 찍는 것

필요한 값은

학점 
이름

학점의 조건 -> 네가지 과목의 평균

값에따라 분기가 나뉨 (*if, switch)
A,B,C,F

연산에 필요한 값
네가지과목
과목의 평균
학점
이름
*/

//내가 짠 코드
let SeungBin = "윤승빈";
let 국어 = 100;
let 수학 = 60;
let 영어 = 100;
let 탐구 = 100;

let 평균 = (국어 + 수학 + 영어 + 탐구) / 4;

console.log(`평균점수: ${평균}`);
if (평균 >= 90) {
  console.log(`${SeungBin}님의 이번학기 성적은 a학점 입니다`);
} else if (평균 >= 80) {
  console.log(`${SeungBin}님의 이번학기 성적은 b학점 입니다`);
} else if (평균 >= 70) {
  console.log(`${SeungBin}님의 이번학기 성적은 c학점 입니다`);
} else {
  console.log(`${SeungBin}님의 이번학기 성적은 f학점 입니다`);
}

//강사님이 짜주신 코드
let kor = 100;
let meth = 50;
let eng = 50;
let tam = 90;

let avg = (kor + meth + eng + tam) / 4;
let grade;

let myName = "김성용";

if (avg >= 90) {
  grade = "A";
} else if (avg >= 80) {
  grade = "B";
} else if (avg >= 70) {
  grade = "C";
} else {
  grade = "F";
}

console.log(`${myName}님의 이번 학기 성적은 ${grade}입니다.`);
