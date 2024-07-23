//LIMIT NUMBERS TO 18 DIGITS (15 TO LEFT OF DECIMAL AND 3 TO RIGHT)
let left = "";
let operator = "";
let right = "";

const addition = function(num1, num2) {
    return num1 + num2;
};

const subtraction = function(num1, num2) {
    return num1 - num2;
};

const multiplication = function(num1, num2) {
    return num1 * num2;
};

const division = function(num1, num2) {
    return num1 / num2;
};

const operate = function(operator, num1, num2) {
    switch (operator) {
        case "+":
            return addition(num1, num2);
        case "-":
            return subtraction(num1, num2);
        case "*":
            return multiplication(num1, num2);
        case "÷":
            return division(num1, num2);
    }
}

const nums = document.querySelectorAll(".number");

nums.forEach((num) => {
    num.addEventListener("click", () => {
        

    });
});