
//ejemplo de una funci?n de mBlock en seudoc?digo
Funcion n=numeroAlAzar(a,b)
	//n = un n?mero al azar entre a y b 
FinFuncion

//equivalentes del simulador
Funcion simReposicionarMBot(xPos,yPos,direccion)
	//reposiiona mBot en el escenario
FinFuncion

Funcion simEsperar(cuantos_segundos)
	//esta es la funci?n esperar del simulador
FinFuncion

Funcion reiniciar_Cronometro()
	//simCronometro se actualiza internamente, luego de
	//reiniciar utilizar la variable simCronometro siempre que necesitemos
	//saber cuanto tiempo transcurri? desde el ?ltimo reinicio
	simCronometro = 0
FinFuncion


Funcion ultra_sonido()
	//esta funci?n carga en la variable global simDistanciaUltrasonido
	//el valor que devuelve el sensor
	//simDistanciaUltrasonido = distancia_reportada_por_el_sensor
Fin Funcion

Funcion sigue_lineas()
	//esta funci?n carga en la variable simSigueLinea
	//el valor que devuelve el sensor
	//simSigueLinea = valor_reportado_por_el_sensor
Fin Funcion

Funcion fijar_luces(color)
	//cambia el color de las luces del mBot seg?n 6 colores predefinidos
	//0=Negro, 1=Azul, 2=Rojo, 3=Verde, 4=Amarillo, 5=Blanco
FinFuncion

Funcion sonido()
	//hace que el mBot genere un beep.
FinFuncion

Funcion girar_izquierda ( Velocidad )
Fin Funcion

Funcion girar_derecha ( Velocidad )
Fin Funcion

Funcion retroceder ( Velocidad )
Fin Funcion

Funcion avanzar ( Velocidad )
Fin Funcion

Funcion fijar_M1( velocidad )
Fin Funcion

Funcion fijar_M2( velocidad )
Fin Funcion

Funcion girar(grados, velocidad)
	//si grados es negativo gira a la izquierda, sino, gira a la derecha
	//calcula el tiempo que debe esperar el mBot para
	//girar los grados pasados a la velocidad indicada
	//inicia el giro, genera un retardo apropiado a lo que se necesita y detiene al mBot
FinFuncion

Funcion recorrer(cm, velocidad)
	//si distancia negativa, retrocede, sino, avanza
	//calcula el tiempo que debe esperar el mBot para
	//recorrer los cent?metros pasados a la velocidad indicada
	//inicia el movimiento, genera un retardo apropiado a lo que se necesita y detiene al mBot
FinFuncion



Funcion movimientosMBot (velocidad Por Referencia,velocidadManiobra Por Referencia, multiplicadorCondM2 Por Referencia,simSigueLinea Por Referencia,simDistanciaUltraSonido Por Referencia)
	
	Mientras no (simSigueLinea = 1 o simSigueLinea = 2 o simSigueLinea = 3 )
		Si	simDistanciaUltraSonido > 4 y simDistanciaUltraSonido <= 9
			avanzar(velocidad)
		FinSi
		Si simDistanciaUltraSonido <= 4 
			fijar_M1(velocidadManiobra * 0)
			fijar_M2(velocidadManiobra * 8)
		FinSi
		Si simDistanciaUltraSonido >= 20
			fijar_M1(velocidadManiobra * 30)
			fijar_M2(velocidadManiobra * 3)
		FinSi
		Si simDistanciaUltraSonido > 9
			fijar_M1(velocidadManiobra * 2.5)
			fijar_M2(velocidadManiobra * multiplicadorCondM2)
		FinSi
	FinMientras
	
	avanzar(0)
	
	Mientras No simSigueLinea = 0 
		fijar_M1(velocidadManiobra * (-0.5))
		fijar_M2(velocidadManiobra * 0.2)
	FinMientras
	
	Mientras No simDistanciaUltraSonido > 12
		fijar_M1(velocidadManiobra * (-1.2))
		fijar_M2(velocidadManiobra * 0.7)
	FinMientras
	
	movimientosMBot(velocidad,velocidadManiobra,multiplicadorCondM2,simSigueLinea,simDistanciaUltraSonido)
FinFuncion



Algoritmo ej2_ago21
	//variables globales en las que se
	//pasan los valores de los sensores al invocar a 
	//las funciones sigue_lineas() y ultra_sonido()
	simReposicionarMBot(190,30,-12)
	simSigueLinea = 0
	simDistanciaUltraSonido = 0
	simCronometro = 0
	//variables que modifican la ubicaci?n de los sensores de ultrasonido y sigue-lineas
	simOrientacionUltraSonido=1	//hacia adelante, 1 para la derecha, -1 para la izquierda
	simOrientacionSigueLineas=0	//hacia abajo, poner en 0 para que el siguelineas quede hacia adelante.
	

	//Inicializacion de variables
	velocidad = 150
	velocidadManiobra = 95
	multiplicadorCondM2 = 0
	
	Si velocidad > 150
		multiplicadorCondM2 = 1.01
	SiNo
		multiplicadorCondM2 = 1
	FinSi
	
	
	sigue_lineas()
	ultra_sonido()
	
	
	
	
	Mientras no 1 = 50
		movimientosMBot(velocidad,velocidadManiobra,multiplicadorCondM2,simSigueLinea,simDistanciaUltraSonido)
	FinMientras
FinAlgoritmo

