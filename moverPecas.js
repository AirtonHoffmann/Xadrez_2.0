
function moverPeca(casaId, pecaId){
    let y01 = Number(state.casaSelecionada[0])
    let x01 = Number(state.casaSelecionada[2])
    let y02 = Number(casaId[0])
    let x02 = Number(casaId[2])
    let copo = "vazio"

    tabuleiro.pecas[state.pecaSelecionada].x = tabuleiro.casas[casaId].x
    tabuleiro.pecas[state.pecaSelecionada].y = tabuleiro.casas[casaId].y
    
    if(pecaId != "none" && pecaId != state.pecaSelecionada){
        delete tabuleiro.pecas[pecaId]
    }

    copo = tbInfo[y01][x01]
    tbInfo[y01][x01] = "42"
    tbInfo[y02][x02] = copo
}