"use strict";


/* ---------------EJERCICIO 5--------------- */
document.querySelector("#btnEj5").addEventListener("click",()=>{
    const valor1 = parseFloat(document.querySelector('#txtVal1Ej5').value);

    if(valor1 > 10 && valor1< 20)
    {
        document.querySelector('#pRespuesEj5').innerHTML = 'El Numero '+ valor1 +' Es Mayor a 10 y Menor a 20';

    }
    else
    {
        document.querySelector('#pRespuesEj5').innerHTML = 'El Numero '+ valor1 +' No Es Mayor a 10 y Menor a 20';

    }
})


/* ---------------EJERCICIO 8--------------- */
document.querySelector("#btnEj8").addEventListener("click",()=>{
    const valor1 = parseFloat(document.querySelector('#txtVal1Ej8').value);

    if(valor1 > 30)
    {
        document.querySelector('#pRespuesEj8').innerHTML = 'El Numero ' + valor1 + ' Es Mayor a 30';
    }
    else
    {
        if(valor1 < 10)
        {
            document.querySelector('#pRespuesEj8').innerHTML = 'El Numero ' + valor1 + ' Es Menor a 10';
        }
        else
        {
            document.querySelector('#pRespuesEj8').innerHTML = 'El Numero ' + valor1 + ' Es Menor o igual a 30 y Mayor o igual a 10';
        }
    }
})


/* ---------------EJERCICIO 9--------------- */
document.querySelector("#btnEj9").addEventListener("click",()=>{
    const Dia = document.querySelector('#txtVal1Ej9').value;
    const Temperatura = parseFloat(document.querySelector('#txtVal2Ej9').value);
    
    document.querySelector('#pRespues1Ej9').innerHTML = 'Levantarse';
    
    if(Temperatura < 10)
    {
        document.querySelector('#pRespues2Ej9').innerHTML = 'Abrigarse Mucho';
    }
    else
    {
        if(Temperatura > 20)
        {
            document.querySelector('#pRespues2Ej9').innerHTML = 'Ponerse Ropa Comoda';
        }
        else
        {
            document.querySelector('#pRespues2Ej9').innerHTML = 'Abrigo Moderado';
        }
    }

    
    if (Dia.toUpperCase() == 'DOMINGO')
    {
        document.querySelector('#pRespues3Ej9').innerHTML = 'Quedarse en casa, Hay no se trabaja';
    }
    else
    {
        document.querySelector('#pRespues3Ej9').innerHTML = 'Ir al trabajo';
    }


})

/* ---------------EJERCICIO 10--------------- */
document.querySelector("#btnEj10").addEventListener("click",()=>{
    const valor1 = parseFloat(document.querySelector('#txtVal1Ej10').value);
    const valor2 = parseFloat(document.querySelector('#txtVal2Ej10').value);
    let resultado;

    if(valor1 > valor2)
    {
        resultado = valor1 - valor2;
        document.querySelector('#pRespuesEj10').innerHTML = 'Resultado: ' + resultado;
    }
    else
    {
        resultado = valor2 - valor1;
        document.querySelector('#pRespuesEj10').innerHTML = 'Resultado: ' + resultado;
    }

})

/* ---------------EJERCICIO 12--------------- */
document.querySelector("#btnEj12").addEventListener("click",()=>{
    const valor1 = document.querySelector('#txtVal1Ej12').value;
    
    if(valor1.toUpperCase() == 'A' || valor1.toUpperCase() =='E' || valor1.toUpperCase() =='I' || valor1.toUpperCase() =='O' || valor1.toUpperCase() =='U' )
    {
        document.querySelector('#pRespuesEj12').innerHTML = 'El Caracter es Vocal' ;
    }
    else
    {
        document.querySelector('#pRespuesEj12').innerHTML = 'El Caracter no es Vocal' ;
    }


})




