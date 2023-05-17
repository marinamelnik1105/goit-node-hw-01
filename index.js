const yargs = require("yargs");
const contactService = require("./contacts")
const {hideBin}= require("yargs/helpers")

const invokeAction = async({ action, id, name, email, phone })=> {
  switch (action) {
    case "list":
          const allContacts = await contactService.listContacts();
          return console.log(allContacts)
   

     case "get":
          const oneContact = await contactService.getContactById(id);
          return console.log(oneContact)
    

      case "add":
          const newContact = await contactService.addContact({ name, email, phone });
          return console.log(newContact);
      

     case "remove":
          const removeContact = await contactService.removeContact(id);
return console.log(removeContact)
    

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}


const arr = hideBin(process.argv)
const{argv} = yargs(arr)
invokeAction(argv)