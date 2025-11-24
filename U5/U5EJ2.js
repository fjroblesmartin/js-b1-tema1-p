//T1: Casos específicos de funciones / Casos específics de funcions
//U5: Arrow functions
/** 
	-- CASTELLANO --
	EJERCICIO 1.5.2 ENUNCIADO:
	De manera análoga al ejercicio 1.1.1, dado el Array planets, compuesto de objetos literales de JS que representan a los planetas 
  del sistema solar, se nos pide, definir una función de flecha en una nueva constante llamada [planetDiameter], y obtener en otra constante llamada [result], 
  empleando el método (map) y la función de flecha que hemos definido en [planetDiameter], un nuevo Array multidimensional, el cual, en cada posición
  contenga a su vez un Array de dos posiciones: 
  en la primera posición debe aparecer el nombre del planeta (name) y en la segunda su diámetro (diameter).
	
*/
let planets = [
        {
            name: "Mercury",
            distanceToSun: 58344000,
            hasRings: false,
            diameter: 4878
        },
        {
            name: "Venus",
            distanceToSun: 107712000,
            hasRings: false,
            diameter: 12100
        },
        {
            name: "Earth",
            distanceToSun: 149600000,
            hasRings: false,
            diameter: 12756
        },
        {
            name: "Mars",
            distanceToSun: 227392000,
            hasRings: false,
            diameter: 6787
        },
        {
            name: "Jupiter",
            distanceToSun: 777920000,
            hasRings: true,
            diameter: 142984
        },
        {
            name: "Saturn",
            distanceToSun: 1427184000,
            hasRings: true,
            diameter: 120536
        },
        {
            name: "Uranus",
            distanceToSun: 2600000000,
            hasRings: true,
            diameter: 51108
        },
        {
            name: "Neptune",
            distanceToSun: 4300000000,
            hasRings: true,
            diameter: 49538
        }
    ] 
//Escribe aquí tu solución / escriviu aquí la vostra solució:

const planetDiameter = (planeta)=> [planeta.name, planeta.diameter];

const result = planets.map(planetDiameter);


/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
    return [planetDiameter, result];
  }