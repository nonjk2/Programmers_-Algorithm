// 모의고사
// 문제 설명
// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,  ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1,  2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5,  3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한 조건
// 시험은 최대 10,000 문제로 구성되어있습니다.
// 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

// 입출력 예
// answers	    return
// [1,2,3,4,5]	[1]
// [1,3,2,4,2]	[1,2,3]

// 입출력 예 설명
// 입출력 예 #1

// 수포자 1은 모든 문제를 맞혔습니다.
// 수포자 2는 모든 문제를 틀렸습니다.
// 수포자 3은 모든 문제를 틀렸습니다.
// 따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

// 입출력 예 #2

// 모든 사람이 2문제씩을 맞췄습니다.

//은석
function solution(answers) {
  let answer = [];
  const a = [1, 2, 3, 4, 5],
    b = [2, 1, 2, 3, 2, 4, 2, 5],
    c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const ans = answers.reduce(
    (acc, cur, i) => {
      if (answers[i] === a[i % 5]) {
        acc[0] += 1;
      }
      if (answers[i] === b[i % 8]) {
        acc[1] += 1;
      }
      if (answers[i] === c[i % 10]) {
        acc[2] += 1;
      }
      return acc;
    },
    [0, 0, 0]
  );

  ans.forEach((e, i) => {
    let Max = Math.max(...ans);
    if (e === Max) {
      answer = [...answer, i + 1];
    }
  });

  return answer;
}
// 쉼표(,)는 JavaScript에서 두 개 이상의 표현식을 결합하는 연산자입니다.
// 이 연산자는 왼쪽 표현식을 평가하고, 그 다음에 오른쪽 표현식을 평가한 뒤, 오른쪽 표현식의 결과를 반환합니다.

//따라서 acc++ : acc 구문은 다음과 같은 동작을 수행합니다:

// acc++는 acc 값을 1 증가시킵니다. 이 연산은 현재 acc 값으로 평가되고, acc 값은 1 증가합니다.
// 그 다음에 acc 값이 반환됩니다.
// 이 코드에서는 reduce() 함수를 사용하여 answers 배열의 요소와 student 배열의 요소를 비교하면서 맞춘 정답의 개수를 세고 있습니다.
// 이때 reduce() 함수의 콜백 함수에서 쉼표 연산자를 사용하여 한 줄에 여러 개의 표현식을 작성하고 있습니다.

// (cur === student[i % student.length] ? acc++ : acc, acc) 구문은 다음과 같은 동작을 수행합니다:

// 현재 answers 배열의 요소 cur이 student 배열의 해당 위치에 있는 요소와 일치하는지 확인합니다.
// 일치하면 acc 값을 1 증가시킵니다.
// acc 값을 반환합니다.
// 이때 쉼표 연산자는 cur === student[i % student.length] ? acc++ 표현식을 평가한 후에 acc 값을 반환합니다
// cur === student[i % student.length] ? acc++ 표현식에서는 cur과 student[i % student.length]이 일치하는지 확인하고, 일치하면 acc 값을 1 증가시킵니다.
// 증가된 acc 값이 다음 reduce() 반복에서 사용되게 됩니다.

// 수진
const solution = (answers) => {
  let studentArr = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let answer = [];
  for (let student of studentArr) {
    answer.push(
      answers.reduce(
        (acc, cur, i) => (
          cur === student[i % student.length] ? acc++ : acc, acc
        ),
        0
      )
    );
  }
  return answer.reduce(
    (acc, cur, i) => (cur === Math.max(...answer) ? acc.push(i + 1) : acc, acc),
    []
  );
};

// 다음에 오는 acc는 두 번째 표현식으로, 첫 번째 표현식인 조건식의 결과(acc++ 또는 acc)를 그대로 반환하는 역할을 합니다.
// 즉, (cur === student[i % student.length] ? acc++ : acc, acc) 표현식은 현재 학생의 답안과 정답을 비교하여 맞힌 문제의 개수를 세는데 사용되는 표현식이며,
// 조건식의 결과(acc++ 또는 acc)를 반환합니다.
