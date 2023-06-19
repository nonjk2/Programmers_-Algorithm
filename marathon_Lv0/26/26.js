// 제일 작은 수 제거하기
// 문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
// 입출력 예
// arr	return
// [4,3,2,1]	[4,3,2]
// [10]	[-1]

//은석
const solutionEun = (n) => {
  if (n.length === 1) return [-1];
  const a = [...n].sort((a, b) => a - b)[0];
  return [...n].filter((e) => e !== a);
};

//수진
function solutionSujin(arr) {
  return arr.length === 1
    ? [-1]
    : arr.filter((num) => num !== Math.min(...arr));
}

// 민희
function solutionmini(arr) {
  var answer = [];

  if (arr.length <= 1) {
    return [-1];
  } else {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    answer = arr;
  }

  return answer;
}

// Khusan
function solutionKhusan(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  arr.length <= 1 ? (answer = [-1]) : (answer = arr);
  return answer;
}

// splice 예시
let arr = [0, 1, 2, 3, 4, 5];
let query = [4, 1, 2];

// console.log(arr.splice(0, query[0])) // (0부터 4개제거)제거된 요소를 출력 [ 0, 1, 2, 3 ]
// console.log(arr.splice(0, query[1])) // (0부터 1개제거)제거된 요소를 출력[ 0 ]
// console.log(arr.splice(query[0])) // (4부터 제거)[ 4, 5 ]
// console.log(arr.splice(query[0]+1)) // [ 5 ]
// console.log(arr.splice(query[0 + 1])) // [ 1, 2, 3, 4, 5 ]
