let equation = []
let point=false
let binaryOperation=false
let negative=false

let buttonsNumber=document?.querySelectorAll('.number')
let buttonsOperation=document?.querySelectorAll('.operation')

let buttonDelete=document?.querySelector('#ac')
buttonDelete?.addEventListener('click', ()=> clear())

let buttonPoint=document?.querySelector('#point')
buttonPoint?.addEventListener('click', ()=> addEquation(buttonPoint.innerHTML,3))

let buttonEquals=document?.querySelector('#equals')
buttonEquals?.addEventListener('click', ()=> solve())

//on the click of the number button add element
for(let i=0;i<buttonsNumber.length;i++){
    buttonsNumber[i]?.addEventListener('click', () => { addEquation(buttonsNumber[i].innerHTML,1); console.log(equation)})
}

//on the click of the operation button add element
for(let i=0;i<buttonsOperation.length;i++)
    buttonsOperation[i]?.addEventListener('click', () => addEquation(buttonsOperation[i].innerHTML,2)) 
//Making the equation
function addEquation(any, sp){
    //If click button number
    if(sp===1) addNumber(any)
    //If click button binaryOperation!!
    if(sp===2) addBinaryOperation(any)
    //If click button point
    if(sp===3) addPoint(any)

    document.querySelector('#display0').innerText=equation.join('')
    if(equation[equation.length-1]=='.') 
        document.querySelector('#display1').innerText=equation[equation.length-2]+'.'
    else document.querySelector('#display1').innerText=equation[equation.length-1]
}
//Function to add number in equation
function addNumber(any){
    if(equation[equation.length-1]==='.'){
        let tmp=equation.pop()
        equation.push(Number(String(equation.pop()+tmp+any)))
    }
    else if(Number(equation[equation.length-1])) {
        equation.push(Number(equation.pop()+any))
    }
    else if(!Number(equation[equation.length-1]) && negative) {
        equation.pop()
        equation.push(-Number(any))
        negative=true
    }
    else if(!Number(equation[equation.length-1]) && !negative ){
        equation.push(Number(any))
    }
    else if(equation.length===0) equation.push(Number(any))
}
//Function to add binaryOperation in equation
function addBinaryOperation(any){
    point=false
    if(equation[equation.length-1]==='.') {
        equation.pop()
        equation.pop()
        equation.push(Number(0))
        equation.push(any)
    }
    else if(Number(equation[equation.length-1])){
        equation.push(any)
        negative=false
    }
    else if(String(equation[equation.length-1]) && any!='-'){
        if(!negative)
        {equation.pop()}
        else {
            equation.pop(); equation.pop()
        }
        equation.push(any)
        negative=false
    }
    else if(String(equation[equation.length-1]) && any==='-' && !negative){
        equation.push(any)
        negative=true
    }

    
}
//function to add point in equation
function addPoint(any){
    if(equation.length===0 && !point){
        equation.push(Number(0))
        equation.push(any)
        point=true
    }
    else if(Number(equation[equation.length-1]) && !point){
        equation.push(any)
        point=true
    }
    else if(String(equation[equation.length-1]) && !point) {
        equation.push(Number(0))
        equation.push(any)
        point=true
    }

}
//Functionality AC button
function clear(){
    equation=[]
    document.querySelector("#display0").innerHTML=""
    document.querySelector("#display1").innerHTML=""
}

function solve(){
    let solve=0
    let tmp
    
    tmp=equation.toString()
    for(i=0;i<equation.length;i++)
        tmp=tmp.replace(',','')
    solve=eval(tmp)
    equation.push('=')
    equation.push(Number(solve))
    document.querySelector('#display0').innerText=equation.join('')
    document.querySelector('#display1').innerText=solve
    return
}
