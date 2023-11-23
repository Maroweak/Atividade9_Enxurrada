const a = parseFloat(prompt("Digite o comprimento do primeiro lado do triângulo: "));
const b = parseFloat(prompt("Digite o comprimento do segundo lado do triângulo: "));
const c = parseFloat(prompt("Digite o comprimento do terceiro lado do triângulo: "));


tipoTriangulo = "";

if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        tipoTriangulo = "Triângulo Equilátero";
    } 
    
    else if (a === b || a === c || b === c) {
        tipoTriangulo = "Triângulo Isósceles";

    }
        
    else {
        tipoTriangulo = "Triângulo Escaleno";
    }
}

else {
    tipoTriangulo = "Não é um triângulo";
   }

alert(tipoTriangulo);
