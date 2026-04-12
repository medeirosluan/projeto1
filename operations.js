export class Operations {
    constructor(valor1,valor2) {
        this.v1 = Number(valor1)
        this.v2 = Number(valor2)
        this.textOriginal = String(valor1)
    }

    sum(){
        return this.v1 + this.v2
    }

    subtract(){
        return this.v1 - this.v2
    }

    multiply(){
        return this.v1 * this.v2
    }

    divide(){

       return  this.v2 === 0 ? 'Não e possivel dividir 0': this.v1 / this.v2
    }

    even(){
        return this.v1 % 2 === 0 ? 'PAR':'IMPAR'
    }

    age(){
        let year = new Date().getFullYear() - this.v1
        return year
    }

    raiz(){
        return Math.sqrt(this.v1)
    }

    char(){
      return this.textOriginal.length
    }
}