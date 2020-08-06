
var state = {
    lado: "Undefined",
    casaOver: "none"
}

function maquinaDeEstado(casaId, pecaid, tipo) {
    
    switch (oqueRenderizar){
        case "telaEscolha":

            if(tipo == "move"){
                mouseOverOption(casaId)
            }else{
                mouseClickOption(casaId)
            }

            break

        case "tabuleiro":
            
            if(tipo == "move"){
                mouseOverTabuleiro(casaId, pecaid)
            }

    }
}

function mouseOverTabuleiro (casaId, pecaid,) {
    if(casaId != "none"){
        if(pecaid != "none"){
            if(pecaid[0] == state.lado){
                if(state.casaOver == "none"){
                    state.casaOver = casaId
                    tabuleiro.casas[state.casaOver].color = '#ccff33'
                }
                else if(state.casOver != casaId){
                    tabuleiro.casas[state.casaOver].color = '#ffffff00'
                    state.casaOver = casaId
                    tabuleiro.casas[state.casaOver].color = '#ccff33'
                }
            }else{
                if(state.casaOver == "none"){
                    state.casaOver = casaId
                    tabuleiro.casas[state.casaOver].color = '#ff261b'
                }
                else if(state.casOver != casaId){
                    tabuleiro.casas[state.casaOver].color = '#ffffff00'
                    state.casaOver = casaId
                    tabuleiro.casas[state.casaOver].color = '#ff261b'
                }
            }
        }else{
            tabuleiro.casas[state.casaOver].color = '#ffffff00'
        }
    }else{
        tabuleiro.casas[state.casaOver].color = '#ffffff00'
    }
}

function mouseOverOption (casaId) {
    if(casaId == "opcao01"){
        telaEscolha.opcao01.color = '#ccff33'
        telaEscolha.opcao02.color = '#ffffff00'
    }else if(casaId == "opcao02"){
        telaEscolha.opcao02.color = '#ccff33'
        telaEscolha.opcao01.color = '#ffffff00'
    }else{
        telaEscolha.opcao01.color = '#ffffff00'
        telaEscolha.opcao02.color = '#ffffff00'
    }
}

function mouseClickOption (casaId) {
    let indices01 = ["BRpeao01", "BRpeao02", "BRpeao03", "BRpeao04", "BRpeao05", "BRpeao06", "BRpeao07", "BRpeao08", "BRtorre01", "BRtorre02", "BRcavalo01", "BRcavalo02", "BRbispo01",  "BRbispo02", "BRrainha", "BRrei", "PRpeao01", "PRpeao02", "PRpeao03", "PRpeao04", "PRpeao05", "PRpeao06", "PRpeao07", "PRpeao08", "PRtorre01", "PRtorre02", "PRcavalo01", "PRcavalo02", "PRbispo01", "PRbispo02", "PRrainha", "PRrei",]

    let indices02 = ["PRpeao01", "PRpeao02", "PRpeao03", "PRpeao04", "PRpeao05", "PRpeao06", "PRpeao07", "PRpeao08", "PRtorre01", "PRtorre02", "PRcavalo01", "PRcavalo02", "PRbispo01", "PRbispo02", "PRrainha", "PRrei","BRpeao01", "BRpeao02", "BRpeao03", "BRpeao04", "BRpeao05", "BRpeao06", "BRpeao07", "BRpeao08", "BRtorre01", "BRtorre02", "BRcavalo01", "BRcavalo02", "BRbispo01",  "BRbispo02", "BRrainha", "BRrei"]

    let x = [70,170,270,370,470,570,670,770,70,770,170,670,270,570,370,470,70,170,270,370,470,570,670,770,70,770,170,670,270,570,370,470]
    let y = [670,670,670,670,670,670,670,670,770,770,770,770,770,770,770,770,170,170,170,170,170,170,170,170,70,70,70,70,70,70,70,70]

    let codeImage01 = [1,1,1,1,1,1,1,1,2,2,3,3,4,4,5,6,7,7,7,7,7,7,7,7,8,8,9,9,10,10,11,12]
    let codeImage02 = [7,7,7,7,7,7,7,7,8,8,9,9,10,10,11,12,1,1,1,1,1,1,1,1,2,2,3,3,4,4,5,6]

    if(casaId == "opcao01"){
        state.lado = "B"
        oqueRenderizar = "tabuleiro"

        for(let i = 0; i < 32; i++){
            tabuleiro.pecas[indices01[i]] = {
                imagem: preloadImagem[codeImage01[i]],
                x: x[i],
                y: y[i]
            }
        } 
    }else if(casaId == "opcao02"){
        state.lado = "P"
        oqueRenderizar = "tabuleiro"

        for(let i = 0; i < 32; i++){
            tabuleiro.pecas[indices02[i]] = {
                imagem: preloadImagem[codeImage02[i]],
                x: x[i],
                y: y[i]
            }
        }   
    }
}

