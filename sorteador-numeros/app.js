// adicionar a função sortear e criar as variaveis que irão receber o numeros colocados no index.html
// parseint diz que o valor que as opçoes vao receber serao numeros inteiros 
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;
// usa-se for para fazer o loop "i" sempre é usado por padrão
    for (let i = 0 ; i < quantidade ; i++) {
        numero = obterNumeroAleatorio (de,ate);
        // while vai ser usando para verificar que nao repita um numero para aparecer no Numeros sorteados
        while(sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }
    // buscar elemento no indez.html e jogar o elemento la dentro da pagina
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}`
    alterarStatusBotao();
}



// Função criada para math.random e math.floor que gera um numero aleatorio e inteiro 
function obterNumeroAleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao =  document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
    
}