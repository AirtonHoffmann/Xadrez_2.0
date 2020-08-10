
function mouseClickOption (casaId) {
    document.getElementById("body").style.cursor = "default"

    //o primeiro caracter representa a cor Branca/Preta, o segundo representa o tipo peao, cavalo etc. Use "a" para rainha e "o" para rei
    //Bp7 = setimo peao branco 
    let indices02 = ["Bp1", "Bp2", "Bp3", "Bp4", "Bp5", "Bp6", "Bp7", "Bp8", "Bt1", "Bt2", "Bc1", "Bc2", "Bb1", "Bb2", "Ba", "Bo", "Pp1", "Pp2", "Pp3", "Pp4", "Pp5", "Pp6", "Pp7", "Pp8", "Pt1", "Pt2", "Pc1", "Pc2", "Pb1", "Pb2", "Pa", "Po"]
    let indices01 = ["Pp1", "Pp2", "Pp3", "Pp4", "Pp5", "Pp6", "Pp7", "Pp8", "Pt1", "Pt2", "Pc1", "Pc2", "Pb1", "Pb2", "Pa", "Po", "Bp1", "Bp2", "Bp3", "Bp4", "Bp5", "Bp6", "Bp7", "Bp8", "Bt1", "Bt2", "Bc1", "Bc2", "Bb1", "Bb2", "Ba", "Bo"]
    let x = [70,170,270,370,470,570,670,770,70,770,170,670,270,570,370,470,70,170,270,370,470,570,670,770,70,770,170,670,270,570,370,470]
    let y = [670,670,670,670,670,670,670,670,770,770,770,770,770,770,770,770,170,170,170,170,170,170,170,170,70,70,70,70,70,70,70,70]
    let codeImage01 = [1,1,1,1,1,1,1,1,2,2,3,3,4,4,5,6,7,7,7,7,7,7,7,7,8,8,9,9,10,10,11,12]
    let codeImage02 = [7,7,7,7,7,7,7,7,8,8,9,9,10,10,11,12,1,1,1,1,1,1,1,1,2,2,3,3,4,4,5,6]

    if(casaId == "opcao01"){
        state.lado = "P"
        state.minhaVez = true
        oqueRenderizar = "tabuleiro"

        for(let i = 0; i < 32; i++){
            tabuleiro.pecas[indices01[i]] = {imagem: preloadImagem[codeImage01[i]], sx: 0, sy: 0, sWidth: 100, sHeight: 100, x: x[i], y: y[i]}
        } 
    }else if(casaId == "opcao02"){
        state.lado = "B"
        state.minhaVez = false
        oqueRenderizar = "tabuleiro"

        for(let i = 0; i < 32; i++){
            tabuleiro.pecas[indices02[i]] = {imagem: preloadImagem[codeImage02[i]], sx: 0, sy: 0, sWidth: 100, sHeight: 100, x: x[i], y: y[i]}
        }   
    }
}

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