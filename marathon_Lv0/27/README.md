각 솔루션에 대한 코드리뷰와 개선사항을 제시하겠습니다.

### 솔루션: `solutionEun` (은석)

```javascript
const solutionEun = (n) => {
  let count = 0;
  while (1) {
    if (count === 500 || n === 1) break;
    n % 2 === 0 ? (n = n / 2) : (n = n * 3 + 1);
    count++;
  }
  return count === 500 ? -1 : count;
};
```

코드리뷰: 주어진 문제에 대한 해결 방법을 명확하게 구현하였습니다. 개선사항은 딱히 없습니다.

### 솔루션: `solutionSujin` (수진)

```javascript
function solutionSujin(num) {
  var answer = 0;
  while (num > 1) {
    num % 2 === 0 ? (num /= 2) : (num = num * 3 + 1);
    answer++;
  }
  return answer >= 500 ? -1 : answer;
}
```

코드리뷰: 주어진 문제에 대한 해결 방법을 명확하게 구현하였습니다. 개선사항은 딱히 없습니다.

### 솔루션: `solution` (민희)

```javascript
function solution(num) {
  var answer = 0; //반복 횟수

  while (num != 1) {
    //숫자가 1이 될 때까지

    answer += 1; //반복 횟수 증가

    if (num % 2 == 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
  }

  if (answer >= 500) {
    answer = -1;
  }

  return answer;
}
```

코드리뷰: 주어진 문제에 대한 해결 방법을 명확하게 구현하였습니다. 개선사항은 딱히 없습니다.

### 솔루션: `solution` (Khusan)

```javascript
function solution(num) {
  for (let cnt = 0; cnt <= 500; cnt++) {
    if (num === 1) return cnt;
    else if (num % 2 === 0) num = num / 2;
    else num = num * 3 + 1;
  }
  return -1;
}
```

코드리뷰: 주어진 문제에 대한 해결 방법을 명확하고 간결하게 구현하였습니다. 개선사항은 딱히 없습니다.
