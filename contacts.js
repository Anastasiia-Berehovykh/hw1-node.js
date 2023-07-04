const db = require("./db");

const invokeAction = async ({action, id, name, email, phone})=> {
    switch(action){
        case "read":
            const listContacts = await db.listContacts();
           return console.log(listContacts);
    }

}
invokeAction({action:"read"});