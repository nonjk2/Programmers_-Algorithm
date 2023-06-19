### 솔루션: `solution` (은석)

```javascript
const solution = (seoul) => `김서방은 ${seoul.indexOf("Kim")}에 있다`;
```

- 주어진 배열에서 "Kim"의 인덱스를 찾아 문자열을 반환하는 방식으로 구현되었습니다.
- `indexOf` 메소드를 사용하여 "Kim"의 인덱스를 찾습니다.
- 개선사항: 주어진 배열에서 "Kim"은 반드시 한 번만 나타난다는 조건이 주어져 있으므로, `indexOf` 메소드를 사용하여 한 번만 검색하도록 개선할 수 있습니다.

### 솔루션: `solution` (민희)

```javascript
function solution(seoul) {
  var answer = "김서방은 " + seoul.indexOf("Kim") + "에 있다";
  return answer;
}
```

- 주어진 배열에서 "Kim"의 인덱스를 찾아 문자열을 반환하는 방식으로 구현되었습니다.
- `indexOf` 메소드를 사용하여 "Kim"의 인덱스를 찾습니다.
- 개선사항: 주어진 배열에서 "Kim"은 반드시 한 번만 나타난다는 조건이 주어져 있으므로, `indexOf` 메소드를 사용하여 한 번만 검색하도록 개선할 수 있습니다.

### 솔루션: `solution` (khusan)

```javascript
function solution(seoul) {
  var answer = "";
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] == "Kim") {
      answer = `김서방은 ${i}에 있다`;
    }
  }
  return answer;
}
```

- 반복문을 사용하여 주어진 배열에서 "Kim"을 찾고, 해당 인덱스를 문자열로 반환하는 방식으로 구현되었습니다.
- `for` 반복문을 사용하여 배열을 순회하고, "Kim"을 찾으면 해당 인덱스를 변수에 저장합니다.
- 개선사항: `for` 반복문을 사용하지 않고, `indexOf` 메소드를 사용하여 한 번만 검색하도록 개선할 수 있습니다.

### 솔루션: `solution` (수진)

```javascript
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}
```

- 주어진 배열에서 "Kim"의 인덱스를 찾아 문자열을 반환하는 방식으로 구현되었습니다.
- `indexOf` 메소드를 사용하여 "Kim"의 인덱스를 찾습니다.
- 개선사항: 주어진 배열에서 "Kim"은 반드시 한 번만 나타난다는 조건이 주어져 있으므로, `indexOf` 메소드를 사용하여 한 번만 검색하도록 개선할 수 있습니다.

위 솔루션들은

모두 주어진 배열에서 "Kim"의 인덱스를 찾아 해당 인덱스를 문자열로 반환하고 있습니다. `indexOf` 메소드를 사용하여 한 번만 검색하도록 개선하면 코드를 간결하게 작성할 수 있습니다.
