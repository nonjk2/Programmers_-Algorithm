### 솔루션: `solutionEun` (은석)

```javascript
function solutionEun(s) {
  return s
    .split(" ")
    .map((e) => {
      var Word = "";
      for (let i = 0; i < e.length; i++) {
        i % 2 === 0
          ? (Word += e.charAt(i).toUpperCase())
          : (Word += e.charAt(i).toLowerCase());
      }
      return Word;
    })
    .join(" ");
}
```

- 주어진 문자열을 공백을 기준으로 나눈 후, 각 단어의 짝수번째 알파벳을 대문자로, 홀수번째 알파벳을 소문자로 바꿉니다.
- 개선사항: `map()` 함수를 사용하여 더 간결하게 구현할 수 있습니다.

### 솔루션: `solutionsujin` (수진)

```javascript
function solutionsujin(s) {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((alpha, i) =>
          i % 2 == 0 ? alpha.toUpperCase() : alpha.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}
```

- 주어진 문자열을 공백을 기준으로 나눈 후, 각 단어의 짝수번째 알파벳을 대문자로, 홀수번째 알파벳을 소문자로 바꿉니다.
- 개선사항: `map()` 함수를 사용하여 더 간결하게 구현할 수 있습니다.

### 솔루션: `solutionmini` (민희)

```javascript
function solutionmini(s) {
  let answer = "";
  let arr = s.split(" ");

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 === 0) {
        // 짝수
        answer += arr[i][j].toUpperCase(); // 대문자변환
      } else {
        answer += arr[i][j].toLowerCase(); // 소문자변환
      }
    }
    if (i < arr.length - 1) {
      answer += " ";
    }
  }
  return answer;
}
```

- 주어진 문자열을 공백을 기준으로 나눈 후, 각 단어의 짝수번째 알파벳을 대문자로, 홀수번째 알파벳을 소문자로 바꿉니다.
- 개선사항: 더 간결하게 코드를 작성할 수 있습니다.

### 솔루션: `solutionKhusan` (khusan)

```javascript
function solutionKhusan(s) {
  var answer = "";
  let arr = s.split(" "); //공백으로 문자열을 나누어 배열에 저장
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = arr[i];
    for (let j = 0; j < str.length; j++) {
      if (j % 2 === 0) {
        //첫번째 문자거나 짝수번째일때 대문자로 변경
        answer += str[j].toUpperCase();
      } else {
        answer += str[j].toLowerCase();
      }
    }
    answer += " ";
  }
  answer = answer.substr(0, answer.length - 1);
  return answer;
}
```

- 주어진 문자열을 공백을 기준으로 나눈 후, 각 단어의 짝수번째 알파벳을 대문자로, 홀수번째 알파벳을 소문자로 바꿉니다.
- 개선사항: 더 간결하게 코드를 작성할 수 있습니다.

위의 개선사항을 참고하여 솔루션 코드를 개선해보세요.
