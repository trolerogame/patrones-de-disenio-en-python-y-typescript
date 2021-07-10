/*
   * el abstratc factory esta muy relacionado con el patron factory ,el abstract factory dentro de sus subclases en vez de hacer una sola funcionalidad
    *este hace una familia de funcionalidades ,vamos a ver un ejemplo con una verduleria
*/
interface FrutasInterface {
    Manzana():string
    Pera():string
}

class Verduleria {
    private frutas:FrutasInterface;
    constructor(frutas:FrutasInterface){
        this.frutas = frutas;
    }
    peticionFrutas(){           // ?esta funcion simplemente se encarga de pedir la fruta
        console.log(this.frutas.Manzana())
        console.log(this.frutas.Pera())
    }
}


// *aca creamos la subclases qeu van a contener las misma funciones pero diferente contenido, en este caso tenemos la clase de frutas chicas y frutas grandes
// *con esto conseguimos que la persona simplemente eliga qeu tipo de frutas va a queres y cuando la eliga simplemente la va a tener que mandar a la verduleria a pedir
class FrutasChicas implements FrutasInterface{ 
    Manzana(){
        return "🍎 chica"
    }
    Pera(){
        return "🍐 chica"
    }
}

class FrutasGrandes  implements FrutasInterface{
    Manzana(){
        return "🍎 Grandes"
    }
    Pera(){
        return "🍐 Grandes"
    }
}

//? peticion del cliente 


const PeticionDelCliente = new FrutasChicas() || new FrutasGrandes()


const verduleriaPeticion = new Verduleria(PeticionDelCliente)

verduleriaPeticion.peticionFrutas()



// este no termina siendo un buen ejemplo de como implementarlo, pero un buen ejemplo  seria el de hacer que toda una aplicacion pase de tema blanco a negro y  viceversa
