import { arrowLeft } from "../assets/icons.js"

let personas = window.personas 
let empresas = window.empresas 
let tiposVehiculos = window.tiposVehiculos
let envios = window.envios
let tipoPerfilLoged = window.tipoPerfilLoged
let isLoged = window.isLoged
let userLoged = window.userLoged

export const crearFormularioLogin = () =>{
    const divContenido = document.querySelector('.contenido')
    if (!isLoged){
       divContenido.innerHTML = `
        <div class='login'>
            <input type="text" id="txtUsuario" placeholder="usuario"  >
            <input type="password" id="txtPassword" placeholder="password" >
            <select id="loginTipoUsuario">
                    <option value="1">PERSONA</option>
                    <option value="2">EMPRESA</option>
            </select>
            <p class='txtError' ></p>
            <div class='flex btnGroupLogin'>
                <input type="button" id="btnLogin" value="Ingresar" class="btnBlue001">
                <input type="button" id="btnRegistro" value="Registro" class="btnBlue001">
            </div>
        </div>
        `
        document.querySelector('#btnLogin').addEventListener('click',handleLogin)
        document.querySelector('#btnRegistro').addEventListener('click',crearFormularioRegistro)
    }else{
       divContenido.innerHTML = ``
    }
}



const crearMenu = () =>{
    const divContenido = document.querySelector('.contenido')
    const opcionesMenu = [
        {usuario:1,option:1,title:'Realizar Solicitud'},
        {usuario:1,option:2,title:'Ver Mis Solicitudes'},
        {usuario:1,option:3,title:'Ver Estadisticas'},
        {usuario:1,option:4,title:'Cerrar Sesión'},
        {usuario:2,option:1,title:'Solicitudes Pendientes'},
        {usuario:2,option:2,title:'Solicitudes En Transito'},
        {usuario:2,option:3,title:'Ver Estadisticas'},
        {usuario:2,option:4,title:'Cerrar Sesión'},
        {usuario:3,option:1,title:'Administrar Empresas'},
        {usuario:3,option:2,title:'Crear Tipos de Vehiculos'},
        {usuario:3,option:3,title:'Ver Estadisticas'},
        {usuario:3,option:4,title:'Cerrar Sesión'},
    ]

    divContenido.innerHTML = `
    <div class='flex contenedor-menu'>
        ${opcionesMenu.filter(option=>option.usuario === tipoPerfilLoged).sort((a,b)=>a.option-b.option).map(option=>`<input type="button" id="btnMenu${option.option}" value="${option.title}" class="${option.option !== 4 ? 'btnBlue001': 'mt-3 btnRed001'}">`).join('')}
    </div>
    `

    document.querySelector('#btnMenu1').addEventListener('click',handleMenu1)
    document.querySelector('#btnMenu2').addEventListener('click',handleMenu2)
    document.querySelector('#btnMenu3').addEventListener('click',handleMenu3)
    document.querySelector('#btnMenu4').addEventListener('click',handleMenu4)
}


export const handleLogin = () =>{
    const tipoUsuario = parseInt(document.querySelector('#loginTipoUsuario').value)
    const usuario = document.querySelector('#txtUsuario').value
    const password = document.querySelector('#txtPassword').value
    const txtError = document.querySelector('.txtError')

    if (!usuario || !password) {
        txtError.innerHTML=`Error usuario o contraseña vacío.`
        return
    }

    console.log(personas)
    if (tipoUsuario == 1) {
        const personasFiltered = personas.filter(persona => persona.Usuario === usuario && persona.Password === password)
        if (personasFiltered.length > 0){
            console.log(personasFiltered[0])
            isLoged = true
            userLoged = personasFiltered[0].Usuario

            crearFormularioLogin()

            if (personasFiltered[0].Usuario === 'Admin' ) {
                tipoPerfilLoged = 3
            }else{
                tipoPerfilLoged = 1
            }

            crearMenu()
        }else{
            txtError.innerHTML=`Error usuario o contraseña incorrectos`
        }
    }else{
        const empresasFiltered = empresas.filter(empresa => empresa.Usuario === usuario && empresa.Password === password)

        if (empresasFiltered.length > 0){

            //Validar que empresa este habilitada
            if (empresasFiltered[0].Estado === 'D') {
                txtError.innerHTML=`Error empresa deshabilitada.`
                return
            }
            
            console.log(empresasFiltered[0])
            isLoged = true
            tipoPerfilLoged = 2
            userLoged = empresasFiltered[0].Usuario

            crearFormularioLogin()
            crearMenu()
        }else{
            txtError.innerHTML=`Error usuario o contraseña incorrectos`
        }
    }
}


