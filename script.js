let buttonsNumber=document.querySelectorAll('.number')
let numbers=[]

let buttonsOperation=document.querySelectorAll('.operation')
let operation=[]

let buttonDelete=document.querySelector('#ac')
let ac=buttonDelete.innerHTML
buttonDelete.addEventListener('click', ()=> alert(ac))

let buttonPoint=document.querySelector('#point')
let p=buttonPoint.innerHTML
buttonPoint.addEventListener('click', ()=> alert(p))

let buttonEquals=document.querySelector('#equals')
let equals=buttonEquals.innerHTML
buttonEquals.addEventListener('click', ()=> alert(equals))

for(let i=0;i<buttonsNumber.length;i++){
    numbers[i]=buttonsNumber[i]?.innerHTML - 0
}

for(let i=0;i<buttonsOperation.length;i++){
    operation[i]=buttonsOperation[i]?.innerHTML
}

// TODO: create a function that prints a number on the display
for(let i=0;i<numbers.length;i++){
    buttonsNumber[i].addEventListener('click', ()=> alert(numbers[i]))
}


// TODO: create a function that prints a number on the display
for(let i=0;i<operation.length;i++){
    buttonsOperation[i].addEventListener('click', ()=> alert(operation[i]))
}

