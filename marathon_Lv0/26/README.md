### 솔루션: `solutionEun` (은석)

```javascript
const solutionEun = (n) => {
  if (n.length === 1) return [-1];
  const a = [...n].sort((a, b) => a - b)[0];
  return [...n].filter((e) => e !== a);
};
```

코드리뷰: 주어진 문제에 대한 해결 방법을 명확하게 구현하였습니다. 개선사항은 딱히 없습니다.

### 솔루션: `solutionSujin` (수진)

```javascript
function solutionSujin(arr) {
  return arr.length === 1
    ? [-1]
    : arr.filter((num) => num !== Math.min(...arr));
}
```

코드리뷰: 주어진 문제에 대한 해결 방법을 명확하게 구현하였습니다. 개선사항은 딱히 없습니다.

### 솔루션: `solutionmini` (민희)

```javascript
function solutionmini(arr) {
  var answer = [];

  if (arr.length <= 1) {
    return [-1];
  } else {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    answer = arr;
  }

  return answer;
}
```

코드리뷰: 주어진 문제에 대한 해결 방법을 명확하게 구현하였습니다. 개선사항은 딱히 없습니다.

### 솔루션: `solutionKhusan` (khusan)

```javascript
function solutionKhusan(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  arr.length <= 1 ? (answer = [-1]) : (answer = arr);
  return answer;
}
```

코드리뷰: 주어진 문제에 대한 해결 방법을 명확하고 간결하게 구현하였습니다. 개선사항은 딱히 없습니다.

위의 코드리뷰와 개선사항을 참고하여 각 솔루션을 개선해보세요.
