// 실패율
// 문제 설명
// 실패율
// failture_rate1.png

// 슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다. 그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 요즘 신규 사용자의 수가 급감한 것이다. 원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.

// 이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다
//. 역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다. 오렐리를 위해 실패율을 구하는 코드를 완성하라.

// 실패율은 다음과 같이 정의한다.

// 스테이지에 도달했으나 아직   클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

// 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

// 제한사항
// 스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
// stages의 길이는 1 이상 200,000 이하이다.
// stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
// 각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
// 단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
// 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.

// 입출력 예
// N	stages	                    result
// 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
// 4	[4,4,4,4,4]	                [4,1,2,3]
// 입출력 예 설명

//수진
function solution(N, stages) {
  let lastPlayer = stages.length;
  let notClearPlayer;
  let fail = [];
  for (i = 1; i <= N; i++) {
    notClearPlayer = stages.filter((v) => v === i).length; // 1스테이지로 시작하니까 첫 값은 1이 됨 이걸 notClear에 할당
    fail.push([i, notClearPlayer / lastPlayer]);
    lastPlayer = lastPlayer - notClearPlayer;
  }
  return fail.sort((a, b) => b[1] - a[1]).map((s) => s[0]);
}

// Fizz Buzz 문제

//은석
function solution(N, stages) {
  let answer = [];
  let people = stages.length;
  for (let i = 0; i <= N; i++) {
    let a = stages.filter((n) => n === i + 1).length;
    answer.push([i + 1, a / people]);
    people -= a;
  }
  answer.pop();
  answer = answer.sort((a, b) => b[1] - a[1]);
  return answer.map((a) => a[0]);
}

//professor.ChatGPT
function solution(N, stages) {
  const count = Array(N + 1).fill(0); // 스테이지 번호별 도달한 사용자 수를 저장할 배열

  // 스테이지 번호별 도달한 사용자 수 카운팅
  for (let stage of stages) {
    count[stage]++;
  }

  const failureRates = []; // 스테이지별 실패율을 저장할 배열
  let userCount = stages.length; // 전체 사용자 수

  // 실패율 계산 및 객체 배열에 저장
  for (let stage = 1; stage <= N; stage++) {
    const userInStage = count[stage]; // 스테이지에 도달한 사용자 수
    const failureRate = userInStage / userCount; // 실패율 계산
    failureRates.push({ stage, failureRate }); // 스테이지 번호와 실패율을 객체로 저장
    userCount -= userInStage; // 현재 스테이지에 도달한 사용자 수를 전체 사용자 수에서 제외
  }

  // 실패율을 기준으로 내림차순으로 정렬
  failureRates.sort((a, b) => b.failureRate - a.failureRate);

  // 정렬된 스테이지 번호를 배열로 추출하여 반환
  return failureRates.map((obj) => obj.stage);
}
