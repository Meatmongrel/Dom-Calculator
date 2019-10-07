const screen = document.querySelector("#screen")
const spans = document.querySelectorAll("span:not(.operator)");
const clear = document.querySelector("#clear")
const operators = document.querySelectorAll(".operator:not(#clear):not(#equals)")
const equals = document.querySelector("#equals")


function formatOperators(items){
    items.forEach(item => {
        if(item.textContent === "÷"){
            item.value = "/"
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

spans.forEach(span => {
    span.addEventListener("click", event => {
        screen.textContent += event.target.innerText
    })
})

clear.addEventListener("click", () => {
    screen.textContent = ""
})

operators.forEach(item => {
    item.addEventListener("click", (event) => {
        screen.textContent += ` ${event.target.value} `
    })
})

equals.addEventListener("click", () => {
    const stored = screen.textContent
    screen.textContent = eval(stored)
})