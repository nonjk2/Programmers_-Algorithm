### 솔루션: `solution` (은석)

```javascript
function solution(n) {
  return new Array(n)
    .fill(0)
    .map((e, i) => (i % 2 ? "박" : "수"))
    .join("");
}
```

- 주어진 길이 `n`에 맞게 "수박" 패턴을 생성하는 방식으로 구현되었습니다.
- `new Array(n)`을 사용하여 길이 `n`의 배열을 생성하고, `map` 메소드를 사용하여 각 요소를 패턴에 맞게 변환합니다.
- 패턴 변환이 진행된 배열을 `join` 메소드를 사용하여 문자열로 반환합니다.
- 개선사항: `fill(0)`을 사용하여 배열을 채울 필요가 없으며, `map` 메소드 내에서 인덱스를 활용하여 패턴을 생성하는 방식으로 개선할 수 있습니다.

### 솔루션: `solution` (민희)

```javascript
function solution(n) {
  var answer = "";

  for (let i = 0; i < n; i++) {
    i % 2 === 0 ? (answer += "수") : (answer += "박");
  }

  return answer;
}
```

- 주어진 길이 `n`에 맞게 "수박" 패턴을 생성하는 방식으로 구현되었습니다.
- `for` 반복문을 사용하여 패턴을 생성하고, `answer` 변수에 문자열로 누적합니다.
- 생성된 패턴을 반환합니다.
- 개선사항: 패턴을 생성하는 부분에서 삼항 연산자를 사용하는 대신, `i % 2`의 결과에 따라 "수" 또는 "박"을 더하도록 개선할 수 있습니다.

### 솔루션: `solution` (khusan)

```javascript
function solution(n) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 1) {
      answer.push("박");
    } else {
      answer.push("수");
    }
  }
  return answer.join("");
}
```

- 주어진 길이 `n`에 맞게 "수박" 패턴을 생성하는 방식으로 구현되었습니다.
- `for` 반복문을 사용하여 패턴을 생성하고, `answer` 배열에 요소를 추가합니다.
- 생성된 패턴을 `join` 메소드를 사용하여 문자열로 반환합니다.
- 개선사항: 배열에 요소를 추가하는 부분에서 `if-else` 문을 사용하는 대신, 삼항 연산자를 사용하여 간결하게 작성할 수 있습니다.

### 솔루션: `solution` (수진)

```javascript
function solution(n) {
  let watermelon = "수박".repeat(n / 2);
  return n % 2 === 0 ? watermelon : watermelon + "수";
}
```

- 주어진 길이 `n`에 맞게 "수박" 패턴을 생성하는 방식으로 구현되었습니다.
- "수박"을 반복하여 길이 `n`에 맞는 패턴을 생성합니다.
- 생성된 패턴을 반환합니다.
- 개선사항: 패턴 생성 부분에서 `repeat` 메소드를 사용하는 대신, `for` 반복문을 사용하여 패턴을 생성하는 방식으로 개선할 수 있습니다.

각 솔루션은 주어진 길이 `n`에 맞게 "수박" 패턴을 생성하는 방식으로 구현되어 있습니다. 개선사항을 참고하여 코드를 개선해보세요.
