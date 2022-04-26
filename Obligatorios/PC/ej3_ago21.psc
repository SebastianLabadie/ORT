
Funcion txtCifrado <- cifrar ( txtUsuario )
	
	txtCifrado = txtUsuario
	remplazarVocales('CIFRAR',txtCifrado)
	remplazarConsonantes('CIFRAR',txtCifrado)
	remplazarEspacios('CIFRAR',txtCifrado)
	remplazarCEspeciales('CIFRAR',txtCifrado)
	
	Escribir 'Texto Cifrado: ',txtCifrado
Fin Funcion

Funcion txtDecifrado <- decifrar ( txtUsuario )
	txtDecifrado = txtUsuario
	remplazarVocales('DECIFRAR',txtDecifrado)
	remplazarConsonantes('DECIFRAR',txtDecifrado)
	remplazarEspacios('DECIFRAR',txtDecifrado)
	remplazarCEspeciales('DECIFRAR',txtDecifrado)
	
	Escribir 'Texto Decifrado: ',txtDecifrado
Fin Funcion



Funcion  remplazarVocales ( metodo,txtusuario Por Referencia )
	vocales = ''
	nuevoTxt=''
	Si metodo = 'CIFRAR'
		vocales = 'uaeiou'
		saltoDeCaracter = -1
	SiNo
		saltoDeCaracter = 1
		vocales = 'uaeioua'
	FinSi
	
	Para i<-1 hasta Longitud(txtusuario) Hacer
		flagRemplazeChar = Falso
		
        Para j<-2 hasta Longitud(vocales) Hacer
            Si Subcadena(txtusuario,i,i)=Subcadena(vocales,j,j) Entonces
				nuevoTxt = Concatenar(nuevoTxt,Subcadena(vocales,j+saltoDeCaracter,j+saltoDeCaracter))
				flagRemplazeChar = Verdadero
            FinSi
        FinPara
		
		Si flagRemplazeChar = Falso
			nuevoTxt = Concatenar(nuevoTxt,Subcadena(txtusuario,i,i))
		FinSi
    FinPara
    
	txtusuario = nuevoTxt
Fin Funcion

Funcion  remplazarConsonantes ( metodo,txtusuario Por Referencia )
	consonantes = 'bcdfghjklmnñpqrstvxyzb'
	nuevoTxt=''
	Si metodo = 'CIFRAR'
		saltoDeCaracter = 1
	SiNo
		saltoDeCaracter = -1
	FinSi
	
	
	Para i<-1 hasta Longitud(txtusuario) Hacer
		flagRemplazeChar = Falso
		
        Para j<-2 hasta Longitud(consonantes) Hacer
            Si Subcadena(txtusuario,i,i)=Subcadena(consonantes,j,j) Entonces
				nuevoTxt = Concatenar(nuevoTxt,Subcadena(consonantes,j+saltoDeCaracter,j+saltoDeCaracter))
				flagRemplazeChar = Verdadero
            FinSi
        FinPara
		
		Si flagRemplazeChar = Falso
			nuevoTxt = Concatenar(nuevoTxt,Subcadena(txtusuario,i,i))
		FinSi
    FinPara
	
	txtusuario = nuevoTxt
Fin Funcion

Funcion remplazarCEspeciales ( metodo,txtusuario Por Referencia  )
	cEspeciales = ''
	nuevoTxt=''
	
	Si metodo = 'CIFRAR'
		alternador= 1
		cEspeciales = '0123456789.,-_;:=)(/&%$!+*'
	SiNo
		alternador= -1
		cEspeciales = '0123456789.,-_;:=)(/&%$!+*'
	FinSi
	
	
	
	Para i<-1 hasta Longitud(txtusuario) Hacer
		flagRemplazeChar = Falso
		
        Para j<-1 hasta Longitud(cEspeciales) Hacer
            Si Subcadena(txtusuario,i,i)=Subcadena(cEspeciales,j,j) Entonces
				nuevoTxt = Concatenar(nuevoTxt,Subcadena(cEspeciales,j+alternador,j+alternador))
				flagRemplazeChar = Verdadero
				Si alternador = 1
					alternador = -1
				SiNo
					alternador = 1
				FinSi
            FinSi
        FinPara
		
		Si flagRemplazeChar = Falso
			nuevoTxt = Concatenar(nuevoTxt,Subcadena(txtusuario,i,i))
		FinSi
    FinPara
	
	txtusuario = nuevoTxt
	
Fin Funcion

Funcion  remplazarEspacios ( metodo,txtusuario Por Referencia )
	nuevoTxt=''
	remplazarConCaracter = ' '
	cantCaracteres= Longitud(txtusuario)
	
	Si metodo = 'CIFRAR'
		Si cantCaracteres%2 = 0
			remplazarConCaracter = '<'
		SiNo
			remplazarConCaracter = '>'
		FinSi
	FinSi
	
	Para i<-1 hasta Longitud(txtusuario) Hacer
		
		Si metodo = 'CIFRAR'
			Si Subcadena(txtusuario,i,i)=' ' Entonces
				nuevoTxt = Concatenar(nuevoTxt,remplazarConCaracter)
				
				Si remplazarConCaracter = '<'
					remplazarConCaracter = '>'
				SiNo
					remplazarConCaracter = '<'
				FinSi
			SiNo
				nuevoTxt = Concatenar(nuevoTxt,Subcadena(txtusuario,i,i))
			FinSi
		SiNo
			Si Subcadena(txtusuario,i,i)='<' o Subcadena(txtusuario,i,i)='>'  Entonces
				nuevoTxt = Concatenar(nuevoTxt,remplazarConCaracter)
			SiNo
				nuevoTxt = Concatenar(nuevoTxt,Subcadena(txtusuario,i,i))
			FinSi
		FinSi
		
		
    FinPara
	
	txtusuario = nuevoTxt
Fin Funcion

Funcion compararTextos(txtUsuarioMinuscula Por Referencia,txtDecifrado Por Referencia)
	Si txtDecifrado = txtUsuarioMinuscula
		Escribir 'Coinciden'
	SiNo
		Escribir 'No Coinciden'
	FinSi
FinFuncion

Algoritmo ej3_ago21
	

	Leer inputUsuario
	txtUsuarioMinuscula = Minusculas(inputUsuario)
	Escribir 'Texto Original: ',txtUsuarioMinuscula
	
	txtCifrado = cifrar(txtUsuarioMinuscula)
	txtDecifrado = decifrar(txtCifrado)
	
	
	
	compararTextos(txtUsuarioMinuscula,txtDecifrado)
	
FinAlgoritmo





