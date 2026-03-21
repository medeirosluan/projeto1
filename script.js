const operation = document.querySelector('#operation')
const btn = document.querySelector('button')
const msg = document.querySelector('span')
const firstValor = document.querySelector('.first-valor')
const secondValor = document.querySelector('.second-valor')
let resultado = null


function getOperation(){

    let valorSelect = operation.value
    let getFirstValor = Number(firstValor.value)
    let getSecondValor = Number(secondValor.value)

    if (valorSelect === 'sum') {
        return sum(getFirstValor,getSecondValor)
    }
    
    else if (valorSelect === 'subtract') {
        return subtract(getFirstValor,getSecondValor)
    }
    
    else if (valorSelect === 'multipli') {
        return multipli(getFirstValor,getSecondValor)
    }
    
    else if (valorSelect === 'divide') {
        return divide(getFirstValor,getSecondValor)
    }

    else if (valorSelect === 'raiz') {
        return raiz(getFirstValor)
    }

}

function sum(getFirstValor,getSecondValor) {
    resultado = getFirstValor + getSecondValor
    return msg.innerHTML = `${resultado}`
}

function subtract(getFirstValor,getSecondValor) {
    resultado = getFirstValor - getSecondValor
   return msg.innerHTML = `${resultado}`
}

function multipli(getFirstValor,getSecondValor) {
    resultado = getFirstValor * getSecondValor
   return msg.innerHTML = `${resultado}`
}

function divide(getFirstValor,getSecondValor) {
    resultado = getFirstValor / getSecondValor
   return msg.innerHTML = `${resultado}`
}

function raiz(getFirstValor) {
    let numberRaiz = Math.sqrt(getFirstValor)
    return msg.innerHTML = `${numberRaiz.toFixed(2)}`
}

function quadrada(){
   
    if (operation.value === 'raiz') {
        secondValor.classList.add('oculta')
        document.querySelector('h1').textContent = 'Raiz Quadrada'
        btn.textContent = 'Descobrir Raiz'
    
    } else {
        secondValor.classList.remove('oculta')
        document.querySelector('h1').textContent = 'Calculadora'
        btn.textContent = 'Calcular'
    
    }
}


operation.addEventListener('change',()=>{
    quadrada()
})

btn.addEventListener('click',()=>{
    getOperation()
})






