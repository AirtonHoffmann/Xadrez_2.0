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

preloadImagem = new Array()
for(i = 0; i < 13; i++){
    preloadImagem[i] = new Image()
    preloadImagem[i].src = `imagens/${i}.png`
}

const tabuleiro = {
    fundo: {
        'imagem': preloadImagem[0],
        'x': 0,
        'y': 0,
    },
    casaAltura: 100,
    casaLargura: 100,
    corCasa: '#00000033',
    casas: {},
    pecaAltura: 100,
    pecaLargura: 100,
    pecas: {
        'peaoBranco01': {cor: 'branca', imagem: preloadImagem[1], x: 70, y: 670},
        'peaoBranco02': {cor: 'branca', imagem: preloadImagem[1], x: 170, y: 670},
        'peaoBranco03': {cor: 'branca', imagem: preloadImagem[1], x: 270, y: 670},
        'peaoBranco04': {cor: 'branca', imagem: preloadImagem[1], x: 370, y: 670},
        'peaoBranco05': {cor: 'branca', imagem: preloadImagem[1], x: 470, y: 670},
        'peaoBranco06': {cor: 'branca', imagem: preloadImagem[1], x: 570, y: 670},
        'peaoBranco07': {cor: 'branca', imagem: preloadImagem[1], x: 670, y: 670},
        'peaoBranco08': {cor: 'branca', imagem: preloadImagem[1], x: 770, y: 670},
        'torreBranca01': {cor: 'branca', imagem: preloadImagem[2], x: 70, y: 770},
        'torreBranca02': {cor: 'branca', imagem: preloadImagem[2], x: 770, y: 770},
        'cavaloBranco01': {cor: 'branca', imagem: preloadImagem[3], x: 170, y: 770},
        'cavaloBranco02': {cor: 'branca', imagem: preloadImagem[3], x: 670, y: 770},
        'bispoBranco01': {cor: 'branca', imagem: preloadImagem[4], x: 270, y: 770},
        'bispoBranco02': {cor: 'branca', imagem: preloadImagem[4], x: 570, y: 770},
        'rainhaBranca': {cor: 'branca', imagem: preloadImagem[5], x: 370, y: 770},
        'reiBranc0': {cor: 'branca', imagem: preloadImagem[6], x: 470, y: 770},

        'peaoPreto01': {cor: 'preta', imagem: preloadImagem[7], x: 70, y: 170},
        'peaoPreto02': {cor: 'preta', imagem: preloadImagem[7], x: 170, y: 170},
        'peaoPreto03': {cor: 'preta', imagem: preloadImagem[7], x: 270, y: 170},
        'peaoPreto04': {cor: 'preta', imagem: preloadImagem[7], x: 370, y: 170},
        'peaoPreto05': {cor: 'preta', imagem: preloadImagem[7], x: 470, y: 170},
        'peaoPreto06': {cor: 'preta', imagem: preloadImagem[7], x: 570, y: 170},
        'peaoPreto07': {cor: 'preta', imagem: preloadImagem[7], x: 670, y: 170},
        'peaoPreto08': {cor: 'preta', imagem: preloadImagem[7], x: 770, y: 170},
        'torrePreta01': {cor: 'preta', imagem: preloadImagem[8], x: 70, y: 70},
        'torrePreta02': {cor: 'preta', imagem: preloadImagem[8], x: 770, y: 70},
        'cavaloPreto01': {cor: 'preta', imagem: preloadImagem[9], x: 170, y: 70},
        'cavaloPreto02': {cor: 'preta', imagem: preloadImagem[9], x: 670, y: 70},
        'bispoPreto01': {cor: 'preta', imagem: preloadImagem[10], x: 270, y: 70},
        'bispoPreto02': {cor: 'preta', imagem: preloadImagem[10], x: 570, y: 70},
        'rainhaPreta': {cor: 'preta', imagem: preloadImagem[11], x: 370, y: 70},
        'reiPreto': {cor: 'preta', imagem: preloadImagem[12], x: 470, y: 70},
    },
    ultimaPeca: null
}

pX = 70
pY = 70
for(i = 1; i < 65; i++){
    tabuleiro.casas[`c${i}`] = {
        color: tabuleiro.corCasa,
        x: pX,
        y: pY
    }
    if(pX < 770){
        pX += 100
    }else{
        pX = 70
        pY += 100
    }
}

renderScreen()

function renderScreen() {
    context.clearRect(0, 0, 940, 940)

    context.drawImage(tabuleiro.fundo.imagem, tabuleiro.fundo.x, tabuleiro.fundo.y)

    for(const casaId in tabuleiro.casas){
        const casa = tabuleiro.casas[casaId]
        context.fillStyle = casa.color
        context.fillRect(casa.x, casa.y, tabuleiro.casaLargura, tabuleiro.casaAltura)
    }

    for(const pecaId in tabuleiro.pecas){
        const peca = tabuleiro.pecas[pecaId]
        context.drawImage(peca.imagem, peca.x, peca.y)
    }

    if(tabuleiro.ultimaPeca != null)
        context.drawImage(tabuleiro.pecas[tabuleiro.ultimaPeca].imagem, tabuleiro.pecas[tabuleiro.ultimaPeca].x, tabuleiro.pecas[tabuleiro.ultimaPeca].y)

    requestAnimationFrame(renderScreen)
}