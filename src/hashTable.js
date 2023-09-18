const { stringToBinary , sequenceAddition } = require('./stringUtils.js');
const { newContact } = require('./CRUD.js');

const contact = {
        name: "lucas",
        email: "lucasefdl@gmail.com",
        phone: 123,
    };

function createHashTable(){
    let hashTable = [32]
    for(let i = 0; i < 32; i++){
        hashTable[i] = null;
    }
    console.log("Hash table successfully created")
    return hashTable;
}

function getHashKey(contact){
    let key = stringToBinary(contact.email);
    key = sequenceAddition(key);
    return parseInt(key, 2)
}

function verifyEmail(hashTable, contact){
    for(let i = 0; i < hashTable.length; i++){
        console.log(hashTable[i]?.contact?.email == contact.email)
        if((hashTable[i] !== null) && (hashTable[i]?.contact?.email == contact.email)){
            console.log("Erro ao inserir: ja existe um contato com esse email")
            break;
        }
    }
    return true
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
                console.log("Erro ao inserir: sem espaço")
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

function hashEdit(hashTable, uneditedContact, key, newName, newEmail, newPhone){
    hashRemoval(hashTable, uneditedContact, key)
    const editedContact = {
        name: newName,
        email: newEmail,
        phone: newPhone
    }
    newKey = getHashKey(editedContact)
    hashInsertion(hashTable, editedContact, newKey)
}

function displayHashTable(hashTable){
    console.log(hashTable)
}

const key = getHashKey(contact)
const hashTable = createHashTable();
hashInsertion(hashTable, contact, key)
displayHashTable(hashTable)
