const erro = document.querySelector('#messageErro')
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
    
    if (operation.value !== 'char' && firstValor.value === '') {
        return showMessage('Insira um valor');
    }
    switch (valorSelect) {
        case 'sum': return sum(getFirstValor, getSecondValor);
        case 'subtract': return subtract(getFirstValor,getSecondValor);
        case 'multipli': return multipli(getFirstValor,getSecondValor);
        case 'divide': return divide(getFirstValor,getSecondValor);
        case 'raiz': return raiz(getFirstValor);
        case 'even': return parImpar(getFirstValor);
        case 'age': return getAge(getFirstValor);
        case 'char': return getChar(firstValor.value);
        default: showMessage('Operação Invalida')
    }

}

function getChar(texto) {
    showMessage(texto.trim().length)
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
    if(getSecondValor === 0){
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
     let getYear = 2026 - getFirstValor
     return showMessage(getYear)
}

function quadrada() {
  
    showMessage('')
    erro.innerHTML = ''
    firstValor.type = 'number'
    secondValor.classList.add('oculta')

    switch (operation.value) {

        case 'raiz':
            titulo.textContent = 'Raiz quadrada'
            btn.innerHTML = 'Descobrir Raiz'
            firstValor.placeholder = 'Raiz do numero digitado é...';
            break

        case 'even':
            titulo.textContent = 'Par OU Impar'
            btn.textContent = 'PAR/IMPAR'
            firstValor.placeholder = 'Digite o numero';
            break
        
        case 'age':
            titulo.textContent = 'Descubra sua idade'
            btn.textContent = 'Descubrar'
            firstValor.placeholder = 'Digite o ano de nascimento ex... 1990,2020';
            break

        case 'char':
            firstValor.type = 'text'
            titulo.textContent = 'Contagem de letras'
            firstValor.style.backgroundColor = '#ffffff';
            firstValor.style.color = '#020202';
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
firstValor.addEventListener('input',()=>{
    if (operation.value === 'age') {
        if (firstValor.value.length > 4 ) {
            erro.innerHTML = '(Maximo permitido 4 caracteres)'
            erro.style.border = '1px solid red' 
        } else {
            erro.style.border = ''
            erro.innerHTML = ''
            
        }
    }
})


btn.addEventListener('click', () => {
    erro.innerHTML = ''
    erro.style.border = ''

    getOperation()

    firstValor.value = ''
    secondValor.value = ''
})








