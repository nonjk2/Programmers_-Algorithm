1. 솔루션: `solution` (은석)

```javascript
function solution(arr) {
  const leng = arr.length;
  return arr.reduce((acc, cur) => {
    return (acc += cur / leng);
  }, 0);
}
```

- `arr` 배열의 요소들을 `reduce` 메소드를 사용하여 모두 더한 후, 배열의 길이로 나누어 평균을 계산하는 방식으로 구현되었습니다.
- 코드가 간결하고 효율적으로 작성되었습니다. 개선사항은 없습니다.

2. 솔루션: `solution` (수진)

```javascript
function solution(arr) {
  return arr.reduce((prev, curr) => prev + curr) / arr.length;
}
```

- `arr` 배열의 요소들을 `reduce` 메소드를 사용하여 모두 더한 후, 배열의 길이로 나누어 평균을 계산하는 방식으로 구현되었습니다.
- 코드가 간결하고 효율적으로 작성되었습니다. 개선사항은 없습니다.

3. 솔루션: `solution` (민희)

```javascript
function solution(arr) {
  var answer = 0;

  function solution(arr) {
    return arr.reduce((sum, current) => sum + current) / arr.length;
  }

  return answer;
}
```

- 코드가 중복되고 불필요한 함수 선언이 존재하며, 실제로 `answer`에는 어떠한 연산도 이루어지지 않아 항상 0으로 반환됩니다. 개선사항은 다음과 같습니다:
  - 불필요한 함수 선언을 제거하고, 바로 평균을 계산하여 반환하도록 수정해야 합니다.

4. 솔루션: `solution` (Khusan)

```javascript
function solution(arr) {
  var answer = 0;
  arr.forEach((e) => {
    answer += e;
  });
  return answer / arr.length;
}
```

- `arr` 배열의 요소들을 `forEach` 메소드를 사용하여 모두 더한 후, 배열의 길이로 나누어 평균을 계산하는 방식으로 구현되었습니다.
- 코드가 간결하고 효율적으로 작성되었습니다. 개선사항은 없습니다.