const handleMenu1 = () =>{
    switch (tipoPerfilLoged) {
        case 1:
            crearFormularioRealizarSolicitud()
            break;

        case 2:
            crearFormularioSolicitudesPendientes()
            break;

        case 3:
            crearFormularioAdministrarEmpresas()
            break;
    
    }
}

const handleMenu2 = () =>{
    switch (tipoPerfilLoged) {
        case 1:
            crearFormularioVerMisSolicitudes()
            break;

        case 2:
            crearFormularioSolicitudesEnTransito()
            break;

        case 3:
            crearFormularioCrearTVehiculo()
            break;
    
    }
}

const handleMenu3 = () =>{
    switch (tipoPerfilLoged) {
        case 1:
            crearFormularioVerEstadisticasPersona()
            break;

        case 2:
            crearFormularioVerEstadisticasEmpresa()
            break;

        case 3:
            crearFormularioVerEstadisticasAdmin()
            break;
    
    }
}

const handleMenu4 = () =>{
    isLoged = false
    crearFormularioLogin()
}


const crearFormularioRegistro = () =>{
    const divContenido = document.querySelector('.contenido')
    let registroTipoUsuario =  window.registroTipoUsuario

    if (!registroTipoUsuario) {
        registroTipoUsuario = '1'
    }

    const handleRegistrarse = () =>{
        const txtError = document.querySelector('#txtError')
        txtError.innerHTML=``

        if (registroTipoUsuario == '1'){
            const cedula = document.querySelector('#txtCedula').value
            const usuario = document.querySelector('#txtUsuario').value
            const nombre = document.querySelector('#txtNombre').value
            const apellido = document.querySelector('#txtApellido').value
            const password = document.querySelector('#txtPassword').value
            

            if (!cedula || !usuario || !nombre || !apellido || !password) {
                txtError.innerHTML=`Error hay datos vacios`
                return
            }

            if (personas.filter(persona => persona.Usuario === usuario).length > 0) {
                txtError.innerHTML=`Error usuario ya existe`
                return
            }

            personas.push(new Persona(cedula,nombre,apellido,usuario,password))
            alert('Usuario registrado correctamente')
            
        }else{
            const rut = document.querySelector('#txtRUT').value
            const razonSocial = document.querySelector('#txtRazonSocial').value
            const nombreFantasia = document.querySelector('#txtNombreFantasia').value
            const usuario = document.querySelector('#txtUsuario').value
            const password = document.querySelector('#txtPassword').value
            const tipoVehiculoSel = parseInt(document.querySelector('#solTipoVehiculo').value)
            const tipoVehiculoFiltered = tiposVehiculos.filter(tipoVehiculo=>tipoVehiculo.Id === tipoVehiculoSel)[0]

            if (!rut || !razonSocial || !nombreFantasia || !usuario || !password) {
                txtError.innerHTML=`Error hay datos vacios`
                return
            }

            if (empresas.filter(empresa => empresa.Usuario === usuario).length > 0) {
                txtError.innerHTML=`Error usuario ya existe`
                return
            }

            empresas.push(new Empresa(rut,razonSocial,nombreFantasia,usuario,password,tipoVehiculoFiltered,'D'))
            alert('Usuario registrado correctamente')

        }
    }

    const handleChangeTipoUsuario = (e) =>{
        registroTipoUsuario = e.target.value
        console.log(registroTipoUsuario)
        crearFormularioRegistroByType()
    }

    const crearFormularioRegistroByType = () =>{
        if (registroTipoUsuario == '1'){
           divContenido.innerHTML = `
            <div class='register'>
                <div class='flex'>
                    <input type="text" id="txtCedula" placeholder="Cedula"  >
                    <input type="text" id="txtUsuario" placeholder="Nombre Usuario" >
                </div>
                <div class='flex'>
                    <input type="text" id="txtNombre" placeholder="Nombre"  >
                    <input type="text" id="txtApellido" placeholder="Apellido" >
                </div>
                <div class='flex'>
                    <input type="password" id="txtPassword" placeholder="Contraseña" >
                </div>
                <p id='txtError' class='txtError' ></p>
                <select id="registroTipoUsuario">
                    <option value="1" ${ registroTipoUsuario === "1" ? 'selected' : null} >PERSONA</option>
                    <option value="2" ${ registroTipoUsuario === "2" ? 'selected' : null} >EMPRESA</option>
                </select>
                <div>
                    <input type="button" id="btnRegistrarse" value="Registrarse" class="btnBlue001">
                    <input type="button" id="btnVolverLogin" value="Volver a Ingresasr" class="btnBlue001">
                </div>
            </div>
            `
           
        }else{
            divContenido.innerHTML = `
            <div class='register'>
                <div class='flex'>
                    <input type="text" id="txtRUT" placeholder="RUT"  >
                    <input type="text" id="txtRazonSocial" placeholder="Razon Social" >
                </div>
                <div class='flex'>
                    <input type="text" id="txtNombreFantasia" placeholder="Nombre Fantasia"  >
                    <input type="text" id="txtUsuario" placeholder="Nombre Usuario" >
                </div>
                <div class='flex'>
                    <input type="password" id="txtPassword" placeholder="Contraseña" >
                    <select id="solTipoVehiculo">
                    ${tiposVehiculos.map(tipoVehiculo=>
                        `<option value="${tipoVehiculo.Id}">${tipoVehiculo.Nombre}</option>`).join('')
                    }
                    </select>
                </div>
                <p id='txtError' class='txtError' ></p>
                <select id="registroTipoUsuario" >
                    <option value="1" ${ registroTipoUsuario === "1" ? 'selected' : null} >PERSONA</option>
                    <option value="2" ${ registroTipoUsuario === "2" ? 'selected' : null} >EMPRESA</option>
                </select>
                <div>
                    <input type="button" id="btnRegistrarse" value="Registrarse" class="btnBlue001">
                    <input type="button" id="btnVolverLogin" value="Volver a Ingresasr" class="btnBlue001">
                </div>
            </div>
            `
        }

        document.querySelector('#btnRegistrarse').addEventListener('click',handleRegistrarse)
        document.querySelector('#btnVolverLogin').addEventListener('click',crearFormularioLogin)

        //on change tipo usuario
        document.querySelector('#registroTipoUsuario').addEventListener('change',(e)=>handleChangeTipoUsuario(e))
    }

    crearFormularioRegistroByType()

    

    
}




