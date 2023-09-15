export function completeStringLength(binaryString, hashTableSize) {
    if (typeof binaryString === "string") {
        
        if (binaryString.length % hashTableSize != 0) {
            const remainingQuantity = binaryString.length % hashTableSize;
            const intendedSize = binaryString.length + (hashTableSize - remainingQuantity)
            
            binaryString = binaryString.padStart(intendedSize, '0')
            
            return binaryString
        }
        return binaryString
    } else {
        const err =  new Error("A entrada passada não é uma string")
        throw err
    }
    
}

export function stringToBinary(key) {
    if (typeof key === "string") {

        let binaryString = '';
        let asciiCode;
        let binaryChar;
    
        for (let i = 0; i < key.length; i++) {
            asciiCode = key.charCodeAt(i);
            binaryChar =asciiCode.toString(2).padStart(8, "0")

            binaryString += binaryChar;
        }
    
        const correctBinaryString = completeStringLength(binaryString, 5)
        
        return correctBinaryString;
    } else {
        const err = new Error("A chave passada não é uma string")
        throw err
    }
}

const nomeBinario = stringToBinary("lucas")
console.log("Nome para binario");
console.log(nomeBinario)
console.log(parseInt(somaSequencias(nomeBinario),2));

export function somaDiferente(seq1, seq2) {
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

export function somaSequencias(numeroBianrio) {
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