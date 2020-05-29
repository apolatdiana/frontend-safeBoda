//Connect to backend
const url = "http://localhost:5000/clients";

  //Create a new client
  const token = localStorage.getItem('token');
  const createClient = (clients) => {
    console.log(clients);
    const clientData = JSON.stringify(clients);
    fetch(url, { 
      method: "POST", 
      body: clientData,
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
const bodaStage = document.getElementById('stageName');
const regDate = document.getElementById('date');
const recruitStation = document.getElementById('station');
const referral = document.getElementById('referral');
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
  const stage = getElementValue(bodaStage);
  const regDateValue = getElementValue(regDate);
  const station = getElementValue(recruitStation);
  const referralValue = getElementValue(referral);
  const kin = getElementValue(nextOfKin);
  const kinContact = getElementValue(nextOfKinContact);

  const client = { name: nameValue, email: emailValue, phonenumber: contactValue, 
     age: ageValue, nin: ninValue, bodastageaddress: stage, dateofregistration: regDateValue, 
      registrationstation: station, referralname: referralValue, nextofkin: kin, 
      nextofkincontact: kinContact, status: 'registered' };
      createClient(client);

    window.location.href = 'file:///C:/Users/DIANA/Desktop/frontend/clientTable.html';

    nameInput.value = "";
    contactInput.value = "";
    emailInput.value = "";
    ageInput.value = "";
    ninInput.value = "";
    bodaStage.value = "";
    regDate.value = "";
    recruitStation.value = "";
    referral.value = "";
    nextOfKin.value = "";
    nextOfKinContact.value = "";
})