//Recursão foi o terceiro algoritmo demonstrado no livro.

//Recursão é quando a própria função chama a si mesmo, tendo um aproveitamento de código.

let i = 1;
function procure_pela_chave(caixa) {
    
    for (const item of caixa) {
        //Array.isArray(item) para verificar se o item é uma caixa (um array)
        if (Array.isArray(item)) { 
            //Apenas uma variável auxiliar para informar em qual caixa a chave foi encontrada
            i++;
            //Recursão para continuar procurando a chave
            procure_pela_chave(item); 
            //Caso a chave seja encontrada irá retornar "Achei a chave!"
        } else if (item === "chave") {
            console.log(`Achei a chave na ${i}° caixa!`);
            return; 
        // Caso a chave não seja encontrada irá retornar "Não achei a chave!"
        } else {
            console.log(`Não achei a chave!`);
        }
    }
}

const caixa = ["vazio", ["vazio", "vazio"], ["vazio"], ["vazio, vazio, vazio"], ["vazio", "vazio"], ["chave"]];


procure_pela_chave(caixa); 
