// 정수 내림차순으로 배치하기
// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.
// 입출력 예
// n	return
// 118372	873211

//은석
const solutionEun = (n) => {
  return +(n + "")
    .split("")
    .sort((a, b) => b - a)
    .join("");
};

//수진
function solutionSujin(n) {
  let box = [];

  while (n > 0) {
    box.push(n % 10);
    n = Math.floor(n / 10);
  }

  return box.sort((a, b) => b - a).join("") * 1;
}

// Khusan

let chng = (arg) => Number(arg);

function solutionKhusan(n) {
  let answer = String(n);
  let result = answer.split("").map(chng);
  return +result.sort((a, b) => b - a).join("");
}

// 민희
function solutionmini(n) {
  var answer = 0;
  var sum = "";

  var val = n.toString(); // 정수를 문자열로 형변환

  var arr = val.split(""); // 배열에 담아줌

  arr.sort((a, b) => b - a); // 내림차순으로 배열 정렬

  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i]; // 큰수부터 하나씩
  }

  answer = parseInt(sum); // 문자열을 정수로 형변환

  return answer;
}
