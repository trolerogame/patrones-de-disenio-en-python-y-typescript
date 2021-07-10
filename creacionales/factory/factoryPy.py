#* este patron lo que hace es que en base a la informacion que se pase en la instancia se decidira que subclase de la clase padre utilizaar
#* basicamente sive para que cuando creemos una nueva instancia tengamos la libertad de elegir el valor que queremos en base a pasarle el metodo que queremos,
#* todos esos metodo tiene que ser iguales, para que asi al pasarlo a la clase padre podramos llamarla y todo va a depender de la funcion que pase el usuario

class Factory():        #creacion de la factory
    def __init__(self, reqFactory): 
        self.reqFactory = reqFactory
    
    def peticion(self):  # esta funcion se encarga de mostrar la respuesta de la clase dada por la instancia
        print(self.reqFactory.createRes())

class resWord :
    def createRes(self):
        return "hola"

class resNum :
    def createRes(self):
        return 1


res = resNum() | resWord()

resReqFactory = Factory(res)

resReqFactory.peticion()
