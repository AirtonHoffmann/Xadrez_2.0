//telaEscolha, tabuleiro e oqueRenderizar sao objetos que vem do arquivo apresentacao.js

var state = {
    primeiroClick: false,
    minhaVez: false,
    lado: "Undefined",
    casaOver: "none"
}

function maquinaDeEstado(casaId, pecaId, tipo) {
    
    switch (oqueRenderizar){
        case "telaEscolha":

            if(tipo == "move"){
                mouseOverOption(casaId)
            }else if(casaId != "none"){
                mouseClickOption(casaId)
                setInicialInfo(casaId)
            }

            break

        case "tabuleiro":
            
            if(tipo == "move"){
                mouseOverTabuleiro(casaId, pecaId)   
            }else if(tipo == "click"){
                if(state.primeiroClick == false && pecaId != "none" && pecaId[0] == state.lado){
                    state.primeiroClick = true
                    Promise.resolve(validarJogada(pecaId, casaId, state.lado))
                        .then(sinalizarJogadaValida())
                }
            }

    }
}

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

function mouseOverOption (casaId) {
    if(casaId == "opcao01"){
        document.getElementById("body").style.cursor = "Pointer"
        telaEscolha.opcao01.color = '#ccff33'
        telaEscolha.opcao02.color = '#ffffff00'
    }else if(casaId == "opcao02"){
        document.getElementById("body").style.cursor = "Pointer"
        telaEscolha.opcao02.color = '#ccff33'
        telaEscolha.opcao01.color = '#ffffff00'
    }else{
        document.getElementById("body").style.cursor = "default"
        telaEscolha.opcao01.color = '#ffffff00'
        telaEscolha.opcao02.color = '#ffffff00'
    }
}

function mouseClickOption (casaId) {
    document.getElementById("body").style.cursor = "default"

    //o primeiro caracter representa a cor Branca/Preta, o segundo representa o tipo peao, cavalo etc. Use "a" para rainha e "o" para rei
    //Bp7 = setimo peao branco 
    let indices02 = ["Bp1", "Bp2", "Bp3", "Bp4", "Bp5", "Bp6", "Bp7", "Bp8", "Bt1", "Bt2", "Bc1", "Bc2", "Bb1", "Bb2", "Ba", "Bo", "Pp1", "Pp2", "Pp3", "Pp4", "Pp5", "Pp6", "Pp7", "Pp8", "Pt1", "Pt2", "Pc1", "Pc2", "Pb1", "Pb2", "Pa", "Po"]
    let indices01 = ["Pp1", "Pp2", "Pp3", "Pp4", "Pp5", "Pp6", "Pp7", "Pp8", "Pt1", "Pt2", "Pc1", "Pc2", "Pb1", "Pb2", "Pa", "Po", "Bp1", "Bp2", "Bp3", "Bp4", "Bp5", "Bp6", "Bp7", "Bp8", "Bt1", "Bt2", "Bc1", "Bc2", "Bb1", "Bb2", "Ba", "Bo"]
    let x = [70,170,270,370,470,570,670,770,70,770,170,670,270,570,370,470,70,170,270,370,470,570,670,770,70,770,170,670,270,570,370,470]
    let y = [670,670,670,670,670,670,670,670,770,770,770,770,770,770,770,770,170,170,170,170,170,170,170,170,70,70,70,70,70,70,70,70]
    let codeImage01 = [1,1,1,1,1,1,1,1,2,2,3,3,4,4,5,6,7,7,7,7,7,7,7,7,8,8,9,9,10,10,11,12]
    let codeImage02 = [7,7,7,7,7,7,7,7,8,8,9,9,10,10,11,12,1,1,1,1,1,1,1,1,2,2,3,3,4,4,5,6]

    if(casaId == "opcao01"){
        state.lado = "P"
        state.minhaVez = true
        oqueRenderizar = "tabuleiro"

        for(let i = 0; i < 32; i++){
            tabuleiro.pecas[indices01[i]] = {imagem: preloadImagem[codeImage01[i]], x: x[i], y: y[i]}
        } 
    }else if(casaId == "opcao02"){
        state.lado = "B"
        state.minhaVez = false
        oqueRenderizar = "tabuleiro"

        for(let i = 0; i < 32; i++){
            tabuleiro.pecas[indices02[i]] = {imagem: preloadImagem[codeImage02[i]], x: x[i], y: y[i]}
        }   
    }
}

