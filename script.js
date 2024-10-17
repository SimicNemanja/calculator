let equation = []
let point=false
let negative=false
let zero=false
let binnary=false

let buttonsNumber=document?.querySelectorAll('.number')
let buttonsOperation=document?.querySelectorAll('.operation')
//on the click of the button AC delete equation
let buttonDelete=document?.querySelector('#ac')
buttonDelete?.addEventListener('click', ()=> clear())
//on the click of the point add point in equation
let buttonPoint=document?.querySelector('#point')
buttonPoint?.addEventListener('click', ()=> addEquation(buttonPoint.innerHTML,3))
//on the click of the equal calculate the equation
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
    if(equation.length===0){
        equation.push(String(any));
        zero=(any==0)
    }
    else if(Number(equation[equation.length-1]) || Number(equation[equation.length-1])===0){
        if(!zero){
            equation.push(String(equation.pop())+any)
        }
        else if(zero && any!=0){
            equation.pop()
            equation.push(String(any))
            zero=false
        }
    }
    else if(String(equation[equation.length]) && !point){
        zero= (any==0)
        if(negative){
            equation.pop()
            equation.push(String(-any))
            negative=false;
        }
        else {
            equation.push(String(any))
        }
    }
    else {
        let tmp=equation.pop()
        equation.push(String(equation.pop()+tmp+any))
    }
}
//Function to add binaryOperation in equation
function addBinaryOperation(any){
    point=false
    if(equation.length===0){
        equation.push(any)
        binnary=true
    }
    else if(Number(equation[equation.length-1]) || Number(equation[equation.length-1])===0){
        equation.push(any)
    }
    else if(String(equation[equation.length-1])){
        if(any!='-'){
            equation.pop()
            if(equation[equation.length-1]=='/' || equation[equation.length-1]=='+' || equation[equation.length-1]=='*') { 
                equation.pop()
                negative=false
            }
            equation.push(any)
        }
        else{
            equation.push(any)
            negative=true
        }
    }
}
//function to add point in equation
function addPoint(any){
    if(equation.length===0){
        equation.push(String(0))
        equation.push(any)
        point=true
    }
    else if(Number(equation[equation.length-1]) || Number(equation[equation.length-1])===0){
        if(!point) {
            equation.push(any)
            point=true
            zero=false
        }
    }
    else if( String(equation[equation.length-1]) && !point){
        equation.push(String(0))
        equation.push(any)
        point=true
    }
}
//Functionality AC button
function clear(){
    point=false
    negative=false
    binnary=false
    zero=false
    equation=[]
    document.querySelector("#display0").innerHTML=""
    document.querySelector("#display1").innerHTML=""
}
function solve(){
    equation=equation.toString()
    for(i=0;i<equation.length;i++)
        equation=equation.replace(',','')
    let solve=eval(equation)
    document.querySelector('#display0').innerText=equation+'=' + solve
    equation=[]
    equation.push(String(solve))
    document.querySelector('#display1').innerText=solve
    return
}