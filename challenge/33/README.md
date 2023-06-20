### 솔루션: `solution` (은석)

```javascript
function solution(lottos, win_nums) {
  return lottos
    .reduce(
      (acc, cur) => {
        if (win_nums.includes(cur)) {
          acc[0] -= 1;
          acc[1] -= 1;
        } else if (cur === 0) {
          acc[0] -= 1;
        }
        return acc;
      },
      [7, 7]
    )
    .map((e) => (e === 7 ? 6 : e));
}
```

코드리뷰: `reduce` 메서드를 사용하여 로또 번호와 당첨 번호를 비교하고, 일치하는 번호와 알아볼 수 없는 번호의 개수를 세는 방식으로 구현되었습니다. 최고 순위와 최저 순위를 계산하여 반환합니다.

### 솔루션: `solution` (민희)

```javascript
function solution(lottos, win_nums) {
  var answer = [];
  const rank = [6, 6, 5, 4, 3, 2, 1];
  let winnum = 0;
  let zeronum = 0;

  lottos.map((num) => {
    if (num === 0) {
      zeronum++;
    } else {
      win_nums.map((win_num) => {
        if (num === win_num) {
          winnum++;
        }
      });
    }
  });

  answer[0] = rank[winnum + zeronum];
  answer[1] = rank[winnum];

  return answer;
}
```

코드리뷰: 주어진 로또 번호와 당첨 번호를 비교하고, 일치하는 번호와 알아볼 수 없는 번호의 개수를 세는 방식으로 구현되었습니다. 최고 순위와 최저 순위를 계산하여 반환합니다. 개선점은 없습니다.

### 솔루션: `solution` (수진)

```javascript
function solution(lottos, win_nums) {
  let zero = lottos.filter((el) => el === 0).length;
  let min = win_nums.filter(
    (el, i) => el === lottos.find((el2) => el2 === el)
  ).length;
  let max = min + zero;
  return [max, min].map((el) => (el ? 7 - el : 6));
}
```

코드리뷰: `filter` 메서드를 사용하여 알아볼 수 없는 번호와 일치하는 번호의 개수를 구하는 방식으로 구현되었습니다. 최고 순위와 최저 순위를 계산하여 반환합니다. 개선점은 없습니다.
