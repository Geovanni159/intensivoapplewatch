const imagemVisualizacao = document.getElementById('imagem-visualizacao')
let tituloProduto = document.getElementById('titulo-produto')
const tituloCor = document.getElementById("nome-cor-selecionada")
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura')
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura')
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura')


const verdeCipreste = {
    nome: "verde-cipreste",
    pasta:"imagens-verde-cipreste"
}

const azulInverno = {
    nome: "azul-inverno",
    pasta: 'imagens-azul-inverno'
}

const meiaNoite = {
    nome: "meia-Noite",
    pasta: 'imagens-meia-noite'
}

const estelar = {
    nome: "estelar",
    pasta: 'imagens-estelar'
}

const rosaClaro = {
    nome: "rosa-claro",
    pasta: 'imagens-rosa-claro'
}

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]
const opcoestamanho = ['41 mm', '45 mm']

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg'
}

function trocarTamanho(){
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);

    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoestamanho[tamanhoSelecionado];

    if(tamanhoSelecionado == 0){
        imagemVisualizacao.classList.add('caixa-pequena')
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena')
    }
}

function trocarCor(){
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    const tituloCor = document.getElementById("nome-cor-selecionada")
    
    corSelecionada = idOpcaoSelecionada.charAt(0);

    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoestamanho[tamanhoSelecionado];
    tituloCor.innerText = "Cor - " + opcoesCores[corSelecionada].nome

    miniaturaImagem0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg';
    miniaturaImagem1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg';
    miniaturaImagem2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg';

    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg'
}