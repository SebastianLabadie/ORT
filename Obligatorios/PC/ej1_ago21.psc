
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



Funcion init (velocidad Por Referencia)
	simSigueLinea= 0 //aqui o por referencia?
	simReposicionarMBot(213,-29,0)
	avanzar(velocidad)
	Mientras no simSigueLinea = 0 

	FinMientras
	avanzar(0)

FinFuncion



Algoritmo ej1_ago21
	//variables globales en las que se
	//pasan los valores de los sensores al invocar a 
	//las funciones sigue_lineas() y ultra_sonido()
	simSigueLinea = 0
	simDistanciaUltraSonido = 0
	simCronometro = 0
	//variables que modifican la ubicaci?n de los sensores de ultrasonido y sigue-lineas
	simOrientacionUltraSonido=0	//hacia adelante, 1 para la derecha, -1 para la izquierda
	simOrientacionSigueLineas=1	//hacia abajo, poner en 0 para que el siguelineas quede hacia adelante.
	
	
	//Inicializacion de variables
	tiempoUltimaMedicion = 0
	cantidadDistancias = 0
	promedioDistancias = 0
	totalDistancias = 0
	mayorDistancia = 0
	menorDistancia = 99999
	velManiobra = 80
	velocidad = 150
	
	reiniciar_cronometro()
	init(velocidad)
	
	
	Mientras no 1 = 50
		Si	simSigueLinea = 0
			avanzar(velocidad)
		FinSi
		Si	simSigueLinea = 1
			fijar_M1(velManiobra*(-0.75))
			fijar_M2(velManiobra)
		FinSi
		Si	simSigueLinea = 2
			fijar_M1(velManiobra)
			fijar_M2(velManiobra*(-0.75))
		FinSi
		Si	simSigueLinea = 3
			retroceder(velocidad)
		FinSi
		Si	(simDistanciaUltraSonido<63) y (simCronometro-tiempoUltimaMedicion > 0.5)
			cantidadDistancias =cantidadDistancias + 1
			totalDistancias = totalDistancias + simDistanciaUltraSonido
			Si	simDistanciaUltraSonido > mayorDistancia
				mayorDistancia = simDistanciaUltraSonido
			FinSi
			Si	simDistanciaUltraSonido < menorDistancia
				menorDistancia = simDistanciaUltraSonido
			FinSi
			promedioDistancias =  totalDistancias / cantidadDistancias
			tiempoUltimaMedicion = simCronometro
		FinSi
	FinMientras
	avanzar(0)
FinAlgoritmo

