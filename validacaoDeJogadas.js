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

function setInicialInfo(casaId) {

    if(casaId == "opcao01"){
        tbInfo[7][0] ="Bt1";tbInfo[7][1] ="Bc1";tbInfo[7][2] ="Bb1";tbInfo[7][3] ="Ba";tbInfo[7][4] ="Bo";tbInfo[7][5] ="Bb2";tbInfo[7][6] ="Bc2";tbInfo[7][7] ="Bt2";
        tbInfo[6][0] ="Bp1";tbInfo[6][1] ="Bp2";tbInfo[6][2] ="Bp3";tbInfo[6][3] ="Bp4";tbInfo[6][4] ="Bp5";tbInfo[6][5] ="Bp6";tbInfo[6][6] ="Bp7";tbInfo[6][7] ="Bp8";

        tbInfo[1][0] ="Pp1";tbInfo[1][1] ="Pp2";tbInfo[1][2] ="Pp3";tbInfo[1][3] ="Pp4";tbInfo[1][4] ="Pp5";tbInfo[1][5] ="Pp6";tbInfo[1][6] ="Pp7";tbInfo[1][7] ="Pp8";
        tbInfo[0][0] ="Pt1";tbInfo[0][1] ="Pc1";tbInfo[0][2] ="Pb1";tbInfo[0][3] ="Pa";tbInfo[0][4] ="Po";tbInfo[0][5] ="Pb2";tbInfo[0][6] ="Pc2";tbInfo[0][7] ="Pt2"
    }else{
        tbInfo[7][0] ="Pt1";tbInfo[7][1] ="Pc1";tbInfo[7][2] ="Pb1";tbInfo[7][3] ="Pa";tbInfo[7][4] ="Po";tbInfo[7][5] ="Pb2";tbInfo[7][6] ="Pc2";tbInfo[7][7] ="Pt2"
        tbInfo[6][0] ="Pp1";tbInfo[6][1] ="Pp2";tbInfo[6][2] ="Pp3";tbInfo[6][3] ="Pp4";tbInfo[6][4] ="Pp5";tbInfo[6][5] ="Pp6";tbInfo[6][6] ="Pp7";tbInfo[6][7] ="Pp8";

        tbInfo[1][0] ="Bp1";tbInfo[1][1] ="Bp2";tbInfo[1][2] ="Bp3";tbInfo[1][3] ="Bp4";tbInfo[1][4] ="Bp5";tbInfo[1][5] ="Bp6";tbInfo[1][6] ="Bp7";tbInfo[1][7] ="Bp8";
        tbInfo[0][0] ="Bt1";tbInfo[0][1] ="Bc1";tbInfo[0][2] ="Bb1";tbInfo[0][3] ="Ba";tbInfo[0][4] ="Bo";tbInfo[0][5] ="Bb2";tbInfo[0][6] ="Bc2";tbInfo[0][7] ="Bt2";
    } 
}



function validarJogada(pecaId, casaId, lado) { //recebe a peca e sua posicao no tabuleiro, e encontra todoas o seus movimentos possiveis
    let y = Number(casaId[0])
    let x = Number(casaId[2])
    let j

    switch (pecaId[1]){
        case "t":

            jogasValidas.push(`${y}.${x}`)
            for(let i = y; validar(i, x, lado); i++){}
            for(let i = y; validar(i, x, lado); i--){}
            for(let i = x; validar(y, i, lado); i++){}
            for(let i = x; validar(y, i, lado); i--){}

            break
        case "c":

            jogasValidas.push(`${y}.${x}`)
            if(validar(y+2, x+1, lado)){}
            if(validar(y+2, x-1, lado)){}
            if(validar(y+1, x-2, lado)){}
            if(validar(y-1, x-2, lado)){}
            if(validar(y-2, x+1, lado)){}
            if(validar(y-2, x-1, lado)){}
            if(validar(y+1, x+2, lado)){}
            if(validar(y-1, x+2, lado)){}

            break
        case "b":

            jogasValidas.push(`${y}.${x}`)
            j = x
            for(let i = y; validar(i, j++, lado); i++){}
            j = x
            for(let i = y; validar(i, j--, lado); i++){}
            j = x
            for(let i = y; validar(i, j++, lado); i--){}
            j = x
            for(let i = y; validar(i, j--, lado); i--){}

            break
        case "a":

            jogasValidas.push(`${y}.${x}`)
            j = x
            for(let i = y; validar(i, j++, lado); i++){}
            j = x
            for(let i = y; validar(i, j--, lado); i++){}
            j = x
            for(let i = y; validar(i, j++, lado); i--){}
            j = x
            for(let i = y; validar(i, j--, lado); i--){}

            for(let i = y; validar(i, x, lado); i++){}
            for(let i = y; validar(i, x, lado); i--){}
            for(let i = x; validar(y, i, lado); i++){}
            for(let i = x; validar(y, i, lado); i--){}

            break
        case "o":

            jogasValidas.push(`${y}.${x}`)
            validar(y+1, x, lado)
            validar(y-1, x, lado)
            validar(y, x+1, lado)
            validar(y, x-1, lado)
            validar(y+1, x+1, lado)
            validar(y+1, x-1, lado)
            validar(y-1, x+1, lado)
            validar(y-1, x-1, lado)

            break
        case "p":

            let peca
            jogasValidas.push(`${y}.${x}`)
            if(pecaId[0] == lado){
                peca = tbInfo[y+1][x]
                if(peca == "42"){
                    jogasValidas.push(`${y+1}.${x}`)
                    if(y = 1){
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
                    if(y = 1){
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
                    peca = tbInfo[y+1][x-1]
                    if(peca != "42" && peca[0] != pecaId[0]){
                        jogasValidas.push(`${y-1}.${x-1}`)
                    }
                }
            }
            
    }

}

function validar(coluna, linha) { 
    let retorno = true
    let peca 

    if (linha >= 0 && linha <= 7 && coluna >= 0 && coluna <= 7){
        peca = tbInfo[coluna][linha]
        if (peca == "42") {
            jogasValidas.push(`${coluna}.${linha}`)
        }else if (peca[0] != pecaId[0]){
            jogasValidas.push(`${coluna}.${linha}`)
            retorno = false
        }else if (peca[0] == pecaId[0]){
            retorno = false
        }
    }else{
        retorno = false
    }

    return retorno
}
