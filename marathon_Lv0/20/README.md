### 솔루션: `solutionEun` (은석)

```javascript
function solutionEun(participant, completion) {
  const map = new Map();

  [...participant, ...completion].forEach((runner, i) => {
    map.set(runner, (map.get(runner) || 0) + (i < participant.length ? 1 : -1));
  });

  for (let [runner, count] of map.entries()) {
    if (count > 0) return runner;
  }
}
```

- 참가자와 완주자 명단을 `Map`을 사용하여 처리하는 방식으로 구현되었습니다.
- `Map`을 사용하여 각 참가자의 이름과 인원 수를 저장하고, 완주자 명단에서는 해당 참가자의 인원 수를 감소시킵니다.
- 마지막으로 `Map`을 순회하면서 인원 수가 0보다 큰 참가자를 찾아 반환합니다.
- 개선사항: `Map`을 사용하지 않고 일반적인 객체를 사용하여 참가자와 완주자 명단을 처리할 수 있습니다.

### 솔루션: `solutionSujin` (수진2)

```javascript
function solutionSujin(participant, completion) {
  const m = new Map();
  participant.forEach((name) => m.set(name, (m.get(name) || 0) + 1));
  completion.forEach((name) => m.set(name, (m.get(name) || 0) - 1));
  for (const [name, value] of m) {
    if (value) return name;
  }
}
```

- 참가자와 완주자 명단을 `Map`을 사용하여 처리하는 방식으로 구현되었습니다.
- `Map`을 사용하여 각 참가자의 이름과 인원 수를 저장하고, 완주자 명단에서는 해당 참가자의 인원 수를 감소시킵니다.
- 마지막으로 `Map`을 순회하면서 인원 수가 0이 아닌 참가자를 찾아 반환합니다.
- 개선사항: `Map`을 사용하지 않고 일반적인 객체를 사용하여 참가자와 완주자 명단을 처리할 수 있습니다.

### 솔루션: `solution` (민희)

```javascript
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
```

- 참가자와 완주자 명단을 정렬한 후, 순서대로 비교하여 완주하지 못한 선수를 찾습니다.
- 개선사항: 정렬된 명단을 순차적으로 비교하면서 완주하지 못한 선수를 찾는 방식은 효율적

입니다. 다만, 정렬 자체에 시간복잡도가 들기 때문에 더 효율적인 방법이 있습니다.

### 솔루션: `solutionmini` (민희)

```javascript
function solutionmini(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i in completion) {
    if (completion[i] !== participant[i]) {
      return participant[i];
    }
  }

  return participant[participant.length - 1];
}
```

- 참가자와 완주자 명단을 정렬한 후, 순서대로 비교하여 완주하지 못한 선수를 찾습니다.
- 모든 완주자와 참가자를 비교한 후에도 완주하지 못한 선수가 없다면, 마지막 선수가 완주하지 못한 선수입니다.
- 개선사항: 정렬된 명단을 순차적으로 비교하면서 완주하지 못한 선수를 찾는 방식은 효율적입니다. 다만, 정렬 자체에 시간복잡도가 들기 때문에 더 효율적인 방법이 있습니다.

### 솔루션: `solutionKhusan` (khusan)

```javascript
function solutionKhusan(participant, completion) {
  participant.sort();
  completion.sort();
  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
```

- 참가자와 완주자 명단을 정렬한 후, 순서대로 비교하여 완주하지 못한 선수를 찾습니다.
- 개선사항: 정렬된 명단을 순차적으로 비교하면서 완주하지 못한 선수를 찾는 방식은 효율적입니다. 다만, 정렬 자체에 시간복잡도가 들기 때문에 더 효율적인 방법이 있습니다.

각 솔루션의 개선사항을 참고하여 코드를 개선해보세요.
