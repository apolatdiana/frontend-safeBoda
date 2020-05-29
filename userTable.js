//Connect to backend
const url = "http://localhost:5000/users";

//Fetch all users
const token = localStorage.getItem('token');
const fetchAllUsers = (user) => {
  const userData = JSON.stringify(user);
  fetch(url, { 
    method: "GET", 
    body: userData,
    headers: {
     "Accept": "application/json",
     "Content-Type": "application/json",
     "Authorization": `Bearer ${token}` 
    } })
      .then((res)=>res.json())
      .then((data)=>{
        data.forEach((user) => {
          console.log(data)
          addClientElement(user)
        });
      })
      .catch((error)=>{console.log(error)});
  };
 fetchAllUsers();

 //Delete a user
  const deleteUser = (id) => {
    fetch(`${url}/${id}`, {
      method: "DELETE", 
      headers: {
        "Authorization": `Bearer ${token}` 
       }
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
      })
    .catch((error)=>{console.log(error)});
  }

const userTable = document.getElementById("tableBody");

const addClientElement = (user) =>{ 
        const { name, email, phonenumber, age, nin, nextofkin, nextofkincontact, _id } = user;

        const tableRow = document.createElement('tr');
        //Adding name
        const nameTd = document.createElement('td');
        nameTd.innerHTML = name;
        tableRow.appendChild(nameTd);
        //Adding contact
        const contactTd = document.createElement('td');
        contactTd.innerHTML = phonenumber;
        tableRow.appendChild(contactTd);
        //Adding email
        const emailTd = document.createElement('td');
        emailTd.innerHTML = email;
        tableRow.appendChild(emailTd);  
        //Adding age
        const ageTd = document.createElement('td');
        ageTd.innerHTML = age;
        tableRow.appendChild(ageTd);
        //Adding nin
        const ninTd = document.createElement('td');
        ninTd.innerHTML = nin;
        tableRow.appendChild(ninTd);
        //Adding kin
        const kinTd = document.createElement('td');
        kinTd.innerHTML = nextofkin;
        tableRow.appendChild(kinTd);
        //Adding kin contact
        const kinContactTd = document.createElement('td');
        kinContactTd.innerHTML = nextofkincontact;
        tableRow.appendChild(kinContactTd);

        //Adding an view button
        const viewTd = document.createElement('td');
        const viewBtn = document.createElement('button');
        viewBtn.classList.add("btn", "btn-sm", "btn-link");
        viewBtn.innerHTML = 'View Clients';
        viewTd.appendChild(viewBtn);
        tableRow.appendChild(viewTd);

        //Adding a delete button
        const deleteTd = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add("btn", "btn-sm", "btn-danger");
        deleteBtn.innerHTML = 'Delete';
        deleteTd.appendChild(deleteBtn);
        tableRow.appendChild(deleteTd);
    
        userTable.appendChild(tableRow);

          //Add event listener to delete and edit buttons.
          deleteBtn.addEventListener("click", (e)=>{
            if (confirm("Are you sure you want to delete this user account?")) {  
            tableRow.remove(e.target.parentElement);
            deleteUser(_id);
            } 
          });
    
    }