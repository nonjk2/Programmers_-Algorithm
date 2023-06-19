// 이상한 문자 만들기
// 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
// 입출력 예
// s	return
// "try hello world"	"TrY HeLlO WoRlD"
// 입출력 예 설명
// "try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.
//은석
function solutionEun(s) {
  return s
    .split(" ")
    .map((e) => {
      var Word = "";
      for (let i = 0; i < e.length; i++) {
        i % 2 === 0
          ? (Word += e.charAt(i).toUpperCase())
          : (Word += e.charAt(i).toLowerCase());
      }
      return Word;
    })
    .join(" ");
}

//수진
function solutionsujin(s) {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((alpha, i) =>
          i % 2 == 0 ? alpha.toUpperCase() : alpha.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}

//민희
function solutionmini(s) {
  let answer = "";
  let arr = s.split(" ");

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 === 0) {
        // 짝수
        answer += arr[i][j].toUpperCase(); // 대문자변환
      } else {
        answer += arr[i][j].toLowerCase(); // 소문자변환
      }
    }
    if (i < arr.length - 1) {
      answer += " ";
    }
  }
  return answer;
}

// Khusan
function solutionKhusan(s) {
  var answer = "";
  let arr = s.split(" "); //공백으로 문자열을 나누어 배열에 저장
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = arr[i];
    for (let j = 0; j < str.length; j++) {
      if (j % 2 === 0) {
        //첫번째 문자거나 짝수번째일때 대문자로 변경
        answer += str[j].toUpperCase();
      } else {
        answer += str[j].toLowerCase();
      }
    }
    answer += " ";
  }
  answer = answer.substr(0, answer.length - 1);
  return answer;
}
