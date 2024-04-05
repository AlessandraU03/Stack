import { stack } from "./dependencies.js";

document.getElementById('calculateButton').addEventListener('click', function() {
    convertirYCalcular();
});

function convertirYCalcular() {
    const expresionInfija = document.getElementById('expresion').value;
    const expresionPrefija = infijoAPrefijo(expresionInfija);
    
    document.getElementById('expresionInf').textContent = "Infija: " + expresionInfija;
    document.getElementById('expresionPref').textContent = "Prefija: " + expresionPrefija;

}

function esOperador(caracter) {
    const operadores = ['+', '-', '*', '/', '%', '^'];
    for (let i = 0; i < operadores.length; i++) {
        if (caracter === operadores[i]) {
            return true;
        }
    }
    return false;
}

function invertirCadena(cadena) {
    let resultado = '';
    for (let i = cadena.length - 1; i >= 0; i--) {
        resultado += cadena[i];
    }
    return resultado;
}

function infijoAPrefijo(infijo) {
    const infijoInvertido = invertirCadena(infijo);
 // Utilizando la clase stack importada
    let expresionPrefija = '';

    for (let i = 0; i < infijoInvertido.length; i++) {
        const caracter = infijoInvertido[i];

        if (esOperador(caracter)) {
            // Si el caracter es un operador, agregarlo a la stack
            stack.push(caracter);
        } else if (caracter === ')') {
            // Si el caracter es un paréntesis derecho, agregarlo a la stack
            stack.push(caracter);
        } else if (caracter === '(') {
            // Si el caracter es un paréntesis izquierdo, sacar operadores de la stack y agregarlos a la expresión prefija
            while (!stack.isEmpty() && stack.peek() !== ')') {
                expresionPrefija += stack.pop();
            }
            // Sacar el paréntesis derecho de la stack
            stack.pop();
        } else {
            // Si el caracter es un operando, agregarlo directamente a la expresión prefija
            expresionPrefija += caracter;
        }
    }

    // Sacar los operadores restantes de la stack y agregarlos a la expresión prefija
    while (!stack.isEmpty()) {
        expresionPrefija += stack.pop();
    }

    // Invertir la expresión prefija para obtener el resultado final
    return invertirCadena(expresionPrefija);
}
