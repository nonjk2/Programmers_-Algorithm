// **5x5 2차원 배열이 주어질 때** 어떤 원소가 상하좌우에 있는 **원소보다 클 때 해당 위치에 * 을 표시**하는 프로그램을 작성하세요.

// 경계선에 있는 수는 **상하좌우 중 존재하는 원소만을 비교**합니다.

// 조건 1: 결과는 하나의 문자열이며, 2차원 배열의 각 배열의 요소들에 해당하는 문자는 길이 1의 공백으로 구분된다.

// 조건2: 결과에서 배열간의 구분은 줄바꿈(개행문자)으로 한다.

// 조건3: 비교할 원소가 존재하지 않는 경우 0으로 간주한다

// 양옆앞뒤 큰 수 찾기
//은석
function solution(arr1) {
  arr1
    .map((e, i) =>
      e
        .map((v, j) => {
          if (
            (!arr1[i - 1] || arr1[i - 1][j] < v) &&
            (!arr1[i + 1] || arr1[i + 1][j] < v) &&
            (!e[j - 1] || e[j - 1] < v) &&
            (!e[j + 1] || e[j + 1] < v)
          ) {
            return "*";
          }
          return v;
        })
        .join(" ")
    )
    .forEach((c) => console.log(c));
}

//민승
function solution(arr1) {
  let d = [
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, 0],
  ];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      result = false;
      for ([disX, disY] of d) {
        n_row = i + disX;
        n_col = j + disY;
        if (n_row >= 0 && n_row < 5 && n_col >= 0 && n_col < 5) {
          if (arr1[i][j] <= arr1[n_row][n_col] || arr1[n_row][n_col] === "*") {
            result = true;
          }
        }
      }
      if (!result) arr1[i][j] = "*";
    }
  }
  let answer = "";
  for (let i = 0; i < 5; i++) {
    answer += arr1[i].join(" ");
    answer += "\n";
  }
  console.log(answer);
}

//수진 ㅋㅋㅋㅋㅋㅋㅋㅋㅋ
function solution(arr1) {
  let answer = [[], [], [], [], []];
  let check = [[], [], [], [], []];

  for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
      if (i === 0) {
        //0번줄
        if (
          j === 0 &&
          arr1[i][j] > arr1[i + 1][j] &&
          arr1[i][j] > arr1[i][j + 1]
        ) {
          arr1[i][j] = "*";
        } else if (j === 4) {
          if (arr1[i][j] > arr1[i + 1][j] && arr1[i][j] > arr1[i][j - 1]) {
            arr1[i][j] = "*";
          }
        } else {
          if (
            arr1[i][j] > arr1[i + 1][j] &&
            arr1[i][j] > arr1[i][j - 1] &&
            arr1[i][j] > arr1[i][j + 1]
          ) {
            arr1[i][j] = "*";
          }
        }
      } else if (i === 4) {
        //4번줄
        if (j === 0) {
          if (arr1[i][j] > arr1[i - 1][j] && arr1[i][j] > arr1[i][j + 1]) {
            arr1[i][j] = "*";
          }
        } else if (j === 4) {
          if (arr1[i][j] > arr1[i - 1][j] && arr1[i][j] > arr1[i][j - 1]) {
            arr1[i][j] = "*";
          }
        } else {
          if (
            arr1[i][j] > arr1[i - 1][j] &&
            arr1[i][j] > arr1[i][j - 1] &&
            arr1[i][j] > arr1[i][j + 1]
          ) {
            arr1[i][j] = "*";
          }
        }
      } else if (j === 0) {
        if (
          arr1[i][j] > arr1[i - 1][j] && //상
          arr1[i][j] > arr1[i + 1][j] && //하
          arr1[i][j] > arr1[i][j + 1]
        ) {
          //우
          arr1[i][j] = "*";
        }
      } else if (j === 4) {
        if (
          arr1[i][j] > arr1[i - 1][j] && //상
          arr1[i][j] > arr1[i + 1][j] && //하
          arr1[i][j] > arr1[i][j - 1]
        ) {
          //좌
          arr1[i][j] = "*";
        }
      } else {
        if (
          arr1[i][j] > arr1[i - 1][j] && //상
          arr1[i][j] > arr1[i + 1][j] && //하
          arr1[i][j] > arr1[i][j - 1] &&
          arr1[i][j] > arr1[i][j + 1]
        ) {
          arr1[i][j] = "*";
        }
      }
    }
  }
  console.log(arr1);
}

//소현
function solution(arr1) {
  let up, down, left, right, s;
  for (let i = 0; i < arr1.length; i++) {
    s = "";
    for (let j = 0; j < arr1[0].length; j++) {
      !arr1[i - 1] ? (up = 0) : (up = arr1[i - 1][j]);
      !arr1[i + 1] ? (down = 0) : (down = arr1[i + 1][j]);
      !arr1[i][j - 1] ? (left = 0) : (left = arr1[i][j - 1]);
      !arr1[i][j + 1] ? (right = 0) : (right = arr1[i][j + 1]);
      arr1[i][j] > Math.max(up, down, left, right)
        ? (s += "* ")
        : (s += `${arr1[i][j]} `);
    }
    console.log(s);
  }
}

// Khusan
function solution(arr1) {
  // 2차원 배열 순회 및 출력
  for (let i = 0; i < arr1.length; i++) {
    let row = "";
    for (let j = 0; j < arr1[i].length; j++) {
      const element = arr1[i][j];

      // 상하좌우 원소와 비교하여 '*' 추가
      let isLargest = true;

      // 위 원소와 비교
      if (i > 0 && arr1[i - 1][j] > element) {
        isLargest = false;
      }

      // 아래 원소와 비교
      if (i < arr1.length - 1 && arr1[i + 1][j] > element) {
        isLargest = false;
      }

      // 왼쪽 원소와 비교
      if (j > 0 && arr1[i][j - 1] > element) {
        isLargest = false;
      }

      // 오른쪽 원소와 비교
      if (j < arr1[i].length - 1 && arr1[i][j + 1] > element) {
        isLargest = false;
      }

      // '*' 또는 원소 값을 문자열에 추가
      row += isLargest ? "* " : element + " ";
    }
    console.log(row.trim());
  }
}
