const body = document.body
const screen = document.querySelector("#screen")
const spans = document.querySelectorAll("span:not(.operator)")
const clear = document.querySelector("#clear")
const operators = document.querySelectorAll(".operator:not(#clear):not(#equals)")
const equals = document.querySelector("#equals")
const buttons = document.querySelector(".buttons")


function formatOperators(items){
    items.forEach(item => {
        if(item.textContent === "÷"){
            item.textContent = "/"
        }
        if(item.textContent === "x"){
            item.value = "*"
        }
        else{
            item.value = item.textContent
        }
    })
}

formatOperators(operators)

function evaluate(fn){
    if(fn.slice(-3) === "/ 0"){
        screen.textContent = "Error"
    }
    else {
        return new Function('return ' + fn)();
    }
}


function checkIfOperand(item){
    item.addEventListener("click", (event) => {
        if(screen.textContent === "" || screen.textContent.slice(-2)[0] === "/" 
        || screen.textContent.slice(-2)[0] === "*" || screen.textContent.slice(-2)[0] === "-" 
        || screen.textContent.slice(-2)[0] === "+"){
            screen.textContent += ""
        }
        else {
            screen.textContent += ` ${event.target.value} `
        }
    })
}

function clearScreen(){
    screen.textContent = ""
}

function clickedButton(event){
    screen.textContent += event.target.innerText
}

spans.forEach(span => {
    span.addEventListener("click", clickedButton)
})

clear.addEventListener("click", clearScreen)

operators.forEach(item => checkIfOperand(item))


body.addEventListener("keydown", event => {
    if(event.key === "1"){
        screen.textContent += event.key
    }
    if(event.key === "2"){
        screen.textContent += event.key
    }
    if(event.key === "3"){
        screen.textContent += event.key
    }
    if(event.key === "4"){
        screen.textContent += event.key
    }
    if(event.key === "5"){
        screen.textContent += event.key
    }
    if(event.key === "6"){
        screen.textContent += event.key
    }
    if(event.key === "7"){
        screen.textContent += event.key
    }
    if(event.key === "8"){
        screen.textContent += event.key
    }
    if(event.key === "9"){
        screen.textContent += event.key
    }
    if(event.key === "0"){
        screen.textContent += event.key
    }
    if(event.key === "/"){
        screen.textContent += ` ${event.key} `
    }
    if(event.key === "x" || event.key === "*"){
        screen.textContent += ` ${event.key} `
    }
    if(event.key === "-"){
        screen.textContent += ` ${event.key} `
    }
    if(event.key === "+"){
        screen.textContent += ` ${event.key} `
    }
    if(event.key === "=" || event.key === "Enter"){
        const result = evaluate(screen.textContent)
        screen.textContent = result
    }
    if(event.key === "c" || event.key === "Backspace"){
        screen.textContent = ""
    }
})

equals.addEventListener("click", () => {
    const stored = screen.textContent
    screen.textContent = evaluate(stored)
})