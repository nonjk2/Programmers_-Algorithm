// 문자열 내 마음대로 정렬하기
// 문제 설명
// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
// 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

// 제한 조건
// strings는 길이 1 이상, 50이하인 배열입니다.
// strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// 모든 strings의 원소의 길이는 n보다 큽니다.
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
// 입출력 예
// strings	                n	 return
// ["sun", "bed", "car"]	1	["car", "bed", "sun"]
// ["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]
// 입출력 예 설명
// 입출력 예 1
// "sun", "bed", "car"의 1번째 인덱스 값은 각각 "u", "e", "a" 입니다. 이를 기준으로 strings를 정렬하면 ["car", "bed", "sun"] 입니다.

// 입출력 예 2
// "abce"와 "abcd", "cdx"의 2번째 인덱스 값은 "c", "c", "x"입니다. 따라서 정렬 후에는 "cdx"가 가장 뒤에 위치합니다. "abce"와 "abcd"는 사전순으로 정렬하면 "abcd"가 우선하므로, 답은 ["abcd", "abce", "cdx"] 입니다.
//은석
const solution = (string, n) => {
  return string
    .sort((a, b) => a > b || (a === b) - 1)
    .map((e, i) => {
      return { index: i, value: e.charAt(n) };
    })
    .sort((a, b) => a.value > b.value || +(a.value === b.value) - 1)
    .map((e) => string[e.index]);
};

// 민희
function solution(strings, n) {
  var answer = [];

  // 문자열의 가장 앞 부분에 n번째 인덱스 글자를 붙인 배열 만들기(for문 사용)
  for (var i = 0; i < strings.length; i++) {
    strings[i] = strings[i][n] + strings[i]; // car -> a + car = acar이 되는것
  }

  // 해당 배열을 사전순으로 정렬(sort)
  strings.sort();

  // 앞글자 제거 후 리턴
  for (var j = 0; j < strings.length; j++) {
    strings[j] = strings[j].replace(strings[j][0], " ");
    answer.push(strings[j]);
  }

  return answer;
}

// 수진
function solution(strings, n) {
  let answer = [];
  let sortAnswer = [];

  strings.forEach((a) => {
    sortAnswer.push(a[n] + a);
  });
  sortAnswer = sortAnswer.sort().forEach((a) => {
    answer.push(a.substring(1));
  });

  return answer;
}

// Khusan
function solution(strings, n) {
  return strings.sort((a, b) => {
    const charA = a[n];
    const charB = b[n];

    if (charA === charB) {
      // 인덱스 `n`의 문자가 같을 경우, 사전 순으로 정렬
      return a.localeCompare(b);
    } else {
      // 인덱스 `n`의 문자를 기준으로 정렬
      return charA.localeCompare(charB);
    }
  });
}
