import { Operations } from "./operations.js"

const erro = document.querySelector('#messageErro'),
    operation = document.querySelector('#operation'),
    btn = document.querySelector('button'),
    msg = document.querySelector('span'),
    firstValor = document.querySelector('.first-valor'),
    secondValor = document.querySelector('.second-valor'),
    titulo = document.querySelector('h1')


const config = {
    sum:{btn:'Adição', titulo:'Somar',hidden:false, type:'number',placeholder:'Digite o 1º numero...'},
    subtract:{btn:'Subitrair',titulo:'Subtração',hidden:false,type:'number',placeholder:'Digite o 1º numero...'},
    multiply:{btn:'Multiplicar',titulo:'Multiplição',hidden:false,type:'number',placeholder:'Digite o 1º numero...'},
    divide:{btn:'Dividir',titulo:'Divisão',hidden:false,type:'number',placeholder:'Digite o 1º numero...'},
    even:{btn:'PAR/IMPAR',titulo:'Par ou Impar',hidden:true,type:'number',placeholder:'Digite o 1º numero...'},
    age:{btn:'Idade',titulo:'Descobrir idade',hidden:true,type:'number',placeholder:'Digite seu ano de nascimento ex. 2000'},
    raiz:{btn:'Idade',titulo:'Descobrir idade',hidden:true,type:'number',placeholder:'Digite o 1º numero...'},
    char:{btn:'Contar',titulo:'Contar letras',hidden:true,type:'text',placeholder:'Digite qualquer nome...'},
}


operation.addEventListener('change',() =>{

firstValor.value = ''
secondValor.value = ''
msg = ''

const configuracoes = config[operation.value]
titulo.textContent = configuracoes.titulo
btn.textContent = configuracoes.btn
firstValor.type = configuracoes.type
firstValor.placeholder = configuracoes.placeholder 

if (configuracoes) {
    secondValor.classList.toggle('oculta', configuracoes.hidden)
}

})    


btn.addEventListener('click',()=>{
    const valor1 = firstValor.value
    const valor2 = secondValor.value
    const selecao = operation.value

    const op = new Operations(valor1,valor2)
    
    const calculadora = {
        sum: () => op.sum(),
        subtract: () => op.subtract(),
        multiply: () => op.multiply(),
        divide: () => op.divide(),
        even: () => op.even(),
        age: () => op.age(),
        raiz: () => op.raiz().toFixed(),
        char: () => op.char()

    }

    msg.innerHTML = `${calculadora[selecao]()}`
})