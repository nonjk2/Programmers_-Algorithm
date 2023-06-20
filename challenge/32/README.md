### 솔루션: `solution` (은석)

```javascript
function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let a = numbers[i] + numbers[j];
      answer.includes(a) ? false : (answer = [...answer, a]);
    }
  }
  return answer.sort((a, b) => a - b);
}
```

코드리뷰: 이중 반복문을 사용하여 모든 가능한 두 수의 합을 구하고, 중복된 수는 걸러내는 방식으로 구현되었습니다. 결과 배열을 오름차순으로 정렬하여 반환합니다.

### 솔루션: `solution` (민희)

```javascript
function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (!answer.includes(sum)) answer.push(sum);
    }
  }
  return answer.sort((a, b) => a - b);
}
```

코드리뷰: 이중 반복문을 사용하여 모든 가능한 두 수의 합을 구하고, 중복된 수는 걸러내는 방식으로 구현되었습니다. 결과 배열을 오름차순으로 정렬하여 반환합니다. 개선점은 없습니다.

### 솔루션: `solution` (수진)

```javascript
function solution(numbers) {
  var answer = [];
  answer = numbers
    .map((el1, i1) => numbers.map((el2, i2) => (i1 !== i2 ? el1 + el2 : null)))
    .flat()
    .filter((el) => el !== null)
    .sort((a, b) => a - b);
  let newArr = [...new Set(answer.map((el) => Number(el)))];
  return newArr;
}
```

코드리뷰: 2중 `map` 함수를 사용하여 모든 가능한 두 수의 합을 구하고, 중복된 수는 걸러내는 방식으로 구현되었습니다. 중첩 배열을 `flat()` 메서드를 사용하여 1차원 배열로 변환하고, 중복된 값을 제거하기 위해 `Set` 객체를 활용하였습니다. 결과 배열을 오름차순으로 정렬하여 반환합니다.

### 솔루션: `solution` (Khusan)

```javascript
function solution(numbers) {
  let sumArr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        sumArr.push(numbers[i] + numbers[j]);
      }
    }
  }
  const set = new Set(sumArr);
  const uniqueArr = [...set];
  return uniqueArr.sort((a, b) => a - b);
}
```

코드리뷰: 이중 반복문을 사용하여 모든 가능한 두 수의 합을 구하고, 중복된

수는 걸러내는 방식으로 구현되었습니다. 중복된 값을 제거하기 위해 `Set` 객체를 활용하였습니다. 결과 배열을 오름차순으로 정렬하여 반환합니다. 개선점은 없습니다.
