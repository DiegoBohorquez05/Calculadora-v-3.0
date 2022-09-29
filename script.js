const display=document.querySelector('.display')

const valor=document.querySelectorAll('.valor')
const operador=document.querySelector('.operador')

const suma=document.querySelector('#suma')
const resta=document.querySelector('#resta')
const multi=document.querySelector('#multipli')
const divi=document.querySelector('#divi')
const igual=document.querySelector('#igual')
const borrar=document.querySelector('#borrar')

const uno=document.querySelector('#uno')
const dos=document.querySelector('#dos')
const tres=document.querySelector('#tres')
const cuatro=document.querySelector('#cuatro')
const cinco=document.querySelector('#cinco')
const seis=document.querySelector('#seis')
const siete=document.querySelector('#siete')
const ocho=document.querySelector('#ocho')
const nueve=document.querySelector('#nueve')
const diez=document.querySelector('#diez')


for(let i=0; i<=9;i++){
    document.getElementById('num'+i).addEventListener('click',presion)
}

function presion(e){
    display.innerText=display.innerText+e.target.value
}



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
    display.innerHTML='+'
    valor[1].value=valor[0].value
    valor[0].value=''
})

resta.addEventListener('click',()=>{
    operador.innerHTML='-'
    valor[1].value=valor[0].value
    valor[0].value=''
})

multi.addEventListener('click',()=>{
    operador.innerHTML='*'
    valor[1].value=valor[0].value
    valor[0].value=''
})

divi.addEventListener('click',()=>{
    operador.innerHTML='/'
    valor[1].value=valor[0].value
    valor[0].value=''
})

borrar.addEventListener('click',()=>{
    valor[0].value=' '
    valor[1].value=' '
    operador.innerText='.'
    display.innerText=' '
})

