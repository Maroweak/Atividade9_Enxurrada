let saldo = prompt(" Qual é o seu saldo? (Apenas numeros): ");

alert(` Seu saldo é: R$ ${saldo} `);

compra = prompt(`O que deseja comprar? (Lembrando que seu saldo é de R$${saldo}) \n 1. Televisão R$1200 \n 2. Bicicleta R$600 \n 3. Ventilador R$150 `);

saldo_atual = 0;

if(compra == 1 && saldo >= 1200)
{
    saldo_atual = `${saldo}` - 1200;
    alert(`A compra foi concluida corretamente! Seu saldo agora é de: ${saldo_atual} `);
    alert(`Obrigado por comprar conosco!`);
}

else if(compra == 2 && saldo >= 600)
{
    saldo_atual = `${saldo}` - 600;
    alert(`A compra foi concluida corretamente! Seu saldo agora é de: ${saldo_atual} `);
    alert(`Obrigado por comprar conosco!`);

}


else if(compra == 3 && saldo >= 150)
{
    saldo_atual = `${saldo}` - 150;
    alert(`A compra foi concluida corretamente! Seu saldo agora é de: ${saldo_atual} `);
    alert(`Obrigado por comprar conosco!`);
}

else{
    alert(`Saldo insuficiente`);
    window.location.reload();
}

