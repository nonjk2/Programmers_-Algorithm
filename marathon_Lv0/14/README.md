### 솔루션: `solution` (은석)

```javascript
function solution(arr, divisor) {
  var arr2 = arr.filter((e) => e % divisor === 0).sort((a, b) => a - b);
  return arr2.length === 0 ? [-1] : arr2;
}
```

- `filter` 메소드를 사용하여 `arr` 배열에서 `divisor`로 나누어 떨어지는 값을 필터링합니다.
- `sort` 메소드를 사용하여 오름차순으로 정렬합니다.
- 필터링된 결과(`arr2`)의 길이가 0인 경우 `-1`을 담은 배열을 반환합니다.
- 코드가 간결하고 정확하게 작성되었습니다. 개선사항은 없습니다.

### 솔루션: `solution` (민희)

```javascript
function solution(arr, divisor) {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  answer.sort((a, b) => a - b);

  if (answer.length == 0) {
    answer.push(-1); //-1만 출력
  }

  return answer;
}
```

- 반복문을 사용하여 `arr` 배열을 순회하면서 `divisor`로 나누어 떨어지는 값을 `answer` 배열에 추가합니다.
- `sort` 메소드를 사용하여 오름차순으로 정렬합니다.
- `answer` 배열의 길이가 0인 경우 `-1`을 추가합니다.
- 코드가 정확하게 작성되었습니다. 개선사항은 없습니다.

### 솔루션: `solution` (수진)

```javascript
function solution(arr, divisor) {
  pass = arr.filter((a) => a % divisor === 0);
  return pass.length === 0 ? [-1] : pass.sort((a, b) => a - b);
}
```

- `filter` 메소드를 사용하여 `arr` 배열에서 `divisor`로 나누어 떨어지는 값을 필터링합니다.
- `sort` 메소드를 사용하여 오름차순으로 정렬합니다.
- 필터링된 결과(`pass`)의 길이가 0인 경우 `-1`을 담은 배열을 반환합니다.
- 코드가 간결하고 정확하게 작성되었습니다. 개선사항은 없습니다.

### 솔루션: `solution` (Khusan)

```javascript
function solution(arr, divisor) {
  var answer = [];

  arr.forEach((e) => {
    if (e % divisor === 0) {
      answer.push(e);
    }
  });
  if (answer.length === 0) {
    answer.push(-1);
  }

  return answer.sort((a, b) => a - b);
}
```

- `forEach` 메소드를 사용하여 `arr` 배열을 순회하면서 `divisor`로 나누어

떨어지는 값을 `answer` 배열에 추가합니다.

- `sort` 메소드를 사용하여 오름차순으로 정렬합니다.
- `answer` 배열의 길이가 0인 경우 `-1`을 추가합니다.
- 코드가 정확하게 작성되었습니다. 개선사항은 없습니다.
