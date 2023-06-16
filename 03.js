// 가운데 글자 가져오기
// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// 입출력 예
// s	return
// "abcde"	"c"
// "qwer"	"we"
function solution(s) {
  var answer = "";

  // var str = [...s] // str은 문자열 s를 배열로 만든거
  // console.log(str) // [ 'a', 'b', 'c', 'd', 'e' ]

  var arr = s.length; // arr은 str의 길이
  // console.log(arr)      // 5

  if (arr % 2 == 0) {
    answer = s[arr / 2 - 1] + s[arr / 2];
  } else {
    answer = s[Math.floor(arr / 2)];
  }

  return answer;
}
console.log(solution("abcde"));

function solution(s) {
  const middle = s.length / 2;
  return s.length % 2 ? s[Math.floor(middle)] : s[middle - 1].concat(s[middle]);
}
//
function solution(s) {
  if (s.length % 2 === 0) {
    let re = Math.floor(s.length / 2);
    return s[re - 1].concat(s[re]);
  } else {
    let re = Math.floor(s.length / 2);
    return s[re];
  }
}
//은석
const solution = (s) =>
  s.length % 2 === 1
    ? s.charAt((s.length + 1) / 2 - 1)
    : s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2);
