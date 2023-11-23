const sal = parseFloat(prompt("Qual é o seu salário?"));

let sal_reajustado = 0;
let aumento = 0;

aum = Number(aumento)

if (sal > 0 && sal <= 280){

   aum = sal * 20 / 100;
   sal_reajustado = sal + aum;

   alert(`Seu salário antes do reajuste era de: R$${sal} \n
    Foi aplicado um aumento de 20% \n
    O aumento foi de R$${aum} \n
    Salário após o reajuste é de: R$${sal_reajustado}`);

}

else if (sal > 280 && sal < 700 ){

    aum = sal * 15 / 100;
    sal_reajustado = sal + aum;
 
    alert(`Seu salário antes do reajuste era de: R$${sal} \n
     Foi aplicado um aumento de 15% \n
     O aumento foi de R$${aum} \n
     Salário após o reajuste é de: R$${sal_reajustado}`);
 
 }

else if (sal > 700 && sal < 1500 ){

    aum = sal * 20 / 100;
    sal_reajustado = sal + aum;
 
    alert(`Seu salário antes do reajuste era de: R$${sal} \n
     Foi aplicado um aumento de 10% \n
     O aumento foi de R$${aum} \n
     Salário após o reajuste é de: R$${sal_reajustado}`);
 
 }

else if (sal > 1500){

    aum = sal * 5 / 100;
    sal_reajustado = sal + aum;
 
    alert(`Seu salário antes do reajuste era de: R$${sal} \n
     Foi aplicado um aumento de 5% \n
     O aumento foi de R$${aum} \n
     Salário após o reajuste é de: R$${sal_reajustado}`);
 
 }

 else{
    alert(`Digite um salário válido.`)
    window.location.reload()
 }