const crearFormularioRealizarSolicitud = () =>{
    const divContenido = document.querySelector('.contenido')
    

    divContenido.innerHTML = `
        <div>
            ${arrowLeft}
            <div>
                <div>
                    <input type="number" id="txtDistancia" placeholder="Distancia (KM)"  >
                    <input type="text" id="txtDescripcion" placeholder="Descripción"  >
                    <select id="solTipoVehiculo">
                    ${tiposVehiculos.map(tipoVehiculo=>
                        `<option value="${tipoVehiculo.Id}">${tipoVehiculo.Nombre}</option>`).join('')
                    }
                    </select>
                </div>
                <div>
                    <input type="file" id="file" placeholder="Ingrese Foto" class='mt-3'  >
                </div>
            </div>
            <p class='txtError mt-3' ></p>
            <div>
                <input type="button" id="btnCrearSolicitud" value="Crear" class="btnBlue001 mt-3" >
            </div>
        </div>
    `

    const handleRealizarSolicitud = () =>{
        const distancia = parseInt(document.querySelector('#txtDistancia').value)
        const descripcion = document.querySelector('#txtDescripcion').value
        const txtError = document.querySelector('.txtError')
        const solTipoVehiculo = parseInt(document.querySelector('#solTipoVehiculo').value)
        const personaLogeada = obtenerPerOEmpLogeada('P')
        const vehiculoSeleccionado = tiposVehiculos.filter(tipoVehiculo=>tipoVehiculo.Id === solTipoVehiculo)[0]
        const foto = document.querySelector('#file').files[0]
        const reader = new FileReader();
        txtError.innerHTML = ``
    

        if (!foto) {
            txtError.innerHTML = `Error imagen vacia.`
            return
        }

        if (!distancia) {
            txtError.innerHTML = `Error distancia debe ser mayor a 0 y numerico.`
            return 
        }

        

        reader.onload = () =>{
            const fotoB64 = reader.result.replace("data:", "").replace(/^.+,/, "");
            console.log(fotoB64)
            
            envios.push(new Envio(personaLogeada,vehiculoSeleccionado,distancia,descripcion,fotoB64,'Pendiente',''))
            alert('Solicitud realizada con exito.')
            crearMenu()
        }
    
        reader.readAsDataURL(foto);
       

    }


    //click crear solicitud
    document.querySelector('#btnCrearSolicitud').addEventListener('click',handleRealizarSolicitud)
     //click  volver
     document.querySelector('#btnArrowLeft').addEventListener('click',crearMenu)
}

