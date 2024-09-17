function calcular(op, num1, num2) {
    switch(op) {
        case 'sumar':
            return num1 + num2;
        case 'restar':
            return num1 - num2;
        default:
            return 'Operación no válida';
    }
}

// Ejemplo de uso
const operacion = 'sumar'; // Cambia a 'restar' para restar
const resultado = calcular(operacion, 6,7);
console.log('Resultado:', resultado);
