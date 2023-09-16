const { stringToBinary , sequenceAddition } = require('./stringUtils.js');
const { newContact } = require('./CRUD.js');

const contact = {
    name: "lucas",
    email: "lucasefdl@gmail.com",
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
            if(hashTable[i] == null){
                hashTable[i] = contact;
                console.log("Insercao concluida")
                break;
            }
            else{
                console.log("Nao foi possivel inserir")
                break;
            }
        }
    }
}

function hashRemoval(hashTable, contact, key){
    if(hashTable[key] != null){
        hashTable[key] = null;
        console.log("O contato " + contact.name + " foi removido com sucesso")
    }
}

function displayHashTable(hashTable){
    console.log(hashTable)
}

const key = getHashKey(contact)
console.log(key)

const hashTable = createHashTable();

hashInsertion(hashTable, contact, key)
const auxContact = newContact("murilo", "murilofontes1@gmail.com", 123)
const auxContact2 = newContact("manu", "manuabrante@gmail.com", 123)
const auxContact3 = newContact("manu", "manuabrante@gmail.com", 123)

hashInsertion(hashTable, auxContact, 32)
hashInsertion(hashTable, auxContact2, 32)
hashInsertion(hashTable, auxContact3, 14)
displayHashTable(hashTable)

hashRemoval(hashTable, auxContact, 32)

displayHashTable(hashTable)

hashRemoval(hashTable, contact, 14)


