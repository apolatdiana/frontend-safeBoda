 const loggedInUser = JSON.parse(localStorage.getItem('user'));
 console.log(loggedInUser);

 const userName = document.getElementById('username');
 const personalDetails = document.getElementById('details');
 const userhandle = loggedInUser.name;
 userName.innerHTML = userhandle;

 const names = document.createElement('li');
 names.innerHTML = '<b> Name: </b>' + loggedInUser.name;
 personalDetails.appendChild(names);
 const contact = document.createElement('li')
 contact.innerHTML = '<b> Phone Number: </b>' + loggedInUser.phonenumber;
 personalDetails.appendChild(contact);
 const emailLi = document.createElement('li')
 emailLi.innerHTML = '<b> Email: </b>' + loggedInUser.email;
 personalDetails.appendChild(emailLi);
 const ninLi = document.createElement('li')
 ninLi.innerHTML = '<b> NIN: </b>' + loggedInUser.nin;
 personalDetails.appendChild(ninLi);
 const roleLi = document.createElement('li')
 roleLi.innerHTML = '<b> Role: </b>' + loggedInUser.role;
 personalDetails.appendChild(roleLi);
 const kinLi = document.createElement('li')
 kinLi.innerHTML = '<b> Next-of-kin: </b>' + loggedInUser.nextofkin;
 personalDetails.appendChild(kinLi);
 const kinContact = document.createElement('li')
 kinContact.innerHTML = '<b> Next-of-kin contact: </b>' + loggedInUser.nextofkincontact;
 personalDetails.appendChild(kinContact);

//Logout user
const logoutBtn = document.getElementById(logout);
 function logoutUser () {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
 }
logoutBtn.addEventListener('click', (e)=>{
    logoutUser();
    window.location.href ='file:///C:/Users/DIANA/Desktop/frontend/index.html'
})