const crearFormularioVerMisSolicitudes = () =>{
    const divContenido = document.querySelector('.contenido')

    divContenido.innerHTML = `
        <div>
            ${arrowLeft}
            <div id='contenedorSolicitudes' class='mt-3 grid'>
                
            </div>
        </div>
    `

    const listarSolicitudes = () =>{
        const divContenedor = document.querySelector('#contenedorSolicitudes')
        const enviosFiltered = obtenerEnviosPersonaLogeada()

        enviosFiltered.map(envio=>divContenedor.innerHTML+=`
        <div class='flex cardContainer' >
            <img src="data:image/png;base64,${envio.Foto}" class='foto' />
            <div class='lable_value'>
                <p>Distancia</p>
                <p class='sbold'>${envio.Distancia} KM</p>
            </div>
            <div class='lable_value'>
                <p>Estado</p>
                <p class='txtEstado sbold'>${envio.Estado}</p>
            </div>
            <div class='lable_value'>
                <p>Empresa</p>
                <p class='sbold'>${envio.Empresa ? envio.Empresa.NombreFantasia : 'ninguna'}</p>
            </div>
        </div>
        `)
    }

    listarSolicitudes()

    //click  volver
    document.querySelector('#btnArrowLeft').addEventListener('click',crearMenu)
}

const crearFormularioVerEstadisticasPersona = () =>{
    const divContenido = document.querySelector('.contenido')
    
    divContenido.innerHTML = `
        <div>
            ${arrowLeft}
            <div id='contenedorSolicitudes' class='mt-3 grid'>
                
            </div>
        </div>
    `

    const listarSolicitudes = () =>{
        const divContenedor = document.querySelector('#contenedorSolicitudes')
        const enviosFiltered =   obtenerEnviosPersonaLogeada()
    
        let cantidadEnTransito = enviosFiltered.filter(envio=>envio.Estado === 'En Transito').length
        let cantidadFinalizada = enviosFiltered.filter(envio=>envio.Estado === 'Finalizada').length
        let cantidadPendiente = enviosFiltered.filter(envio=>envio.Estado === 'Pendiente').length
        let porcentajeEnTransito = (cantidadEnTransito * 100) / enviosFiltered.length 
        let porcentajeFinalizada = (cantidadFinalizada * 100) / enviosFiltered.length 
        let porcentajePendiente = (cantidadPendiente * 100) / enviosFiltered.length 


       const estados = [
           {estado:'En Transito',cantidad:cantidadEnTransito,porcentaje: porcentajeEnTransito},
           {estado:'Finalizada',cantidad:cantidadFinalizada,porcentaje: porcentajeFinalizada},
           {estado:'Pendiente',cantidad:cantidadPendiente,porcentaje: porcentajePendiente},
        ]

       estados.map(estado=>divContenedor.innerHTML+=`
        <div class='flex cardContainer' >
            <div class='lable_value'>
                <p>Estado</p>
                <p class='txtEstado sbold'>${estado.estado}</p>
            </div>
            
            <div class='lable_value'>
                <p>Porcentaje </p>
                <p class='sbold'>${estado.porcentaje} %</p>
            </div>
           
            <div class='lable_value'>
                <p>Cantidad Envios</p>
                <p class='sbold'>${estado.cantidad}</p>
            </div>
        </div>
        `)
    }

    listarSolicitudes()

     //click  volver
     document.querySelector('#btnArrowLeft').addEventListener('click',crearMenu)
}

