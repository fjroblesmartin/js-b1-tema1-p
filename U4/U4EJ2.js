//T1: Casos específicos de funciones / Casos específics de funcions
//U4: Definición de funciones dentro de funciones / Definició de funcions dins de funcions
/** 
	-- CASTELLANO --
	EJERCICIO 1.4.2 ENUNCIADO:
	Crea una función llamada [evenNumbers] de manera que ésta reciba un número indeterminado de valores enteros y devuelva un Array con 
  el número inferior y par más cercano a los números introducidos, es decir, si en una posición introducimos un 7 nos devolverá un 6,
  si introducimos un 6, entonces nos devolverá un 6. Como estrategia podéis seguir la siguiente: si la función evenNumbers la definimos con
  parámetros rest, tenemos por un lado que los parámetros recibidos pueden ser de un número indeterminado a priori, y por otro que
  podemos tratar directamente estos parámetros como un Array; una vez recibidos estos parámetros, los meteremos en un nuevo Array
  (clonándolos haciendo uso del operador spread) y calcularemos el resto de la división entre 2 para cada elemento de este nuevo Array,
  redefiniendo en cada posición de este nuevo Array el valor de ese resto de la división. 
  Finalmente solamente nos quedará devolver otro Array que será, para cada posición, el Array de parámetros recibidos menos el valor
  de la misma posición en el Array que hemos almacenado los restos de la división entre dos (esto propiciará que, para los números impares,
  restaremos 1 y para los pares restaremos 0).
  Por ejemplo: la llamada a la función evenNumbers(4,7,21,3); debería devolvernos [4,6,20,2]
*/
console.log(evenNumbers(4,7,21,3)); //This will return [4,6,20,2]

//Escribe aquí tu solución / escriviu aquí la vostra solució:

function evenNumbers(...numbers){
  let restos=[...numbers];
  for (let i=0;i<restos.length;i++){
    restos[i]=restos[i]% 2;
  }
  let resultado = [];
  for (let i=0;i<numbers.length;i++){
    resultado[i]=numbers[i]-restos[i];
  }
 return resultado;
}

/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
  return evenNumbers;
}