/*
*Singleton lo que hace es encapsular todo a una sola instancia, lo que quiere decir 
*que singleton sirve para que no puedas ir creando instancia como si nada, sino que comprueba si ya existe, si existe devuelve la instancia ya creada
*sino crea la instancia, aca un ejemplo de esto:
*/
class Singleton {
    private static instance:Singleton;
    private constructor(){};

    static getInstance(){
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

const caca2 = Singleton.getInstance();
const caca = Singleton.getInstance();

console.log(caca2 === caca)