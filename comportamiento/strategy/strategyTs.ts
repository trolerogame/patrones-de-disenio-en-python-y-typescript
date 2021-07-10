/*
    * este patron sirve para evitar hacer millones de if, al simplemente pasarle la peticion requerida podemos pasarle una subclase con la estrategia requerida
*/

interface Arma {
    disparar():string
}

class Jugador implements Arma{
    Arma;
    constructor(Arma){
        this.Arma = Arma;
    }
    disparar(){
        return this.Arma.disparar() ||  "ese nno es un arma"
    }
}


class Pistola implements Arma{
    disparar(){
        return "dispara pistola"
    }
}
class AK47 implements Arma{
    disparar(){
        return "dispara AK47"
    }
}


const arma = new AK47()

const jugador = new Jugador(arma)

console.log(jugador.disparar())