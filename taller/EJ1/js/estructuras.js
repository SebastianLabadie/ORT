//let UsuarioLogueado = false;
let usuarios = new Array();
let paises = new Array();
class Usuario{
    constructor(nombre,apellido, pais, nombreUsuario,password){
        this.Nombre = nombre;
        this.Apellido = apellido;
        this.Pais = pais;
        this.NombreUsuario = nombreUsuario;
        this.Password = password;
    }
}

class Pais{
    constructor(codigo,nombre){
        this.Codigo = codigo;
        this.Nombre = nombre;
    }
}