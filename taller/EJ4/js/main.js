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
    dqs('#btnListarPJ').addEventListener('click',()=>{
        ars(aviso)
    })
}

function ars(aviso) {
//     nombre = name.
// ● especie = species.
// ● genero = gender.
// ● casa = house.
// ● sangre = ancestry.
// ● imagen = image.
// ○ Ocultar los divs divResultado y divP

    let tabla = `<table class="table-auto" >
    <thead>
        <th>Nombre</th>
        <th>Especie</th>
        <th>Genero</th>
        <th>Casa</th>
        <th>Sangre</th>
        <th>Imagen</th>
    </thead>

    <tbody id="tbl">
    `

    const casa =  dqs('#selectCasa').value 
    dqs('#loader').style.display = 'block'
    dqs('#divTabla').style.display = 'none'
    fetch(`http://hp-api.herokuapp.com/api/characters/house/${casa}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    
        data.forEach(personaje => {
            tabla +=`<tr>
                <td>${personaje.name}</td>
                <td>${personaje.species}</td>
                <td>${personaje.gender}</td>
                <td>${personaje.house}</td>
                <td>${personaje.ancestry}</td>
                <td>
                    <img src="${personaje.image.replace("http","https")}" alt="asd" />
                </td>
            </tr>`
            });
        
            tabla +=`        </tbody>
            </table>`
        
            dqs('#loader').style.display = 'none'
            dqs('#divTabla').style.display = 'flex'
            dqs('#divTabla').innerHTML = tabla
        
            aviso()
    })
    .catch(err => console.log(err))
   

}

function precarga() {
    // let p1 = new Pais("Argentina","ARG");
    // let p2 = new Pais("Brasil","BRA");
    // let p3 = new Pais("Uruguay","UYU");
    // let p4 = new Pais("Paraguay","PAR");
    // paises.push(p1, p2, p3,p4);

    // let u1 = new Usuario("Juan", "Perez", "ARG", "jperez", "1234");
    // usuarios.push(u1);
    // escribirSelectPaises();
  
}

function aviso() {
    // dqs('#mensaje').innerHTML = `Todo ok`
}

// function escribirSelectPaises(){
//     let cadena = `<option value="ndf">Seleccione...</option>`;
//   for (let p of paises) {
//       cadena+=`<option value="${p.Codigo}">${p.Nombre}</option>`
//   }

//   dqs("#slcPais").innerHTML=cadena;
// }

init()