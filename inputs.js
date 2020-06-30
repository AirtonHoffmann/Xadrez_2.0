elemLeft = canvas.offsetLeft + canvas.clientLeft,
elemTop = canvas.offsetTop + canvas.clientTop,

addEventListener('click', getElement, false)
addEventListener('mousemove', getMousePosition, false)

function getElement() {
    casaIdReturn = null
    pecaIdReturn = null

    x = event.pageX - elemLeft
    y = event.pageY - elemTop

    for(const casaId in tabuleiro.casas){
        const casa = tabuleiro.casas[casaId]
        if(y > casa.y && y < casa.y + tabuleiro.casaAltura && x > casa.x && x < casa.x + tabuleiro.casaLargura){
            casaIdReturn = casaId
            break
        }
    }

    for(const pecaId in tabuleiro.pecas){
        if(pecaId != tabuleiro.ultimaPeca){
            const peca = tabuleiro.pecas[pecaId]
            if(y > peca.y && y < peca.y + tabuleiro.pecaAltura && x > peca.x && x < peca.x + tabuleiro.pecaLargura){
                pecaIdReturn = pecaId
                break
            }
        }
    }

    selecionarPeca(pecaIdReturn, casaIdReturn)
    console.log(casaIdReturn, pecaIdReturn)
}

function getMousePosition() {
    x = event.pageX - elemLeft
    y = event.pageY - elemTop

    moverPeca(x, y)
}