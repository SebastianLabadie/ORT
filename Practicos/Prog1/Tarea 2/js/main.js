"use strict";


const lista = [233,215,244,165,107,95,213,133,146,190,112]
let listaFinal = []
let sumaTotal = 0

const generarNuevoArray = () =>{
    listaFinal = lista.filter(el=>el >= 100 && el <= 200)
    console.log('lista: ',listaFinal)
}

const mostrarNuevoArray = () =>{
    let txtFinal = `Resultado del procesamiento del array:<br>`
    listaFinal.map(el=> txtFinal += `Valor que cumple: ${el} <br>`)
    txtFinal+= `El total de los valores da ${calcularSumaFinal()}`
    document.querySelector('#pRespuesta').innerHTML = txtFinal
}

const calcularSumaFinal = () =>{
    return listaFinal.reduce((acc,el)=>acc+el,0)
}

/* ---------------EJERCICIO--------------- */
document.querySelector("#btnTarea2").addEventListener("click",()=>{
    
    generarNuevoArray()
    mostrarNuevoArray()
})
