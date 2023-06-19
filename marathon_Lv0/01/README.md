### 솔루션: `solutionEun`

```javascript
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const arr = new Array(b).fill("*".repeat(a)).forEach((e) => {
    console.log(e);
  });
  return arr;
});
```

- 이 솔루션은 표준 입력으로 주어지는 두 개의 정수 n과 m을 받아서 별(\*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형을 출력합니다.
- 입력을 받아 가로 길이와 세로 길이를 설정합니다.
- `new Array(b).fill("*".repeat(a))`를 사용하여 가로의 길이가 n이고 별(\*) 문자로 채워진 배열을 생성합니다.
- `forEach` 메소드를 사용하여 배열의 요소를 출력합니다.

### 솔루션: `solutionSujin`

```javascript
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  console.log(`${"*".repeat(a)}\n`.repeat(b));
});
```

- 이 솔루션은 표준 입력으로 주어지는 두 개의 정수 n과 m을 받아서 별(\*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형을 출력합니다.
- 입력을 받아 가로 길이와 세로 길이를 설정합니다.
- `repeat` 메소드를 사용하여 가로의 길이가 n이고 개행 문자와 함께 반복되는 문자열을 생성합니다.
- 생성된 문자열을 세로의 길이인 m만큼 출력합니다.

### 솔루션: `solutionMini`

```javascript
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const byul =
    "**************************************************************************************************************************************************************************";
  for (let i = 0; i < b; i++) {
    console.log(byul.substring(0, a));
  }
});
```

- 이 솔루션은 표준 입력으로 주어지는 두 개의 정수 n과 m을 받아서 별(\*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형을 출력합니다.
- 입력을 받아 가로 길이와 세로 길이를 설정합니다.
- 별(\*) 문자를 가로 길이인 n만큼 반복하여 출력합니다.

각 솔루션은 주어진 가로 길이와 세로 길이를 이용하여 별(\*) 문자로 직사각형을 출력하는 방식으로 문제를 해결

하고 있습니다. 솔루션 이름은 주석으로 명시되어 있으니 참고하시면 됩니다.
