// Ordenação por Seleção é o segundo algoritmo apresentado no livro. 
// Selection Order is the second algorithm presented in the book.


//Criei uma lista de objetos dos artistas que mais escuto
const listaArtistas = [
    { nome: "Drake", plays: 548 },
    { nome: "Cidade Dormitório", plays: 599 },
    { nome: "Kendrick Lamar", plays: 656 },
    { nome: "Kanye West", plays: 562 },
    { nome: "Baco Exu do Blues", plays: 1555 },
    { nome: "Travis Scott", plays: 994 },
    { nome: "Don Toliver", plays: 259 },
    { nome: "Tyler, The Creator", plays: 430 },
    { nome: "Brent Faiyaz", plays: 295 },
    { nome: "Frank Ocean", plays: 672 }
];

//Segue a mesma linha do selection_sort, porém, nesse código, achei plausível procurar pelo maior índice, admito que não tive um pensamento claro da grande diferença sobre buscar o menor e maior, acredito que deve seguir a mesma linha.
function buscaMaior(array) {
    maior = array[array.length - 1].plays;
    maior_indice = array.length - 1;
    for(var i = 1; i < array.length; i++) {
        if (array[i].plays > maior) {
            maior = array[i].plays;
            maior_indice = i;
        }
    }

    return maior_indice;
}

function ordenacaoPorSelecao(array){
    var novoArray = [];
    var copyArray = array.slice();
    for (var i = 0; i < array.length; i++) {
        var maior_indice = buscaMaior(copyArray);
        novoArray.push(copyArray.splice(maior_indice, 1)[0]);
    }

    return novoArray;
}

const artistasOrdenados = ordenacaoPorSelecao(listaArtistas);
console.log('Esses são os 7 primeiros artistas que você mais escuta:')
i = 1;
for (const artistas of artistasOrdenados) {
    console.log(`${artistas.nome} é o artista Top ${i} e tem ${artistas.plays} plays.`);
    i++;
}