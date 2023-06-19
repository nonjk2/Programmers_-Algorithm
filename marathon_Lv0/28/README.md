### 솔루션: `solution` (은석)

```javascript
const solution = (x) => {
  return (
    x % [...(x + "")].map((e) => parseInt(e)).reduce((a, v) => a + v) === 0
  );
};
```

코드리뷰: 주어진 문제에 대한 해결 방법을 명확하게 구현하였습니다. 개선사항은 딱히 없습니다.

### 솔루션: `solutionSujin` (수진)

```javascript
function solutionSujin(x) {
  return !(
    x %
    x
      .toString()
      .split("")
      .reduce((acc, val) => Number(acc) + Number(val))
  );
}
```

코드리뷰: 주어진 문제에 대한 해결 방법을 명확하게 구현하였습니다. 개선사항은 딱히 없습니다.

### 솔루션: `solution` (민희)

```javascript
function solution(x) {
  let num = (x + "")
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);
  return x % num === 0;
}
```

코드리뷰: 주어진 문제에 대한 해결 방법을 명확하게 구현하였습니다. 개선사항은 딱히 없습니다.

### 솔루션: `solution` (Khusan)

```javascript
let chng = (arg) => Number(arg);

function solution(x) {
  let answer = String(x);
  let newArr = answer.split("").map(chng);
  let reduc = newArr.reduce((acc, curr) => acc + curr);
  return x % reduc ? true : false;
}
```

코드리뷰: 주어진 문제에 대한 해결 방법을 명확하게 구현하였습니다. 개선사항은 딱히 없습니다.

위의 코드리뷰를 참고하여 각 솔루션을 개선해보세요.
