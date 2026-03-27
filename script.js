const operation = document.querySelector('#operation')
const btn = document.querySelector('button')
const msg = document.querySelector('span')
const firstValor = document.querySelector('.first-valor')
const secondValor = document.querySelector('.second-valor')
const titulo = document.querySelector('h1')
let resultado = null

function showMessage(content) {
   return msg.innerHTML = content;
}

function getOperation() {

    let valorSelect = operation.value
    let getFirstValor = Number(firstValor.value)
    let getSecondValor = Number(secondValor.value)

    switch (valorSelect) {
        case 'sum': return sum(getFirstValor, getSecondValor);
        case 'subtract': return subtract(getFirstValor,getSecondValor);
        case 'multipli': return multipli(getFirstValor,getSecondValor);
        case 'divide': return divide(getFirstValor,getSecondValor);
        case 'raiz': return raiz(getFirstValor);
        case 'even': return parImpar(getFirstValor);
        case 'age': return getAge(getFirstValor);
        case 'char': return getChar(firstValor);
        default: showMessage('Operação Invalida')
    }

}

function getChar(getLtterChar) {
    let letterCount = getLtterChar.value.trim()
    showMessage(letterCount.length)
}


function sum(getFirstValor, getSecondValor) {
    resultado = getFirstValor + getSecondValor
    showMessage(resultado)
}


function subtract(getFirstValor, getSecondValor) {
    resultado = getFirstValor - getSecondValor
    showMessage(resultado)
}


function multipli(getFirstValor, getSecondValor) {
    resultado = getFirstValor * getSecondValor
    showMessage(resultado)
}


function divide(getFirstValor, getSecondValor) {
    resultado = getFirstValor / getSecondValor
    if(getFirstValor === 0 || getSecondValor === 0){
       return  showMessage('Não é divisivel por 0')
    }
    return showMessage(resultado.toFixed(2))
   
}


function raiz(getFirstValor) {
    let numberRaiz = Math.sqrt(getFirstValor)
    showMessage(numberRaiz.toFixed(2))
}


function parImpar(getFirstValor) {
    return showMessage(getFirstValor % 2 === 0 ?'PAR':'IMPAR')
}

function getAge(getFirstValor) {
    const erro = document.querySelector('#messageErro')
     let getYear = 2026 - getFirstValor
     if (firstValor.value.length > 4 || firstValor.value.length < 4) {
        return erro.innerHTML = 'Digite um ano de nascimento valido...'
     }

     return showMessage(getYear)
}


function quadrada() {
    showMessage('')
    switch (operation.value) {
        case 'raiz':
            secondValor.classList.add('oculta')
            titulo.textContent = 'Raiz quadrada'
            btn.innerHTML = 'Descobrir Raiz'
            firstValor.placeholder = 'Raiz do numero digitado é...';
            break

        case 'even':
            secondValor.classList.add('oculta')
            titulo.textContent = 'Par OU Impar'
            btn.textContent = 'PAR/IMPAR'
            firstValor.placeholder = 'Digite o numero';
            break
        
        case 'age':
            secondValor.classList.add('oculta')
            titulo.textContent = 'Descubra sua idade'
            btn.textContent = 'Descubrar'
            firstValor.placeholder = 'Digite o ano de nascimento ex... 1990,2020';
            break

        case 'char':
            secondValor.classList.add('oculta')
            firstValor.type = 'text'
            titulo.textContent = 'Contagem de letras'
            btn.textContent = 'Contagem'
            firstValor.placeholder = 'Digite qualquer nome...';
            break

        default:
            secondValor.classList.remove('oculta')
            titulo.textContent = 'Calculadora'
            btn.textContent = 'Calcular'
            firstValor.placeholder = 'Digite o 1º numero';
            break
    }

}

operation.addEventListener('change', quadrada)
  
btn.addEventListener('click', () => {
    getOperation()
    firstValor.value = ''
    secondValor.value = ''
})