const crearFormularioSolicitudesPendientes = () =>{
    const divContenido = document.querySelector('.contenido')

    divContenido.innerHTML = `
        <div>
            ${arrowLeft}
            <p id='txtError' class='txtError' ></p>
            <div id='contenedorSolicitudes' class='mt-3 grid'>
                
            </div>
        </div>
    `

    const txtError =  document.querySelector('#txtError')

    const handleAsignarEnvio = (envio) =>{
        const empresa = obtenerPerOEmpLogeada('E')
        if (empresa.Estado === 'H') {
            envio.Empresa = empresa
            envio.Estado = 'En Transito'
        }else{
            txtError.innerHTML = `Error Empresa se Encuentra Deshabilitada.`
        }

        listarSolicitudes()
    }

    const listarSolicitudes = () =>{
        const divContenedor = document.querySelector('#contenedorSolicitudes')
        const enviosFiltered = obtenerEnviosPendientes()

        divContenedor.innerHTML = ``

        enviosFiltered.map((envio,i)=>{
            
            divContenedor.innerHTML+=`
            <div class='flex cardContainer' >
                <img src="data:image/png;base64,${envio.Foto}" class='foto' />
                <div class='lable_value'>
                    <p class='bold mb-2'>${envio.Persona.Nombre} ${envio.Persona.Apellido}</p>
                    <p>Distancia</p>
                    <p class='sbold'>${envio.Distancia} KM</p>
                </div>
                <input type="button" id="btnAsignarEnvio${i}" value="Asignar" class="btnBlue001" >
                
            </div>
            `
           
         })

         enviosFiltered.map((envio,i)=>{
            //click  asignar envio
            document.querySelector(`#btnAsignarEnvio${i}`).addEventListener('click',()=>handleAsignarEnvio(envio))
         })


    }

    listarSolicitudes()

    //click  volver
    document.querySelector('#btnArrowLeft').addEventListener('click',crearMenu)
  
}

const crearFormularioSolicitudesEnTransito = () =>{
    const divContenido = document.querySelector('.contenido')

    divContenido.innerHTML = `
        <div>
            ${arrowLeft}
            <p id='txtError' class='txtError' ></p>
            <div id='contenedorSolicitudes' class='mt-3 grid'>
                
            </div>
        </div>
    `

    const txtError =  document.querySelector('#txtError')

    const handleFinalizarEnvio = (envio) =>{
        const empresaLoged = obtenerPerOEmpLogeada('E')
        if (empresaLoged.Estado === 'H') {
            envio.Estado = 'Finalizada'
        }else{
            txtError.innerHTML = `Error Empresa se Encuentra Deshabilitada.`
        }
        listarSolicitudes()
    }

    const listarSolicitudes = () =>{
        const divContenedor = document.querySelector('#contenedorSolicitudes')
        const enviosFiltered = obtenerEnviosEnTransito()        

        divContenedor.innerHTML = ``

        enviosFiltered.map((envio,i)=>{
            
            divContenedor.innerHTML+=`
            <div class='flex cardContainer' >
                <img src="data:image/png;base64,${envio.Foto}" class='foto' />
                <div class='lable_value'>
                    <p class='bold mb-2'>${envio.Persona.Nombre} ${envio.Persona.Apellido}</p>
                    <div class='flex'>
                        <div class='lable_value'>
                            <p>Distancia</p>
                            <p class='sbold'>${envio.Distancia} KM</p>
                        </div>
                        <div class='lable_value'>
                            <p>Estado</p>
                            <p class='txtEstado sbold'>${envio.Estado}</p>
                        </div>
                    </div>
                </div>

                <input type="button" id="btnFinalizarEnvio${i}" value="Finalizar" class="btnBlue001" >
                
            </div>
            `
          
         })

         enviosFiltered.map((envio,i)=>{
            //click  finalizar envio
            document.querySelector(`#btnFinalizarEnvio${i}`).addEventListener('click',()=>handleFinalizarEnvio(envio))
         })


    }

    listarSolicitudes()

    //click  volver
    document.querySelector('#btnArrowLeft').addEventListener('click',crearMenu)
}

