import leia from "readline-sync"

var matriz = [
    [" "," "," ",],
    [" "," "," ",],
    [" "," "," "]
];

function pedirPosicao(index) {
    var linha = leia.questionInt("DIGITE A LINHA: ");
    var coluna = leia.questionInt("DIGITE A COLUNA: ");
    matriz[linha][coluna] = "X";

    console.clear();
    console.log(matriz);
}

pedirPosicao();