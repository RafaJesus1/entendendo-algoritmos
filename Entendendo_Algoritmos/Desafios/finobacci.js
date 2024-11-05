// Depois de apresentado o algoritmo de recursão quis me desafiar fazendo o cálculo de Finobacci.
// Depois de algumas horas, consegui entender realmente como funciona a lógica.
// Achei bem curioso e fascinante como acontece as ramificações desse algoritmo.
// Tive que fazer muito em papel e entender como funciona realmente.


//Vamos lá, finobacci é um cálculo matemáico onde os dois últimos números serão somados e resultarão no terceiro número, assim sucessivamente.
// 0 1 1 2 3 5 8 13 <- um exemplo
function finobacci(x){
    //Teremos 2 casos-bases, primeiro quando a variável X for igual a zero, a função retornará 0.
    if (x == 0) {
        return 0;
    //Já no segundo caso-base, quando a variável X for igual a 1, a função retornará 1.
    } else if (x == 1) {
        return 1;
    //Aqui será nosso caso-recursivo, onde acontecerá toda a ramificação do algoritmo, bati cabeça pra entender realmente como funciona.
    //O jeito mais prático de explicar é com exemplo
    //Vamos supor que finobacci(5)
        //Nessa linha de código fará 2 operações matemáticas (finobacci(5-1) + finobacci(5-2))
                                                            //finobacci(4) + finobacci(3) --> Já o finobacci ramifica para finobacci(3-1) + finobacci(3-2)
                                                                                                                            //finobacci(2) + finobacci(1)
                                                                                                                                    //Quando o X chegar == 1
                                                                                                                                    //A função retorna 1 e faz um soma.
                                                            //Nesse próximo acontecerá mais uma ramificação 
                                                            //finobacci(4) resultará em 
                                                            //finobacci(4-1) + finobacci(4-2)
                                                            //finobacci(3) + finobacci(2)
    //O exemplo não está tão óbvio, ao decorrer das ramificações quando finobacci(x) == finobacci(1) retorna 1 e faz a soma.
    //Ou seja, para cada ramificação que chegar até finobacci(1) incrementa mais 1 no nosso valor, encontrando o resultado.
    } else {
        return finobacci(x - 1) + finobacci(x - 2);
    }
}

console.log(finobacci(7)); //13
console.log(finobacci(10)); //55
console.log(finobacci(20)); //6765