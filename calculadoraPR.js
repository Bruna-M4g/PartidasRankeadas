//
function levelCalculator(vitorias) {
    let titulo

    if (vitorias <= 10) {
        titulo = "Ferro"
    } else if (vitorias >= 11 && vitorias <= 20) {
        titulo = "Bronze"
    } else if (vitorias >= 21 && vitorias <= 50) {
        titulo = "Prata"
    } else if (vitorias >= 51 && vitorias <= 80) {
        titulo = "Ouro"
    } else if (vitorias >= 81 && vitorias <= 90) {
        titulo = "Diamante"
    } else if (vitorias >= 91 && vitorias <= 100) {
        titulo = "Lendário"
    } else if (vitorias >= 101) {
        titulo = "Imortal"
    }
    console.log("Você tem " + vitorias + " vitórias, então seu título é: " + titulo)
}

levelCalculator(159)