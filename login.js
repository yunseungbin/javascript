let ID = prompt("아이디를 입력하세요");

if (ID === "윤승빈") {
  let Password = prompt("비밀번호를 입력하세요");
  if (Password === "123456") {
    alert("로그인 성공~");
  } else {
    alert("비밀번호가 틀렸습니다");
  }
} else {
  alert("아이디가 틀렸습니다");
}
