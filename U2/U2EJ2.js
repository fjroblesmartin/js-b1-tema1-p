//T1: Casos específicos de funciones / Casos específics de funcions
//U2: Recursividad / Recursivitat
/** 
	-- CASTELLANO --
	EJERCICIO 1.2.2 ENUNCIADO:
	Define el cuerpo de una función denominada rangeOfNumbers (ya dada) que reciba un número como parámetro y devuelva la suma de todos 
	los números que hay desde 0 hasta el número recibido. Es decir, el resultado de la llamada a la función 
	rangeOfNumbers(4) debería ser 1+2+3+4 = 10
	
*/

//Escribe aquí tu solución / escriviu aquí la vostra solució:

function rangeOfNumbers(n){
	if(n===0) return 0;
	return n+rangeOfNumbers(n-1); 
}



/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
    return rangeOfNumbers;
}