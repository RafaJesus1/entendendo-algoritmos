// (PT-BR) Pesquisa Binária é o primeiro algoritmo apresentado no livro Entendendo Algoritmos do Aditya Y. Bhargava.
// (EN-US) Binary Search is the first algorithm presented in the book Grokking Algorithms by Aditya Y. Bhargava.

// É um algoritmo para trazer uma melhor eficiência de busca de uma lista ordenada. O autor apresenta um exemplo sobre um dicionário com 240.000 palavras, trazendo a pior das ocasiões, seria necessário verificar 240.000 etapas. Visando ao algoritmo de pesquisa binária, poderiamos cortar pela metade essa lista, dividindo ambos os lados para 120.000 palavras, passaríamos por uma análise a respeito da palavras que estamos buscando, fazendo o seguinte questionamento "Para que lado está a palavra em termos de ordem alfabética?", realizando essa análise poderiamos partir pra próxima etapa: Escolher esquerda ou direita. Diante dessa etapa voltariamos ao processo inicial de dividir esses 120.000 pela metadade resultando em 60.000. Passando por vários desses processos chegariamos ao resultado final: 1.

// Para chegar nesse resultado passamos por 18 etapas, sendo um número bem inferior se fosse uma pesquisa simples, olhando página por página. Um viés matemático que pode explicar esse processo e que é explicado pelo autor é que a pesquisa binária precisa de logaritmo na base 2 de n, enquanto a pesquisa simples precisa de n etapas.


function pesquisa_binaria(lista, item) {
    // A variável baixo servirá para referenciar ao primeiro elemento de nossa lista.
    let baixo = 0;
    // A variável alto servirá para referenciar ao último elemento de nossa lista, como a função legth retorna o número total de elementos que seria = 5, subtraímos por 1 para igualar aos índices.
    let alto = lista.length - 1;

    // Uma estrutura de repetição que será coordenada pelo parâmetro de se o baixo for menor ou igual a alto, o bloco de código abaixo será executado.
    while (baixo <= alto) {
        // A variável meio servirá para referenciar ao meio de nossa lista, para isso, faremos uma expressão somando baixo + alto e dividir por 2, resultado na metade, porém, em alguns casos o resultado dessa expressão serão números ímpares, dando um número decimal, coisa que não queremos aqui, por conta dos índices serem números inteiros. Por isso foi adicionado a função Math.floor para arrendondar para um número inteiro.
        const meio = Math.floor((baixo + alto) / 2);
        //A variável chute referencia ao nosso "palpite" e com essa variável será possível realizar algumas condicionais para encontrar nosso resultado.
        const chute = lista[meio];

        // A estutura condicional será responsável por comparar a variável chute com o nosso item. Se forem valores iguais o nosso resultado sairá.
        if (chute == item) {
            return meio
        }

        // A estruta condicional chute > item será responsável caso nosso chute não seja igual ao item, portanto, ela será capaz de afunilar mais a nossa lista, aumentando as chances de encontrar nosso item.
        if (chute > item) {
            alto = meio - 1;
        } 
        
        // Caso nenhuma das estruturas acima não sejam executadas, por não ter nenhum dos teste lógicos verdadeiros, passariamos a afunilar a lista desde o primeiro índice, ao contrário da estrutura anterior que diminuiria do último índice para meio - 1.
        else {
            baixo = meio + 1;
        }


    }

    //Caso nosso item não seja encontrado nosso algoritmo voltará um valor vazio.
    return null;

}


const minha_lista = [1, 3, 5, 7, 9];

console.log(pesquisa_binaria(minha_lista, 3)); // 1
console.log(pesquisa_binaria(minha_lista, 1)); // 0
console.log(pesquisa_binaria(minha_lista, 9)); // 4
console.log(pesquisa_binaria(minha_lista, -1)); // null