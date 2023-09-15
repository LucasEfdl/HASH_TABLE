const { stringToBinary , sequenceAddition } = require('./stringUtils.js');

const contact = {
    name: "lucas",
    email: "lucas",
    phone: 123,
}

function createHashTable(){
    let hashTable = [32]
    for(let i = 0; i < 32; i++){
        hashTable[i] = null;
    }
    return hashTable;
}

function getHashKey(contact){
    let key = stringToBinary(contact.email);
    key = sequenceAddition(key);
    return parseInt(key, 2)
}

function hashInsertion(hashTable, contact, key){
    if(hashTable[key] == null){
        hashTable[key] = contact;
    } else{
        for(let i = key+1; i < hashTable.length; i++){
            if(hashTable[key] == null){
                hashTable[key] = contact;
                console.log("Insercao concluida")
            }
        }
    }
}

const key = getHashKey(contact)
console.log(key)

const hashTable = createHashTable();

setTimeout((hashInsertion(hashTable, contact, key)), 3)
hashInsertion(hashTable, contact, key)


setTimeout(() => {for(let i = 0; i < 32; i++){
    console.log(hashTable[i])
}}, 3000)
console.log(hashTable[22].email)
console.log(hashTable.length)
