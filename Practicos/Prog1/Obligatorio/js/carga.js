
window.personas = []
window.empresas = []
window.tiposVehiculos=[]
window.envios=[]

class Persona{
    constructor(_cedula,_nombre,_apellido,_usuario,_password){
        this.Cedula = _cedula
        this.Nombre = _nombre
        this.Apellido = _apellido
        this.Usuario = _usuario
        this.Password = _password
    }
}


class TipoVehiculo{
    constructor(_id,_nombre){
        this.Id = _id
        this.Nombre = _nombre
    }
}


class Empresa{
    constructor(_rut,_razonSocial,_nombref,_usuario,_password,_tipoVehiculo,_estado){
        this.Rut = _rut
        this.RazonSocial = _razonSocial
        this.NombreFantasia = _nombref
        this.Usuario = _usuario
        this.Password = _password
        this.TipoVehiculo = _tipoVehiculo
        this.Estado = _estado
    }
}


class Envio{
    constructor(_persona,_tipoVehiculo,_distancia,_foto,_estado,_empresa){
        this.Persona = _persona
        this.TipoVehiculo = _tipoVehiculo
        this.Distancia = _distancia
        this.Foto = _foto
        this.Estado = _estado
        this.Empresa = _empresa
    }
}

window.personas.push(new Persona('51484225','Sebastian','Labadie','sebastianlb','1234'))

window.tiposVehiculos.push(new TipoVehiculo(1,'Camioneta'))

window.empresas.push(new Empresa('rut','razon','nombref','usu','pass',tiposVehiculos[0],'estado'))
