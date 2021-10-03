"use strict";


/* ---------------EJERCICIO 3--------------- */
const arrEj3 = []
document.querySelector("#btnEj3").addEventListener("click",()=>{
    const palabra = document.querySelector('#txtVal1Ej3').value;
    arrEj3.push(palabra)
})

document.querySelector("#btn2Ej3").addEventListener("click",()=>{
    const pRes = document.querySelector('#pRespuesEj3')
    pRes.innerHTML = `palabras:  ${arrEj3.join(' ')}`;
   
})


/* ---------------EJERCICIO 4--------------- */
const arrEj4 = []
document.querySelector("#btnEj4").addEventListener("click",()=>{
    const numero = parseFloat(document.querySelector('#txtVal1Ej4').value);
    arrEj4.push(numero)
})

document.querySelector("#btn2Ej4").addEventListener("click",()=>{
    const pRes = document.querySelector('#pRespuesEj4')
    let acc = 0
    for (let i = 0; i < arrEj4.length; i++) {
        acc = acc + arrEj4[i]
    }

    pRes.innerHTML = `Promedio: ${acc/arrEj4.length}`;

})



/* ---------------EJERCICIO 5--------------- */
const arrEj5 = []
document.querySelector("#btnEj5").addEventListener("click",()=>{
    const numero = parseFloat(document.querySelector('#txtVal1Ej5').value);
    arrEj5.push(numero)

})

document.querySelector("#btn2Ej5").addEventListener("click",()=>{
    const pRes = document.querySelector('#pRespuesEj5')
    const pRes2 = document.querySelector('#pRespues2Ej5')

    
   
    pRes.innerHTML = `Array anterior: ${arrEj5.join(' ')}`;
    pRes2.innerHTML = `Array nuevo: ${transformarArray(arrEj5).join(' ')}`;
})

const transformarArray = (arr) =>{
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 20) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

/* ---------------EJERCICIO 6--------------- */
const arrEj6 = []
document.querySelector("#btnEj6").addEventListener("click",()=>{
    
    const nombre = document.querySelector('#txtVal1Ej6').value;
    const pRes = document.querySelector('#pRespuesEj6')
    const pErr = document.querySelector('#pErrEj6')

    for (let i = 0; i < arrEj6.length; i++) {
        if (arrEj6[i] === nombre) {
            pErr.innerHTML = `Error ${nombre} ya esta en la lista`
            return
        }
    }

    arrEj6.push(nombre)
    pErr.innerHTML = ''
    pRes.innerHTML = `Personas: ${arrEj6.join(', ')}`;
   
})



/* ---------------EJERCICIO 7--------------- */
const arrEj7 = []
document.querySelector("#btnEj7").addEventListener("click",()=>{
    const nombre = document.querySelector('#txtVal1Ej7').value;
    const pRes = document.querySelector('#pRespuesEj7')
   
    arrEj7.push(nombre)
    
    let nombres = ''
    for (let i = 0; i < arrEj7.length; i++) {
        nombres = `${nombres} <br> -${arrEj7[i]}`
    }

    pRes.innerHTML = `Personas: ${nombres} <br> Cantidad de personas: ${arrEj7.length}`;

})


document.querySelector("#btn2Ej7").addEventListener("click",()=>{
    const posicion = parseFloat(document.querySelector('#txtVal2Ej7').value);
    const pRes = document.querySelector('#pRespues2Ej7')
    const pRes2 = document.querySelector('#pRespues3Ej7')
   
    if (posicion > arrEj7.length) {
        return
    }

    let nombrePos = ''
    let nombreUlt = ''
    for (let i = 0; i < arrEj7.length; i++) {
        if (i === posicion) {
            nombrePos = arrEj7[i]
        }
        if (i+1 === arrEj7.length) {
            nombreUlt = arrEj7[i]
        }
    }

    pRes.innerHTML = `El nombre en la posicion ${posicion} es: ${nombrePos}`;
    pRes2.innerHTML = `El ultimo nombre en el array es ${nombreUlt}`
})



document.querySelector("#btn3Ej7").addEventListener("click",()=>{
    const nombreBuscar = document.querySelector('#txtVal3Ej7').value;
    const nombreNuevo = document.querySelector('#txtVal4Ej7').value;
    const pRes = document.querySelector('#pRespues4Ej7')
    let isOk = false
    

    for (let i = 0; i < arrEj7.length; i++) {
        if (arrEj7[i] === nombreBuscar) {
            arrEj7[i] = nombreNuevo
            isOk = true
        }
    }

    pRes.innerHTML = `Nombre ${nombreBuscar}  ${isOk ? 'cambiado correctamente.' : 'no se encontro.'}`

})

