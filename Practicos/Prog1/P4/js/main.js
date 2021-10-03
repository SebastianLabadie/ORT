"use strict";



/* ---------------EJERCICIO 2--------------- */
document.querySelector("#btnEj2").addEventListener("click",()=>{
    const edad = parseFloat(document.querySelector('#txtVal1Ej2').value);
    const tope = parseFloat(document.querySelector('#txtVal2Ej2').value);
    const pRes = document.querySelector('#pRespuesEj2')

    pRes.innerHTML = `esMayor: ${esMayor(edad,tope)}`
})

const esMayor = (edad,tope) =>{
    if (edad > tope) {
        return true
    }else{
        return false
    }
}


/* ---------------EJERCICIO 3--------------- */
document.querySelector("#btnEj3").addEventListener("click",()=>{
    const año = parseFloat(document.querySelector('#txtVal1Ej3').value);
    const pRes = document.querySelector('#pRespuesEj3')

    pRes.innerHTML = `esBisiesto: ${esBisiesto(año)}`;
   
})

const esBisiesto = (año) =>{
    if (año % 4 === 0 && (año % 100 !== 0 || año % 400 ===0) ) {
        return true
    }else{
        return false
    }
}

/* ---------------EJERCICIO 4--------------- */
document.querySelector("#btnEj4").addEventListener("click",()=>{
    const base = parseFloat(document.querySelector('#txtVal1Ej4').value);
    const altura = parseFloat(document.querySelector('#txtVal2Ej4').value);
    const pRes = document.querySelector('#pRespuesEj4')
   
    pRes.innerHTML = `calcularAreaTriangulo: ${calcularAreaTriangulo(base,altura)}`;

})

const calcularAreaTriangulo = (base,altura) =>{
    if (base <= 0 || altura <= 0) {
        return -1
    }else{
        return (base*altura)/2
    }
}

/* ---------------EJERCICIO 5--------------- */
document.querySelector("#btnEj5").addEventListener("click",()=>{
    const altura = parseFloat(document.querySelector('#txtVal1Ej5').value);
    const ancho = parseFloat(document.querySelector('#txtVal2Ej5').value);
    const pRes = document.querySelector('#pRespuesEj5')
   
    pRes.innerHTML = `calcularAreaTriangulo: ${calcularAreaRectangulo(ancho,altura)}`;

})

const calcularAreaRectangulo = (ancho,altura) =>{
    if (ancho <= 0 || altura <= 0) {
        return -1
    }else{
        return (ancho*altura)
    }
}

/* ---------------EJERCICIO 6--------------- */
document.querySelector("#btnEj6").addEventListener("click",()=>{
    const gradosC = parseFloat(document.querySelector('#txtVal1Ej6').value);
    const pRes = document.querySelector('#pRespuesEj6')
   
    pRes.innerHTML = `calcularTemperatura: ${calcularTemperatura(gradosC)}`;

})



const calcularTemperatura = (gradosC) =>{
   return 1.8*gradosC+32
}