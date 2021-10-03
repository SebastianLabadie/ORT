"use strict";



/* ---------------EJERCICIO 8--------------- */
document.querySelector("#btnEj8").addEventListener("click",()=>{
    const valor1 = parseFloat(document.querySelector('#txtVal1Ej8').value);
    const valor2 = parseFloat(document.querySelector('#txtVal2Ej8').value);
    const pRes = document.querySelector('#pRespuesEj8')
   
    pRes.innerHTML = `Los numeros entre ${valor1} y ${valor2} son: `;

    if (valor1 < valor2) {
        for (let i = valor1; i <= valor2; i++) {
            pRes.innerHTML = `${pRes.innerHTML}  ${i}`
        }
    }else{
        for (let i = valor1; i >= valor2; i--) {
            pRes.innerHTML = `${pRes.innerHTML}  ${i}`
        }
    }

})

/* ---------------EJERCICIO 10--------------- */
document.querySelector("#btnEj10").addEventListener("click",()=>{
    const valor1 = parseFloat(document.querySelector('#txtVal1Ej10').value);
    const valor2 = parseFloat(document.querySelector('#txtVal2Ej10').value);
    const pRes = document.querySelector('#pRespuesEj10')
   
    

    let productoFinal = valor1
    for (let i = valor1; i <= valor2; i++) {
        productoFinal = productoFinal * i
    }

    pRes.innerHTML = `El producto de los numeros entre ${valor1} y ${valor2} es: ${productoFinal}`;
   
})


/* ---------------EJERCICIO 12--------------- */
document.querySelector("#btnEj12").addEventListener("click",()=>{
    const valor1 = parseFloat(document.querySelector('#txtVal1Ej12').value);
    const pRes = document.querySelector('#pRespuesEj12')
   
    

    let productoFinal = 1
    for (let i = valor1; i > 0; i--) {
        productoFinal = productoFinal * i
    }

    pRes.innerHTML = `El factorial de ${valor1} es: ${productoFinal} `;

})

/* ---------------EJERCICIO 13--------------- */
document.querySelector("#btnEj13").addEventListener("click",()=>{
    const alto = parseFloat(document.querySelector('#txtVal1Ej13').value);
    const ancho = parseFloat(document.querySelector('#txtVal2Ej13').value);
    const pRes = document.querySelector('#pRespuesEj13')
    const pRes2 = document.querySelector('#pRespues2Ej13')
   
    pRes.innerHTML = `El rectangulo de ${alto} x ${ancho} es: `;
    pRes2.innerHTML = ``

    let fila = ''
   
    for (let i = 0; i < ancho; i++) {
       fila = `${fila}O`
    }

    for (let j = 0; j < alto; j++) {
        pRes2.innerHTML  = `${pRes2.innerHTML} <br> ${fila}`
    }

    

})



/* ---------------EJERCICIO 14--------------- */
document.querySelector("#btnEj14").addEventListener("click",()=>{
    const valor1 = parseFloat(document.querySelector('#txtVal1Ej14').value);
    const pRes = document.querySelector('#pRespuesEj14')
   
    

    let cantDigitos = 0
    for (let i = valor1; i > 1; i/=10) {
        cantDigitos++
    }

    pRes.innerHTML = `La cantidad de digitos de ${valor1} es: ${cantDigitos}`;

})



