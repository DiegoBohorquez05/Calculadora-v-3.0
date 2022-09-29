const display=document.querySelector('.display')

const valor=document.querySelectorAll('.valor')
const operador=document.querySelector('.operador')

const suma=document.querySelector('#suma')
const resta=document.querySelector('#resta')
const multi=document.querySelector('#multipli')
const divi=document.querySelector('#divi')
const igual=document.querySelector('#igual')

igual.addEventListener('click',()=>{
    if(operador.innerText==='+'){
        display.innerText=(parseInt(valor[0].value)+ parseInt(valor[1].value))
    }else if(operador.innerText==='-'){
        display.innerText=(parseInt(valor[0].value)- parseInt(valor[1].value))
    }else if(operador.innerText==='*'){
        display.innerText=(parseInt(valor[0].value)* parseInt(valor[1].value))
    }else if(operador.innerText==='/'){
        display.innerText=(parseInt(valor[0].value)/ parseInt(valor[1].value))
    }
})

suma.addEventListener('click',()=>{
    operador.innerHTML='+'
})

resta.addEventListener('click',()=>{
    operador.innerHTML='-'
})

multi.addEventListener('click',()=>{
    operador.innerHTML='*'
})

divi.addEventListener('click',()=>{
    operador.innerHTML='/'
})