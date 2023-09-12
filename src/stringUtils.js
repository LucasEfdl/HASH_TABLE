function nomeParaBinario(nome) {
    let binario = '';
    for (let i = 0; i < nome.length; i++) {
        const codigoAscii = nome.charCodeAt(i);
        const binarioChar = codigoAscii.toString(2).padStart(8, '0');
        console.log(binarioChar);
        binario += binarioChar;
    }
    if (binario.length % 5 != 0) {
        const resto = binario.length % 5;
        const tamanho = binario.length + (5 - resto)

        binario = binario.toString(2).padStart(tamanho, '0')
    }
    console.log(binario.length);
    return binario;
}

const nomeBinario = nomeParaBinario("l")
console.log("Nome para binario");
console.log(nomeBinario)


function somaDiferente(seq1, seq2) {
    let resultado = '';
    for (let i = 0; i < seq1.length; i++) {
        if (seq1[i] === seq2[i]) {
            resultado += '0';
        } else {
            resultado += '1';
        }
    }
    return resultado;
}

function somaSequencias(numeroBianrio) {
    if(typeof numeroBianrio === "string") {

        const sequencia01 = numeroBianrio.slice(0, 5)
        const sequencia02 = numeroBianrio.slice(5, 10)

        let result = somaDiferente(sequencia01, sequencia02)

        for (let i = 10; i < numeroBianrio.length; i += 5) {
            const newSequencia = numeroBianrio.slice(i, i + 5)
            result = somaDiferente(result, newSequencia)
        }

        return result

    } else {
        console.log("erro");
        return 0;
    }
}

console.log("\nSomando sequencias:\n");
console.log(somaSequencias(nomeBinario));