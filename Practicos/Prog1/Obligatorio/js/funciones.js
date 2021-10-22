personas = window.personas 
empresas = window.empresas 

export const crearFormularioLogin = () =>{
    const divLogin = document.querySelector('.login')
    if (!window.isLoged){
       divLogin.innerHTML = `
        <input type="text" id="txtUsuario" placeholder="usuario"  >
        <input type="text" id="txtPassword" placeholder="password" >
        <select id="loginTipoUsuario">
                <option value="1">PERSONA</option>
                <option value="2">EMPRESA</option>
        </select>
        <input type="button" id="btnLogin" value="Ingresar" class="btnBlue001">
        <input type="button" id="btnRegistro" value="Registro" class="btnBlue001">
        `
    }else{
       divLogin.innerHTML = ``
    }
}

export const handleLogin = () =>{
    const tipoUsuario = parseInt(document.querySelector('#loginTipoUsuario').value)
    const usuario = document.querySelector('#txtUsuario').value
    const password = document.querySelector('#txtPassword').value

    if (tipoUsuario === 1) {
        const personasFiltered = personas.filter(persona => persona.Usuario === usuario && persona.Password === password)
        if (personasFiltered.length > 0){
            console.log('HAY USUARIO PARA LOGEARSE')
            console.log(personasFiltered[0])
        }else{
            console.log('error login')
        }
    }else{
        const empresasFiltered = empresas.filter(empresa => empresa.Usuario === usuario && empresa.Password === password)
        if (empresasFiltered.length > 0){
            console.log('HAY USUARIO PARA LOGEARSE')
            console.log(empresasFiltered[0])
        }else{
            console.log('error login')
        }
    }
}