### 솔루션: `solution` (은석)

```javascript
function solution(price, money, count) {
  var gigu = new Array(count)
    .fill(undefined)
    .map((e, i) => (i + 1) * price)
    .reduce((acc, cur) => acc + cur);
  return gigu >= money ? gigu - money : 0;
}
```

- `count` 길이의 빈 배열을 생성하고, 각 요소에 `price`의 배수를 할당하여 `gigu` 배열을 생성합니다.
- `reduce` 메소드를 사용하여 `gigu` 배열의 모든 요소를 합산하여 `gigu` 변수에 저장합니다.
- `gigu`가 `money`보다 크거나 같으면 `gigu - money`를 반환하고, 그렇지 않으면 0을 반환합니다.
- 코드가 잘 작성되었습니다. 개선사항은 없습니다.

### 솔루션: `solution` (민희)

```javascript
function solution(price, money, count) {
  var answer = 0;

  for (let i = 0; i <= count; i++) {
    answer += price * i;
  }

  if (answer < money) return 0;

  return answer - money;
}
```

- `for` 루프를 사용하여 `i`를 0부터 `count`까지 증가시키면서 `price * i` 값을 `answer`에 누적합니다.
- 만약 `answer`가 `money`보다 작다면 0을 반환합니다.
- 그렇지 않으면 `answer - money`를 반환합니다.
- 코드가 잘 작성되었습니다. 개선사항은 없습니다.

### 솔루션: `solution` (수진)

```javascript
function solution(price, money, count) {
  const result = (price * count * (count + 1)) / 2 - money;
  return result > 0 ? result : 0;
}
```

- 등차수열의 합인 `(price * count * (count + 1)) / 2`에서 `money`를 뺀 결과를 `result` 변수에 할당합니다.
- `result`가 0보다 크면 `result`를 반환하고, 그렇지 않으면 0을 반환합니다.
- 코드가 간결하고 효율적으로 작성되었습니다. 개선사항은 없습니다.

### 솔루션: `solution` (수진)

```javascript
function solution(price, money, count) {
  let total = 0;

  for (i = 1; i <= count; i++) {
    total += price * i;
  }
  return total - money ? total - money : 0;
}
```

- `for` 루프를 사용하여 `i`를 1부터 `count`까지 증가시키면서 `price * i` 값을 `total`에 누적합니다.
- 만약 `total - money`가 참이라면 `total - money`를 반환하고,

그렇지 않으면 0을 반환합니다.

- 코드가 잘 작성되었습니다. 개선사항은 없습니다.
