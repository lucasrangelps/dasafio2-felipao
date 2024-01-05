//Desafio calculadora de partidas rankeadas
//Declaração de variaveis
let nomeHeroi = "Batman"
let nivelHeroi = " "

//Estrutura de repetição
do {

    //Funcão
    let saldoVitoriasRankeadas = calcularSaldoVitorias(120, 0)

    function  calcularSaldoVitorias(vitorias, derrotas) {

        let saldoVitorias = vitorias - derrotas
        return saldoVitorias
    }

    //Estrutura de decisão
    if ( saldoVitoriasRankeadas <= 0 ) {
        console.log("Herói " + nomeHeroi + " com saldo de Vitorias vazio, continue seu desafio!")
        break
    }

    if ( saldoVitoriasRankeadas <= 10 ) {
        nivelHeroi = "Ferro"

    } else if ( saldoVitoriasRankeadas >= 11 && saldoVitoriasRankeadas <= 20 ) {
        nivelHeroi = "Bronze"
 
    } else if ( saldoVitoriasRankeadas >= 21 && saldoVitoriasRankeadas <= 50 ) {
        nivelHeroi = "Prata"

    } else if ( saldoVitoriasRankeadas >= 51 && saldoVitoriasRankeadas <= 80 ) {
        nivelHeroi = "Ouro"

    } else if ( saldoVitoriasRankeadas >= 81 && saldoVitoriasRankeadas <= 90 ) {
        nivelHeroi = "Diamante"

    } else if ( saldoVitoriasRankeadas >= 91 && saldoVitoriasRankeadas <= 100 ) {
        nivelHeroi = "Lendario"

    } else if ( saldoVitoriasRankeadas >= 101 ) {
        nivelHeroi = "Imortal"

    }

    //Saida
    console.log("O Herói " + nomeHeroi + " tem de saldo de " + saldoVitoriasRankeadas + " e está no nível de " + nivelHeroi)

} while ( saldoVitoriasRankeadas = 0)