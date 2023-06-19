### 솔루션: `solutionEun` (은석)

```javascript
const solutionEun = (n) => {
  return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
};
```

코드리뷰: 주어진 문제에 대한 해결 방법을 명확하고 간결하게 구현하였습니다. 개선사항은 딱히 없습니다.

### 솔루션: `solutionSujin` (수진)

```javascript
function solutionSujin(n) {
  const num = Math.sqrt(n);
  return num === Math.trunc(num) ? Math.pow(num + 1, 2) : -1;
}
```

코드리뷰: 주어진 문제에 대한 해결 방법을 명확하게 구현하였습니다. 개선사항은 딱히 없습니다.

### 솔루션: `solutionKhusan` (khusan)

```javascript
function solutionKhusan(n) {
  var answer = Math.sqrt(n);

  if (answer % 1 === 0) return (answer + 1) ** 2;

  return -1;
}
```

코드리뷰: 주어진 문제에 대한 해결 방법을 명확하고 간결하게 구현하였습니다. 개선사항은 딱히 없습니다.

### 솔루션: `solution` (민희)

```javascript
function solution(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) if (n % i === 0) arr.push(n / i);
  return arr.length % 2 ? 1 : 2;
}
```

- 개선사항:
  1. 문제의 요구사항에 맞게 정수의 제곱근을 구하고, 제곱근이 정수인지 확인하는 방법을 사용하여 구현할 수 있습니다.

```javascript
function solution(n) {
  const sqrt = Math.sqrt(n);
  if (Number.isInteger(sqrt)) {
    return (sqrt + 1) ** 2;
  } else {
    return -1;
  }
}
```

코드리뷰: 문제를 해결하기 위해 주어진 요구사항을 정확히 이해하고 구현하였습니다. 개선사항은 문제의 요구사항에 맞게 코드를 수정하여 가독성을 높이는 것입니다.

위의 코드리뷰와 개선사항을 참고하여 각 솔루션을 개선해보세요.
