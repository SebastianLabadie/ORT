"use strict";

/* ---------------EJERCICIO 1--------------- */
document.querySelector("#btnProcesar").addEventListener("click",()=>{
    console.log('pepe')
})

/* ---------------EJERCICIO 2--------------- */
document.querySelector("#btnSumar001").addEventListener("click",()=>{
    const a = parseInt(document.querySelector("#txtVal001").value)
    const b = parseInt(document.querySelector("#txtVal002").value)
    document.querySelector("#pSalida002").innerHTML = `Resultado: ${a+b}`

})

/* ---------------EJERCICIO 3--------------- */
document.querySelector("#btnSumar001").addEventListener("click",()=>{
    const a = parseInt(document.querySelector("#txtVal003").value)
    const b = parseInt(document.querySelector("#txtVal004").value)
    const c = parseInt(document.querySelector("#txtVal004").value)
    document.querySelector("#pSalida002").innerHTML = `Resultado: ${a+b+c}`

})


/* ---------------EJERCICIO 4--------------- */
document.querySelector("#btnProcesar002").addEventListener("click",()=>{
    const a = parseInt(document.querySelector("#txtVal006").value)
    const b = parseInt(document.querySelector("#txtVal007").value)
    document.querySelector("#pSalida004").innerHTML = `Resultado suma: ${a+b}`
    document.querySelector("#pSalida005").innerHTML = `Resultado multiplicación: ${a*b}`
})



/* ---------------EJERCICIO 5--------------- */
document.querySelector("#btnProcesar003").addEventListener("click",()=>{
    const a = parseInt(document.querySelector("#txtVal008").value)
    document.querySelector("#pSalida006").innerHTML = `Area de Cuadrado: ${a*a}`
})

/* ---------------EJERCICIO 6--------------- */
document.querySelector("#btnProcesar004").addEventListener("click",()=>{
    const a = parseInt(document.querySelector("#txtVal009").value)
    document.querySelector("#pSalida007").innerHTML = `USD: ${a*45.5}`
})


/* ---------------EJERCICIO 7--------------- */
document.querySelector("#btnProcesar005").addEventListener("click",()=>{
    const a = parseInt(document.querySelector("#txtVal010").value)
    const b = parseInt(document.querySelector("#txtVal011").value)
    document.querySelector("#pSalida008").innerHTML = `Resto: ${a%b}`
})

/* ---------------EJERCICIO 8--------------- */
document.querySelector("#btnProcesar006").addEventListener("click",()=>{
    const a = parseInt(document.querySelector("#txtVal012").value)
    const b = parseInt(document.querySelector("#txtVal013").value)
    const c = parseInt(document.querySelector("#txtVal014").value)
    document.querySelector("#pSalida009").innerHTML = `Resultado: ${(a+b)-c}`
})


/* ---------------EJERCICIO 9--------------- */
document.querySelector("#btnProcesar007").addEventListener("click",()=>{
    const a = parseInt(document.querySelector("#txtVal015").value)
    const b = parseInt(document.querySelector("#txtVal016").value)
    const c = parseInt(document.querySelector("#txtVal017").value)
    document.querySelector("#pSalida010").innerHTML = `Resultado: ${(a*a)-(b+c)}`
})


/* ---------------EJERCICIO 10--------------- */
document.querySelector("#btnProcesar008").addEventListener("click",()=>{
    const a = parseInt(document.querySelector("#txtVal018").value)
    const b = parseInt(document.querySelector("#txtVal019").value)
    document.querySelector("#pSalida011").innerHTML = `Importe Final: ${a+((b*100)/a)}`
})



/* ---------------EJERCICIO 11--------------- */
document.querySelector("#btnProcesar009").addEventListener("click",()=>{
    const a = parseInt(document.querySelector("#txtVal020").value)
    document.querySelector("#pSalida012").innerHTML = `Importe Final: ${a+(a*0.22)}`
})

/* ---------------EJERCICIO 12--------------- */
document.querySelector("#btnProcesar010").addEventListener("click",()=>{
    const a = parseInt(document.querySelector("#txtVal021").value)
    const b = parseFloat(document.querySelector("#txtVal022").value)
    document.querySelector("#pSalida013").innerHTML = `IMC: ${a/(b*b)}`
})


/* ---------------EJERCICIO 13--------------- */
document.querySelector("#btnProcesar011").addEventListener("click",()=>{
    const p = document.querySelector("#pSalida015")
    let a = parseInt(p.innerHTML)

    p.innerHTML =  `${a+1}`
})

/* ---------------EJERCICIO 14--------------- */
document.querySelector("#btnProcesar012").addEventListener("click",()=>{
    const p = document.querySelector("#pSalida017")
    let a = parseInt(p.innerHTML)

    p.innerHTML =  `${a+3}`
})


/* ---------------EJERCICIO 15--------------- */
let acumulado001 = 0
document.querySelector("#btnProcesar013").addEventListener("click",()=>{
    const a = parseInt(document.querySelector("#txtVal023").value)
    acumulado001 += a
})
document.querySelector("#btnProcesar014").addEventListener("click",()=>{
    document.querySelector("#pSalida018").innerHTML =  `Total Acumulado: ${acumulado001}`
})

/* ---------------EJERCICIO 16--------------- */
document.querySelector("#btnProcesar015").addEventListener("click",()=>{
    let a =  parseInt(document.querySelector("#txtVal024").value)
    let b =  parseInt(document.querySelector("#txtVal025").value)
    let c =  parseInt(document.querySelector("#txtVal026").value)

    const points = (a*3)+c

    document.querySelector("#pSalida019").innerHTML =  `Puntos del equipo: ${points}`
})


/* ---------------EJERCICIO 17--------------- */
document.querySelector("#btnProcesar016").addEventListener("click",()=>{
    let a =  parseInt(document.querySelector("#txtVal027").value)

    const tf = 50 + ((a-40)/4)
    const tc = (tf-32)/1.8
    const dc =  10 + ((a-40)/7)

    document.querySelector("#pSalida020").innerHTML =  `Temperatura en F: ${tf}  Temperatura en C: ${tc}`
    document.querySelector("#pSalida021").innerHTML =  `Temperatura Directo en C: ${dc}`
})
