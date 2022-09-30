class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
// this will clear out all of our variable i.e. numbers //
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined 
    }
// This will delete a single number //
    delete() {

    }
// This is the action that takes place when auser clicks on anumber //
    appendNumber(number) {
        this.currentOperand = number
    }
// This the action that takes place when a user hits a function i.e. add subtract etc. //
    chooseOperation(operation) {

    }
// This will take our values inside our computer and compute a single value from the append numbers // 
    comute() {

    }
// This will update the values inside of our out put  //
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-eall-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})