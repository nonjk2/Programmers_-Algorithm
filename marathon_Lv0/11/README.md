### 솔루션: `solution` (은석)

```javascript
function solution(x, n) {
  return [...Array(n)].map((_, i) => x * (i + 1));
}
```

- `Array(n)`을 사용하여 길이가 `n`인 빈 배열을 생성합니다.
- `map` 메소드를 사용하여 배열의 각 요소에 접근하고, `x * (i + 1)`을 계산하여 결과 배열을 생성합니다.
- 코드가 간결하고 효율적으로 작성되었습니다. 개선사항은 없습니다.

### 솔루션: `solution` (민희)

```javascript
function solution(x, n) {
  var answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }

  return answer;
}
```

- `for` 루프를 사용하여 `i`를 1부터 `n`까지 증가시키면서 `x * i` 값을 `answer` 배열에 추가합니다.
- 코드가 잘 작성되었습니다. 개선사항은 없습니다.

### 솔루션: `solution` (수진)

```javascript
function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}
```

- `for` 루프를 사용하여 `i`를 1부터 `n`까지 증가시키면서 `x * i` 값을 `answer` 배열에 추가합니다.
- 코드가 잘 작성되었습니다. 개선사항은 없습니다.

### 솔루션: `solution` (Khusan)

```javascript
function solution(x, n) {
  var answer = [];
  let add = x;
  for (let i = 0; i < n; i++) {
    answer.push(x);
    x += add;
  }
  return answer;
}
```

- `for` 루프를 사용하여 `i`를 0부터 `n-1`까지 증가시키면서 `x` 값을 `answer` 배열에 추가합니다.
- `x` 값을 `answer`에 추가한 후, `x` 값을 `add` 만큼 증가시킵니다.
- 코드가 잘 작성되었습니다. 개선사항은 없습니다.
