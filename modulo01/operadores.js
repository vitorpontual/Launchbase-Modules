/* ==========================
    Operadores de Comparação

    > Maior
    < Menor
    >= Maior igual a
    <= Menor igual a
    == Igual a
    === Igual e do mesmo Type
    != Diferente de
    !== Diferente, inclusive do tipo

============================*/

// DESAFIO 1
const idade = 17
// verificar se a  pessoa é maior igual a 18 anos
// se sim, deixar etnrar, se não, bloquear entrada
// se a pessoa tiver 17 anos
// avisar para voltar quando fizer 18 anos

if (!(idade >= 18) || idade === 17){
    console.log('Bloquear Entrada')
} else {
    console.log('Deixar Entrar')
}

if (idade === 17) {
    console.log('Volte quando fizer 18 anos')
}



/* 
    Operadores Lógicos

    && "AND" duas condicoes devem ser verdadeiras 
    para que a condicao final seja verdadeira.
    || "OR" Uma das condições deve ser verdadeira
    para que a condição final seja verdadeira.
    ! "NOT" Nega uma condição
*/

console.log(5 == 5 && 6 == 6) // true
console.log(5 == 5 && 6 != 6) // false

console.log(5 != 5 || 6 == 6) // true
console.log(5 == 5 || 6 != 6) // true

console.log(!(5 > 6)) // true
console.log(!(5 < 6)) // false

/* 
    Operadores Aritméticos

    *   MULTIPLICAÇÃO
    /   DIVISÃO
    %   RESTO DA DIVISÃO
    +   ADIÇÃO
    -   SUBTRAÇÃO
*/


console.log( 2 * 2 ) // 4
console.log( 2 / 2 ) // 1
console.log( 2 % 1.5 ) // 0.5
console.log( 2 + 2 ) // 4
console.log( 2 - 2 ) // 0