//telaEscolha, tabuleiro e oqueRenderizar sao objetos que vem do arquivo apresentacao.js

var state = {
    primeiroClick: false,
    minhaVez: false,
    lado: "Undefined",
    casaOver: "none",
    pecaSelecionada: "none",
    casaSelecionada: "none"
}

function maquinaDeEstado(casaId, pecaId, tipo) {
    
    switch (oqueRenderizar){
        case "telaEscolha":

            if(tipo == "move"){
                mouseOverOption(pecaId)
            }else if(pecaId != "none"){
                mouseClickOption(pecaId)
                setInicialInfo(pecaId)
            }

            break

        case "tabuleiro":
            
            if(tipo == "move"){
                mouseOverTabuleiro(casaId, pecaId)   
            }else if(tipo == "click"){
                /*if(state.primeiroClick == false && pecaId != "none" && pecaId[0] == state.lado){
                    state.primeiroClick = true
                    Promise.resolve(validarJogada(pecaId, casaId, state.lado))
                        .then(sinalizarJogadaValida())
                }*/
                if(state.primeiroClick == false && pecaId != "none"){
                    state.primeiroClick = true
                    state.casaSelecionada = casaId
                    state.pecaSelecionada = pecaId
                    Promise.resolve(validarJogada(pecaId, casaId, state.lado))
                    .then(sinalizarJogadaValida())
                    .then(elevarPeca(pecaId, "elevar"))
                }else if(state.primeiroClick == true && tabuleiro.casas[casaId].corF == '#ccff3380'){
                    state.primeiroClick = false
                    Promise.resolve(moverPeca(casaId, pecaId))
                    .then(desvalidarJogadas())
                    .then(elevarPeca(state.pecaSelecionada, "baixar"))
                    state.pecaSelecionada = "none"
                }
            }

    }
}
