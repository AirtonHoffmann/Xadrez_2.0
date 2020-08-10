//telaEscolha, tabuleiro e oqueRenderizar sao objetos que vem do arquivo apresentacao.js
//maquinaDeEstado() e uma funcao que vem do arquivo game.js

addEventListener('mousemove', tipoMove, false)
addEventListener('mousemove', pegarElement, false)

addEventListener('click', tipoClick, false)
addEventListener('click', pegarElement, false)

var tipo = ""

function tipoMove() {tipo = "move"}
function tipoClick() {tipo = "click"}

function pegarElement() {
    let elemLeft = canvas.offsetLeft + canvas.clientLeft
    let elemTop = canvas.offsetTop + canvas.clientTop
    
    let casaIdReturn = null
    let pecaIdReturn = null

    let x = event.pageX - elemLeft
    let y = event.pageY - elemTop

    switch (oqueRenderizar){
        case "telaEscolha":

            if(y > telaEscolha.opcao01.y && y < telaEscolha.opcao01.y + telaEscolha.altura && x > telaEscolha.opcao01.x && x < telaEscolha.opcao01.x + telaEscolha.largura){
                casaIdReturn = "opcao01"
            }else if(y > telaEscolha.opcao02.y && y < telaEscolha.opcao01.y + telaEscolha.altura && x > telaEscolha.opcao02.x && x < telaEscolha.opcao02.x + telaEscolha.largura){
                casaIdReturn = "opcao02"
            }else{
                casaIdReturn = "none"
            }
            
            break

        case "tabuleiro":
            
            for(let casaId in tabuleiro.casas){
                let casa = tabuleiro.casas[casaId]
                if(y > casa.y && y < casa.y + tabuleiro.casaAltura && x > casa.x && x < casa.x + tabuleiro.casaLargura){
                    casaIdReturn = casaId
                    break
                }else{
                    casaIdReturn = "none"
                }
            }

            for(let pecaId in tabuleiro.pecas){
                if(pecaId != tabuleiro.ultimaPeca){
                    let peca = tabuleiro.pecas[pecaId]
                    if(y > peca.y && y < peca.y + tabuleiro.pecaAltura && x > peca.x && x < peca.x + tabuleiro.pecaLargura){
                        pecaIdReturn = pecaId
                        break
                    }else{
                        pecaIdReturn = "none"
                    }
                }
            }
    }

    //console.log(`${pecaIdReturn}, ${casaIdReturn}`)
    maquinaDeEstado(casaIdReturn, pecaIdReturn, tipo) 
}
