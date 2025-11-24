//T1: Casos específicos de funciones / Casos específics de funcions
//U3: Definición de funciones dentro de funciones / Definició de funcions dins de funcions
/** 
	-- CASTELLANO --
	EJERCICIO 1.3.1 ENUNCIADO:
	Crea una función (llamada hypotenuse) que reciba como parámetros la base y la altura de un triángulo rectángulo y devuelva la medida de su hipotenusa.
  Recuerda que la fórmula del cálculo de la hipotenusa triángulo rectángulo, dadas la base y la altura es c = √(b²+a²). 
  Es decir: la raíz cuadrada de la base al cuadrado más la altura al cuadrado.
  Para calcular estas operaciones de elevar al cuadrado, debes definir (y emplear) dentro de la función principal (hypotenuse)
  otra función (llamada square) que reciba un valor como parámetro y lo devuelva elevado al cuadrado.
  Si es correcta la llamada del ejemplo hypotenuse(3,4); debería devolver un valor de 5.
	
*/

//Do not modify this code:
console.log(hypotenuse(3,4));

//Escribe aquí tu solución / escriviu aquí la vostra solució:

function hypotenuse(b,a){
  function square(x){
    return x*x;
  }
return Math.sqrt(square(a)+square(b));
}


/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
    return hypotenuse;
}
