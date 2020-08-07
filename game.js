//telaEscolha, tabuleiro e oqueRenderizar sao objetos que vem do arquivo apresentacao.js

var state = {
    minhaVez: false,
    lado: "Undefined",
    casaOver: "none"
}

function maquinaDeEstado(casaId, pecaid, tipo) {
    
    switch (oqueRenderizar){
        case "telaEscolha":

            if(tipo == "move"){
                mouseOverOption(casaId)
            }else if(casaId == "opcao01" || casaId == "opcao02"){
                mouseClickOption(casaId)
            }

            break

        case "tabuleiro":
            
            if(tipo == "move"){
                mouseOverTabuleiro(casaId, pecaid)   
            }

    }
}

function mouseOverTabuleiro (casaId, pecaid) {
    if(casaId != "none"){
        if(pecaid != "none"){
            if(pecaid[0] == state.lado){
                if(state.casaOver == "none"){
                    state.casaOver = casaId
                    tabuleiro.casas[state.casaOver].corC = '#ccff33'
                }
                else if(state.casOver != casaId){
                    tabuleiro.casas[state.casaOver].corC = '#ffffff00'
                    state.casaOver = casaId
                    tabuleiro.casas[state.casaOver].corC = '#ccff33'
                }
                document.getElementById("body").style.cursor = "Pointer"
            }else{
                if(state.casaOver == "none"){
                    state.casaOver = casaId
                    tabuleiro.casas[state.casaOver].corC = '#ff261b'
                }
                else if(state.casOver != casaId){
                    tabuleiro.casas[state.casaOver].corC = '#ffffff00'
                    state.casaOver = casaId
                    tabuleiro.casas[state.casaOver].corC = '#ff261b'
                }
            }
        }else if(state.casaOver != "none"){
            document.getElementById("body").style.cursor = "default"
            tabuleiro.casas[state.casaOver].corC = '#ffffff00'
            state.casaOver = "none"
        }
    }else if(state.casaOver != "none"){
        document.getElementById("body").style.cursor = "default"
        tabuleiro.casas[state.casaOver].corC = '#ffffff00'
        state.casaOver = "none"
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
    let indices01 = ["Bp1", "Bp2", "Bp3", "Bp4", "Bp5", "Bp6", "Bp7", "Bp8", "Bt1", "Bt2", "Bc1", "Bc2", "Bb1", "Bb2", "Ba", "Bo", "Pp1", "Pp2", "Pp3", "Pp4", "Pp5", "Pp6", "Pp7", "Pp8", "Pt1", "Pt2", "Pc1", "Pc2", "Pb1", "Pb2", "Pa", "Po"]
    let indices02 = ["Pp1", "Pp2", "Pp3", "Pp4", "Pp5", "Pp6", "Pp7", "Pp8", "Pt1", "Pt2", "Pc1", "Pc2", "Pb1", "Pb2", "Pa", "Po", "Bp1", "Bp2", "Bp3", "Bp4", "Bp5", "Bp6", "Bp7", "Bp8", "Bt1", "Bt2", "Bc1", "Bc2", "Bb1", "Bb2", "Ba", "Bo"]
    let x = [70,170,270,370,470,570,670,770,70,770,170,670,270,570,370,470,70,170,270,370,470,570,670,770,70,770,170,670,270,570,370,470]
    let y = [670,670,670,670,670,670,670,670,770,770,770,770,770,770,770,770,170,170,170,170,170,170,170,170,70,70,70,70,70,70,70,70]
    let codeImage01 = [1,1,1,1,1,1,1,1,2,2,3,3,4,4,5,6,7,7,7,7,7,7,7,7,8,8,9,9,10,10,11,12]
    let codeImage02 = [7,7,7,7,7,7,7,7,8,8,9,9,10,10,11,12,1,1,1,1,1,1,1,1,2,2,3,3,4,4,5,6]

    if(casaId == "opcao01"){
        state.lado = "B"
        state.minhaVez = true
        oqueRenderizar = "tabuleiro"

        for(let i = 0; i < 32; i++){
            tabuleiro.pecas[indices01[i]] = {imagem: preloadImagem[codeImage01[i]], x: x[i], y: y[i]}
        } 
    }else if(casaId == "opcao02"){
        state.lado = "P"
        state.minhaVez = false
        oqueRenderizar = "tabuleiro"

        for(let i = 0; i < 32; i++){
            tabuleiro.pecas[indices02[i]] = {imagem: preloadImagem[codeImage02[i]], x: x[i], y: y[i]}
        }   
    }
}

