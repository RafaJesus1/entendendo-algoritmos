//Fatorial é um bom exemplo de como funciona uma função recursiva.
//Temos o caso-base (if (x==1{return 1})) e o caso-recursivo (else {return x * fat(x-1)})
//Achei curioso a forma que ocorre a pilha depois de empilhar todos os valores de X.

function fat(x) {
    //Nosso caso base para não fazer um loop infinito
    if (x == 1) {
        return 1;
    //Nosso caso recursivo, a cada entrada nesse else o fat(x) vai subtraindo -1 e colocando numa pilha os valores, logo depois de x == 1, fará todos os cálculos em ordem do call stack.
    } else {
        return x * fat(x-1);
    }
}


console.log(fat(3));
console.log(fat(10));