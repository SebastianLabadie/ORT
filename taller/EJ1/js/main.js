let usuarioLogeado=false

function init() {
    precarga()
    buttonEvents()
    hideAll()
    showButtons()
}

function hideAll() {
    dqs('#menu').style.display = 'none'
    dqs('#inicio').style.display = 'none'
    dqs('#login').style.display = 'none'
    dqs('#registro').style.display = 'none'
}

function showButtons() {
    if (!usuarioLogeado) {
        dqs('#menu').style.display = 'block'
        dqs('#btnInicio').style.display = 'inline-block'
        dqs('#btnIngreso').style.display = 'inline-block'
        dqs('#btnRegistro').style.display = 'inline-block'
        dqs('#btnCerrarSesion').style.display = 'none'
    }else{
        dqs('#menu').style.display = 'block'
        dqs('#btnInicio').style.display = 'inline-block'
        dqs('#btnIngreso').style.display = 'none'
        dqs('#btnRegistro').style.display = 'none'
        console.log('btn cerrar sesion en tre');
        dqs('#btnCerrarSesion').style.display = 'inline-block'
        //sdafada
    }
}

function dqs(selector) {
    return document.querySelector(selector)
}

function buttonEvents(){
    dqs('#btnInicio').addEventListener('click',()=>{
        hideAll()
        showButtons()
        dqs('#inicio').style.display = 'block'

        if (usuarioLogeado) {
            dqs('#divInicioUsuarioLogeado').style.display = 'block'
            dqs('#divInicioUsuarioDesconocido').style.display = 'none'
        }else{
            dqs('#divInicioUsuarioLogeado').style.display = 'none'
            dqs('#divInicioUsuarioDesconocido').style.display = 'block'
        }
    })
    dqs('#btnIngreso').addEventListener('click',()=>{
        hideAll()
        showButtons()
        dqs('#login').style.display = 'block'
    })
    dqs('#btnRegistro').addEventListener('click',()=>{
        hideAll()
        showButtons()
        dqs('#registro').style.display = 'block'
    })
    dqs('#btnCerrarSesion').addEventListener('click',()=>{
        usuarioLogeado = false
        hideAll()
        showButtons()
    })
}

function precarga() {
    let p1 = new Pais("ARG", "Argentina");
    let p2 = new Pais("BRA", "Brasil");
    let p3 = new Pais("UYU", "Uruguay");
    let p4 = new Pais("PAR", "Paraguay");
    paises.push(p1, p2, p3,p4);

    let u1 = new Usuario("Juan", "Perez", "ARG", "jperez", "1234");
    usuarios.push(u1);
    escribirSelectPaises();
  
}

function escribirSelectPaises(){
    let cadena = `<option value="ndf">Seleccione...</option>`;
  for (let p of paises) {
      cadena+=`<option value="${p.Codigo}">${p.Nombre}</option>`
  }

  dqs("#slcPais").innerHTML=cadena;
}

init()