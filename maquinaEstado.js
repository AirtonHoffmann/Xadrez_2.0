

var state = {
    //pecaOver: null,
    casaOver: null
}

function maquinaDeEstado(casaId, pecaid) {
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




