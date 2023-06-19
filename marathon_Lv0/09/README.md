### 솔루션: `solution` (은석)

```javascript
function solution(x) {
  return x
    .split("")
    .map((v, i, arr) => (arr.length - 5 >= i ? (v = "*") : v))
    .join("");
}
```

- `phone_number` 문자열을 `split` 메소드를 사용하여 배열로 변환한 후, `map` 메소드를 사용하여 뒷 4자리를 제외한 나머지 숫자를 `*`로 가립니다.
- 가릴 범위를 체크하기 위해 `map` 함수의 콜백 함수에서 배열의 길이와 인덱스를 비교하고, 조건에 따라 `*`로 변환합니다.
- 변환된 배열을 `join` 메소드를 사용하여 다시 문자열로 변환하여 반환합니다.
- 코드가 간결하고 효율적으로 작성되었습니다. 개선사항은 없습니다.

### 솔루션: `solution` (수진)

```javascript
function solution(phone_number) {
  return "*".repeat(phone_number.length - 4).concat(phone_number.slice(-4));
}
```

- `*`를 `repeat` 메소드를 사용하여 전화번호의 뒷 4자리를 제외한 길이만큼 반복한 후, `concat` 메소드를 사용하여 뒷 4자리를 붙여서 전체 문자열을 생성합니다.
- 코드가 간결하고 효율적으로 작성되었습니다. 개선사항은 없습니다.

### 솔루션: `solution` (민희)

```javascript
function solution(phone_number) {
  var answer = "";

  answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);

  return answer;
}
```

- `*`를 `repeat` 메소드를 사용하여 전화번호의 뒷 4자리를 제외한 길이만큼 반복한 후, `slice` 메소드를 사용하여 뒷 4자리를 추출하여 문자열을 생성합니다.
- 코드가 간결하고 효율적으로 작성되었습니다. 개선사항은 없습니다.