const crearFormularioVerEstadisticasEmpresa = () =>{
    const divContenido = document.querySelector('.contenido')
    const estados = [ 'En Transito', 'Finalizada']
    let estadoSeleccionado = 'En Transito'

    divContenido.innerHTML = `
        <div>
            ${arrowLeft}
            <select id="estadisticasEstado">
                ${estados.map(estado=>`<option value="${estado}">${estado}</option>`)}
            </select>
            <p id='estadisticasCantidadSolicitudes' ></p>
            <div id='contenedorPersonas' class='mt-3 grid'>
                
            </div>
        </div>
    `

    const changeEstado = (e) =>{
        estadoSeleccionado = e.target.value
        listarEstadisticaCantidadSolicitudes()
    }

    document.querySelector('#estadisticasEstado').addEventListener('change',(e)=>changeEstado(e))

    const listarEstadisticaCantidadSolicitudes = () =>{
        const cantidadSolicitudes = obtenerEnviosByEstadoEmpresa(estadoSeleccionado).length
        document.querySelector('#estadisticasCantidadSolicitudes').innerHTML=`Cantidad de solicitudes en estado ${estadoSeleccionado}:${cantidadSolicitudes}`
    }

    listarEstadisticaCantidadSolicitudes()


    const listarPersonas = () =>{
        const divContenedor = document.querySelector('#contenedorPersonas')

        const personasYCantidadFiltered =   obtenerPersonasConMayoresEnviosByEmpresa()
    
        personasYCantidadFiltered.map(personaYCantidad=>divContenedor.innerHTML+=`
        <div class='flex cardContainer' >
            <p class='txtEstado sbold'>${personaYCantidad.persona.Nombre} ${personaYCantidad.persona.Apellido}</p>
            <p class='txtEstado sbold ml-2'>Cantidad: ${personaYCantidad.cantidadEnvios}</p>
        </div>
        `)
    }

    listarPersonas()

     //click  volver
     document.querySelector('#btnArrowLeft').addEventListener('click',crearMenu)
}

