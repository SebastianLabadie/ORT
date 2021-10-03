"use strict";



/* ---------------EJERCICIO 8--------------- */
document.querySelector("#btnEj8").addEventListener("click",()=>{
    const texto = document.querySelector('#txtVal1Ej8').value;
    const pRes = document.querySelector('#pRespuesEj8')
   
    const textoSplitted = texto.split('')
    const primerLetra = textoSplitted[0]
    const ultimaLetra = textoSplitted[textoSplitted.length-1]

    pRes.innerHTML = `El texto [${texto}]  ${primerLetra === ultimaLetra ? 'SI comienza con la misma letra que termina' : 'NO comienza con la misma letra que termina'}`;

})


/* ---------------EJERCICIO 9--------------- */
document.querySelector("#btnEj9").addEventListener("click",()=>{
    const matricula = document.querySelector('#txtVal1Ej9').value.toUpperCase();
    const pRes = document.querySelector('#pRespuesEj9')
    let departamento = ''
    const primerLetra = matricula.split('')[0]


    switch (primerLetra) {
        case 'A':
            departamento = 'Canelones'
            break;
        
        case 'B':
            departamento = 'Maldonado'
            break;

        case 'C':
            departamento = 'Rocha'
            break;
        
        case 'D':
            departamento = 'Trenta y Tres'
            break;

        case 'E':
            departamento = 'Cerro Largo'
            break;
        
        case 'F':
            departamento = 'Rivera'
            break;

        case 'G':
            departamento = 'Artigas'
            break;
        
        case 'H':
            departamento = 'Salto'
            break;

        case 'I':
            departamento = 'Paysandu'
            break;
        
        case 'J':
            departamento = 'Rio Negro'
            break;

        case 'K':
            departamento = 'Soriano'
            break;
        
        case 'L':
            departamento = 'Colonia'
            break;

        case 'M':
            departamento = 'San Jose'
            break;
        
        case 'N':
            departamento = 'Flores'
            break;

        case 'O':
            departamento = 'Florida'
            break;
        
        case 'P':
            departamento = 'Lavalleja'
            break;  
    
        case 'Q':
            departamento = 'Durazno'
            break;
        
        case 'R':
            departamento = 'Tacuarembo'
            break;  

        case 'S':
            departamento = 'Montevideo'
            break;  
    
        default:
            break;
    }
    pRes.innerHTML = `La matricula ${matricula}  pertenece a ${departamento} `;


})

/* ---------------EJERCICIO 10--------------- */
document.querySelector("#btnEj10").addEventListener("click",()=>{
    const texto = document.querySelector('#txtVal1Ej10').value;
    const letraRemplazar = document.querySelector('#txtVal2Ej10').value;
    const pRes = document.querySelector('#pRespuesEj10')
   


    pRes.innerHTML = `${texto.replaceAll(letraRemplazar,'*')}`;
   
})


/* ---------------EJERCICIO 12--------------- */
document.querySelector("#btnEj12").addEventListener("click",()=>{
    const texto = document.querySelector('#txtVal1Ej12').value;
    const pRes = document.querySelector('#pRespuesEj12')
    const textoNoEspacios = texto.replaceAll(' ','')

    let mayusculas = 0
    let minusculas = 0
    for (let i = 0; i < textoNoEspacios.length; i += 1) {
        if (textoNoEspacios.charCodeAt(i) > 64 && textoNoEspacios.charCodeAt(i) <91 ) {
          mayusculas ++;
        }
    }
    minusculas = textoNoEspacios.length - mayusculas


    pRes.innerHTML = `Cantidad de Mayusculas: ${mayusculas}  Cantidad de Minusculas: ${minusculas}`;

})

/* ---------------EJERCICIO 13--------------- */
document.querySelector("#btnEj13").addEventListener("click",()=>{
    const texto = document.querySelector('#txtVal1Ej13').value;
    const pRes = document.querySelector('#pRespuesEj13')
   
    const textoNoEspacios = texto.replaceAll(' ','').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    const textoOpered = textoNoEspacios.split('').reverse().join('')

    pRes.innerHTML = `El texto ${texto}  ${textoNoEspacios == textoOpered ? 'es palindromo.' : 'no es palindromo.'}`;

})

