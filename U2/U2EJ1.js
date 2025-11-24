//T1: Casos específicos de funciones / Casos específics de funcions
//U2: Recursividad / Recursivitat
/** 
	-- CASTELLANO --
	EJERCICIO 1.2.1 ENUNCIADO:
	Un ejemplo de recursividad aplicada en una función que habéis visto en la teoría es el cálculo del factorial, 
	otro clásico ejemplo es el cálculo de la sucesión de Fibonacci. 
	La definición de la sucesión de Fibonacci es muy simple: es una sucesión de valores que comienza con los números 0 y 1;
	a partir de estos, cada término será la suma de los dos anteriores. 
	Dada esta definición es inmediato concluir que estamos ante una relación de recurrencia cuya lógica podemos trasladar 
	a una función recursiva. 
	Define una función recursiva a la que llamaremos [fibonacci] que reciba un número y que calcule el valor de la sucesión de 
	Fibonacci en esta posición, de tal manera que, si la instanciamos en el bucle for dado obtendríamos los 10 
	primeros valores de esta sucesión.
	
*/
for(let i=0; i<10;i++){
	console.log(fibonacci(i));
}

//Escribe aquí tu solución / escriviu aquí la vostra solució:

function fibonacci(n){
	if(n===0){return 0;}
	if(n===1){return 1;}
	return fibonacci(n-1)+fibonacci(n-2);
}

/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
    return fibonacci;
}