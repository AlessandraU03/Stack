import { Stack } from "../models/Stack.js";

export class ExpresionConverter {
    constructor() {}

    esOperador(caracter) {
        const operadores = ['+', '-', '*', '/', '%', '^'];
        for (let i = 0; i < operadores.length; i++) {
            if (caracter === operadores[i]) {
                return true;
            }
        }
        return false;
    }

    evaluar(operador) {
        switch (operador) {
            case '+':
            case '-':
                return 1;
            case '*':
            case '/':
                return 2;
            default:
                return 0;
        }
    }
    
    invertirCadena(cadena) {
        let resultado = '';
        for (let i = cadena.length - 1; i >= 0; i--) {
            resultado += cadena[i];
        }
        return resultado;
    }

    infijoAPrefijo(infijo) {
        let resultado = '';
        const stack = new Stack();

        for (let i = infijo.length - 1; i >= 0; i--) {
            const caracter = infijo[i];
            if (this.esOperador(caracter)) {
                while (!stack.isEmpty() && this.evaluar(stack.peek()) >= this.evaluar(caracter)) {
                    resultado = stack.pop() + resultado;
                }
                stack.push(caracter);
            } else if (caracter === ')') {
                stack.push(caracter);
            } else if (caracter === '(') {
                while (!stack.isEmpty() && stack.peek() !== ')') {
                    resultado = stack.pop() + resultado;
                }
                stack.pop();
            } else {
                resultado = caracter + resultado;
            }
        }

        while (!stack.isEmpty()) {
            resultado = stack.pop() + resultado;
        }

        return resultado;
    }
}