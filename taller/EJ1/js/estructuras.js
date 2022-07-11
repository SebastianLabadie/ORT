
let personas = []

let paises = []


class Usuario{
    constructor(nom,ape,pais,user,password){
        this.Nombre = nom
        this.Apellido = ape
        this.Pais = pais
        this.Usuario = user
        this.Password = password
    
    }
}

class Pais{
    constructor(ac,nom){
        this.Nombre = nom
        this.ac = ac
    }
}