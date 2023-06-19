// 자릿수 더하기
// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수
// 입출력 예
// N	answer
// 123	6
// 987	24
// 입출력 예 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.
//은석

const solutionEun = (n) => {
  var answer = 0;
  (n + "").split("").forEach((e) => (answer += parseInt(e)));
  return answer;
};

//민희
function solutionmini(n) {
  let sum = 0;
  while (n > 0) {
    // while 참인 경우 반복 실행
    const num = n % 10; // num = 7
    n = Math.floor(n / 10);
    sum += num; // 7 -> 8 -> 9
  }
  return sum;
}

// Khusan

function solutionKhusan(n) {
  var answer = String(n);
  let chng = (arg) => Number(arg);
  let newArr = answer.split("").map(chng);
  let re = newArr.reduce((acc, curr) => acc + curr);
  return re;
}

//수진
function solutionSujin(n) {
  var answer = 0;
  n.toString()
    .split("")
    .forEach((s) => (answer += Number(s)));
  return answer;
}
