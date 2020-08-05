var elemLeft
var elemTop

addEventListener('mousemove', getElement, false)

function getElement() {
    elemLeft = canvas.offsetLeft + canvas.clientLeft
    velemTop = canvas.offsetTop + canvas.clientTop
    
    let casaIdReturn = null
    let pecaIdReturn = null

    let x = event.pageX - elemLeft
    let y = event.pageY - elemTop

    for(let casaId in tabuleiro.casas){
        let casa = tabuleiro.casas[casaId]
        if(y > casa.y && y < casa.y + tabuleiro.casaAltura && x > casa.x && x < casa.x + tabuleiro.casaLargura){
            casaIdReturn = casaId
            break
        }
    }

    for(let pecaId in tabuleiro.pecas){
        if(pecaId != tabuleiro.ultimaPeca){
            let peca = tabuleiro.pecas[pecaId]
            if(y > peca.y && y < peca.y + tabuleiro.pecaAltura && x > peca.x && x < peca.x + tabuleiro.pecaLargura){
                pecaIdReturn = pecaId
                break
            }
        }
    }

    if(casaIdReturn != null)
        maquinaDeEstado(casaIdReturn, pecaIdReturn) 
}