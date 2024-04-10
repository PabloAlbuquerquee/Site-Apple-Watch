const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const corProduto = document.getElementById('nome-cor-selecionada');

const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');

const salvarProduto = document.getElementById('salvar-depois');
salvarProduto.addEventListener('click', salvar);
let produtoSalvo = 0;

const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};
const azulInverno = {
    nome: 'Azul-Inverno',
    pasta: 'imagens-azul-inverno',
};
const meiaNoite = {
    nome:'Meia-noite',
    pasta: 'imagens-meia-noite'
};
const estelar = {
    nome:'Estelar',
    pasta:'imagens-estelar'
};
const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
};
const minhaLista = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let idCorSelecionada = 1;

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = './imagens/opcoes-cores/' + minhaLista[idCorSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
};

function trocarTamanho() {
    const idOpcaoTamanho = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoTamanho.charAt(0);
    tituloProduto.innerHTML = 'Pulseira loop esportiva ' + minhaLista[idCorSelecionada].nome + ' para caixa de ' + opcoesTamanho[tamanhoSelecionado];
    if(tamanhoSelecionado == 0) {
        imagemVisualizacao.classList.add('caixa-pequena');
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');
    } 
};

function trocarCor() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    idCorSelecionada = idOpcaoSelecionada.charAt(0);
    tituloProduto.innerHTML = 'Pulseira loop esportiva ' + minhaLista[idCorSelecionada].nome + ' para caixa de ' + opcoesTamanho[tamanhoSelecionado];
    corProduto.innerHTML = 'Cor : ' + minhaLista[idCorSelecionada].nome;
    miniaturaImagem0.src = './imagens/opcoes-cores/' + minhaLista[idCorSelecionada].pasta + '/imagem-0.jpeg';
    miniaturaImagem1.src = './imagens/opcoes-cores/' + minhaLista[idCorSelecionada].pasta + '/imagem-1.jpeg';
    miniaturaImagem2.src = './imagens/opcoes-cores/' + minhaLista[idCorSelecionada].pasta + '/imagem-2.jpeg';
    imagemVisualizacao.src= './imagens/opcoes-cores/' + minhaLista[idCorSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
};

function salvar(){
    if(produtoSalvo === 0) {
        salvarProduto.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16"><path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/></svg> Salvar para depois'
        produtoSalvo = 1
    }else {
        produtoSalvo = 0
        salvarProduto.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/></svg> Salvar para agora'
    }
};


