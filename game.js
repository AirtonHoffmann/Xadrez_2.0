iD = null
segurandoPeca = false

function selecionarPeca(pecaIdReceived, casaIdReceived) {
    if(pecaIdReceived != null && segurandoPeca == false){
        iD = pecaIdReceived
        segurandoPeca = true
        tabuleiro.ultimaPeca = iD
    }else if(casaIdReceived != null && segurandoPeca == true){
        if(pecaIdReceived != null){
            if(tabuleiro.pecas[iD].cor != tabuleiro.pecas[pecaIdReceived].cor){
                delete tabuleiro.pecas[pecaIdReceived]
                segurandoPeca = false
                tabuleiro.pecas[iD].x = tabuleiro.casas[casaIdReceived].x
                tabuleiro.pecas[iD].y = tabuleiro.casas[casaIdReceived].y
                iD = null
                tabuleiro.ultimaPeca = null
            }    
        }else{
            segurandoPeca = false
            tabuleiro.pecas[iD].x = tabuleiro.casas[casaIdReceived].x
            tabuleiro.pecas[iD].y = tabuleiro.casas[casaIdReceived].y
            iD = null
            tabuleiro.ultimaPeca = null
        }  
    }
}

function moverPeca(x, y) {
    if(segurandoPeca == true){
        tabuleiro.pecas[iD].x = x - 50
        tabuleiro.pecas[iD].y = y - 50
    }
}