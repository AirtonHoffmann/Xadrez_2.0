/*tbDados = new Array()

setTbDados(tbDados)

function setTbDados(tbDados) {

    id = 1

    for (y = 7; y >= 0; y--){
        tbDados[y] = new Array()
        for (x = 0; x < 8; x++){
            tbDados[y][x] = {
                idCasa: `c${id}`,
                idPeca: null,
                corPeca: null
            }
        }
    }

    tbDados[0][6].idPeca = 'peaoBranco01'; tbDados[0][6].corPeca = 'branca'
    tbDados[1][6].idPeca = 'peaoBranco02'; tbDados[1][6].corPeca = 'branca'
    tbDados[2][6].idPeca = 'peaoBranco03'; tbDados[2][6].corPeca = 'branca'
    tbDados[3][6].idPeca = 'peaoBranco04'; tbDados[3][6].corPeca = 'branca'
    tbDados[4][6].idPeca = 'peaoBranco05'; tbDados[4][6].corPeca = 'branca'
    tbDados[5][6].idPeca = 'peaoBranco06'; tbDados[5][6].corPeca = 'branca'
    tbDados[6][6].idPeca = 'peaoBranco07'; tbDados[6][6].corPeca = 'branca'
    tbDados[7][6].idPeca = 'peaoBranco08'; tbDados[7][6].corPeca = 'branca'
    tbDados[0][7].idPeca = 'torreBranca01'; tbDados[0][7].corPeca = 'branca'
    tbDados[7][7].idPeca = 'torreBranca02'; tbDados[7][7].corPeca = 'branca'
    tbDados[1][7].idPeca = 'cavaloBranco01'; tbDados[1][7].corPeca = 'branca'
    tbDados[6][7].idPeca = 'cavaloBranco02'; tbDados[6][7].corPeca = 'branca'
    tbDados[2][7].idPeca = 'bispoBranco01'; tbDados[2][7].corPeca = 'branca'
    tbDados[5][7].idPeca = 'bispoBranco02'; tbDados[5][7].corPeca = 'branca'
    tbDados[3][7].idPeca = 'rainhaBranca'; tbDados[3][7].corPeca = 'branca'
    tbDados[4][7].idPeca = 'reiBranc0'; tbDados[4][7].corPeca = 'branca'

    tbDados[0][1].idPeca = 'peaoPreto01'; tbDados[0][1].corPeca = 'preta'
    tbDados[1][1].idPeca = 'peaoPreto02'; tbDados[1][1].corPeca = 'preta'
    tbDados[2][1].idPeca = 'peaoPreto03'; tbDados[2][1].corPeca = 'preta'
    tbDados[3][1].idPeca = 'peaoPreto04'; tbDados[3][1].corPeca = 'preta'
    tbDados[4][1].idPeca = 'peaoPreto05'; tbDados[4][1].corPeca = 'preta'
    tbDados[5][1].idPeca = 'peaoPreto06'; tbDados[5][1].corPeca = 'preta'
    tbDados[6][1].idPeca = 'peaoPreto07'; tbDados[6][1].corPeca = 'preta'
    tbDados[7][1].idPeca = 'peaoPreto08'; tbDados[7][1].corPeca = 'preta'
    tbDados[0][0].idPeca = 'torrePreta01'; tbDados[0][0].corPeca = 'preta'
    tbDados[7][0].idPeca = 'torrePreta02'; tbDados[7][0].corPeca = 'preta'
    tbDados[1][0].idPeca = 'cavaloPreto01'; tbDados[1][0].corPeca = 'preta'
    tbDados[6][0].idPeca = 'cavaloPreto02'; tbDados[6][0].corPeca = 'preta'
    tbDados[2][0].idPeca = 'bispoPreto01'; tbDados[2][0].corPeca = 'preta'
    tbDados[5][0].idPeca = 'bispoPreto02'; tbDados[5][0].corPeca = 'preta'
    tbDados[3][0].idPeca = 'rainhaPreta'; tbDados[3][0].corPeca = 'preta'
    tbDados[4][0].idPeca = 'reiPreto'; tbDados[4][0].corPeca = 'preta'
}*/

state = {
    //pecaOver: null,
    casaOver: null
}

function selecionarPeca(casaId) {
    if(state.casaOver == null){
        state.casaOver = casaId
        tabuleiro.casas[state.casaOver].color = '#ccff33'
    }
    else if(state.casOver != casaId){
        tabuleiro.casas[state.casaOver].color = '#ffffff00'
        state.casaOver = casaId
        tabuleiro.casas[state.casaOver].color = '#ccff33'
    }
}


///////////////////////////////////////////////

