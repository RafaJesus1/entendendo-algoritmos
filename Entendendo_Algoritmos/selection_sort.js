// Ordenação por Seleção é o segundo algoritmo apresentado no livro. 
// Selection Order is the second algorithm presented in the book.

// Ordenação por Seleção é responsável por ordernar uma lista desordenada.
// No capítulo desse algoritmo é apresentado como funciona os arrays e listas desencadeadas, mostrandos suas funcionalidades, prós e contras.
// Arrays são ótimos para acessar elementos aleatórios, porém, na parte de inserir elementos pode haver algumas dificuldades por conta de armazenamentos na memória do computador, se na "quarta gaveta" estiver sido usada, e você quer inserir um novo elemento, será necessário mover todos os elementos anteriores para um lugar mais adequado e que caiba.
// As listas encadeadas não sofrem desse problema de inserção ou deleção, por conta de cada elemento é referenciado a um endereço na memória, porém, em alguns acessos aleatórios não são fáceis de lidar, é necessário percorrer toda lista, desde o primeiro item, que irá referenciar o endereço do próximo elemento, assim sucessivamente. 


//Nossa função será possível buscar o menor elemento e retornando um menor índice que será usando na próxima função.
function buscaMenor(array) {
    //Nesse trecho a variável menor será atribuido ao índice zero do nosso array.
    let menor = array[0];
    //Nossa variável menor_indice será atribuido o valor 0, que é o menor índice.
    let menor_indice = 0;
    //Na estrutura de laço, será possível fazer um teste lógico que se o segundo valor do array for menor que o primeiro, executará a estrutura de condicional.
    for(var i = 1; i < array.length; i++) {
        //Tal estrutura será possível fazer algumas atribuições e definindo os menores valores novamente, caso haja.
        if (array[i] < menor) {
            //Aqui vamos atribuir novo menor 
            menor = array[i];
            //Aqui segue a mesma lógica
            menor_indice = i;
        }
    }
    //Retornar o menor indice do nosso array
    return menor_indice;
}

//Nessa função será responsável por ordernar os valores que a função BuscaMenor estabelece. Será necessário criar um novo array para fazer a inserção desses itens. Será utilizado uma lista auxiliar também chamada copyArray que será responsável por recortar e copiar para o novoArray os valores menores, sendo assim, ordenando-os.
function ordenacaoPorSelecao(array){
    //Novo array para ordenar os valores
    var novoArray = [];
    //Cria uma copia do array
    var copyArray = array.slice();
    //Pega o tamanho do array
    var length = array.length;
    //Esse laço será responsável por buscar um valor menor dentro do copyArray, assim que essa linha for executada, novoArray fará um push nesse menor indice trazendo uma ordenação nesse novoArray; Detalhe sobre a função splice, que é possível ter dois parâmetros, o primeiro valor será o menor índice e o segundo valor "1" será a quantidade de elementos que queremos recortar e passar para o novoArray
    for (var i = 0; i < length; i++) {
        var menor_indice = buscaMenor(copyArray);
        novoArray.push(copyArray.splice(menor_indice, 1)[0]);
    }

    return novoArray;
}


const sourceArray = [5, 3, 6, 2, 10];
const sortedArray = ordenacaoPorSelecao(sourceArray);

console.log("Source array - ", sourceArray); // [5, 3, 6, 2, 10]
console.log("New sorted array - ", sortedArray); // [2, 3, 5, 6, 10]