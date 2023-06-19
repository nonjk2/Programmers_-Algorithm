// 문자열 내 p와 y의 개수
// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.
// 입출력 예
// s	answer
// "pPoooyY"	true
// "Pyy"	false
// 입출력 예 설명
// 입출력 예 #1
// 'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

// 입출력 예 #2
// 'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

// ※ 공지 - 2021년 8월 23일 테스트케이스가 추가되었습니다.

//은석
const solution = (s) => {
  const letterPlength = s
    .toLowerCase()
    .split("")
    .filter((x) => x === "p").length;
  const letterYlength = s
    .toLowerCase()
    .split("")
    .filter((x) => x === "y").length;
  return letterPlength === letterYlength;
};

//수진
function solution(s) {
  var answer = true;
  let sum_p = 0;
  let sum_y = 0;
  let alphabet = s.split("");

  alphabet.forEach((a) => {
    if (a == "p" || a == "P") {
      sum_p += 1;
    } else if (a == "y" || a == "Y") {
      sum_y += 1;
    }
  });

  //   if (sum_p === sum_y) {
  //     answer = true;
  //   } else {
  //     answer = false;
  //   }
  return sum_p === sum_y;
}

// 민희

function solution(s) {
  var answer = true;

  s = s.toUpperCase();

  var num = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i] === "P") {
      num++;
    }
    if (s[i] === "Y") {
      num--;
    }
  }
  if (num === 0) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

// khusan

function solution(s) {
  let answer = s.toUpperCase();
  cnt = 0;
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] == "P") cnt++;
    if (answer[i] == "Y") cnt--;
  }

  return cnt === 0 ? true : false;
}
