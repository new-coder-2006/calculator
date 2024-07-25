//LIMIT NUMBERS TO 18 DIGITS (15 TO LEFT OF DECIMAL AND 3 TO RIGHT)
let left = "0";
let operator = "";
let right = "";
// Track which side of the equation inputs should be added to
let currentlyBuilding = "left";
// Set default display to 0
const display = document.querySelector(".display");
const displayContent = document.createTextNode(left);
display.appendChild(displayContent);
// Function to update the display content each time a button is pushed
const updateDisplay = () => {
    let newContent;

    if (right !== "") {
        newContent = document.createTextNode(right);
    } else {
        newContent = document.createTextNode(left);
    }
    
    const display = document.querySelector(".display");
    const oldContent = display.childNodes[0];
    display.replaceChild(newContent, oldContent);
}

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
        case "x":
            return multiplication(num1, num2);
        case "÷":
            return division(num1, num2);
    }
}
// Function to evaluate the current equation
const evaluate = () => {
    // Handle attempts to divide by 0
    if (operator === "÷" && right === "0") {
        alert("Not so fast my friend! You can't divide by 0");
    } else {
        return operate(operator, Number(left), Number(right)).toFixed(3);
    };
};

const nums = document.querySelectorAll(".number");

nums.forEach((num) => {
    const numVal = num.textContent;

    num.addEventListener("click", () => {
        if (currentlyBuilding === "left") {
            if (numVal === ".") {
                if (!(left.includes("."))) {
                    left += numVal;
                    updateDisplay();
                } else {
                    // Do nothing b/c don't want more than one decimal
                };
            } else if (left === "0") { // Handle separately to avoid leading zeros 
                left = numVal;
                updateDisplay();
            } else {
                if (left.length < 18) {
                    left += numVal;
                    updateDisplay();
                };
            };
        } else {
            if (numVal === ".") {
                if (!(right.includes("."))) {
                    right += numVal;
                    updateDisplay();
                } else {
                    // Do nothing b/c don't want more than one decimal
                };
            } else if (right === "0") { // Handle separately to avoid leading zeros
                right = numVal;
                updateDisplay();
            } else {
                if (right.length < 18) {
                    right += numVal;
                    updateDisplay();
                };
            };
        };
    });
});

const ops = document.querySelectorAll(".operator");

ops.forEach((op) => {
    const opVal = op.textContent;

    op.addEventListener("click", () => {
        operator = opVal;
        // If an operator has been clicked, begin building right side of the equation
        currentlyBuilding = "right";
        // If there is already a full expression to evaluate, it should automatically
        // be evaluated whenever an operator is clicked, and the result should be
        // displayed (this allows for chaining operations)
        if (right !== "") { 
            left = evaluate();
            right = "";
            updateDisplay();
        } else {
            // Nothing else to do b/c no expression to evaluate yet
        };
    });
});

const equals = document.querySelector(".equals");

equals.addEventListener("click", () => {
    if (right !== "") {
        left = evaluate();
        if (left.length > 18) {
            left = "999999999999999.999";
        }
        operator = "";
        right = "";
        updateDisplay();
    } else { // Pressing equals before you have a full equation clears out
             // any operator that was previously pressed
        operator = "";
    };
});

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    left = "0";
    operator = "";
    right = "";
    currentlyBuilding = "left";
    updateDisplay();
});