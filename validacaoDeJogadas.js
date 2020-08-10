//o primeiro caracter representa a cor Branca/Preta, o segundo representa o tipo peao, cavalo etc. Use "a" para rainha e "o" para rei
//Bp7 = setimo peao branco 

var tbInfo = new Array() //Matriz que guarda as posicoes das pessas no momento atual do jogo
for (let y = 7; y >= 0; y--){
    tbInfo[y] = new Array()
    for (let x = 0; x < 8; x++){
        tbInfo[y][x] = "42"
    }
}

var jogasValidas = new Array()

function validarJogada(pecaId, casaId, lado) { //recebe a peca e sua posicao no tabuleiro, e encontra todoas o seus movimentos possiveis
    let y = Number(casaId[0])
    let x = Number(casaId[2])
    let j

    switch (pecaId[1]){
        case "t":

            jogasValidas.push(`${y}.${x}`)
            for(let i = y; validar(i, x, pecaId); i++){}
            for(let i = y; validar(i, x, pecaId); i--){}
            for(let i = x; validar(y, i, pecaId); i++){}
            for(let i = x; validar(y, i, pecaId); i--){}

            break
        case "c":

            jogasValidas.push(`${y}.${x}`)
            if(validar(y+2, x+1, pecaId)){}
            if(validar(y+2, x-1, pecaId)){}
            if(validar(y+1, x-2, pecaId)){}
            if(validar(y-1, x-2, pecaId)){}
            if(validar(y-2, x+1, pecaId)){}
            if(validar(y-2, x-1, pecaId)){}
            if(validar(y+1, x+2, pecaId)){}
            if(validar(y-1, x+2, pecaId)){}

            break
        case "b":

            jogasValidas.push(`${y}.${x}`)
            j = x
            for(let i = y; validar(i, j++, pecaId); i++){}
            j = x
            for(let i = y; validar(i, j--, pecaId); i++){}
            j = x
            for(let i = y; validar(i, j++, pecaId); i--){}
            j = x
            for(let i = y; validar(i, j--, pecaId); i--){}

            break
        case "a":

            jogasValidas.push(`${y}.${x}`)
            j = x
            for(let i = y; validar(i, j++, pecaId); i++){}
            j = x
            for(let i = y; validar(i, j--, pecaId); i++){}
            j = x
            for(let i = y; validar(i, j++, pecaId); i--){}
            j = x
            for(let i = y; validar(i, j--, pecaId); i--){}

            for(let i = y; validar(i, x, pecaId); i++){}
            for(let i = y; validar(i, x, pecaId); i--){}
            for(let i = x; validar(y, i, pecaId); i++){}
            for(let i = x; validar(y, i, pecaId); i--){}

            break
        case "o":

            jogasValidas.push(`${y}.${x}`)
            validar(y+1, x, pecaId)
            validar(y-1, x, pecaId)
            validar(y, x+1, pecaId)
            validar(y, x-1, pecaId)
            validar(y+1, x+1, pecaId)
            validar(y+1, x-1, pecaId)
            validar(y-1, x+1, pecaId)
            validar(y-1, x-1, pecaId)

            break
        case "p":

            let peca
            jogasValidas.push(`${y}.${x}`)
            if(pecaId[0] == lado){
                peca = tbInfo[y+1][x]
                if(peca == "42"){
                    jogasValidas.push(`${y+1}.${x}`)
                    if(y == 1){
                        peca = tbInfo[y+2][x]
                        if(peca == "42"){
                            jogasValidas.push(`${y+2}.${x}`)
                        }
                    }
                }
                if(tbInfo[y+1][x+1] != undefined){
                    peca = tbInfo[y+1][x+1]
                    if(peca != "42" && peca[0] != pecaId[0]){
                        jogasValidas.push(`${y+1}.${x+1}`)
                    }
                }
                if(tbInfo[y+1][x-1] != undefined){
                    peca = tbInfo[y+1][x-1]
                    if(peca != "42" && peca[0] != pecaId[0]){
                        jogasValidas.push(`${y+1}.${x-1}`)
                    }
                }
            }else{
                peca = tbInfo[y-1][x]
                if(peca == "42"){
                    jogasValidas.push(`${y-1}.${x}`)
                    if(y == 6){
                        peca = tbInfo[y-2][x]
                        if(peca == "42"){
                            jogasValidas.push(`${y-2}.${x}`)
                        }
                    }
                }
                if(tbInfo[y-1][x+1] != undefined){
                    peca = tbInfo[y-1][x+1]
                    if(peca != "42" && peca[0] != pecaId[0]){
                        jogasValidas.push(`${y-1}.${x+1}`)
                    }
                } 
                if(tbInfo[y-1][x-1] != undefined){
                    peca = tbInfo[y-1][x-1]
                    if(peca != "42" && peca[0] != pecaId[0]){
                        jogasValidas.push(`${y-1}.${x-1}`)
                    }
                }
            }
            
    }

}

function validar(coluna, linha, pecaId) { 
    //console.log(`${coluna} , ${linha}`)
    let retorno = true
    let peca 

    if (linha >= 0 && linha <= 7 && coluna >= 0 && coluna <= 7){
        peca = tbInfo[coluna][linha]
        if (peca == "42") {
            jogasValidas.push(`${coluna}.${linha}`)
        }else if (peca[0] != pecaId[0]){
            jogasValidas.push(`${coluna}.${linha}`)
            retorno = false
        }else if (peca != pecaId && peca[0] == pecaId[0]){
            retorno = false
        }
    }else{
        retorno = false
    }

    //console.log(retorno)
    return retorno
}
