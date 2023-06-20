// 두 개 뽑아서 더하기
// 문제 설명
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.
// 입출력 예
// numbers	result
// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]
//은석
function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let a = numbers[i] + numbers[j];
      answer.includes(a) ? false : (answer = [...answer, a]);
    }
  }

  return answer.sort((a, b) => a - b);
}

// 민희
function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];

      if (!answer.includes(sum)) answer.push(sum); // 중복된 값이 answer에 담기지 않게 됨
    }
  }
  return answer.sort((a, b) => a - b);
}
// flat() 메서드는 모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 생성
//
// 수진
function solution(numbers) {
  var answer = [];
  answer = numbers
    .map((el1, i1) => numbers.map((el2, i2) => (i1 !== i2 ? el1 + el2 : null)))
    .flat()
    .filter((el) => el !== null)
    .sort((a, b) => a - b);
  let newArr = [...new Set(answer.map((el) => Number(el)))];
  return newArr;
}

// Khusan

function solution(numbers) {
  let sumArr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        sumArr.push(numbers[i] + numbers[j]);
      }
    }
  }

  const set = new Set(sumArr);
  const uniqueArr = [...set];

  return uniqueArr.sort((a, b) => a - b);
}
