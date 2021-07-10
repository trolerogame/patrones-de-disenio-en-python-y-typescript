#* este patron sirve para evitar hacer millones de if, al simplemente pasarle la peticion requerida podemos pasarle una subclase con la estrategia requerida


class Jugador :
    Arma  = None
    def __init__(self,Arma):
        self.Arma = Arma
    def disparar(self):
        return "disparar " + self.Arma.disparar()


class Ak47 :
    def disparar(self):
        return "AK 47"

class Pistola :
    def disparar(self):
        return "Pistola"

arma = Ak47()

jugador = Jugador(arma)

print(jugador.disparar())