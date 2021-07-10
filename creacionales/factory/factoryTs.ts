/*
    *este patron lo que hace es que en base a la informacion que se pase en la instancia se decidira que subclase de la clase padre utilizaar
    *basicamente sive para que cuando creemos una nueva instancia tengamos la libertad de elegir el valor que queremos en base a pasarle el metodo que queremos,
    *todos esos metodo tiene que ser iguales, para que asi al pasarlo a la clase padre podramos llamarla y todo va a depender de la funcion que pase el usuario
*/

interface reqFactory {
    createRes():void;
}


class Factory {
    private reqFactory: reqFactory
    constructor(reqFactory: reqFactory){
        this.reqFactory = reqFactory;
    }

    peticion(){
        console.log(this.reqFactory.createRes())
    }
}

class resWord implements reqFactory {
    createRes(){
        return "hello world"
    }
}

class resNum implements reqFactory {
    createRes(){
        return 1
    }
}


const res = new resWord()

const resReqFactory  = new Factory(res)

resReqFactory.peticion()

