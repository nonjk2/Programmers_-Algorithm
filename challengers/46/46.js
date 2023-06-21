// 나머지가 1이 되는 수 찾기
// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를
// return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

// 제한사항
// 3 ≤ n ≤ 1,000,000
// 입출력 예
// n	result
// 10	3
// 12	11

//은석
function solution(n) {
  var answer = 0;
  for (let i = 1; i < n + 1; i++) {
    n % i === 1 ? (answer = i) : false;
    if (answer !== 0) return answer;
  }
}

//민승
function solution(n) {
  var answer = 1;
  while (n % answer !== 1) {
    answer += 1;
  }
  return answer;
}

//수진
function solution(n) {
  for (i = 1; i <= n; i++) {
    if (n % i === 1) return i;
  }
}

// 민희
function solution(n) {
  let answer = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      return (answer = i);
    }
  }
  //   return answer;
}

// Khusan
function solution(n) {
  for (let i = 0; i < n; i++) {
    if (n % i === 1) return i;
  }
}
