// A pilha de chamada é um algoritmo onde o primeiro elemento a entrar será o úlitmo a sair.
//Admito que não entendi muito bem a relação dessa atividade com o termo pilha, talvez seja só uma formar de demonstrar como funciona a chamada de cada linha de código. A cada linha, uma chamada. Talvez por isso pilha de chamada.

function sauda(nome) {
    console.log(`Olá, ${nome}!`);
    sauda2(nome);
    console.log("preparando para dizer tchau...")
    tchau(nome);

}

function sauda2(nome) {
    console.log(`Como vai ${nome}?`);
}

function tchau(nome){
    console.log(`Tchau ${nome}!`);
}

sauda("Rafael");