const crearFormularioAdministrarEmpresas = () =>{
    const divContenido = document.querySelector('.contenido')
    let txtBuscarEmpresa = ''
    let empresasFiltered = []

    divContenido.innerHTML = `
        <div>
            ${arrowLeft}
            <input type="text" id="txtBuscarEmpresa" placeholder="Buscar Empresa" >
            <p id='pError' class='txtError'></p>
            <div id='contenedorEmpresas' class='mt-3 grid'>
            </div>
        </div>
    `

    const pError = document.querySelector('#pError')

      

    const listarEmpresas = () =>{
        const divContenedor = document.querySelector('#contenedorEmpresas')
        
        empresasFiltered = empresas.filter(empresa=>empresa.RazonSocial.toLowerCase().includes(txtBuscarEmpresa.toLowerCase()))

        if (empresasFiltered.length === 0) {
            empresasFiltered = empresas.filter(empresa=>empresa.NombreFantasia.toLowerCase().includes(txtBuscarEmpresa.toLowerCase())) 
        }
        

        if (empresasFiltered.length === 0) {
            pError.innerHTML = 'No hay resultados que coincidan con su búsqueda'
            divContenedor.innerHTML=``
        }else{
            pError.innerHTML = ''
            divContenedor.innerHTML=``
            empresasFiltered.map((empresa,i)=>divContenedor.innerHTML+=`
            <div class='flex cardContainer' >
                <div>
                    <div class='mb-3'>
                        <p class='sbold'>${empresa.NombreFantasia}</p>
                    </div>
                    <div class='flex' >
                        <div class='lable_value'>
                            <p>Rut</p>
                            <p class='sbold'>${empresa.Rut}</p>
                        </div>
                        <div class='lable_value'>
                            <p>Razón Social</p>
                            <p class='sbold'>${empresa.RazonSocial}</p>
                        </div>
                        <div class='lable_value'>
                            <p>Estado</p>
                            <p class='txtEstado sbold'>${empresa.Estado}</p>
                        </div>
                    </div>
                </div>
                <div>
                    ${empresa.Estado === 'D' ? `
                    <input type="button" id="btnHabilitar${i}" value="Habilitar" class="btnBlue001" >`
                    : `
                    <input type="button" id="btnDeshabilitar${i}" value="Deshabilitar" class="btnBlue001" >
                    `}
                </div>
                
            </div>
            `)
        }
    }

    listarEmpresas()


    const asignarClicks= () =>{
        //Click a los botones de habilitar y deshabilitar
        empresasFiltered.map((empresa,i)=>{
            if (empresa.Estado === 'D') {
                document.querySelector(`#btnHabilitar${i}`).addEventListener('click',()=>handleHabilitar(empresa))
            } else{
                document.querySelector(`#btnDeshabilitar${i}`).addEventListener('click',()=>handleDeshabilitar(empresa))
            }
        })
    }

    const changeEmpresa = (e) =>{
        txtBuscarEmpresa = e.target.value
        listarEmpresas()
        asignarClicks()
    }

    const handleHabilitar = (empresa) =>{
        empresa.Estado = 'H'
        listarEmpresas()
        asignarClicks()
    }

    const handleDeshabilitar = (empresa) =>{
        empresa.Estado = 'D'
        listarEmpresas()
        asignarClicks()
    }

    asignarClicks()

    


     //click  volver
     document.querySelector('#btnArrowLeft').addEventListener('click',crearMenu)

    document.querySelector('#txtBuscarEmpresa').addEventListener('change',(e)=>changeEmpresa(e))
}

const crearFormularioCrearTVehiculo = () =>{
    const divContenido = document.querySelector('.contenido')

    divContenido.innerHTML = `
        <div>
            ${arrowLeft}
            <p id='txtError' class='txtError' ></p>
            <div class='flex'>
                <input type="text" id="txtNombreVehiculo" placeholder="Buscar Empresa" >
                <input type="button" id="btnCrearTVehiculo" value="Agregar" class='btnBlue001' >
            </div>
            <div id='contenedorTVehiculos' class='mt-3 grid'>
                
            </div>
        </div>
    `

    const listarTVehiculos = () =>{
        const divContenedor = document.querySelector('#contenedorTVehiculos')

        divContenedor.innerHTML =``

        tiposVehiculos.map(tVehiculo=>{
            
            divContenedor.innerHTML+=`
            <div class='flex cardContainer' >
                <p>${tVehiculo.Id} - ${tVehiculo.Nombre}</p>
            </div>
            `
          })

    }

    listarTVehiculos()

    const handleCrearTVehiculo = () =>{
        const txtError = document.querySelector('#txtError')
        const nombreVehiculo  = document.querySelector('#txtNombreVehiculo').value
        const nextId = tiposVehiculos.sort((a,b)=>a.Id-b.Id).reverse()[0].Id + 1
        txtError.innerHTML = ``

        if (!nombreVehiculo) {
            txtError.innerHTML = `Error nombre de vehiculo vacio`
        }else{
            tiposVehiculos.push(new TipoVehiculo(nextId,nombreVehiculo))
        }

        listarTVehiculos()
    }

    //click  volver
    document.querySelector('#btnArrowLeft').addEventListener('click',crearMenu)

    document.querySelector('#btnCrearTVehiculo').addEventListener('click',handleCrearTVehiculo)
}

