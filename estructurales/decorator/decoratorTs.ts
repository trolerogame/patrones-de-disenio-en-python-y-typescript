/*
 *este patron intenta de evitar la herencia, basicamente si tenemos una gran variedad de cambio impredecible que va a depender del usuario, en
 * vez de hacer millones de clases con diferente convinaciones hacemos un clase decorador que luego va a poder ser extendida por las otras  *subclases
*/
interface DañoInterfaces {
    valor(): number;
}

class DañoJugador implements DañoInterfaces {         //? creamos la clase qeu nos  devolvera el danio comun
    valor(): number{
        return 10
    };
}
class DañoEnemigo implements DañoInterfaces {
    valor(): number{
        return 30
    };
}

abstract class DañoDecorator implements DañoInterfaces {        //? creamos el decorador que va a tener el danio pasado como parametro  
    protected daño: DañoInterfaces                                         // ? es como si crearamos unas bases qeu despues pueden usar nuestras clas hijos
    constructor(daño: DañoInterfaces){
        this.daño = daño
    }
    valor(){
        return this.daño.valor()
    }
}

class DañoX2 extends DañoDecorator{     //? se pasa como herencia el decorador para asi tener el danio pasado por el  usuario y asi poder  multiplicar como dice su nombre
    valor(): number {                   //? esto es como si escribieramos encia de la funcion que ya hay en el decorador
        return this.daño.valor() * 2
    }
}
class DañoDividido2 extends DañoDecorator{
    valor(): number { 
        return this.daño.valor() / 4
    }
}

//TODO -=-=-=-=-= JUGADOR -=-=-=-=-=-=-=
let danioContador;

danioContador +=  new DañoJugador();

console.log(danioContador.valor()); //? : 10


danioContador += new DañoX2(danioContador);

console.log(danioContador.valor()); //? : 20


danioContador += new DañoDividido2(danioContador);

console.log(danioContador.valor()); //? : 5 

//TODO -=-=-=-=-= ENEMIGO -=-=-=-=-=-=-=

let danioEnemigo;

danioEnemigo += new DañoEnemigo()

console.log(danioEnemigo.valor())  //? :30


danioEnemigo += new DañoX2(danioEnemigo);

console.log(danioEnemigo.valor()) //? 60
