const contactService = require("./contacts")
// const argv = require("yargs").argv;


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
// invokeAction({ action: "list" })
// invokeAction({ action: "get", id: "05olLMgyVQdWRwgKfg5J6" })
// invokeAction({ action: "add", name: "gfd", email: "hgf", phone: "987" })
invokeAction({action:"remove", id:"uYqjtNfpynrVtlwkYGTkF"})
// invokeAction(argv);