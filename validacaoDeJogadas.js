/*var info = {
    peca: "",
    pX: 0,
    pY: 0
}*/

/*tabuleiro = new Array() //Matriz que guarda as posicoes das pessas no momento atual do jogo
for (let y = 7; y >= 0; y--){
    tabuleiro[y] = new Array()
    for (let x = 0; x < 8; x++){
        tabuleiro[y][x] = ""
    }
}*/

//p t c b a o
/*function extrairInfos (pecaId, casaId){
    switch (pecaId[1]){
        case "p":
            info.peca = "peao"
            break
        case "t":
            info.peca = "torre"
            break
        case "c":
            info.peca = "cavalo"
            break
        case "b":
            info.peca = "bispo"
            break
        case "a": 
            info.peca = "rainha"
            break
        case "o":
            info.peca = "rei"
    }

    info.pX = Number(casaId[2])
    
    info.pY = Number(casaId[0])
}*/

/*function validarJogada(linha, coluna, cdPeca) { //recebe a peca e sua posicao no tabuleiro, e encontra todoas o seus movimentos possiveis
    desvalidar ()

    switch (cdPeca){
        case 1: case 11:

            jogadasValidas[linha][coluna] = true //a posicao inicial da peca deve ser considerada uma jogada valida, para ao clicar na peca, ver as jogadas posiveis e devolvela ao seu lugar caso nao queira movimentala
            testarHorizontalPositiva(linha, coluna, inimiga, amiga)
            testarHorizontalNegativa(linha, coluna, inimiga, amiga)
            testarVerticalPositiva(linha, coluna, inimiga, amiga)
            testarVerticalNegativa(linha, coluna, inimiga, amiga)

            break
        case 2: case 12:

            jogadasValidas[linha][coluna] = true
            validar(linha+2,coluna+1,inimiga,amiga)
            validar(linha+2,coluna-1,inimiga,amiga)
            validar(linha-2,coluna+1,inimiga,amiga)
            validar(linha-2,coluna-1,inimiga,amiga)
            validar(linha-1,coluna+2,inimiga,amiga)
            validar(linha+1,coluna+2,inimiga,amiga)
            validar(linha+1,coluna-2,inimiga,amiga)
            validar(linha-1,coluna-2,inimiga,amiga)

            break
        case 3: case 13:

            jogadasValidas[linha][coluna] = true
            testarDiagonalSuperiorPositiva(linha, coluna, inimiga, amiga)
            testarDiagonalSuperiorNegativa(linha, coluna, inimiga, amiga)
            testarDiagonalInferiorPositiva(linha, coluna, inimiga, amiga)
            testarDiagonalInferiorNegativa(linha, coluna, inimiga, amiga)

            break
        case 4: case 14:

            jogadasValidas[linha][coluna] = true
            testarHorizontalPositiva(linha, coluna, inimiga, amiga)
            testarHorizontalNegativa(linha, coluna, inimiga, amiga)
            testarVerticalPositiva(linha, coluna, inimiga, amiga)
            testarVerticalNegativa(linha, coluna, inimiga, amiga)
            testarDiagonalSuperiorPositiva(linha, coluna, inimiga, amiga)
            testarDiagonalSuperiorNegativa(linha, coluna, inimiga, amiga)
            testarDiagonalInferiorPositiva(linha, coluna, inimiga, amiga)
            testarDiagonalInferiorNegativa(linha, coluna, inimiga, amiga)

            break
        case 5: case 15:

            jogadasValidas[linha][coluna] = true
            validar(linha,coluna+1,inimiga,amiga)
            validar(linha,coluna-1,inimiga,amiga)
            validar(linha+1,coluna,inimiga,amiga)
            validar(linha-1,coluna,inimiga,amiga)
            validar(linha-1,coluna-1,inimiga,amiga)
            validar(linha-1,coluna+1,inimiga,amiga)
            validar(linha+1,coluna+1,inimiga,amiga)
            validar(linha+1,coluna-1,inimiga,amiga) 

            break
        case 6: case 16:

            jogadasValidas[linha][coluna] = true
            if(minhaVez == true){
                if(tabuleiro[linha+1][coluna] == 0) {
                    jogadasValidas[linha+1][coluna] = true
                    if(linha == 1 && tabuleiro[linha+2][coluna] == 0) {
                        jogadasValidas[linha+2][coluna] = true
                    }
                }
                if(tabuleiro[linha+1][coluna+1] > inimiga && tabuleiro[linha+1][coluna+1] < inimiga+7) {jogadasValidas[linha+1][coluna+1] = true}
                if(tabuleiro[linha+1][coluna-1] > inimiga && tabuleiro[linha+1][coluna-1] < inimiga+7) {jogadasValidas[linha+1][coluna-1] = true}
            }else{
                if(tabuleiro[(linha-1)][coluna] == 0) {
                    jogadasValidas[linha-1][coluna] = true
                    if(linha == 6 && tabuleiro[(linha-2)][coluna] == 0) {
                        jogadasValidas[linha-2][coluna] = true
                    }
                }
                if(tabuleiro[linha-1][coluna-1] > inimiga && tabuleiro[linha-1][coluna-1] < inimiga+7) {jogadasValidas[linha-1][coluna-1] = true}
                if(tabuleiro[linha-1][coluna+1] > inimiga && tabuleiro[linha-1][coluna+1] < inimiga+7) {jogadasValidas[linha-1][coluna+1] = true}
            }

    }
}

//as funcoes a baixo percorrem as casas apartir do ponto selecionado enquanto a funcao validar retornar true

function testarHorizontalPositiva(linhaT, colunaT, inimiga, amiga){ //percorre as casas em linha reta para a direita
    linhaT += 1
    if(validar(linhaT, colunaT, inimiga, amiga) == true){
        testarHorizontalPositiva(linhaT, colunaT, inimiga, amiga)
    }
}

function testarHorizontalNegativa(linhaT, colunaT, inimiga, amiga){ //percorre as casas em linha reta para a esquerda
    linhaT -= 1
    if(validar(linhaT, colunaT, inimiga, amiga) == true){
        testarHorizontalNegativa(linhaT, colunaT, inimiga, amiga)
    }
}

function testarVerticalPositiva(linhaT, colunaT, inimiga, amiga){ //percorre as casas em linha reta para cima
    colunaT += 1
    if(validar(linhaT , colunaT, inimiga, amiga) == true){
        testarVerticalPositiva(linhaT, colunaT, inimiga, amiga)
    }
}

function testarVerticalNegativa(linhaT, colunaT, inimiga, amiga){ //percorre as casas em linha reta para baixo
    colunaT -= 1
    if(validar(linhaT , colunaT, inimiga, amiga) == true){
        testarVerticalNegativa(linhaT, colunaT, inimiga, amiga)
    }
}

function testarDiagonalSuperiorPositiva(linhaT, colunaT, inimiga, amiga){ //percorre as casas a partir do ponto indicado, seguindo uma diagonal para direita e para cima
    linhaT += 1; colunaT += 1;
    if(validar(linhaT, colunaT, inimiga, amiga) == true){
        testarDiagonalSuperiorPositiva(linhaT, colunaT, inimiga, amiga)
    }
}

function testarDiagonalSuperiorNegativa(linhaT, colunaT, inimiga, amiga){ //percorre as casas a partir do ponto indicado, seguindo uma diagonal para esquerda e para cima
    linhaT += 1; colunaT -= 1;
    if(validar(linhaT, colunaT, inimiga, amiga) == true){
        testarDiagonalSuperiorNegativa(linhaT, colunaT, inimiga, amiga)
    }
}

function testarDiagonalInferiorPositiva(linhaT, colunaT, inimiga, amiga){ //percorre as casas a partir do ponto indicado, seguindo uma diagonal para direita e para baixo
    linhaT -= 1; colunaT += 1;
    if(validar(linhaT , colunaT, inimiga, amiga) == true){
        testarDiagonalInferiorPositiva(linhaT, colunaT, inimiga, amiga)
    }
}

function testarDiagonalInferiorNegativa(linhaT, colunaT, inimiga, amiga){ //percorre as casas a partir do ponto indicado, seguindo uma diagonal para esquerda e para baixo
    linhaT -= 1; colunaT -= 1;
    if(validar(linhaT , colunaT, inimiga, amiga) == true){
        testarDiagonalInferiorNegativa(linhaT, colunaT, inimiga, amiga)
    }
}

function validar(linha, coluna, inimiga, amiga) { // determina se a posicao indicada e um movimento valido, 
    ret = true
    if (linha >= 0 && linha <= 7 && coluna >= 0 && coluna <= 7){
        if (tabuleiro[linha][coluna] == 0) {
            jogadasValidas[linha][coluna] = true //jogadasValidas[][] = 'mapa' das jogadas validas
        }else if (tabuleiro[linha][coluna] > inimiga && tabuleiro[linha][coluna] < (inimiga+7)){
            jogadasValidas[linha][coluna] = true
            ret = false
        }else if (tabuleiro[linha][coluna] > amiga && tabuleiro[linha][coluna] < (amiga+7)){
            ret = false
        }
    }else{
        ret = false
    }
    return ret
}

// a matris 'jogadasValidas[][]' garda os movimentos validos de uma peca, para cada peca sera preciso reiniciar a metris
function desvalidar() {  
    for (n = 0;  n< 8; n++){
        for (m = 0; m < 8; m++){
            jogadasValidas[n][m] = false
        }
    }
}*/