const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput () {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

//still seem like way too many lines of code for such  a simplified thing!!!
/*def gotta improve it!!!!*/

function add() {
    const enteredNumber = getUserNumberInput();
    const inititalResult = currentResult;
    currentResult+= enteredNumber;
createAndWriteOutput('+', inititalResult, enteredNumber)
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const inititalResult = currentResult;
    currentResult-= enteredNumber;
    createAndWriteOutput('-', inititalResult, enteredNumber);
}
function multiply() {
    const enteredNumber = getUserNumberInput();
    const inititalResult = currentResult;
    currentResult*= enteredNumber;
    createAndWriteOutput('*', inititalResult, enteredNumber);
}
function divide() {
    const enteredNumber = getUserNumberInput();
    const inititalResult = currentResult;
    currentResult/= enteredNumber;
    createAndWriteOutput('/', inititalResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
