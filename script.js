const operation = document.querySelector('#operation')
const btn = document.querySelector('button')
const msg = document.querySelector('span')
const firstValor = document.querySelector('.first-valor')
const secondValor = document.querySelector('.second-valor')
const icon = document.querySelector('.calculadora')
let resultado = null


function getOperation() {

    let valorSelect = operation.value
    let getFirstValor = Number(firstValor.value)
    let getSecondValor = Number(secondValor.value)

    //verifica se valor do input é igual a SUM
    if (valorSelect === 'sum') {
        return sum(getFirstValor, getSecondValor)
    }

    //verifica se valor do input é igual a subtract
    else if (valorSelect === 'subtract') {
        return subtract(getFirstValor, getSecondValor)
    }

    //verifica se valor do input é igual a multipli
    else if (valorSelect === 'multipli') {
        return multipli(getFirstValor, getSecondValor)
    }

    //verifica se valor do input é igual a divide
    else if (valorSelect === 'divide') {
        return divide(getFirstValor, getSecondValor)
    }

    //verifica se valor selecionado e igual a raiz
    else if (valorSelect === 'raiz') {
        return raiz(getFirstValor)
    }

    else if (valorSelect === 'even') {
        return parImpar(getFirstValor)
    }

}


function sum(getFirstValor, getSecondValor) {
    resultado = getFirstValor + getSecondValor
    return msg.innerHTML = `${resultado}`
}


function subtract(getFirstValor, getSecondValor) {
    resultado = getFirstValor - getSecondValor
    return msg.innerHTML = `${resultado}`
}


function multipli(getFirstValor, getSecondValor) {
    resultado = getFirstValor * getSecondValor
    return msg.innerHTML = `${resultado}`
}


function divide(getFirstValor, getSecondValor) {
    resultado = getFirstValor / getSecondValor
    return msg.innerHTML = `${resultado}`
}


function raiz(getFirstValor) {
    let numberRaiz = Math.sqrt(getFirstValor)
    return msg.innerHTML = `${numberRaiz.toFixed(2)}`
}


function parImpar(getFirstValor) {

    if (getFirstValor % 2 === 0) {
        return msg.innerHTML = `PAR`
    }

    return msg.innerHTML = `IMPAR`
}


function quadrada() {

    if (operation.value === 'raiz') {
        secondValor.classList.add('oculta')
        icon.src = 'img/raiz-quadrada.png'
        btn.innerHTML = 'Descobrir Raiz'
        firstValor.placeholder = 'Raiz do numero digitado é...';
        msg.textContent = ''

    } else if(operation.value === 'even'){
        secondValor.classList.add('oculta')
        icon.src = 'img/matematica.png'
        btn.textContent = 'PAR/IMPAR'
        firstValor.placeholder = 'Digite o numero';
        msg.textContent = ''

    }else{
        secondValor.classList.remove('oculta')
        icon.src = 'img/calculadora.png'
        btn.textContent = 'Calcular'
        firstValor.placeholder = 'Digite o 1º numero';
        msg.textContent = ''
    }
}

operation.addEventListener('change', quadrada)
  
btn.addEventListener('click', () => {
    getOperation()
    firstValor.value = ''
    secondValor.value = ''
})








