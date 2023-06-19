// 자연수 뒤집어 배열로 만들기
// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.
// 입출력 예
// n	return
// 12345	[5,4,3,2,1]

//은석
const solutionEun = (n) => {
  return (n + "")
    .split("")
    .reverse()
    .map((e) => parseInt(e));
};
//수진
function solutionSujin(n) {
  return n
    .toString()
    .split("")
    .reverse((a, b) => a - b)
    .map((s) => Number(s));
}

//민희
function solutionmini(n) {
  let answer = [];
  let arr = String(n).split("").reverse(); // 변환,쪼개기,역순배열

  for (let i = 0; i < arr.length; i++) {
    answer.push(parseInt(arr[i])); // 다시 정수로
  }

  return answer;
}

// Khusan

let chng = (arg) => Number(arg);

function solutionKhusan(n) {
  var answer = String(n);
  let result = answer.split("").map(chng);
  return result.reverse();
}
