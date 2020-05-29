//Connect to backend
const url = "http://localhost:5000/users/login";

const loginBtn = document.getElementById('login');
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

//User login
const userLogin = (user) =>{
  const userData = JSON.stringify(user);
    fetch (url, {
      method: "POST",
      body: userData,
      auth: {
         email: email,
         password: password
          },
      headers:{
        
          "Accept" : "application/json",
          "Content-Type" : "application/json",
       } 
  })
  .then((res=> res.json()))
  .then((data)=>{
      console.log(data);
       const { token, user } = data;
       localStorage.setItem('token', token);
       localStorage.setItem('user', JSON.stringify(user));
      //  window.location.href ='file:///C:/Users/DIANA/Desktop/frontend/userdashboard.html';
       if (user.role === 'admin') {
        window.location.href ='file:///C:/Users/DIANA/Desktop/frontend/dashboard.html';
       } else {
        window.location.href ='file:///C:/Users/DIANA/Desktop/frontend/userdashboard.html'; 
       }
      })
      
  .catch((error)=>{
      console.log(error)
      })
}
//Add eventlistener
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
   const email = emailInput.value;
   const password = passwordInput.value;
   const user ={email, password};
   if (email === "" || password === "") { 
     alert("All fields are required"); 
   } else { 
       userLogin(user);
  }
})