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
const button = document.querySelector(".clear");

var result = 0;
var operation = NaN;

for (let i = 0; i < 9;i++){
    numButtons[i].addEventListener('click', () => {
        if (result === 0) {
            result = i + 1;
            return;
        }
        result += (i+1).toString();
    });
}