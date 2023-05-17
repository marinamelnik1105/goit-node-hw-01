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
       await contactService.addContact({ name, email, phone });
      const newAllContacts = await contactService.listContacts();
          return console.log(newAllContacts);
      

     case "remove":
           await contactService.removeContact(id);
return console.log("Contact deleted")
    

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}


const arr = hideBin(process.argv)
const{argv} = yargs(arr)
invokeAction(argv)