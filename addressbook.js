var contacts = [];

function addcontact() {
  var person = {
    firstName: prompt("firstname", ""),
    lastName: prompt("lastname", ""),
    address: prompt("address", ""),
    phoneNumber: prompt("phonenumber", ""),
  };
  contacts.push(person);
}
// function reset() {
//   var person = {
//     firstName: ("firstname", ""),
//     lastName: ("lastname", ""),
//     address: ("address", ""),
//     phoneNumber: ("phonenumber", ""),
//   };
//   contacts.reset(person);
// }

function resetView() {
  document.getElementById("output").innerHTML = "";
}

function printPerson(person) {
  document.getElementById("output").innerHTML +=
    person.firstName +
    " - " +
    person.lastName +
    " - " +
    person.address +
    " - " +
    person.phoneNumber +
    "<br />";
}

function listContacts() {
  resetView();
  var len = contacts.length;
  for (x = 0; x < len; x++) {
    printPerson(contacts[x]);
  }
}
