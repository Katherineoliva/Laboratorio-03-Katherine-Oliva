const calculateFactorial = (numero) => {
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
};

const requestNumber = () => {
    let numero;
    do {
        numero = prompt("Introduce un número entero no negativo para calcular su factorial:");
    } while (numero === null || numero.trim() === "" || isNaN(numero) || numero < 0 || !Number.isInteger(parseFloat(numero)));
    
    return parseInt(numero, 10);
};

const main = () => {
    const numero = requestNumber();
    const result = calculateFactorial(numero);
    alert(`El factorial de ${numero} (iterativo) es: ${result}`);
};

main();

