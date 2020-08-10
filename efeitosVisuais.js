
function sinalizarJogadaValida(){
    for(let i = 0; i < jogasValidas.length; i++){
        tabuleiro.casas[jogasValidas[i]].corF = '#ccff3380'
    }
}

function desvalidarJogadas(){
    for(let i = 0; i < jogasValidas.length; i++){
        tabuleiro.casas[jogasValidas[i]].corF = '#ffffff00'
    }
    jogasValidas.length = 0
}

function mouseOverTabuleiro (casaId, pecaId) {
    if(state.primeiroClick == true){
        if(casaId != "none" && tabuleiro.casas[casaId].corF == '#ccff3380'){
            pintarDeVerde(casaId)
        }else if(pecaId != "none"){
            pintarDeVermelho(casaId)
        }else if(state.casaOver != "none"){
            tabuleiro.casas[state.casaOver].corC = '#ffffff00'
            document.getElementById("body").style.cursor = "default"
            state.casaOver = "none"
        }
    }else{
        if(pecaId != "none" && pecaId[0] == state.lado){
            pintarDeVerde(casaId)
        }else if(casaId != "none" && tabuleiro.casas[casaId].corF == '#ccff3380'){
            pintarDeVerde(casaId)
        }else if(pecaId != "none" && pecaId[0] != state.lado){
            pintarDeVermelho(casaId)
        }else if(state.casaOver != "none"){
            tabuleiro.casas[state.casaOver].corC = '#ffffff00'
            document.getElementById("body").style.cursor = "default"
            state.casaOver = "none"
        }
    }
}

function pintarDeVerde(casaId){
    if(state.casaOver != casaId){
        if(state.casaOver != "none"){
            tabuleiro.casas[state.casaOver].corC = '#ffffff00'
        }
        state.casaOver = casaId
        tabuleiro.casas[state.casaOver].corC = '#ccff33'
        document.getElementById("body").style.cursor = "pointer"
    }
}

function pintarDeVermelho(casaId){
    if(state.casaOver != casaId){
        if(state.casaOver != "none"){
            tabuleiro.casas[state.casaOver].corC = '#ffffff00'
        }
        state.casaOver = casaId
        tabuleiro.casas[state.casaOver].corC = '#ff0000'
    }
}

function mouseOverOption (pecaId) {
    if(pecaId == "opcao01"){
        document.getElementById("body").style.cursor = "Pointer"

        telaEscolha.opcao01.sx = 5
        telaEscolha.opcao01.sy = 5
        telaEscolha.opcao01.sWidth = 90
        telaEscolha.opcao01.sHeight = 90

        telaEscolha.opcao02.sx = 0
        telaEscolha.opcao02.sy = 0
        telaEscolha.opcao02.sWidth = 100
        telaEscolha.opcao02.sHeight = 100

    }else if(pecaId == "opcao02"){
        document.getElementById("body").style.cursor = "Pointer"

        telaEscolha.opcao02.sx = 5
        telaEscolha.opcao02.sy = 5
        telaEscolha.opcao02.sWidth = 90
        telaEscolha.opcao02.sHeight = 90

        telaEscolha.opcao01.sx = 0
        telaEscolha.opcao01.sy = 0
        telaEscolha.opcao01.sWidth = 100
        telaEscolha.opcao01.sHeight = 100
        
    }else{
        document.getElementById("body").style.cursor = "default"

        telaEscolha.opcao01.sx = 0
        telaEscolha.opcao01.sy = 0
        telaEscolha.opcao01.sWidth = 100
        telaEscolha.opcao01.sHeight = 100

        telaEscolha.opcao02.sx = 0
        telaEscolha.opcao02.sy = 0
        telaEscolha.opcao02.sWidth = 100
        telaEscolha.opcao02.sHeight = 100
    }
}

function elevarPeca(pecaId, op) {
    if(op == "elevar"){
        tabuleiro.pecas[pecaId].sx = 5
        tabuleiro.pecas[pecaId].sy = 5
        tabuleiro.pecas[pecaId].sWidth = 90
        tabuleiro.pecas[pecaId].sHeight = 90
    }else if(op == "baixar"){
        tabuleiro.pecas[pecaId].sx = 0
        tabuleiro.pecas[pecaId].sy = 0
        tabuleiro.pecas[pecaId].sWidth = 100
        tabuleiro.pecas[pecaId].sHeight = 100
    }
}