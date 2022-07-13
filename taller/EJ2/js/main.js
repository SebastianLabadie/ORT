// let usuarioLogeado=false

function init() {
    precarga()
    buttonEvents()
    // hideAll()
    // showButtons()
} 

// function hideAll() {
//     dqs('#menu').style.display = 'none'
//     dqs('#inicio').style.display = 'none'
//     dqs('#login').style.display = 'none'
//     dqs('#registro').style.display = 'none'
// }

// function showButtons() {
//     if (!usuarioLogeado) {
//         dqs('#menu').style.display = 'block'
//         dqs('#btnInicio').style.display = 'inline-block'
//         dqs('#btnIngreso').style.display = 'inline-block'
//         dqs('#btnRegistro').style.display = 'inline-block'
//         dqs('#btnCerrarSesion').style.display = 'none'
//     }else{
//         dqs('#menu').style.display = 'block'
//         dqs('#btnInicio').style.display = 'inline-block'
//         dqs('#btnIngreso').style.display = 'none'
//         dqs('#btnRegistro').style.display = 'none'
//         console.log('btn cerrar sesion en tre');
//         dqs('#btnCerrarSesion').style.display = 'inline-block'
//         //sdafada
//     }
// }



function buttonEvents(){
    dqs('#btnCargarPaises').addEventListener('click',()=>{
        ars(aviso)
    })
}

function ars(aviso) {
    let tabla = `<table class="table-auto" >
    <thead>
        <th>Nombre</th>
        <th>Codigo</th>
    </thead>

    <tbody id="tablaInicioBody">
    
    `

    paises.forEach(pais => {
    tabla +=`<tr>
        <td>${pais.Nombre}</td>
        <td>${pais.Codigo}</td>
    </tr>`
    });

    tabla +=`        </tbody>
    </table>`


    dqs('#tbl-paises').innerHTML = tabla

    aviso()
}

function precarga() {
    let p1 = new Pais("Argentina","ARG");
    let p2 = new Pais("Brasil","BRA");
    let p3 = new Pais("Uruguay","UYU");
    let p4 = new Pais("Paraguay","PAR");
    paises.push(p1, p2, p3,p4);

    // let u1 = new Usuario("Juan", "Perez", "ARG", "jperez", "1234");
    // usuarios.push(u1);
    // escribirSelectPaises();
  
}

function aviso() {
    dqs('#mensaje').innerHTML = `Todo ok`
}

// function escribirSelectPaises(){
//     let cadena = `<option value="ndf">Seleccione...</option>`;
//   for (let p of paises) {
//       cadena+=`<option value="${p.Codigo}">${p.Nombre}</option>`
//   }

//   dqs("#slcPais").innerHTML=cadena;
// }

init()