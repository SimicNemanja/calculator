let equation = []

let buttonsNumber=document?.querySelectorAll('.number')
let buttonsOperation=document?.querySelectorAll('.operation')

let buttonDelete=document?.querySelector('#ac')
buttonDelete?.addEventListener('click', ()=> clear())

let buttonPoint=document?.querySelector('#point')
buttonPoint?.addEventListener('click', ()=> addEquation(buttonPoint.innerHTML))

let buttonEquals=document?.querySelector('#equals')
buttonEquals?.addEventListener('click', ()=> solve())

//on the click of the number button add element
for(let i=0;i<buttonsNumber.length;i++){
    buttonsNumber[i]?.addEventListener('click', () => { addEquation(buttonsNumber[i].innerHTML); console.log(equation)})
}

//on the click of the operation button add element
for(let i=0;i<buttonsOperation.length;i++)
    buttonsOperation[i]?.addEventListener('click', () => addEquation(buttonsOperation[i].innerHTML)) 

//Making the equation
function addEquation(any){
    equation.push(any)
    document.querySelector('#display0').innerText=equation
    if(equation[equation.length-1]=='.') 
        document.querySelector('#display1').innerText=equation[equation.length-2]+'.'
    else document.querySelector('#display1').innerText=equation[equation.length-1]
}

//Functionality AC button
function clear(){
    equation=[]
    document.querySelector("#display0").innerHTML=""
    document.querySelector("#display1").innerHTML=""
}

function solve(){
    let solve=0
    equation.push('=')
    equation.push(solve)
    document.querySelector('#display0').innerText=equation
    document.querySelector('#display1').innerText=equation[equation.length-1]
}
