const arreglo1 = ["Tamales", "empanadas", "carimañolas", "Genova", "Buñuelo"];

console.log(arreglo1[0], "Posicion 0");
console.log(arreglo1[1], "Posicion 1");
console.log(arreglo1[2], "Posicion 2");
console.log(arreglo1[3], "Posicion 3");
console.log(arreglo1[4], "Posicion 4");


console.log(`La comida del dia es: ${arreglo1[3]}`)


// mutar (cambiar) de valor un elem ento del arreglo

arreglo1[4] = "chunchullo";
console.log(arreglo1[4], "Nueva posicion 4");
console.log("Mutacion de arreglo", arreglo1);

