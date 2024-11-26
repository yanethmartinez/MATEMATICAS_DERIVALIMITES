// Variables de configuración
let x_offset = 0;
let max_x = 10;
let min_x = -10;
let currentFunction = 'limite'; // Función inicial

// Función para calcular el límite de sin(x)/x cuando x se acerca a 0
function limite(x) {
    return x === 0 ? 1 : Math.sin(x) / x;
}

// Función para calcular la derivada de sin(x) (f'(x) = -sin(x))
function derivada(x) {
    return -Math.sin(x);
}

// Setup inicial de p5.js
function setup() {
    createCanvas(windowWidth, windowHeight); // El lienzo ocupa toda la pantalla
    frameRate(30); // Definir la tasa de fotogramas por segundo
    strokeWeight(2);
}

// Función de dibujo de la animación
function draw() {
    background(255); // Fondo blanco

    // Ejes
    translate(width / 2, height / 2); // Mover el origen al centro del lienzo
    drawAxes();

    // Dibujar la función seleccionada
    if (currentFunction === 'limite') {
        drawFunction();
    } else if (currentFunction === 'derivada') {
        drawDerivative();
    }

    // Mover las funciones en el eje X (animación)
    x_offset += 0.05;
}

// Función para dibujar los ejes X y Y
function drawAxes() {
    stroke(0); // Color negro para los ejes
    line(-width / 2, 0, width / 2, 0); // Eje X
    line(0, -height / 2, 0, height / 2); // Eje Y
}

// Función para dibujar la función f(x) = sin(x)/x
function drawFunction() {
    beginShape();
    stroke(0, 0, 255); // Color azul para la función
    for (let x = min_x; x < max_x; x += 0.1) {
        let y = limite(x + x_offset); // Desplazamos la función con x_offset
        vertex(x * 40, -y * 100); // Escalamos las coordenadas para ajustarlas al lienzo
    }
    endShape();
}

// Función para dibujar la derivada f'(x) = -sin(x)
function drawDerivative() {
    beginShape();
    stroke(255, 0, 0); // Color rojo para la derivada
    for (let x = min_x; x < max_x; x += 0.1) {
        let y = derivada(x + x_offset); // Desplazamos la derivada con x_offset
        vertex(x * 40, -y * 100); // Escalamos las coordenadas para ajustarlas al lienzo
    }
    endShape();
}

// Función para cambiar entre las funciones
function changeFunction(func) {
    currentFunction = func;
    x_offset = 0; // Resetear el desplazamiento
}