const crearFormularioVerEstadisticasAdmin = () =>{
    const divContenido = document.querySelector('.contenido')
    const empresasConKM = obtenerEmpresasConKMRecorridos()

    divContenido.innerHTML = `
        <div>
            ${arrowLeft}
            <div id='contenedorEmpresas' class='mt-3 grid'>
            </div>
        </div>
    `


      

    const listarEmpresas = () =>{
        const divContenedor = document.querySelector('#contenedorEmpresas')
        

        empresasConKM.map((empresaConKM,i)=>divContenedor.innerHTML+=`
        <div class='flex cardContainer' >
            <div>
                <div class='mb-3'>
                    <p class='sbold'>${empresaConKM.empresa.NombreFantasia}</p>
                </div>
                <div class='flex' >
                    <div class='lable_value'>
                        <p>Rut</p>
                        <p class='sbold'>${empresaConKM.empresa.Rut}</p>
                    </div>
                    <div class='lable_value'>
                        <p>Razón Social</p>
                        <p class='sbold'>${empresaConKM.empresa.RazonSocial}</p>
                    </div>
                    <div class='lable_value'>
                        <p>Estado</p>
                        <p class='txtEstado sbold'>${empresaConKM.empresa.Estado}</p>
                    </div>
                    <div class='lable_value'>
                        <p>KM</p>
                        <p class='txtEstado sbold'>${empresaConKM.KM}</p>
                    </div>
                </div>
            </div>
           
            
        </div>
        `)
    }

    listarEmpresas()



     //click  volver
     document.querySelector('#btnArrowLeft').addEventListener('click',crearMenu)

}


const obtenerPerOEmpLogeada = (tipo) => {
    if (tipo === 'P') {
        return personas.filter(persona => persona.Usuario === userLoged)[0] 
    }else{
        return empresas.filter(empresa => empresa.Usuario === userLoged)[0] 
    }
}

const obtenerEnviosPersonaLogeada = () =>{
    const personaLoged = obtenerPerOEmpLogeada('P')
    return envios.filter(envio=>envio.Persona.Usuario === personaLoged.Usuario)
}


const obtenerEnviosByEstadoEmpresa = (estado) =>{
    const empresaLoged = obtenerPerOEmpLogeada('E')
    return envios.filter(envio=>envio.Estado === estado && envio.Empresa.Usuario === empresaLoged.Usuario )
}

const obtenerEnviosPendientes = () =>{
    const empresaLoged = obtenerPerOEmpLogeada('E')
    return envios.filter(envio=>envio.Estado === 'Pendiente' && envio.TipoVehiculo.Id === empresaLoged.TipoVehiculo.Id)
}

const obtenerEnviosEnTransito = () =>{
    const empresaLoged = obtenerPerOEmpLogeada('E')
    return envios.filter(envio=>envio.Estado === 'En Transito' && envio.Empresa.Usuario === empresaLoged.Usuario)
}



const obtenerPersonasConMayoresEnviosByEmpresa = () =>{
    const empresaLoged = obtenerPerOEmpLogeada('E')
    const personasConEnvios = []
    personas.map(persona=>{
        if (persona.Usuario !== 'Admin') {
            const cantidadEnvios = envios.filter(envio=>envio.Persona.Usuario === persona.Usuario && envio.Empresa.Usuario === empresaLoged.Usuario).length
            personasConEnvios.push({persona,cantidadEnvios})
        }
    })

    return personasConEnvios.sort((a,b)=>a.cantidadEnvios - b.cantidadEnvios).reverse() //ordenar de mayor a menor
}


const obtenerEmpresasConKMRecorridos = () => {
    const empresasConKM = []


    empresas.map(empresa=>{
        const enviosEmpresa = envios.filter(envio=>envio.Empresa.Usuario === empresa.Usuario && envio.Estado === 'Finalizada')
        const KM = enviosEmpresa.reduce((acc,el)=>acc+=el.Distancia,0)

        empresasConKM.push({empresa,KM})
    })

    return empresasConKM.sort((a,b)=>a.KM - b.KM).reverse() //ordenar de mayor a menor
}

