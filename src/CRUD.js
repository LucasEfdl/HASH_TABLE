const { stringToBinary , sequenceAddition } = require('./stringUtils.js');

function newContact (name, email, phone){
    // selecionar os atributos la do html
    return {
        name: name,
        email: email, 
        phone: phone
    }
}

module.exports = {
    newContact
};

/* const nomeBinario = stringToBinary("lucas")
console.log("Nome para binario");
console.log(nomeBinario)
console.log(parseInt(sequenceAddition(nomeBinario),2));
console.log("\nSomando sequencias:\n");
console.log(sequenceAddition(nomeBinario)); */