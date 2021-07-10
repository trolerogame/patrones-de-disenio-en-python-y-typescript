# *este patron intenta de evitar la herencia, basicamente si tenemos una gran variedad de cambio impredecible que va a depender del usuario, ent
#* vez de hacer millones de clases con diferente convinaciones hacemos un clase decorador que luego va a poder ser extendida por las otras subclases



class DañoJugador:  #? creamos la clase qeu nos  devolvera el danio comun
    def valor(self):
        return 10

class DañoEnemigo :
    def valor(self):
        return 30


class DañoDecorator : #? creamos el decorador que va a tener el danio pasado como parametro
    Daño = None       #? es como si crearamos unas bases qeu despues podemos usar
    def __init__(self,Daño):
        self.Daño = Daño
    def valor(self):
        return self.Daño.valor()

class DañoX2(DañoDecorator):    #? se pasa como herencia el decorador para asi tener el danio pasado por el  usuario y asi poder  
    def valor(self):            #?esto es como si escribieramos encia de la funcion que ya hay en el decorador
        return self.Daño.valor() * 2

class DañoDividido(DañoDecorator):
    def valor(self):
        return self.Daño.valor() / 4
  

#TODO -=-=-=-=-= JUGADOR -=-=-=-=-=-=-=

dañoJugador = DañoJugador()

print(f"danio inicial: {dañoJugador.valor()}")

dañoJugadorX2 = DañoX2(dañoJugador)

print(f"danio aumentado a {dañoJugadorX2.valor()}")

