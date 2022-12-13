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

var currentNum = 0;
var numList = [];
var operationList = [];

const saveNumber = function(){
    numList.push(currentNum);
    currentNum = 0;
    display.textContent = currentNum;
}

for (let i = 0; i < 9;i++){
    numButtons[i].addEventListener('click', () => {
        if (currentNum === 0) {
            currentNum = i + 1;
            display.textContent = currentNum;
            return;
        }
        currentNum += (i+1).toString();
        display.textContent = currentNum;
    });
}

clearButton.addEventListener('click', () => {
    currentNum = 0;
    numList = [];
    operationList = [];
    display.textContent = currentNum;
});

divideButton.addEventListener('click', () => {
    operationList.push("/");
    saveNumber();
});

multiplyButton.addEventListener('click', () => {
    operationList.push("x");
    saveNumber();
});

subtractButton.addEventListener('click', () => {
    operationList.push("-");
    saveNumber();
});

addButton.addEventListener('click', () => {
    operationList.push("+");
    saveNumber();
});

equalsButton.addEventListener('click', () => {
    saveNumber();
    console.log(numList);
    console.log(operationList);

});
