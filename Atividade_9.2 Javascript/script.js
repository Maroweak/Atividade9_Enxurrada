const num1 = parseFloat(prompt(`Qual será o primeiro numero da operação?`));
const num2 = parseFloat(prompt(`Qual será o segundo numero da operação?`));
const operacao = prompt(`Qual será a operação a ser realizada?`);

let resultado = 0;

if (operacao == "+"){
    resultado =  num1 + num2;
    alert(` O resultado desta operação é ${resultado}`);
}

else if (operacao == "-"){
    resultado = num1 - num2;
    alert(` O resultado desta operação é ${resultado}`);
}

else if (operacao == "*"){
    resultado = num1 * num2;
    alert(` O resultado desta operação é ${resultado}`);

}

else if (operacao == "/"){
     resultado = num1 / num2;
     alert(` O resultado desta operação é ${resultado}`);
}