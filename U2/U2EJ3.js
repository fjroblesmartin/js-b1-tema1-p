//T1: Casos específicos de funciones / Casos específics de funcions
//U2: Recursividad / Recursivitat
/** 
	-- CASTELLANO --
	EJERCICIO 1.2.3 ENUNCIADO:
	Define el cuerpo de una función recursiva denominada [oddNumbers] que recibiba un número y un Array vacío como parámetro y rellene este Array 
	recibido como parámetro con todos los números impares que hay entre cero y el número recibido (con este incluido) como parámetro. 
	Por ejemplo siendo myArray un Array vacío, la llamada a la función oddNumbers(7, myArray) devolvería myArray con los valores [7, 5, 3, 1] 
*/
//Do not modify this code:
let myArray = new Array();
oddNumbers(7, myArray);

//Escribe aquí tu solución / escriviu aquí la vostra solució:

function oddNumbers(n, arr){
if (n<=0) {
    	return arr;
    }
    if (n%2!==0) {
        arr.push(n);
    }
return oddNumbers(n-1,arr);
}

/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
    return oddNumbers;
}