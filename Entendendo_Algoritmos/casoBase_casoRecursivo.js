// Na recursão, o autor explica que precisa ter um caso-base, onde vai coordenar a função e não torna-lá um loop infinito.


//Função para fazer uma contagem regressiva
function regressiva(i) {
    //Nessa primeira linha será mostrado o valor do parâmetro
    console.log(i);
    //Essa estrutura de condição será nosso caso-base, onde se i chegar a ser igual ou menor que 1 ele irá parar
    if (i <= 1) {
        return;
    //Esse else será nosso caso-recursivo onde a própria função chamará a si mesmo, fazendo uma regressiva do valor implementado no parâmetro
    } else {
        regressiva(i - 1);
    }
}


regressiva(5);
regressiva(-2);