// (PT-BR) Pesquisa Binária é o primeiro algoritmo apresentado no livro Entendendo Algoritmos do Aditya Y. Bhargava.
// (EN-US) Binary Search is the first algorithm presented in the book Grokking Algorithms by Aditya Y. Bhargava.

// É um algoritmo para trazer uma melhor eficiência de busca de uma lista ordenada. O autor apresenta um exemplo sobre um dicionário com 240.000 palavras, trazendo a pior das ocasiões, seria necessário verificar 240.000 etapas. Visando ao algoritmo de pesquisa binária, poderiamos cortar pela metade essa lista, dividindo ambos os lados para 120.000 palavras, passaríamos por uma análise a respeito da palavras que estamos buscando, fazendo o seguinte questionamento "Para que lado está a palavra em termos de ordem alfabética?", realizando essa análise poderiamos partir pra próxima etapa: Escolher esquerda ou direita. Diante dessa etapa voltariamos ao processo inicial de dividir esses 120.000 pela metadade resultando em 60.000. Passando por vários desses processos chegariamos ao resultado final: 1.

// Para chegar nesse resultado passamos por 18 etapas, sendo um número bem inferior se fosse uma pesquisa simples, olhando página por página. Um viés matemático que pode explicar esse processo e que é explicado pelo autor é que a pesquisa binária precisa de logaritmo na base 2 de n, enquanto a pesquisa simples precisa de n etapas.


function pesquisa_binaria(lista, item) {
    let baixo = 0;
    let alto = lista.length - 1;

    while (baixo <= alto) {
        const meio = Math.floor((baixo + alto) / 2);
        const chute = lista[meio];
        
        if (chute == item) {
            return meio
        }

        if (chute > item) {
            alto = meio - 1;
        } 
        
        else {
            baixo = meio + 1;
        }


    }

    return null;

}


const minha_lista = [1, 3, 5, 7, 9];

console.log(pesquisa_binaria(minha_lista, 3));
console.log(pesquisa_binaria(minha_lista, 1));
console.log(pesquisa_binaria(minha_lista, 9));
console.log(pesquisa_binaria(minha_lista, -1));