function add(a, b) {
    return a+b
};

function subtract(a, b) {
    return a-b
};

function multiply (a, b) {
    return a*b
}

function divide (a, b) {
    return a/b
}

function operate (operator, a,b) {
    if (operator === divide) {
       return a/b;
    } else if (operator === multiply) {
        return a*b;
    } else if (operator === subtract) {
        return a-b;
    } else {
        return a+b;
    }
};

const cancer = document.getElementById("noob");

addEventListener('click', input);

function input (a) {
    console.log('1');
}