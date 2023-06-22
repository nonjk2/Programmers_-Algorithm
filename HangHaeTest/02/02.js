// 첫째 줄에 정수 n이 주어진다. **(0≤n≤100)**
// n줄 만큼 ‘*’로 이루어진 삼각형을 출력한다.
// 최상단의 별은 1개이며, 모든 줄의 별의 갯수는 홀수이다.
// ###
// 3 = 1, 3, 5
//  6 = 1 , 3 , 5 , 7 ,9 ,11
//  9 = 1 , 3, 5 , 7 , 9 , 11 , 13 , 15 , 17
//민승
function solution(star) {
  let result = "";
  for (let i = 1; i < star * 2; i += 2) {
    for (let j = 1; j < (star * 2 - i) / 2; j++) {
      result += " ";
    }
    for (let l = 1; l <= i; l++) {
      result += "*";
    }
    result += "\n";
  }
  console.log(result);
}

//은석

function solution(star) {
  [...Array(star)].forEach((e, i) => {
    let no = " ".repeat(star - i - 1);
    let starr = "*".repeat(i * 2 + 1);
    console.log(no + starr);
  });
}

//수진
let line = "";
function solution(star) {
  for (i = 1; i < star * 2; i += 2) {
    for (j = 1; j < (star * 2 - i) / 2; j++) {
      line += " ";
    }
    line += "*".repeat(i) + "\n";
  }
  console.log(line);
}
solution(star);

// 도영

function solution(star) {
  for (let i = 1; i <= star; i++) {
    let starLine = "";
    for (let j = 1; j <= star - i; j++) {
      starLine += " ";
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      starLine += "*";
    }
    console.log(starLine);
  }
}

let star = 9;
solution(star);

//소현
function solution(star) {
  for (let i = 1; i <= star; i++) {
    let s = i * 2 - 1;
    let space = (star * 2 - 1 - s) / 2;
    console.log(" ".repeat(space) + "*".repeat(s));
  }
}

// Khusan
function solution(star) {
  for (let i = 1, j = 0; i <= star; i++) {
    console.log(" ".repeat(star - i) + "*".repeat(i + j));
    j = j + 1;
  }
}
