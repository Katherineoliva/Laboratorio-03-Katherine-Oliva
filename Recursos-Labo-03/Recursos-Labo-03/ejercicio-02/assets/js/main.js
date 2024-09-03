
const plus = (num1, num2) => {
    return num1 + num2;
};

const subtract = (num1, num2) => {
    return num1 - num2;
};

const multiply = (num1, num2) => {
    return num1 * num2;
};

const split = (num1, num2) => {
    if (num2 === 0) {
        alert("No se puede dividir por cero.");
        return null;
    }
    return num1 / num2;
};

const requestNumber = () => {
    let number;
    do {
        number = parseFloat(prompt("Introduce un número:"));
    } while (isNaN(number));
    return number;
};

const selectOperation = () => {
    let operation;
    do {
        operation = parseInt(prompt("Introduce una opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir"));
    } while (![1, 2, 3, 4].includes(operation));
    return operation;
};

const main = () => {
    const num1 = requestNumber();
    const num2 = requestNumber();
    const operation = selectOperation();
    let result;

    switch (operation) {
        case 1:
            result = plus(num1, num2);
            break;
        case 2:
            result = subtract(num1, num2);
            break;
        case 3:
            result = multiply(num1, num2);
            break;
        case 4:
            result = split(num1, num2);
            break;
        default:
            alert("Operación no válida.");
            return;
    }

    if (result !== null) {
        alert(`El resultado es: ${result}`);
    }
};

main();

