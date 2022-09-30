class Calculator {
    constructor(previouseOperandTextElement, currentOperandTextElement) {
        this.previouseOperandTextElement = previouseOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }
// this will clear out all of our variable i.e. numbers //
    clear() {
        this.currentOperand = ''
        this.previouseOperand = ''
        this.operation = undefined 
    }
// This will delete a single number //
    delete() {

    }
// This is the action that takes place when auser clicks on anumber //
    appendNumber(number) {

    }
// This the action that takes place when a user hits a function i.e. add subtract etc. //
    chooseOperation(operation) {

    }
// This will take our values inside our computer and compute a single value from the append numbers // 
    comute() {

    }
// This will update the values inside of our out put  //
    updateDisplay() {

    }
}




const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-eall-clear]')
const previouseOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
