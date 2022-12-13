const display = document.querySelector(".display");
const numButtons = [
  document.querySelector(".num1"),
  document.querySelector(".num2"),
  document.querySelector(".num3"),
  document.querySelector(".num4"),
  document.querySelector(".num5"),
  document.querySelector(".num6"),
  document.querySelector(".num7"),
  document.querySelector(".num8"),
  document.querySelector(".num9"),
];

const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const subtractButton = document.querySelector(".subtract");
const addButton = document.querySelector(".add");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");

var result = -1;
var currentNum = 0;
var numList = [];
var operationList = [];

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return Math.floor(a / b);
}

function saveNumber() {
    if (currentNum === 0 && display.textContent == result)
        return;

  numList.push(parseInt(currentNum));
  currentNum = 0;
  display.textContent = currentNum;
}

function evaluate() {
  if (numList.length - 1 != operationList.length){
    return "Error";
  }

  let ans = numList[0];
  for (let i = 0; i < operationList.length; i++) {
    if (operationList[i] === "+") ans = add(ans, numList[i + 1]);
    if (operationList[i] === "-") ans = subtract(ans, numList[i + 1]);
    if (operationList[i] === "x") ans = multiply(ans, numList[i + 1]);
    if (operationList[i] === "/") ans = divide(ans, numList[i + 1]);
  }
  return ans;
}

for (let i = 0; i < 9; i++) {
  numButtons[i].addEventListener("click", () => {
    if (numList.length - 1 === operationList.length)
        clear();

    if (currentNum === 0) {
      currentNum = i + 1;
      display.textContent = currentNum;
      return;
    }
    currentNum += (i + 1).toString();
    display.textContent = currentNum;
  });
}

function clear(){
    result = 0;
    currentNum = 0;
    numList = [];
    operationList = [];
    display.textContent = currentNum;
}

clearButton.addEventListener("click", clear);

divideButton.addEventListener("click", () => {
  operationList.push("/");
  saveNumber();
});

multiplyButton.addEventListener("click", () => {
  operationList.push("x");
  saveNumber();
});

subtractButton.addEventListener("click", () => {
  operationList.push("-");
  saveNumber();
});

addButton.addEventListener("click", () => {
  operationList.push("+");
  saveNumber();
});

equalsButton.addEventListener("click", () => {
  saveNumber();
  result = evaluate();
  display.textContent = result;
  console.log(numList)
  console.log(operationList)
});
