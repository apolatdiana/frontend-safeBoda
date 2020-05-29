// Connect to our backend
const url = "http://localhost:5000/users/register";

//Create a new user
const token = localStorage.getItem('token');
const createUser = (user) => {
  const userData = JSON.stringify(user);
  fetch(url, { 
      method: "POST", 
      body: userData,
      headers: {
       "Accept": "application/json",
       "Content-Type": "application/json",
       "Authorization": `Bearer ${token}` 
      } })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
      })
    .catch((error)=>{console.log(error)});
  }

const nameInput = document.getElementById('name');
const contactInput = document.getElementById('contact');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const ninInput = document.getElementById('NIN');
const nextOfKin = document.getElementById('nextOfKinName');
const nextOfKinContact = document.getElementById('contactOfKin');
const submitBtn = document.getElementById("save");


const getElementValue = (element) => {
  return element.value;
}
    //Adding Event listener
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
    
  const nameValue = getElementValue(nameInput);
  const contactValue = getElementValue(contactInput);
  const emailValue = getElementValue(emailInput);
  const ageValue = getElementValue(ageInput);
  const ninValue = getElementValue(ninInput);
  const kin = getElementValue(nextOfKin);
  const kinContact = getElementValue(nextOfKinContact);

  const user = { name: nameValue, email: emailValue, phonenumber: contactValue, age: ageValue, 
    nin: ninValue, nextofkin: kin, nextofkincontact: kinContact, role: "staff", password: "SafeBoda"};
      createUser(user);  

     window.location.href = 'file:///C:/Users/DIANA/Desktop/frontend/userTable.html';

      nameInput.value = "";
      contactInput.value = "";
      emailInput.value = "";
      ageInput.value = "";
      ninInput.value = "";
      nextOfKin.value = "";
      nextOfKinContact.value = "";
})