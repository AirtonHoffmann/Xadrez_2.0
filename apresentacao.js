/*
peaoBranco      = 1       peaoPreto     = 7
torreBranca     = 2       torrePreta    = 8
cavaloBranco    = 3       cavaloPreto   = 9
bispoBranco     = 4       bispoPreto    = 10
rainhaBranca    = 5       rainhaPreta   = 11
reiBranco       = 6       reiPreto      = 12
*/

const canvas = document.getElementById('screen')
const context = canvas.getContext('2d')

var preloadImagem = new Array()
for(let i = 0; i < 15; i++){
    preloadImagem[i] = new Image()
    preloadImagem[i].src = `imagens/${i}.png`
}

var oqueRenderizar = "telaEscolha"

var telaEscolha = {
    largura: 100,
    altura: 100,
    fundo: {imagem: preloadImagem[0], x: 0, y: 0,},
    texto: {imagem: preloadImagem[14], x: 270, y: 370},
    opcao01: {color: '#ffffff00', x: 370, y: 470,},
    peca01: {imagem: preloadImagem[5], x: 370, y: 470},
    opcao02: {color: '#ffffff00', x: 470, y: 470,},
    peca02: {imagem: preloadImagem[11], x: 470, y: 470}
}

var tabuleiro = {
    fundo: {imagem: preloadImagem[0], x: 0, y: 0,},
    casaAltura: 100,
    casaLargura: 100,
    corContorno: '#ffffff00',
    corFundo: '#ffffff00',
    casas: {},
    pecaAltura: 100,
    pecaLargura: 100,
    pecas: {},
}

var pX = 70
var pY = 70
for(let i = 7; i >= 0; i--){
    for(let j = 0; j < 8; j++){
        tabuleiro.casas[`${i}.${j}`] = {corC: tabuleiro.corContorno, corF: tabuleiro.corFundo, x: pX, y: pY}
        if(pX < 770){
            pX += 100
        }else{
            pX = 70
            pY += 100
        }
    }
}

renderScreen()

function renderScreen() {
    context.clearRect(0, 0, 940, 940)

    switch (oqueRenderizar){
        case "telaEscolha":

            context.drawImage(telaEscolha.fundo.imagem, telaEscolha.fundo.x, telaEscolha.fundo.y)

            context.fillStyle = "#00000080"
            context.fillRect(0, 0, 940, 940)

            context.drawImage(telaEscolha.texto.imagem, telaEscolha.texto.x, telaEscolha.texto.y)

            context.fillStyle = telaEscolha.opcao01.color
            context.fillRect(telaEscolha.opcao01.x, telaEscolha.opcao01.y, telaEscolha.largura, telaEscolha.altura)
            context.drawImage(telaEscolha.peca01.imagem, telaEscolha.peca01.x, telaEscolha.peca01.y)

            context.fillStyle = telaEscolha.opcao02.color
            context.fillRect(telaEscolha.opcao02.x, telaEscolha.opcao02.y, telaEscolha.largura, telaEscolha.altura)
            context.drawImage(telaEscolha.peca02.imagem, telaEscolha.peca02.x, telaEscolha.peca02.y)
            break

        case "tabuleiro":

            context.drawImage(tabuleiro.fundo.imagem, tabuleiro.fundo.x, tabuleiro.fundo.y)

            for(let casaId in tabuleiro.casas){
                let casa = tabuleiro.casas[casaId]

                context.strokeStyle = casa.corC
                context.fillStyle = casa.corF
                context.lineWidth = "2"
                context.fillRect(casa.x, casa.y, tabuleiro.casaLargura, tabuleiro.casaAltura)
                context.strokeRect(casa.x, casa.y, tabuleiro.casaLargura, tabuleiro.casaAltura)
                
            }

            for(let pecaId in tabuleiro.pecas){
                let peca = tabuleiro.pecas[pecaId]
                context.drawImage(peca.imagem, peca.x, peca.y)
            }
    }

    //requestAnimationFrame(renderScreen)
    setTimeout(renderScreen, 33)
}