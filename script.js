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
        if (number == '.' && this.currentOperand.includes('.')) return //keeps the user from adding more than one '.' //
        this.currentOperand = this.currentOperand.toString() + number.toString() // allows to add more than one number in a string //
    }
// This the action that takes place when a user hits a function i.e. add subtract etc. //
    chooseOperation(operation) {
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''

    }
// This will take our values inside our computer and compute a single value from the append numbers // 
    compute() {

    }
// This will update the values inside of our out put  //
    updateDisplay() {
        // this.currentOperandTextElement.innerText = this.currentOperand
        // this.previousOperandTextElement.innerText = this.previousOperand
    }
}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })