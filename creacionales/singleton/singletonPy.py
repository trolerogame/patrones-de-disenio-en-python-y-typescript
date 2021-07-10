#* Singleton lo que hace es encapsular todo a una sola instancia, lo que quiere decir 
#* que singleton sirve para que no puedas ir creando instancia como si nada, sino que comprueba si ya existe, si existe devuelve la instancia ya creada
#* sino crea la instancia, aca un ejemplo de esto:


class Singleton():
    __intance = None            # atributo
    @staticmethod
    def __new__(self):          # new es un metodo estatico
        if Singleton.__intance is None:
            Singleton.__intance = object.__new__(self)
        return Singleton.__intance

d = Singleton()
v = Singleton()
print( d is v )