// 시저 암호
// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.
// 입출력 예
// s       n   result
// "AB"    1   "BC"
// "z"     1   "a"
// "a B z" 4   "e F d"

//은석
function solution(s, n) {
  const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    b = a.toLowerCase();
  var answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === " ") {
      answer += " ";
      continue;
    }
    a.includes(s.charAt(i))
      ? (answer += a[(a.indexOf(s.charAt(i)) + n) % 26])
      : b.includes(s.charAt(i))
      ? (answer += b[(b.indexOf(s.charAt(i)) + n) % 26])
      : false;
  }
  return answer;
}

// 수진
function solution(s, n) {
  var answer = "";
  for (i = 0; i < s.length; i++) {
    let ASCII = s[i].charCodeAt();
    if (ASCII === 32) {
      answer += s[i];
    } else if (ASCII >= 97 && ASCII + n > 122) {
      answer += String.fromCharCode(ASCII + n - 26);
    } else if (ASCII >= 65 && ASCII < 97 && ASCII + n > 90) {
      answer += String.fromCharCode(ASCII + n - 26);
    } else {
      answer += String.fromCharCode(ASCII + n);
    }
  }
  return answer;
}
// charCodeAt()

// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.

//testCase
function caesar(s, n) {
  return s.replace(/([a-z])|([A-Z])/g, (c, lowerCase) => {
    var startCode = lowerCase ? "a".charCodeAt(0) : "A".charCodeAt(0);
    return String.fromCharCode(
      ((c.charCodeAt(0) - startCode + n) % 26) + startCode
    );
  });
}
