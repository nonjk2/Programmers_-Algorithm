// 자연수 n의 각 자리 숫자를 뒤집은 순서로 더해 출력하는 수식을 리턴해주세요.
//예를들어 n이 12345이면 "`5+4+3+2+1=15`" 라는 문자열을 리턴합니다.

// 자연수 뒤집어 더하기

//은석
function solution(n) {
  let a = (n + "").split("").reverse();
  let b = a.join("+") + "=" + a.reduce((acc, cur) => +acc + +cur);
  return b;
}

// console.log(solution(718253));

// "3+5+2+8+1+7=26"
// 3+5+2+8+1+7=26

//민승
function solution(n) {
  n = n.toString().split("").reverse();
  let sum = n.reduce((a, b) => Number(a) + Number(b), 0);
  let string = n.join("+");
  return string + "=" + sum.toString();
}

//수진
function solution(n) {
  let result = "";
  let sum = n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);

  return sum;
}
// console.log(solution(n));

//도영
function solution2(n) {
  const strArr = n.toString().split("").reverse();
  const reverseArr = strArr.join("+");
  const sum = strArr.reduce((a, b) => +a + +b);

  // "3+5+2+8+1+7=26"
  return reverseArr + "=" + sum;
}
console.log(solution2(718253));

function solution(n) {
  let result = "";

  const strArr = n.toString().split(""); // [7,1,8,2,5,3]

  const reverseArr = strArr.reverse(); // [3,5,2,8,1,7]
  const a = reverseArr.join("+"); //a= "3+5+2+8+1+7"
  const numArr = reverseArr.map((n) => parseInt(n, 10));
  const sum = numArr.reduce((a, b) => a + b, 0);

  result = a + "=" + sum;
  //"3+5+2+8+1+7=sum"
  return result;
}

// const n = 718253;
// const result = solution(n);
// console.log(result);

// -------------------------

function solution(n) {
  let result = "";

  const strArr = n.toString().split("");

  const reverseArr = strArr.reverse();

  const numArr = reverseArr.map((n) => parseInt(n, 10));
  const sum = numArr.reduce((a, b) => a + b, 0);

  result = {
    reverseArray: numArr,
    sum: sum,
  };

  return result;
}

const n = 718253;
const result = solution(n);
console.log(result);

//소현
function solution(n) {
  let rn = n.toString().split("").reverse();
  let rns = rn.join("+");
  let num = rn.reduce((acc, cur) => (acc += Number(cur)), 0);
  return `${rns}=${num}`;
}
console.log(solution(12345));

// Khusan
let change = (arg) => Number(arg);

function solution(n) {
  let str = String(n).split("").reverse();
  let result = str.map(change);
  let sign = "";
  let sum = 0;
  for (let i = 0; i < result.length; i++) {
    sum += result[i];
    sign += result[i];
    if (i < result.length - 1) {
      sign += "+";
    }
  }
  sign += "=" + sum;
  return `"${sign}"`;
}
