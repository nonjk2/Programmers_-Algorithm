### 솔루션: `solution` (은석)

```javascript
function solution(sizes) {
  const a = sizes
    .map(([w, h]) => (w < h ? [h, w] : [w, h]))
    .reduce(
      (acc, [d, e]) => {
        if (acc[0] < d) acc[0] = d;
        if (acc[1] < e) acc[1] = e;
        return acc;
      },
      [0, 0]
    );

  return a[0] * a[1];
}
```

코드리뷰: 각 명함의 가로 길이와 세로 길이를 비교하여 큰 값을 가로로, 작은 값을 세로로 설정한 후, 가장 큰 가로 길이와 세로 길이를 찾아 곱하여 지갑의 크기를 구합니다. 개선점은 없습니다.

### 솔루션: `solution` (수진1)

```javascript
function solution(sizes) {
  const [hor, ver] = sizes
    .map(([w, h]) => (w < h ? [h, w] : [w, h]))
    .reduce(
      ([h, v], [a, b]) => {
        return [(h = Math.max(h, a)), (v = Math.max(v, b))];
      },
      [0, 0]
    );
  return hor * ver;
}
```

코드리뷰: 각 명함의 가로 길이와 세로 길이를 비교하여 큰 값을 가로로, 작은 값을 세로로 설정한 후, 가장 큰 가로 길이와 세로 길이를 찾아 곱하여 지갑의 크기를 구합니다. 개선점은 없습니다.

### 솔루션: `solution` (수진2)

```javascript
function solution(sizes) {
  var answer = 0;
  let sortArr = [];
  let maxArr = [];
  let minArr = [];

  sortArr = sizes.map((a) => a.sort((a, b) => b - a));
  sizes.map((a, idx1) => maxArr.push(a[0]));
  sizes.map((a, idx1) => minArr.push(a[1]));
  answer = Math.max.apply(null, maxArr) * Math.max.apply(null, minArr);

  return answer;
}
```

코드리뷰: 각 명함의 가로 길이와 세로 길이를 정렬하여 큰 값과 작은 값을 구한 후, 가장 큰 가로 길이와 세로 길이를 찾아 곱하여 지갑의 크기를 구합니다. 개선점은 없습니다.

위의 코드리뷰를 참고하여 각 솔루션을 개선해보세요.
