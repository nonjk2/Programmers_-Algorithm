### 솔루션: `solution`

```javascript
const solution = (arr) => arr.filter((e, i) => e !== arr[i + 1]);
```

코드리뷰: `filter` 함수를 사용하여 현재 원소와 다음 원소를 비교하여 같은 숫자는 걸러내는 방식으로 구현되었습니다. 간결하고 효율적인 방법입니다.

### 솔루션: `solution` (Khusan)

```javascript
function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
```

코드리뷰: 반복문을 사용하여 현재 원소와 다음 원소를 비교하여 같은 숫자는 걸러내는 방식으로 구현되었습니다. 배열 `answer`에 삽입하는 방식을 사용하였습니다.

### 솔루션: `solution` (수진, 민희)

```javascript
function solution(arr) {
  return arr.filter((num, i) => num !== arr[i + 1]);
}
```

코드리뷰: `filter` 함수를 사용하여 현재 원소와 다음 원소를 비교하여 같은 숫자는 걸러내는 방식으로 구현되었습니다. 간결하고 효율적인 방법입니다. 모든 솔루션은 같은 로직으로 구현되었으며, 개선점은 없습니다.
