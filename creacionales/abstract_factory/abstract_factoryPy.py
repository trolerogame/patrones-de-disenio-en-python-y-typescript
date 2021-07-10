#* el abstratc factory esta muy relacionado con el patron factory ,el abstract factory dentro de sus subclases en vez de hacer una sola funcionalidad
#* este hace una familia de funcionalidades ,vamos a ver un ejemplo con una verduleria

class Verduleria :
    __frutas = None
    def __init__(self,frutas):
        self.frutas = frutas;
    
    def peticionFrutas(self):           #* esta funcion simplemente se encarga de pedir la fruta
        print(self.frutas.Manzana())
        print(self.frutas.Pera())

#* creamos la subclases qeu van a contener las misma funciones pero diferente contenido, en este caso tenemos la clase de frutas chicas y frutas grandes
#* con esto conseguimos que la persona simplemente eliga qeu tipo de frutas va a queres y cuando la eliga simplemente la va a tener que mandar a la verduleria a pedir

class FrutasChicas: 
    def Manzana(self):
        return "🍎 chica"
    
    def Pera(self):
        return "🍐 chica"


class FrutasGrandes :
    def Manzana(self):
        return "🍎 Grandes"
    
    def Pera(self):
        return "🍐 Grandes"


#? peticion del cliente

peticionDelCliente = FrutasChicas() 

verduleriaPeticion = Verduleria(peticionDelCliente)

verduleriaPeticion.peticionFrutas()